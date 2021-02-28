import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class CdkLambdaProvisionedConcurrencyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const func = new lambda.Function(this, 'SampleLambdaFunction', {
      code: lambda.Code.fromAsset('dist/hello-world'),
      functionName: 'SampleLambdaFunction',
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
      currentVersionOptions: {
        removalPolicy: cdk.RemovalPolicy.RETAIN,
        // provisionedConcurrentExecutions: 10,
      },
      reservedConcurrentExecutions: 100,
    });
  }
}
