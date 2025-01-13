/**
 * (C) Copyright IBM Corp. 2024.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-console */

const { readExternalSources } = require('ibm-cloud-sdk-core');
const Db2saasV1 = require('../../dist/db2saas/v1');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'db2saas_v1.env';

const describe = authHelper.prepareTests(configFile);

describe('Db2saasV1_integration', () => {
  jest.setTimeout(timeout);

  // Service instance
  let db2saasService;

  test('Initialize service', async () => {
    db2saasService = Db2saasV1.newInstance();

    expect(db2saasService).not.toBeNull();

    const config = readExternalSources(Db2saasV1.DEFAULT_SERVICE_NAME);
    expect(config).not.toBeNull();

    db2saasService.enableRetries();
  });

  test('getDb2SaasConnectionInfo()', async () => {
    const params = {
      deploymentId: 'testString',
      xDeploymentId: 'testString',
    };

    const res = await db2saasService.getDb2SaasConnectionInfo(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('postDb2SaasWhitelist()', async () => {
    // Request models needed by this operation.

    // IpAddress
    const ipAddressModel = {
      address: '127.0.0.1',
      description: 'A sample IP address',
    };

    const params = {
      xDeploymentId: 'testString',
      ipAddresses: [ipAddressModel],
    };

    const res = await db2saasService.postDb2SaasWhitelist(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDb2SaasWhitelist()', async () => {
    const params = {
      xDeploymentId: 'testString',
    };

    const res = await db2saasService.getDb2SaasWhitelist(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('postDb2SaasUser()', async () => {
    // Request models needed by this operation.

    // CreateUserAuthentication
    const createUserAuthenticationModel = {
      method: 'internal',
      policy_id: 'Default',
    };

    const params = {
      xDeploymentId: 'testString',
      id: 'test-user',
      iam: false,
      ibmid: 'test-ibm-id',
      name: 'test_user',
      password: 'dEkMc43@gfAPl!867^dSbu',
      role: 'bluuser',
      email: 'test_user@mycompany.com',
      locked: 'no',
      authentication: createUserAuthenticationModel,
    };

    const res = await db2saasService.postDb2SaasUser(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDb2SaasUser()', async () => {
    const params = {
      xDeploymentId: 'testString',
    };

    const res = await db2saasService.getDb2SaasUser(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('putDb2SaasUser()', async () => {
    // Request models needed by this operation.

    // UpdateUserAuthentication
    const updateUserAuthenticationModel = {
      method: 'internal',
      policy_id: 'Default',
    };

    const params = {
      xDeploymentId: 'testString',
      id: 'test-user',
      newId: 'test-user',
      newName: 'test_user',
      newOldPassword: 'dEkMc43@gfAPl!867^dSbu',
      newNewPassword: 'ihbgc26@gfAPl!1297^dFGy',
      newRole: 'bluuser',
      newEmail: 'test_user@mycompany.com',
      newLocked: 'no',
      newAuthentication: updateUserAuthenticationModel,
      newIbmid: 'test-ibm-id',
    };

    const res = await db2saasService.putDb2SaasUser(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getbyidDb2SaasUser()', async () => {
    const params = {
      xDeploymentId: 'testString',
    };

    const res = await db2saasService.getbyidDb2SaasUser(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('putDb2SaasAutoscale()', async () => {
    const params = {
      xDeploymentId: 'testString',
      autoScalingThreshold: 90,
      autoScalingPauseLimit: 70,
    };

    const res = await db2saasService.putDb2SaasAutoscale(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDb2SaasAutoscale()', async () => {
    const params = {
      xDeploymentId: 'testString',
    };

    const res = await db2saasService.getDb2SaasAutoscale(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('deleteDb2SaasUser()', async () => {
    const params = {
      xDeploymentId: 'testString',
      id: 'test-user',
    };

    const res = await db2saasService.deleteDb2SaasUser(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
});
