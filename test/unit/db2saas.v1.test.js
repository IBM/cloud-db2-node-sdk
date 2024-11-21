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

// need to import the whole package to mock getAuthenticatorFromEnvironment
const sdkCorePackage = require('ibm-cloud-sdk-core');

const { NoAuthAuthenticator } = sdkCorePackage;
const Db2saasV1 = require('../../dist/db2saas/v1');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkUserHeader,
} = require('@ibm-cloud/sdk-test-utilities');

const db2saasServiceOptions = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://us-south.db2.saas.ibm.com/dbapi/v4',
};

const db2saasService = new Db2saasV1(db2saasServiceOptions);

let createRequestMock = null;
function mock_createRequest() {
  if (!createRequestMock) {
    createRequestMock = jest.spyOn(db2saasService, 'createRequest');
    createRequestMock.mockImplementation(() => Promise.resolve());
  }
}

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(sdkCorePackage, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

describe('Db2saasV1', () => {
  beforeEach(() => {
    mock_createRequest();
  });

  afterEach(() => {
    if (createRequestMock) {
      createRequestMock.mockClear();
    }
    getAuthenticatorMock.mockClear();
  });

  describe('the newInstance method', () => {
    test('should use defaults when options not provided', () => {
      const testInstance = Db2saasV1.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(Db2saasV1.DEFAULT_SERVICE_NAME);
      expect(testInstance.baseOptions.serviceUrl).toBe(Db2saasV1.DEFAULT_SERVICE_URL);
      expect(testInstance).toBeInstanceOf(Db2saasV1);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = Db2saasV1.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(Db2saasV1);
    });
  });

  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new Db2saasV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new Db2saasV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(Db2saasV1.DEFAULT_SERVICE_URL);
    });
  });

  describe('constructServiceUrl', () => {
    describe('positive tests', () => {
      test('should use all default variable values if null is passed', () => {
        const defaultFormattedUrl = 'https://us-south.db2.saas.ibm.com/dbapi/v4';
        const formattedUrl = Db2saasV1.constructServiceUrl(null);

        expect(formattedUrl).toStrictEqual(defaultFormattedUrl);
      });
    });

    describe('negative tests', () => {
      test('should fail if an invalid variable name is provided', () => {
        expect(() => {
          const providedUrlVariables = new Map([['invalid_variable_name', 'value']]);
          Db2saasV1.constructServiceUrl(providedUrlVariables);
        }).toThrow();
      });
    });
  });

  describe('getDb2SaasConnectionInfo', () => {
    describe('positive tests', () => {
      function __getDb2SaasConnectionInfoTest() {
        // Construct the params object for operation getDb2SaasConnectionInfo
        const deploymentId = 'testString';
        const xDeploymentId = 'testString';
        const getDb2SaasConnectionInfoParams = {
          deploymentId,
          xDeploymentId,
        };

        const getDb2SaasConnectionInfoResult = db2saasService.getDb2SaasConnectionInfo(getDb2SaasConnectionInfoParams);

        // all methods should return a Promise
        expectToBePromise(getDb2SaasConnectionInfoResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/connectioninfo/{deployment_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-deployment-id', xDeploymentId);
        expect(mockRequestOptions.path.deployment_id).toEqual(deploymentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDb2SaasConnectionInfoTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __getDb2SaasConnectionInfoTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __getDb2SaasConnectionInfoTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const deploymentId = 'testString';
        const xDeploymentId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDb2SaasConnectionInfoParams = {
          deploymentId,
          xDeploymentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.getDb2SaasConnectionInfo(getDb2SaasConnectionInfoParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.getDb2SaasConnectionInfo({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.getDb2SaasConnectionInfo();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('postDb2SaasWhitelist', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // IpAddress
      const ipAddressModel = {
        address: '127.0.0.1',
        description: 'A sample IP address',
      };

      function __postDb2SaasWhitelistTest() {
        // Construct the params object for operation postDb2SaasWhitelist
        const xDeploymentId = 'testString';
        const ipAddresses = [ipAddressModel];
        const postDb2SaasWhitelistParams = {
          xDeploymentId,
          ipAddresses,
        };

        const postDb2SaasWhitelistResult = db2saasService.postDb2SaasWhitelist(postDb2SaasWhitelistParams);

        // all methods should return a Promise
        expectToBePromise(postDb2SaasWhitelistResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/dbsettings/whitelistips', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-deployment-id', xDeploymentId);
        expect(mockRequestOptions.body.ip_addresses).toEqual(ipAddresses);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __postDb2SaasWhitelistTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __postDb2SaasWhitelistTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __postDb2SaasWhitelistTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDeploymentId = 'testString';
        const ipAddresses = [ipAddressModel];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const postDb2SaasWhitelistParams = {
          xDeploymentId,
          ipAddresses,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.postDb2SaasWhitelist(postDb2SaasWhitelistParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.postDb2SaasWhitelist({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.postDb2SaasWhitelist();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getDb2SaasWhitelist', () => {
    describe('positive tests', () => {
      function __getDb2SaasWhitelistTest() {
        // Construct the params object for operation getDb2SaasWhitelist
        const xDeploymentId = 'testString';
        const getDb2SaasWhitelistParams = {
          xDeploymentId,
        };

        const getDb2SaasWhitelistResult = db2saasService.getDb2SaasWhitelist(getDb2SaasWhitelistParams);

        // all methods should return a Promise
        expectToBePromise(getDb2SaasWhitelistResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/dbsettings/whitelistips', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-deployment-id', xDeploymentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDb2SaasWhitelistTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __getDb2SaasWhitelistTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __getDb2SaasWhitelistTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDeploymentId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDb2SaasWhitelistParams = {
          xDeploymentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.getDb2SaasWhitelist(getDb2SaasWhitelistParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.getDb2SaasWhitelist({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.getDb2SaasWhitelist();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('postDb2SaasUser', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // CreateUserAuthentication
      const createUserAuthenticationModel = {
        method: 'internal',
        policy_id: 'Default',
      };

      function __postDb2SaasUserTest() {
        // Construct the params object for operation postDb2SaasUser
        const xDeploymentId = 'testString';
        const id = 'test-user';
        const iam = false;
        const ibmid = 'test-ibm-id';
        const name = 'test_user';
        const password = 'dEkMc43@gfAPl!867^dSbu';
        const role = 'bluuser';
        const email = 'test_user@mycompany.com';
        const locked = 'no';
        const authentication = createUserAuthenticationModel;
        const postDb2SaasUserParams = {
          xDeploymentId,
          id,
          iam,
          ibmid,
          name,
          password,
          role,
          email,
          locked,
          authentication,
        };

        const postDb2SaasUserResult = db2saasService.postDb2SaasUser(postDb2SaasUserParams);

        // all methods should return a Promise
        expectToBePromise(postDb2SaasUserResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/users', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-deployment-id', xDeploymentId);
        expect(mockRequestOptions.body.id).toEqual(id);
        expect(mockRequestOptions.body.iam).toEqual(iam);
        expect(mockRequestOptions.body.ibmid).toEqual(ibmid);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.password).toEqual(password);
        expect(mockRequestOptions.body.role).toEqual(role);
        expect(mockRequestOptions.body.email).toEqual(email);
        expect(mockRequestOptions.body.locked).toEqual(locked);
        expect(mockRequestOptions.body.authentication).toEqual(authentication);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __postDb2SaasUserTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __postDb2SaasUserTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __postDb2SaasUserTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDeploymentId = 'testString';
        const id = 'test-user';
        const iam = false;
        const ibmid = 'test-ibm-id';
        const name = 'test_user';
        const password = 'dEkMc43@gfAPl!867^dSbu';
        const role = 'bluuser';
        const email = 'test_user@mycompany.com';
        const locked = 'no';
        const authentication = createUserAuthenticationModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const postDb2SaasUserParams = {
          xDeploymentId,
          id,
          iam,
          ibmid,
          name,
          password,
          role,
          email,
          locked,
          authentication,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.postDb2SaasUser(postDb2SaasUserParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.postDb2SaasUser({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.postDb2SaasUser();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getDb2SaasUser', () => {
    describe('positive tests', () => {
      function __getDb2SaasUserTest() {
        // Construct the params object for operation getDb2SaasUser
        const xDeploymentId = 'testString';
        const getDb2SaasUserParams = {
          xDeploymentId,
        };

        const getDb2SaasUserResult = db2saasService.getDb2SaasUser(getDb2SaasUserParams);

        // all methods should return a Promise
        expectToBePromise(getDb2SaasUserResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/users', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-deployment-id', xDeploymentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDb2SaasUserTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __getDb2SaasUserTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __getDb2SaasUserTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDeploymentId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDb2SaasUserParams = {
          xDeploymentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.getDb2SaasUser(getDb2SaasUserParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.getDb2SaasUser({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.getDb2SaasUser();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('putDb2SaasUser', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // UpdateUserAuthentication
      const updateUserAuthenticationModel = {
        method: 'internal',
        policy_id: 'Default',
      };

      function __putDb2SaasUserTest() {
        // Construct the params object for operation putDb2SaasUser
        const xDeploymentId = 'testString';
        const id = 'test-user';
        const newId = 'test-user';
        const newName = 'test_user';
        const newOldPassword = 'dEkMc43@gfAPl!867^dSbu';
        const newNewPassword = 'ihbgc26@gfAPl!1297^dFGy';
        const newRole = 'bluuser';
        const newEmail = 'test_user@mycompany.com';
        const newLocked = 'no';
        const newAuthentication = updateUserAuthenticationModel;
        const newIbmid = 'test-ibm-id';
        const putDb2SaasUserParams = {
          xDeploymentId,
          id,
          newId,
          newName,
          newOldPassword,
          newNewPassword,
          newRole,
          newEmail,
          newLocked,
          newAuthentication,
          newIbmid,
        };

        const putDb2SaasUserResult = db2saasService.putDb2SaasUser(putDb2SaasUserParams);

        // all methods should return a Promise
        expectToBePromise(putDb2SaasUserResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/users/{id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-deployment-id', xDeploymentId);
        expect(mockRequestOptions.body.id).toEqual(newId);
        expect(mockRequestOptions.body.name).toEqual(newName);
        expect(mockRequestOptions.body.old_password).toEqual(newOldPassword);
        expect(mockRequestOptions.body.new_password).toEqual(newNewPassword);
        expect(mockRequestOptions.body.role).toEqual(newRole);
        expect(mockRequestOptions.body.email).toEqual(newEmail);
        expect(mockRequestOptions.body.locked).toEqual(newLocked);
        expect(mockRequestOptions.body.authentication).toEqual(newAuthentication);
        expect(mockRequestOptions.body.ibmid).toEqual(newIbmid);
        expect(mockRequestOptions.path.id).toEqual(id);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __putDb2SaasUserTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __putDb2SaasUserTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __putDb2SaasUserTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDeploymentId = 'testString';
        const id = 'test-user';
        const newId = 'test-user';
        const newName = 'test_user';
        const newOldPassword = 'dEkMc43@gfAPl!867^dSbu';
        const newNewPassword = 'ihbgc26@gfAPl!1297^dFGy';
        const newRole = 'bluuser';
        const newEmail = 'test_user@mycompany.com';
        const newLocked = 'no';
        const newAuthentication = updateUserAuthenticationModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const putDb2SaasUserParams = {
          xDeploymentId,
          id,
          newId,
          newName,
          newOldPassword,
          newNewPassword,
          newRole,
          newEmail,
          newLocked,
          newAuthentication,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.putDb2SaasUser(putDb2SaasUserParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.putDb2SaasUser({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.putDb2SaasUser();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteDb2SaasUser', () => {
    describe('positive tests', () => {
      function __deleteDb2SaasUserTest() {
        // Construct the params object for operation deleteDb2SaasUser
        const xDeploymentId = 'testString';
        const id = 'test-user';
        const deleteDb2SaasUserParams = {
          xDeploymentId,
          id,
        };

        const deleteDb2SaasUserResult = db2saasService.deleteDb2SaasUser(deleteDb2SaasUserParams);

        // all methods should return a Promise
        expectToBePromise(deleteDb2SaasUserResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/users/{id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-deployment-id', xDeploymentId);
        expect(mockRequestOptions.path.id).toEqual(id);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteDb2SaasUserTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __deleteDb2SaasUserTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __deleteDb2SaasUserTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDeploymentId = 'testString';
        const id = 'test-user';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteDb2SaasUserParams = {
          xDeploymentId,
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.deleteDb2SaasUser(deleteDb2SaasUserParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.deleteDb2SaasUser({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.deleteDb2SaasUser();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getbyidDb2SaasUser', () => {
    describe('positive tests', () => {
      function __getbyidDb2SaasUserTest() {
        // Construct the params object for operation getbyidDb2SaasUser
        const xDeploymentId = 'testString';
        const getbyidDb2SaasUserParams = {
          xDeploymentId,
        };

        const getbyidDb2SaasUserResult = db2saasService.getbyidDb2SaasUser(getbyidDb2SaasUserParams);

        // all methods should return a Promise
        expectToBePromise(getbyidDb2SaasUserResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/users/bluadmin', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-deployment-id', xDeploymentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getbyidDb2SaasUserTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __getbyidDb2SaasUserTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __getbyidDb2SaasUserTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDeploymentId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getbyidDb2SaasUserParams = {
          xDeploymentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.getbyidDb2SaasUser(getbyidDb2SaasUserParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.getbyidDb2SaasUser({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.getbyidDb2SaasUser();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('putDb2SaasAutoscale', () => {
    describe('positive tests', () => {
      function __putDb2SaasAutoscaleTest() {
        // Construct the params object for operation putDb2SaasAutoscale
        const xDeploymentId = 'testString';
        const autoScalingEnabled = 'true';
        const autoScalingThreshold = 90;
        const autoScalingOverTimePeriod = 5;
        const autoScalingPauseLimit = 70;
        const autoScalingAllowPlanLimit = 'YES';
        const putDb2SaasAutoscaleParams = {
          xDeploymentId,
          autoScalingEnabled,
          autoScalingThreshold,
          autoScalingOverTimePeriod,
          autoScalingPauseLimit,
          autoScalingAllowPlanLimit,
        };

        const putDb2SaasAutoscaleResult = db2saasService.putDb2SaasAutoscale(putDb2SaasAutoscaleParams);

        // all methods should return a Promise
        expectToBePromise(putDb2SaasAutoscaleResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/manage/scaling/auto', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-deployment-id', xDeploymentId);
        expect(mockRequestOptions.body.auto_scaling_enabled).toEqual(autoScalingEnabled);
        expect(mockRequestOptions.body.auto_scaling_threshold).toEqual(autoScalingThreshold);
        expect(mockRequestOptions.body.auto_scaling_over_time_period).toEqual(autoScalingOverTimePeriod);
        expect(mockRequestOptions.body.auto_scaling_pause_limit).toEqual(autoScalingPauseLimit);
        expect(mockRequestOptions.body.auto_scaling_allow_plan_limit).toEqual(autoScalingAllowPlanLimit);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __putDb2SaasAutoscaleTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __putDb2SaasAutoscaleTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __putDb2SaasAutoscaleTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDeploymentId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const putDb2SaasAutoscaleParams = {
          xDeploymentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.putDb2SaasAutoscale(putDb2SaasAutoscaleParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.putDb2SaasAutoscale({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.putDb2SaasAutoscale();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getDb2SaasAutoscale', () => {
    describe('positive tests', () => {
      function __getDb2SaasAutoscaleTest() {
        // Construct the params object for operation getDb2SaasAutoscale
        const xDeploymentId = 'testString';
        const getDb2SaasAutoscaleParams = {
          xDeploymentId,
        };

        const getDb2SaasAutoscaleResult = db2saasService.getDb2SaasAutoscale(getDb2SaasAutoscaleParams);

        // all methods should return a Promise
        expectToBePromise(getDb2SaasAutoscaleResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/scaling/auto', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-deployment-id', xDeploymentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDb2SaasAutoscaleTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __getDb2SaasAutoscaleTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __getDb2SaasAutoscaleTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDeploymentId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDb2SaasAutoscaleParams = {
          xDeploymentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.getDb2SaasAutoscale(getDb2SaasAutoscaleParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.getDb2SaasAutoscale({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.getDb2SaasAutoscale();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });
});
