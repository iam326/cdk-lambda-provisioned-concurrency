#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkLambdaProvisionedConcurrencyStack } from '../lib/cdk-lambda-provisioned-concurrency-stack';

const app = new cdk.App();
new CdkLambdaProvisionedConcurrencyStack(app, 'CdkLambdaProvisionedConcurrencyStack');
