// import * as cdk from 'aws-cdk-lib';
import { Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MyAwesomeBucket extends Construct {

  constructor(scope: Construct, id: string) {
    super(scope, id);

    new Bucket(scope, 'MyAwesomeBucket', {
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true
    });
  }
}
