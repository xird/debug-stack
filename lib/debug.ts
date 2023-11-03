import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { GenericBastionHostForward } from '@moia-oss/bastion-host-forward'
import { Vpc } from 'aws-cdk-lib/aws-ec2';

export class BastionTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id);

    const vpc = Vpc.fromVpcAttributes(this, 'vpcdev', {
        vpcId:'vpc-01313297942aac246',
        availabilityZones: ['eu-north-1b'],
        publicSubnetIds: ['subnet-05325e9cba9034e5c']
    });

    new GenericBastionHostForward(this, 'BastionHost', {
        // instanceName: 'FooInstance',
        name: 'BastionHostA',
        address: '127.0.0.1',
        port: '80',
        vpc,
    });

    //new GenericBastionHostForward(this, 'AnalyticsBastionHost', {
        //name: 'AnalyticsBastionHost',
        //address: '127.0.0.1',
        //port: '80',
        //vpc,
    //});
  }
}
