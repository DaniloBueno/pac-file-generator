const aws = require('aws-sdk');
const parameters = require('../config/parameters');

class AwsHelper {

    constructor() {
        aws.config.region = parameters.aws.region;
        aws.config.update({
            accessKeyId: parameters.aws.accessKey,
            secretAccessKey: parameters.aws.secretKey
        });

        this.ec2 = new aws.EC2;
    }

    async fetchInstancesBatch(nextToken) {
        const batch = {};
        const instances = [];

        const params = parameters.aws.describeInstancesParams;
        params.NextToken = nextToken;

        const data = await this.ec2.describeInstances(params).promise();

        for (let i = 0; i < data.Reservations.length; i++) {
            instances.push({
                name: data.Reservations[i].Instances[0].Tags.find(el => el.Key === 'Name').Value,
                ip: data.Reservations[i].Instances[0].PublicDnsName,
                user: 'ec2-user',
                key: data.Reservations[i].Instances[0].KeyName
            });
        }

        batch.nextToken = data.NextToken;
        batch.instances = instances;

        return batch;
    }

}

module.exports = new AwsHelper();