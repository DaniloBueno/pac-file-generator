# PAC File Generator

A node.js script to generate pac.yml file with SSH connections of your EC2 instances.

### Requirements
Nodejs version 8+

### Installing

Run inside pac-file-generator directory:
```
npm install
```

### Configuring

Edit config/parameters.json fields:

AWS credentials:
```
aws.region
aws.accessKey
aws.secretKey
```

Absolute path of your .pem keys
```
paths.keys
```

## Running

Run index.js:
```
node index.js
```

## Considerations
* Your EC2 Instances should have tag "Name"
* Your local .pem key should have the same name of the repective EC2 instance key
* Only fetches EC2 instances with state "running"
* SSH user is always "ec2-user"

## License

This project is licensed under the MIT License.
