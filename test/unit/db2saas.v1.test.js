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

// need to import the whole package to mock getAuthenticatorFromEnvironment
const sdkCorePackage = require('ibm-cloud-sdk-core');

const { NoAuthAuthenticator } = sdkCorePackage;
const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkUserHeader,
  checkForSuccessfulExecution,
} = require('@ibm-cloud/sdk-test-utilities');
const Db2saasV1 = require('../../dist/db2saas/v1');

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
        const deploymentId =
          'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A69db420f-33d5-4953-8bd8-1950abd356f6%3A%3A';
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
        const getDb2SaasConnectionInfoParams = {
          deploymentId,
          xDeploymentId,
        };

        const getDb2SaasConnectionInfoResult = db2saasService.getDb2SaasConnectionInfo(
          getDb2SaasConnectionInfoParams
        );

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
        const deploymentId =
          'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A69db420f-33d5-4953-8bd8-1950abd356f6%3A%3A';
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
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

  describe('postDb2SaasAllowlist', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // IpAddress
      const ipAddressModel = {
        address: '127.0.0.1',
        description: 'A sample IP address',
      };

      function __postDb2SaasAllowlistTest() {
        // Construct the params object for operation postDb2SaasAllowlist
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
        const ipAddresses = [ipAddressModel];
        const postDb2SaasAllowlistParams = {
          xDeploymentId,
          ipAddresses,
        };

        const postDb2SaasAllowlistResult = db2saasService.postDb2SaasAllowlist(
          postDb2SaasAllowlistParams
        );

        // all methods should return a Promise
        expectToBePromise(postDb2SaasAllowlistResult);

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
        __postDb2SaasAllowlistTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __postDb2SaasAllowlistTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __postDb2SaasAllowlistTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
        const ipAddresses = [ipAddressModel];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const postDb2SaasAllowlistParams = {
          xDeploymentId,
          ipAddresses,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.postDb2SaasAllowlist(postDb2SaasAllowlistParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.postDb2SaasAllowlist({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.postDb2SaasAllowlist();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getDb2SaasAllowlist', () => {
    describe('positive tests', () => {
      function __getDb2SaasAllowlistTest() {
        // Construct the params object for operation getDb2SaasAllowlist
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
        const getDb2SaasAllowlistParams = {
          xDeploymentId,
        };

        const getDb2SaasAllowlistResult =
          db2saasService.getDb2SaasAllowlist(getDb2SaasAllowlistParams);

        // all methods should return a Promise
        expectToBePromise(getDb2SaasAllowlistResult);

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
        __getDb2SaasAllowlistTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __getDb2SaasAllowlistTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __getDb2SaasAllowlistTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDb2SaasAllowlistParams = {
          xDeploymentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.getDb2SaasAllowlist(getDb2SaasAllowlistParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.getDb2SaasAllowlist({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.getDb2SaasAllowlist();
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
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
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
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
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
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
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
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
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

  describe('deleteDb2SaasUser', () => {
    describe('positive tests', () => {
      function __deleteDb2SaasUserTest() {
        // Construct the params object for operation deleteDb2SaasUser
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
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
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
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
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
        const getbyidDb2SaasUserParams = {
          xDeploymentId,
        };

        const getbyidDb2SaasUserResult =
          db2saasService.getbyidDb2SaasUser(getbyidDb2SaasUserParams);

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
        const xDeploymentId =
          'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::';
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
        const xDbProfile =
          'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A';
        const autoScalingEnabled = 'true';
        const autoScalingThreshold = 90;
        const autoScalingOverTimePeriod = 5;
        const autoScalingPauseLimit = 70;
        const autoScalingAllowPlanLimit = 'YES';
        const putDb2SaasAutoscaleParams = {
          xDbProfile,
          autoScalingEnabled,
          autoScalingThreshold,
          autoScalingOverTimePeriod,
          autoScalingPauseLimit,
          autoScalingAllowPlanLimit,
        };

        const putDb2SaasAutoscaleResult =
          db2saasService.putDb2SaasAutoscale(putDb2SaasAutoscaleParams);

        // all methods should return a Promise
        expectToBePromise(putDb2SaasAutoscaleResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/manage/scaling/auto', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-db-profile', xDbProfile);
        expect(mockRequestOptions.body.auto_scaling_enabled).toEqual(autoScalingEnabled);
        expect(mockRequestOptions.body.auto_scaling_threshold).toEqual(autoScalingThreshold);
        expect(mockRequestOptions.body.auto_scaling_over_time_period).toEqual(
          autoScalingOverTimePeriod
        );
        expect(mockRequestOptions.body.auto_scaling_pause_limit).toEqual(autoScalingPauseLimit);
        expect(mockRequestOptions.body.auto_scaling_allow_plan_limit).toEqual(
          autoScalingAllowPlanLimit
        );
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
        const xDbProfile =
          'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const putDb2SaasAutoscaleParams = {
          xDbProfile,
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
        const xDbProfile =
          'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A';
        const getDb2SaasAutoscaleParams = {
          xDbProfile,
        };

        const getDb2SaasAutoscaleResult =
          db2saasService.getDb2SaasAutoscale(getDb2SaasAutoscaleParams);

        // all methods should return a Promise
        expectToBePromise(getDb2SaasAutoscaleResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/manage/scaling/auto', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-db-profile', xDbProfile);
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
        const xDbProfile =
          'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDb2SaasAutoscaleParams = {
          xDbProfile,
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

  describe('postDb2SaasDbConfiguration', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // CreateCustomSettingsRegistry
      const createCustomSettingsRegistryModel = {
        DB2BIDI: 'YES',
        DB2COMPOPT: '-',
        DB2LOCK_TO_RB: 'STATEMENT',
        DB2STMM: 'YES',
        DB2_ALTERNATE_AUTHZ_BEHAVIOUR: 'EXTERNAL_ROUTINE_DBADM',
        DB2_ANTIJOIN: 'EXTEND',
        DB2_ATS_ENABLE: 'YES',
        DB2_DEFERRED_PREPARE_SEMANTICS: 'YES',
        DB2_EVALUNCOMMITTED: 'NO',
        DB2_EXTENDED_OPTIMIZATION: '-',
        DB2_INDEX_PCTFREE_DEFAULT: '10',
        DB2_INLIST_TO_NLJN: 'YES',
        DB2_MINIMIZE_LISTPREFETCH: 'NO',
        DB2_OBJECT_TABLE_ENTRIES: '5000',
        DB2_OPTPROFILE: 'NO',
        DB2_OPTSTATS_LOG: '-',
        DB2_OPT_MAX_TEMP_SIZE: '-',
        DB2_PARALLEL_IO: '-',
        DB2_REDUCED_OPTIMIZATION: '-',
        DB2_SELECTIVITY: 'YES',
        DB2_SKIPDELETED: 'NO',
        DB2_SKIPINSERTED: 'YES',
        DB2_SYNC_RELEASE_LOCK_ATTRIBUTES: 'YES',
        DB2_TRUNCATE_REUSESTORAGE: 'IMPORT',
        DB2_USE_ALTERNATE_PAGE_CLEANING: 'ON',
        DB2_VIEW_REOPT_VALUES: 'NO',
        DB2_WLM_SETTINGS: '-',
        DB2_WORKLOAD: 'SAP',
      };

      // CreateCustomSettingsDb
      const createCustomSettingsDbModel = {
        ACT_SORTMEM_LIMIT: 'NONE',
        ALT_COLLATE: 'NULL',
        APPGROUP_MEM_SZ: '10',
        APPLHEAPSZ: 'AUTOMATIC',
        APPL_MEMORY: 'AUTOMATIC',
        APP_CTL_HEAP_SZ: '64000',
        ARCHRETRYDELAY: '65535',
        AUTHN_CACHE_DURATION: '10000',
        AUTORESTART: 'ON',
        AUTO_CG_STATS: 'ON',
        AUTO_MAINT: 'OFF',
        AUTO_REORG: 'ON',
        AUTO_REVAL: 'IMMEDIATE',
        AUTO_RUNSTATS: 'ON',
        AUTO_SAMPLING: 'OFF',
        AUTO_STATS_VIEWS: 'ON',
        AUTO_STMT_STATS: 'OFF',
        AUTO_TBL_MAINT: 'ON',
        AVG_APPLS: '-',
        CATALOGCACHE_SZ: '-',
        CHNGPGS_THRESH: '50',
        CUR_COMMIT: 'AVAILABLE',
        DATABASE_MEMORY: 'AUTOMATIC',
        DBHEAP: 'AUTOMATIC',
        DB_COLLNAME: '-',
        DB_MEM_THRESH: '75',
        DDL_COMPRESSION_DEF: 'YES',
        DDL_CONSTRAINT_DEF: 'NO',
        DECFLT_ROUNDING: 'ROUND_HALF_UP',
        DEC_ARITHMETIC: '-',
        DEC_TO_CHAR_FMT: 'NEW',
        DFT_DEGREE: '-1',
        DFT_EXTENT_SZ: '32',
        DFT_LOADREC_SES: '1000',
        DFT_MTTB_TYPES: '-',
        DFT_PREFETCH_SZ: 'AUTOMATIC',
        DFT_QUERYOPT: '3',
        DFT_REFRESH_AGE: '-',
        DFT_SCHEMAS_DCC: 'YES',
        DFT_SQLMATHWARN: 'YES',
        DFT_TABLE_ORG: 'COLUMN',
        DLCHKTIME: '10000',
        ENABLE_XMLCHAR: 'YES',
        EXTENDED_ROW_SZ: 'ENABLE',
        GROUPHEAP_RATIO: '50',
        INDEXREC: 'SYSTEM',
        LARGE_AGGREGATION: 'YES',
        LOCKLIST: 'AUTOMATIC',
        LOCKTIMEOUT: '-1',
        LOGINDEXBUILD: 'ON',
        LOG_APPL_INFO: 'YES',
        LOG_DDL_STMTS: 'NO',
        LOG_DISK_CAP: '0',
        MAXAPPLS: '5000',
        MAXFILOP: '1024',
        MAXLOCKS: 'AUTOMATIC',
        MIN_DEC_DIV_3: 'NO',
        MON_ACT_METRICS: 'EXTENDED',
        MON_DEADLOCK: 'HISTORY',
        MON_LCK_MSG_LVL: '2',
        MON_LOCKTIMEOUT: 'HISTORY',
        MON_LOCKWAIT: 'WITHOUT_HIST',
        MON_LW_THRESH: '10000',
        MON_OBJ_METRICS: 'BASE',
        MON_PKGLIST_SZ: '512',
        MON_REQ_METRICS: 'NONE',
        MON_RTN_DATA: 'BASE',
        MON_RTN_EXECLIST: 'ON',
        MON_UOW_DATA: 'NONE',
        MON_UOW_EXECLIST: 'ON',
        MON_UOW_PKGLIST: 'OFF',
        NCHAR_MAPPING: 'CHAR_CU32',
        NUM_FREQVALUES: '50',
        NUM_IOCLEANERS: 'AUTOMATIC',
        NUM_IOSERVERS: 'AUTOMATIC',
        NUM_LOG_SPAN: '10',
        NUM_QUANTILES: '100',
        OPT_BUFFPAGE: '-',
        OPT_DIRECT_WRKLD: 'ON',
        OPT_LOCKLIST: '-',
        OPT_MAXLOCKS: '-',
        OPT_SORTHEAP: '-',
        PAGE_AGE_TRGT_GCR: '5000',
        PAGE_AGE_TRGT_MCR: '3000',
        PCKCACHESZ: 'AUTOMATIC',
        PL_STACK_TRACE: 'UNHANDLED',
        SELF_TUNING_MEM: 'ON',
        SEQDETECT: 'YES',
        SHEAPTHRES_SHR: 'AUTOMATIC',
        SOFTMAX: '-',
        SORTHEAP: 'AUTOMATIC',
        SQL_CCFLAGS: '-',
        STAT_HEAP_SZ: 'AUTOMATIC',
        STMTHEAP: 'AUTOMATIC',
        STMT_CONC: 'LITERALS',
        STRING_UNITS: 'SYSTEM',
        SYSTIME_PERIOD_ADJ: 'NO',
        TRACKMOD: 'YES',
        UTIL_HEAP_SZ: 'AUTOMATIC',
        WLM_ADMISSION_CTRL: 'YES',
        WLM_AGENT_LOAD_TRGT: '1000',
        WLM_CPU_LIMIT: '80',
        WLM_CPU_SHARES: '1000',
        WLM_CPU_SHARE_MODE: 'SOFT',
      };

      // CreateCustomSettingsDbm
      const createCustomSettingsDbmModel = {
        COMM_BANDWIDTH: '1000',
        CPUSPEED: '0.5',
        DFT_MON_BUFPOOL: 'ON',
        DFT_MON_LOCK: 'OFF',
        DFT_MON_SORT: 'ON',
        DFT_MON_STMT: 'ON',
        DFT_MON_TABLE: 'OFF',
        DFT_MON_TIMESTAMP: 'ON',
        DFT_MON_UOW: 'ON',
        DIAGLEVEL: '2',
        FEDERATED_ASYNC: '32767',
        INDEXREC: 'RESTART',
        INTRA_PARALLEL: 'YES',
        KEEPFENCED: 'YES',
        MAX_CONNRETRIES: '5',
        MAX_QUERYDEGREE: '4',
        MON_HEAP_SZ: 'AUTOMATIC',
        MULTIPARTSIZEMB: '100',
        NOTIFYLEVEL: '2',
        NUM_INITAGENTS: '100',
        NUM_INITFENCED: '20',
        NUM_POOLAGENTS: '10',
        RESYNC_INTERVAL: '1000',
        RQRIOBLK: '8192',
        START_STOP_TIME: '10',
        UTIL_IMPACT_LIM: '50',
        WLM_DISPATCHER: 'YES',
        WLM_DISP_CONCUR: '16',
        WLM_DISP_CPU_SHARES: 'YES',
        WLM_DISP_MIN_UTIL: '10',
      };

      function __postDb2SaasDbConfigurationTest() {
        // Construct the params object for operation postDb2SaasDbConfiguration
        const xDbProfile =
          'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A';
        const registry = createCustomSettingsRegistryModel;
        const db = createCustomSettingsDbModel;
        const dbm = createCustomSettingsDbmModel;
        const postDb2SaasDbConfigurationParams = {
          xDbProfile,
          registry,
          db,
          dbm,
        };

        const postDb2SaasDbConfigurationResult = db2saasService.postDb2SaasDbConfiguration(
          postDb2SaasDbConfigurationParams
        );

        // all methods should return a Promise
        expectToBePromise(postDb2SaasDbConfigurationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/manage/deployments/custom_setting', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-db-profile', xDbProfile);
        expect(mockRequestOptions.body.registry).toEqual(registry);
        expect(mockRequestOptions.body.db).toEqual(db);
        expect(mockRequestOptions.body.dbm).toEqual(dbm);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __postDb2SaasDbConfigurationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __postDb2SaasDbConfigurationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __postDb2SaasDbConfigurationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDbProfile =
          'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const postDb2SaasDbConfigurationParams = {
          xDbProfile,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.postDb2SaasDbConfiguration(postDb2SaasDbConfigurationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.postDb2SaasDbConfiguration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.postDb2SaasDbConfiguration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getDb2SaasTuneableParam', () => {
    describe('positive tests', () => {
      function __getDb2SaasTuneableParamTest() {
        // Construct the params object for operation getDb2SaasTuneableParam
        const getDb2SaasTuneableParamParams = {};

        const getDb2SaasTuneableParamResult = db2saasService.getDb2SaasTuneableParam(
          getDb2SaasTuneableParamParams
        );

        // all methods should return a Promise
        expectToBePromise(getDb2SaasTuneableParamResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/manage/tuneable_param', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDb2SaasTuneableParamTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __getDb2SaasTuneableParamTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __getDb2SaasTuneableParamTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDb2SaasTuneableParamParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.getDb2SaasTuneableParam(getDb2SaasTuneableParamParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        db2saasService.getDb2SaasTuneableParam({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getDb2SaasBackup', () => {
    describe('positive tests', () => {
      function __getDb2SaasBackupTest() {
        // Construct the params object for operation getDb2SaasBackup
        const xDbProfile =
          'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A';
        const getDb2SaasBackupParams = {
          xDbProfile,
        };

        const getDb2SaasBackupResult = db2saasService.getDb2SaasBackup(getDb2SaasBackupParams);

        // all methods should return a Promise
        expectToBePromise(getDb2SaasBackupResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/manage/backups', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-db-profile', xDbProfile);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDb2SaasBackupTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __getDb2SaasBackupTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __getDb2SaasBackupTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDbProfile =
          'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDb2SaasBackupParams = {
          xDbProfile,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.getDb2SaasBackup(getDb2SaasBackupParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.getDb2SaasBackup({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.getDb2SaasBackup();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('postDb2SaasBackup', () => {
    describe('positive tests', () => {
      function __postDb2SaasBackupTest() {
        // Construct the params object for operation postDb2SaasBackup
        const xDbProfile =
          'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A';
        const postDb2SaasBackupParams = {
          xDbProfile,
        };

        const postDb2SaasBackupResult = db2saasService.postDb2SaasBackup(postDb2SaasBackupParams);

        // all methods should return a Promise
        expectToBePromise(postDb2SaasBackupResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/manage/backups/backup', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'x-db-profile', xDbProfile);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __postDb2SaasBackupTest();

        // enable retries and test again
        createRequestMock.mockClear();
        db2saasService.enableRetries();
        __postDb2SaasBackupTest();

        // disable retries and test again
        createRequestMock.mockClear();
        db2saasService.disableRetries();
        __postDb2SaasBackupTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const xDbProfile =
          'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const postDb2SaasBackupParams = {
          xDbProfile,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        db2saasService.postDb2SaasBackup(postDb2SaasBackupParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await db2saasService.postDb2SaasBackup({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await db2saasService.postDb2SaasBackup();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });
});
