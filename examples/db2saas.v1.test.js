/**
 * @jest-environment node
 */
/**
 * (C) Copyright IBM Corp. 2025.
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

const Db2saasV1 = require('../dist/db2saas/v1');
// eslint-disable-next-line node/no-unpublished-require
const authHelper = require('../test/resources/auth-helper.js');
// You can use the readExternalSources method to access additional configuration values
// const { readExternalSources } = require('ibm-cloud-sdk-core');

//
// This file provides an example of how to use the db2saas service.
//
// The following configuration properties are assumed to be defined:
// DB2SAAS_URL=<service base url>
// DB2SAAS_AUTH_TYPE=iam
// DB2SAAS_APIKEY=<IAM apikey>
// DB2SAAS_AUTH_URL=<IAM token service base URL - omit this if using the production environment>
//
// These configuration properties can be exported as environment variables, or stored
// in a configuration file and then:
// export IBM_CREDENTIALS_FILE=<name of configuration file>
//
const configFile = 'db2saas_v1.env';

const describe = authHelper.prepareTests(configFile);

// Save original console.log
const originalLog = console.log;
const originalWarn = console.warn;

// Mocks for console.log and console.warn
const consoleLogMock = jest.spyOn(console, 'log');
const consoleWarnMock = jest.spyOn(console, 'warn');

describe('Db2saasV1', () => {
  // Service instance
  let db2saasService;

  // To access additional configuration values, uncomment this line and extract the values from config
  // const config = readExternalSources(Db2saasV1.DEFAULT_SERVICE_NAME);

  test('Initialize service', async () => {
    // begin-common

    db2saasService = Db2saasV1.newInstance();

    // end-common
  });

  test('getDb2SaasConnectionInfo request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getDb2SaasConnectionInfo() result:');
    // begin-get_db2_saas_connection_info

    const params = {
      deploymentId: 'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A69db420f-33d5-4953-8bd8-1950abd356f6%3A%3A',
      xDeploymentId: 'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
    };

    let res;
    try {
      res = await db2saasService.getDb2SaasConnectionInfo(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_db2_saas_connection_info
  });

  test('postDb2SaasAllowlist request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('postDb2SaasAllowlist() result:');
    // begin-post_db2_saas_allowlist

    // Request models needed by this operation.

    // IpAddress
    const ipAddressModel = {
      address: '127.0.0.1',
      description: 'A sample IP address',
    };

    const params = {
      xDeploymentId: 'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
      ipAddresses: [ipAddressModel],
    };

    let res;
    try {
      res = await db2saasService.postDb2SaasAllowlist(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-post_db2_saas_allowlist
  });

  test('getDb2SaasAllowlist request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getDb2SaasAllowlist() result:');
    // begin-get_db2_saas_allowlist

    const params = {
      xDeploymentId: 'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
    };

    let res;
    try {
      res = await db2saasService.getDb2SaasAllowlist(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_db2_saas_allowlist
  });

  test('postDb2SaasUser request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('postDb2SaasUser() result:');
    // begin-post_db2_saas_user

    // Request models needed by this operation.

    // CreateUserAuthentication
    const createUserAuthenticationModel = {
      method: 'internal',
      policy_id: 'Default',
    };

    const params = {
      xDeploymentId: 'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
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

    let res;
    try {
      res = await db2saasService.postDb2SaasUser(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-post_db2_saas_user
  });

  test('getDb2SaasUser request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getDb2SaasUser() result:');
    // begin-get_db2_saas_user

    const params = {
      xDeploymentId: 'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
    };

    let res;
    try {
      res = await db2saasService.getDb2SaasUser(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_db2_saas_user
  });

  test('getbyidDb2SaasUser request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getbyidDb2SaasUser() result:');
    // begin-getbyid_db2_saas_user

    const params = {
      xDeploymentId: 'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
    };

    let res;
    try {
      res = await db2saasService.getbyidDb2SaasUser(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-getbyid_db2_saas_user
  });

  test('putDb2SaasAutoscale request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('putDb2SaasAutoscale() result:');
    // begin-put_db2_saas_autoscale

    const params = {
      xDbProfile: 'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A',
    };

    let res;
    try {
      res = await db2saasService.putDb2SaasAutoscale(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-put_db2_saas_autoscale
  });

  test('getDb2SaasAutoscale request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getDb2SaasAutoscale() result:');
    // begin-get_db2_saas_autoscale

    const params = {
      xDbProfile: 'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A',
    };

    let res;
    try {
      res = await db2saasService.getDb2SaasAutoscale(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_db2_saas_autoscale
  });

  test('postDb2SaasDbConfiguration request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('postDb2SaasDbConfiguration() result:');
    // begin-post_db2_saas_db_configuration

    const params = {
      xDbProfile: 'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A',
    };

    let res;
    try {
      res = await db2saasService.postDb2SaasDbConfiguration(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-post_db2_saas_db_configuration
  });

  test('getDb2SaasTuneableParam request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getDb2SaasTuneableParam() result:');
    // begin-get_db2_saas_tuneable_param

    let res;
    try {
      res = await db2saasService.getDb2SaasTuneableParam({});
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_db2_saas_tuneable_param
  });

  test('getDb2SaasBackup request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getDb2SaasBackup() result:');
    // begin-get_db2_saas_backup

    const params = {
      xDbProfile: 'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A',
    };

    let res;
    try {
      res = await db2saasService.getDb2SaasBackup(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_db2_saas_backup
  });

  test('postDb2SaasBackup request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('postDb2SaasBackup() result:');
    // begin-post_db2_saas_backup

    const params = {
      xDbProfile: 'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A',
    };

    let res;
    try {
      res = await db2saasService.postDb2SaasBackup(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-post_db2_saas_backup
  });

  test('deleteDb2SaasUser request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('deleteDb2SaasUser() result:');
    // begin-delete_db2_saas_user

    const params = {
      xDeploymentId: 'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
      id: 'test-user',
    };

    let res;
    try {
      res = await db2saasService.deleteDb2SaasUser(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-delete_db2_saas_user
  });
});
