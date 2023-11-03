import { App } from 'aws-cdk-lib';
import { BastionTestStack } from '../lib/debug';

const app = new App();

const debug = new BastionTestStack(app, 'BastionTestStack', {});
