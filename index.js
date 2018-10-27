const AwsHelper = require('./util/aws-helper');
const Templates = require('./util/templates');
const FsHelper = require('./util/file-helper');

async function main() {
    try {
        let initial = true;
        let nextToken = '';
        let totalInstances = 0;
        let instanceNumber = 1;

        while (initial || nextToken) {
            const batch = await AwsHelper.fetchInstancesBatch(nextToken);

            const instances = batch.instances;

            if (instances.length === 0) {
                break;
            }

            totalInstances += instances.length;
            nextToken = batch.nextToken;
            initial = false;

            let body = '';
            for (let i = 0; i < instances.length; i++) {
                body += Templates.getTemplateBody(instanceNumber, instances[i]);
                instanceNumber++;
            }

            console.log(`Appending ${instances.length} instance(s) to file`);
            await FsHelper.appendToFile(body);
        }

        console.log('Prepending header to file');
        await FsHelper.prependToFile(Templates.getTemplateHeader(totalInstances));
    } catch (err) {
        if (await FsHelper.doesFileExist()) {
            await FsHelper.deleteFile();
        }
        console.error(err);
        process.exit(1);
    }
}

main().then(() => {
    process.exit(0);
});