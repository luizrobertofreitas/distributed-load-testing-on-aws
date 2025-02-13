// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@aws-cdk/assert/jest';
import { SynthUtils } from '@aws-cdk/assert';
import { App } from 'aws-cdk-lib';
import { RegionalInfrastructureDLTStack } from '../lib/distributed-load-testing-on-aws-regional-stack';

const props = {
  codeBucket: 'testbucket',
  codeVersion: 'testversion',
  description: 'Distributed Load Testing on AWS regional deployment.',
  publicECRRegistry: 'testRegistry',
  publicECRTag: 'testTag',
  solutionId: 'testId',
  solutionName: 'distributed-load-testing-on-aws',
  stackType: 'regional',
  url: 'http://testurl.com'
};

test('Distributed Load Testing Regional stack test', () => {
  const app = new App();
  const stack = new RegionalInfrastructureDLTStack(app, 'TestDLTRegionalStack', props);

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});