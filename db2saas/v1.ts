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

/**
 * IBM OpenAPI SDK Code Generator Version: 3.96.0-d6dec9d7-20241008-212902
 */

import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import {
  Authenticator,
  BaseService,
  UserOptions,
  constructServiceUrl,
  getAuthenticatorFromEnvironment,
  validateParams,
} from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';

/**
 * Manage lifecycle of your Db2 on Cloud resources using the  APIs.
 *
 * API Version: 1.0.0
 */

class Db2saasV1 extends BaseService {
  static DEFAULT_SERVICE_URL: string = 'https://us-south.db2.saas.ibm.com/dbapi/v4';

  static DEFAULT_SERVICE_NAME: string = 'db2saas';

  static PARAMETERIZED_SERVICE_URL: string = 'https://{region}.db2.saas.ibm.com/dbapi/v4';

  private static defaultUrlVariables = new Map([
    ['region', 'us-south'],
  ]);

  /**
   * Constructs a service URL by formatting the parameterized service URL.
   *
   * The parameterized service URL is:
   * 'https://{region}.db2.saas.ibm.com/dbapi/v4'
   *
   * The default variable values are:
   * - 'region': 'us-south'
   *
   * @param {Map<string, string>} | null providedUrlVariables Map from variable names to desired values.
   *  If a variable is not provided in this map,
   *  the default variable value will be used instead.
   * @returns {string} The formatted URL with all variable placeholders replaced by values.
   */
  static constructServiceUrl(providedUrlVariables: Map<string, string> | null): string {
    return constructServiceUrl(
      Db2saasV1.PARAMETERIZED_SERVICE_URL, 
      Db2saasV1.defaultUrlVariables, 
      providedUrlVariables
    );
  }

  /*************************
   * Factory method
   ************************/

  /**
   * Constructs an instance of Db2saasV1 with passed in options and external configuration.
   *
   * @param {UserOptions} [options] - The parameters to send to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
   * @param {string} [options.serviceUrl] - The base URL for the service
   * @returns {Db2saasV1}
   */

  public static newInstance(options: UserOptions): Db2saasV1 {
    options = options || {};

    if (!options.serviceName) {
      options.serviceName = this.DEFAULT_SERVICE_NAME;
    }
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    const service = new Db2saasV1(options);
    service.configureService(options.serviceName);
    if (options.serviceUrl) {
      service.setServiceUrl(options.serviceUrl);
    }
    return service;
  }

  /**
   * Construct a Db2saasV1 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.serviceUrl] - The base URL for the service
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
   * @constructor
   * @returns {Db2saasV1}
   */
  constructor(options: UserOptions) {
    options = options || {};

    super(options);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    } else {
      this.setServiceUrl(Db2saasV1.DEFAULT_SERVICE_URL);
    }
  }

  /*************************
   * connectioninfo
   ************************/

  /**
   * Get Db2 connection information.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.deploymentId - Encoded CRN deployment id.
   * @param {string} params.xDeploymentId - CRN deployment id.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessConnectionInfo>>}
   */
  public getDb2SaasConnectionInfo(
    params: Db2saasV1.GetDb2SaasConnectionInfoParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessConnectionInfo>> {
    const _params = { ...params };
    const _requiredParams = ['deploymentId', 'xDeploymentId'];
    const _validParams = ['deploymentId', 'xDeploymentId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'deployment_id': _params.deploymentId,
    };

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'getDb2SaasConnectionInfo');

    const parameters = {
      options: {
        url: '/connectioninfo/{deployment_id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'x-deployment-id': _params.xDeploymentId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * allowlist
   ************************/

  /**
   * Allow listing of new IPs.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDeploymentId - CRN deployment id.
   * @param {IpAddress[]} params.ipAddresses - List of IP addresses.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessPostAllowedlistIPs>>}
   */
  public postDb2SaasAllowlist(
    params: Db2saasV1.PostDb2SaasAllowlistParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessPostAllowedlistIPs>> {
    const _params = { ...params };
    const _requiredParams = ['xDeploymentId', 'ipAddresses'];
    const _validParams = ['xDeploymentId', 'ipAddresses', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'ip_addresses': _params.ipAddresses,
    };

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'postDb2SaasAllowlist');

    const parameters = {
      options: {
        url: '/dbsettings/whitelistips',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-deployment-id': _params.xDeploymentId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get allowed list of IPs.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDeploymentId - CRN deployment id.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessGetAllowlistIPs>>}
   */
  public getDb2SaasAllowlist(
    params: Db2saasV1.GetDb2SaasAllowlistParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessGetAllowlistIPs>> {
    const _params = { ...params };
    const _requiredParams = ['xDeploymentId'];
    const _validParams = ['xDeploymentId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'getDb2SaasAllowlist');

    const parameters = {
      options: {
        url: '/dbsettings/whitelistips',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'x-deployment-id': _params.xDeploymentId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * users
   ************************/

  /**
   * Create new user ( available only for platform users).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDeploymentId - CRN deployment id.
   * @param {string} params.id - The id of the User.
   * @param {boolean} params.iam - Indicates if IAM is enabled.
   * @param {string} params.ibmid - IBM ID of the User.
   * @param {string} params.name - The name of the User.
   * @param {string} params.password - Password of the User.
   * @param {string} params.role - Role of the User.
   * @param {string} params.email - Email of the User.
   * @param {string} params.locked - Indicates if the account is locked.
   * @param {CreateUserAuthentication} params.authentication -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessUserResponse>>}
   */
  public postDb2SaasUser(
    params: Db2saasV1.PostDb2SaasUserParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessUserResponse>> {
    const _params = { ...params };
    const _requiredParams = ['xDeploymentId', 'id', 'iam', 'ibmid', 'name', 'password', 'role', 'email', 'locked', 'authentication'];
    const _validParams = ['xDeploymentId', 'id', 'iam', 'ibmid', 'name', 'password', 'role', 'email', 'locked', 'authentication', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'id': _params.id,
      'iam': _params.iam,
      'ibmid': _params.ibmid,
      'name': _params.name,
      'password': _params.password,
      'role': _params.role,
      'email': _params.email,
      'locked': _params.locked,
      'authentication': _params.authentication,
    };

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'postDb2SaasUser');

    const parameters = {
      options: {
        url: '/users',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-deployment-id': _params.xDeploymentId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get the list of Users.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDeploymentId - CRN deployment id.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessGetUserInfo>>}
   */
  public getDb2SaasUser(
    params: Db2saasV1.GetDb2SaasUserParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessGetUserInfo>> {
    const _params = { ...params };
    const _requiredParams = ['xDeploymentId'];
    const _validParams = ['xDeploymentId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'getDb2SaasUser');

    const parameters = {
      options: {
        url: '/users',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'x-deployment-id': _params.xDeploymentId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete a user (only platform admin).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDeploymentId - CRN deployment id.
   * @param {string} params.id - id of the user.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.JsonObject>>}
   */
  public deleteDb2SaasUser(
    params: Db2saasV1.DeleteDb2SaasUserParams
  ): Promise<Db2saasV1.Response<Db2saasV1.JsonObject>> {
    const _params = { ...params };
    const _requiredParams = ['xDeploymentId', 'id'];
    const _validParams = ['xDeploymentId', 'id', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteDb2SaasUser');

    const parameters = {
      options: {
        url: '/users/{id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'x-deployment-id': _params.xDeploymentId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get specific user by Id.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDeploymentId - CRN deployment id.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessGetUserByID>>}
   */
  public getbyidDb2SaasUser(
    params: Db2saasV1.GetbyidDb2SaasUserParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessGetUserByID>> {
    const _params = { ...params };
    const _requiredParams = ['xDeploymentId'];
    const _validParams = ['xDeploymentId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'getbyidDb2SaasUser');

    const parameters = {
      options: {
        url: '/users/bluadmin',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'x-deployment-id': _params.xDeploymentId,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * autoscale
   ************************/

  /**
   * Update auto scaling configuration.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDbProfile - Encoded CRN deployment id.
   * @param {string} [params.autoScalingEnabled] - Indicates if automatic scaling is enabled or not.
   * @param {number} [params.autoScalingThreshold] - Specifies the resource utilization level that triggers an
   * auto-scaling.
   * @param {number} [params.autoScalingOverTimePeriod] - Defines the time period over which auto-scaling adjustments
   * are monitored and applied.
   * @param {number} [params.autoScalingPauseLimit] - Specifies the duration to pause auto-scaling actions after a
   * scaling event has occurred.
   * @param {string} [params.autoScalingAllowPlanLimit] - Indicates the maximum number of scaling actions that are
   * allowed within a specified time period.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessUpdateAutoScale>>}
   */
  public putDb2SaasAutoscale(
    params: Db2saasV1.PutDb2SaasAutoscaleParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessUpdateAutoScale>> {
    const _params = { ...params };
    const _requiredParams = ['xDbProfile'];
    const _validParams = ['xDbProfile', 'autoScalingEnabled', 'autoScalingThreshold', 'autoScalingOverTimePeriod', 'autoScalingPauseLimit', 'autoScalingAllowPlanLimit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'auto_scaling_enabled': _params.autoScalingEnabled,
      'auto_scaling_threshold': _params.autoScalingThreshold,
      'auto_scaling_over_time_period': _params.autoScalingOverTimePeriod,
      'auto_scaling_pause_limit': _params.autoScalingPauseLimit,
      'auto_scaling_allow_plan_limit': _params.autoScalingAllowPlanLimit,
    };

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'putDb2SaasAutoscale');

    const parameters = {
      options: {
        url: '/manage/scaling/auto',
        method: 'PUT',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-db-profile': _params.xDbProfile,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get auto scaling info.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDbProfile - Encoded CRN deployment id.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessAutoScaling>>}
   */
  public getDb2SaasAutoscale(
    params: Db2saasV1.GetDb2SaasAutoscaleParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessAutoScaling>> {
    const _params = { ...params };
    const _requiredParams = ['xDbProfile'];
    const _validParams = ['xDbProfile', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'getDb2SaasAutoscale');

    const parameters = {
      options: {
        url: '/manage/scaling/auto',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'x-db-profile': _params.xDbProfile,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * dbAndDbmConfiguration
   ************************/

  /**
   * Set database and database manager configuration.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDbProfile - Encoded CRN deployment id.
   * @param {CreateCustomSettingsRegistry} [params.registry] - registry for db2 related configuration
   * settings/configurations.
   * @param {CreateCustomSettingsDb} [params.db] - Container for general database settings.
   * @param {CreateCustomSettingsDbm} [params.dbm] - Container for general database management settings.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessPostCustomSettings>>}
   */
  public postDb2SaasDbConfiguration(
    params: Db2saasV1.PostDb2SaasDbConfigurationParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessPostCustomSettings>> {
    const _params = { ...params };
    const _requiredParams = ['xDbProfile'];
    const _validParams = ['xDbProfile', 'registry', 'db', 'dbm', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'registry': _params.registry,
      'db': _params.db,
      'dbm': _params.dbm,
    };

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'postDb2SaasDbConfiguration');

    const parameters = {
      options: {
        url: '/manage/deployments/custom_setting',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-db-profile': _params.xDbProfile,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Retrieves the values of tunable parameters of the DB2 instance.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessTuneableParams>>}
   */
  public getDb2SaasTuneableParam(
    params?: Db2saasV1.GetDb2SaasTuneableParamParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessTuneableParams>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'getDb2SaasTuneableParam');

    const parameters = {
      options: {
        url: '/manage/tuneable_param',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * backups
   ************************/

  /**
   * Get Db2 instance backup information.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDbProfile - Encoded CRN deployment id.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessGetBackups>>}
   */
  public getDb2SaasBackup(
    params: Db2saasV1.GetDb2SaasBackupParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessGetBackups>> {
    const _params = { ...params };
    const _requiredParams = ['xDbProfile'];
    const _validParams = ['xDbProfile', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'getDb2SaasBackup');

    const parameters = {
      options: {
        url: '/manage/backups',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'x-db-profile': _params.xDbProfile,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create backup of an instance.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDbProfile - Encoded CRN deployment id.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessCreateBackup>>}
   */
  public postDb2SaasBackup(
    params: Db2saasV1.PostDb2SaasBackupParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessCreateBackup>> {
    const _params = { ...params };
    const _requiredParams = ['xDbProfile'];
    const _validParams = ['xDbProfile', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'postDb2SaasBackup');

    const parameters = {
      options: {
        url: '/manage/backups/backup',
        method: 'POST',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'x-db-profile': _params.xDbProfile,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
}

/*************************
 * interfaces
 ************************/

namespace Db2saasV1 {
  /** An operation response. */
  export interface Response<T = any> {
    result: T;
    status: number;
    statusText: string;
    headers: IncomingHttpHeaders;
  }

  /** The callback for a service request. */
  export type Callback<T> = (error: any, response?: Response<T>) => void;

  /** The body of a service request that returns no response data. */
  export interface EmptyObject {}

  /** A standard JS object, defined to avoid the limitations of `Object` and `object` */
  export interface JsonObject {
    [key: string]: any;
  }

  /*************************
   * request interfaces
   ************************/

  /** Parameters for the `getDb2SaasConnectionInfo` operation. */
  export interface GetDb2SaasConnectionInfoParams {
    /** Encoded CRN deployment id. */
    deploymentId: string;
    /** CRN deployment id. */
    xDeploymentId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `postDb2SaasAllowlist` operation. */
  export interface PostDb2SaasAllowlistParams {
    /** CRN deployment id. */
    xDeploymentId: string;
    /** List of IP addresses. */
    ipAddresses: IpAddress[];
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDb2SaasAllowlist` operation. */
  export interface GetDb2SaasAllowlistParams {
    /** CRN deployment id. */
    xDeploymentId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `postDb2SaasUser` operation. */
  export interface PostDb2SaasUserParams {
    /** CRN deployment id. */
    xDeploymentId: string;
    /** The id of the User. */
    id: string;
    /** Indicates if IAM is enabled. */
    iam: boolean;
    /** IBM ID of the User. */
    ibmid: string;
    /** The name of the User. */
    name: string;
    /** Password of the User. */
    password: string;
    /** Role of the User. */
    role: PostDb2SaasUserConstants.Role | string;
    /** Email of the User. */
    email: string;
    /** Indicates if the account is locked. */
    locked: PostDb2SaasUserConstants.Locked | string;
    authentication: CreateUserAuthentication;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `postDb2SaasUser` operation. */
  export namespace PostDb2SaasUserConstants {
    /** Role of the User. */
    export enum Role {
      BLUADMIN = 'bluadmin',
      BLUUSER = 'bluuser',
    }
    /** Indicates if the account is locked. */
    export enum Locked {
      YES = 'yes',
      NO = 'no',
    }
  }

  /** Parameters for the `getDb2SaasUser` operation. */
  export interface GetDb2SaasUserParams {
    /** CRN deployment id. */
    xDeploymentId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteDb2SaasUser` operation. */
  export interface DeleteDb2SaasUserParams {
    /** CRN deployment id. */
    xDeploymentId: string;
    /** id of the user. */
    id: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getbyidDb2SaasUser` operation. */
  export interface GetbyidDb2SaasUserParams {
    /** CRN deployment id. */
    xDeploymentId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `putDb2SaasAutoscale` operation. */
  export interface PutDb2SaasAutoscaleParams {
    /** Encoded CRN deployment id. */
    xDbProfile: string;
    /** Indicates if automatic scaling is enabled or not. */
    autoScalingEnabled?: PutDb2SaasAutoscaleConstants.AutoScalingEnabled | string;
    /** Specifies the resource utilization level that triggers an auto-scaling. */
    autoScalingThreshold?: number;
    /** Defines the time period over which auto-scaling adjustments are monitored and applied. */
    autoScalingOverTimePeriod?: number;
    /** Specifies the duration to pause auto-scaling actions after a scaling event has occurred. */
    autoScalingPauseLimit?: number;
    /** Indicates the maximum number of scaling actions that are allowed within a specified time period. */
    autoScalingAllowPlanLimit?: PutDb2SaasAutoscaleConstants.AutoScalingAllowPlanLimit | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `putDb2SaasAutoscale` operation. */
  export namespace PutDb2SaasAutoscaleConstants {
    /** Indicates if automatic scaling is enabled or not. */
    export enum AutoScalingEnabled {
      TRUE = 'true',
      FALSE = 'false',
    }
    /** Indicates the maximum number of scaling actions that are allowed within a specified time period. */
    export enum AutoScalingAllowPlanLimit {
      YES = 'YES',
      NO = 'NO',
    }
  }

  /** Parameters for the `getDb2SaasAutoscale` operation. */
  export interface GetDb2SaasAutoscaleParams {
    /** Encoded CRN deployment id. */
    xDbProfile: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `postDb2SaasDbConfiguration` operation. */
  export interface PostDb2SaasDbConfigurationParams {
    /** Encoded CRN deployment id. */
    xDbProfile: string;
    /** registry for db2 related configuration settings/configurations. */
    registry?: CreateCustomSettingsRegistry;
    /** Container for general database settings. */
    db?: CreateCustomSettingsDb;
    /** Container for general database management settings. */
    dbm?: CreateCustomSettingsDbm;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDb2SaasTuneableParam` operation. */
  export interface GetDb2SaasTuneableParamParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDb2SaasBackup` operation. */
  export interface GetDb2SaasBackupParams {
    /** Encoded CRN deployment id. */
    xDbProfile: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `postDb2SaasBackup` operation. */
  export interface PostDb2SaasBackupParams {
    /** Encoded CRN deployment id. */
    xDbProfile: string;
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

  /**
   * Info of backup.
   */
  export interface Backup {
    /** CRN of the db2 instance. */
    id: string;
    /** Defines the type of execution of backup. */
    type: string;
    /** Status of the backup. */
    status: string;
    /** Timestamp of the backup created. */
    created_at: string;
    /** Size of the backup or data set. */
    size: number;
    /** The duration of the backup operation in seconds. */
    duration: number;
  }

  /**
   * Container for general database settings.
   */
  export interface CreateCustomSettingsDb {
    /** Configures the sort memory limit for DB2. */
    ACT_SORTMEM_LIMIT?: CreateCustomSettingsDb.Constants.ActSortmemLimit | string;
    /** Configures the collation sequence. */
    ALT_COLLATE?: CreateCustomSettingsDb.Constants.AltCollate | string;
    /** Sets the application group memory size. */
    APPGROUP_MEM_SZ?: CreateCustomSettingsDb.Constants.AppgroupMemSz | string;
    /** Configures the application heap size. */
    APPLHEAPSZ?: CreateCustomSettingsDb.Constants.Applheapsz | string;
    /** Configures the application memory allocation. */
    APPL_MEMORY?: CreateCustomSettingsDb.Constants.ApplMemory | string;
    /** Configures the application control heap size. */
    APP_CTL_HEAP_SZ?: CreateCustomSettingsDb.Constants.AppCtlHeapSz | string;
    /** Configures the archive retry delay time. */
    ARCHRETRYDELAY?: CreateCustomSettingsDb.Constants.Archretrydelay | string;
    /** Configures the authentication cache duration. */
    AUTHN_CACHE_DURATION?: CreateCustomSettingsDb.Constants.AuthnCacheDuration | string;
    /** Configures whether the database will automatically restart. */
    AUTORESTART?: CreateCustomSettingsDb.Constants.Autorestart | string;
    /** Configures whether auto collection of CG statistics is enabled. */
    AUTO_CG_STATS?: CreateCustomSettingsDb.Constants.AutoCgStats | string;
    /** Configures automatic maintenance for the database. */
    AUTO_MAINT?: CreateCustomSettingsDb.Constants.AutoMaint | string;
    /** Configures automatic reorganization for the database. */
    AUTO_REORG?: CreateCustomSettingsDb.Constants.AutoReorg | string;
    /** Configures the auto refresh or revalidation method. */
    AUTO_REVAL?: CreateCustomSettingsDb.Constants.AutoReval | string;
    /** Configures automatic collection of run-time statistics. */
    AUTO_RUNSTATS?: CreateCustomSettingsDb.Constants.AutoRunstats | string;
    /** Configures whether auto-sampling is enabled. */
    AUTO_SAMPLING?: CreateCustomSettingsDb.Constants.AutoSampling | string;
    /** Configures automatic collection of statistics on views. */
    AUTO_STATS_VIEWS?: CreateCustomSettingsDb.Constants.AutoStatsViews | string;
    /** Configures automatic collection of statement-level statistics. */
    AUTO_STMT_STATS?: CreateCustomSettingsDb.Constants.AutoStmtStats | string;
    /** Configures automatic table maintenance. */
    AUTO_TBL_MAINT?: CreateCustomSettingsDb.Constants.AutoTblMaint | string;
    /** Average number of applications. */
    AVG_APPLS?: string;
    /** Configures the catalog cache size. */
    CATALOGCACHE_SZ?: string;
    /** Configures the change pages threshold percentage. */
    CHNGPGS_THRESH?: CreateCustomSettingsDb.Constants.ChngpgsThresh | string;
    /** Configures the commit behavior. */
    CUR_COMMIT?: CreateCustomSettingsDb.Constants.CurCommit | string;
    /** Configures the database memory management. */
    DATABASE_MEMORY?: CreateCustomSettingsDb.Constants.DatabaseMemory | string;
    /** Configures the database heap size. */
    DBHEAP?: CreateCustomSettingsDb.Constants.Dbheap | string;
    /** Specifies the database collation name. */
    DB_COLLNAME?: string;
    /** Configures the memory threshold percentage for database. */
    DB_MEM_THRESH?: CreateCustomSettingsDb.Constants.DbMemThresh | string;
    /** Defines the default DDL compression behavior. */
    DDL_COMPRESSION_DEF?: CreateCustomSettingsDb.Constants.DdlCompressionDef | string;
    /** Defines the default constraint behavior in DDL. */
    DDL_CONSTRAINT_DEF?: CreateCustomSettingsDb.Constants.DdlConstraintDef | string;
    /** Configures the decimal floating-point rounding method. */
    DECFLT_ROUNDING?: CreateCustomSettingsDb.Constants.DecfltRounding | string;
    /** Configures the default arithmetic for decimal operations. */
    DEC_ARITHMETIC?: string;
    /** Configures the decimal-to-character conversion format. */
    DEC_TO_CHAR_FMT?: CreateCustomSettingsDb.Constants.DecToCharFmt | string;
    /** Configures the default degree for parallelism. */
    DFT_DEGREE?: CreateCustomSettingsDb.Constants.DftDegree | string;
    /** Configures the default extent size for tables. */
    DFT_EXTENT_SZ?: CreateCustomSettingsDb.Constants.DftExtentSz | string;
    /** Configures the default load record session count. */
    DFT_LOADREC_SES?: CreateCustomSettingsDb.Constants.DftLoadrecSes | string;
    /** Configures the default MTTB (multi-table table scan) types. */
    DFT_MTTB_TYPES?: string;
    /** Configures the default prefetch size for queries. */
    DFT_PREFETCH_SZ?: CreateCustomSettingsDb.Constants.DftPrefetchSz | string;
    /** Configures the default query optimization level. */
    DFT_QUERYOPT?: CreateCustomSettingsDb.Constants.DftQueryopt | string;
    /** Configures the default refresh age for views. */
    DFT_REFRESH_AGE?: string;
    /** Configures whether DCC (database control center) is enabled for schemas. */
    DFT_SCHEMAS_DCC?: CreateCustomSettingsDb.Constants.DftSchemasDcc | string;
    /** Configures whether SQL math warnings are enabled. */
    DFT_SQLMATHWARN?: CreateCustomSettingsDb.Constants.DftSqlmathwarn | string;
    /** Configures the default table organization (ROW or COLUMN). */
    DFT_TABLE_ORG?: CreateCustomSettingsDb.Constants.DftTableOrg | string;
    /** Configures the deadlock check time in milliseconds. */
    DLCHKTIME?: CreateCustomSettingsDb.Constants.Dlchktime | string;
    /** Configures whether XML character support is enabled. */
    ENABLE_XMLCHAR?: CreateCustomSettingsDb.Constants.EnableXmlchar | string;
    /** Configures whether extended row size is enabled. */
    EXTENDED_ROW_SZ?: CreateCustomSettingsDb.Constants.ExtendedRowSz | string;
    /** Configures the heap ratio for group heap memory. */
    GROUPHEAP_RATIO?: CreateCustomSettingsDb.Constants.GroupheapRatio | string;
    /** Configures the index recovery method. */
    INDEXREC?: CreateCustomSettingsDb.Constants.Indexrec | string;
    /** Configures whether large aggregation is enabled. */
    LARGE_AGGREGATION?: CreateCustomSettingsDb.Constants.LargeAggregation | string;
    /** Configures the lock list memory size. */
    LOCKLIST?: CreateCustomSettingsDb.Constants.Locklist | string;
    /** Configures the lock timeout duration. */
    LOCKTIMEOUT?: CreateCustomSettingsDb.Constants.Locktimeout | string;
    /** Configures whether index builds are logged. */
    LOGINDEXBUILD?: CreateCustomSettingsDb.Constants.Logindexbuild | string;
    /** Configures whether application information is logged. */
    LOG_APPL_INFO?: CreateCustomSettingsDb.Constants.LogApplInfo | string;
    /** Configures whether DDL statements are logged. */
    LOG_DDL_STMTS?: CreateCustomSettingsDb.Constants.LogDdlStmts | string;
    /** Configures the disk capacity log setting. */
    LOG_DISK_CAP?: CreateCustomSettingsDb.Constants.LogDiskCap | string;
    /** Configures the maximum number of applications. */
    MAXAPPLS?: CreateCustomSettingsDb.Constants.Maxappls | string;
    /** Configures the maximum number of file operations. */
    MAXFILOP?: CreateCustomSettingsDb.Constants.Maxfilop | string;
    /** Configures the maximum number of locks. */
    MAXLOCKS?: CreateCustomSettingsDb.Constants.Maxlocks | string;
    /** Configures whether decimal division by 3 should be handled. */
    MIN_DEC_DIV_3?: CreateCustomSettingsDb.Constants.MinDecDiv3 | string;
    /** Configures the level of activity metrics to be monitored. */
    MON_ACT_METRICS?: CreateCustomSettingsDb.Constants.MonActMetrics | string;
    /** Configures deadlock monitoring settings. */
    MON_DEADLOCK?: CreateCustomSettingsDb.Constants.MonDeadlock | string;
    /** Configures the lock message level for monitoring. */
    MON_LCK_MSG_LVL?: CreateCustomSettingsDb.Constants.MonLckMsgLvl | string;
    /** Configures lock timeout monitoring settings. */
    MON_LOCKTIMEOUT?: CreateCustomSettingsDb.Constants.MonLocktimeout | string;
    /** Configures lock wait monitoring settings. */
    MON_LOCKWAIT?: CreateCustomSettingsDb.Constants.MonLockwait | string;
    /** Configures the lightweight threshold for monitoring. */
    MON_LW_THRESH?: CreateCustomSettingsDb.Constants.MonLwThresh | string;
    /** Configures the object metrics level for monitoring. */
    MON_OBJ_METRICS?: CreateCustomSettingsDb.Constants.MonObjMetrics | string;
    /** Configures the package list size for monitoring. */
    MON_PKGLIST_SZ?: CreateCustomSettingsDb.Constants.MonPkglistSz | string;
    /** Configures the request metrics level for monitoring. */
    MON_REQ_METRICS?: CreateCustomSettingsDb.Constants.MonReqMetrics | string;
    /** Configures the level of return data for monitoring. */
    MON_RTN_DATA?: CreateCustomSettingsDb.Constants.MonRtnData | string;
    /** Configures whether stored procedure execution list is monitored. */
    MON_RTN_EXECLIST?: CreateCustomSettingsDb.Constants.MonRtnExeclist | string;
    /** Configures the level of unit of work (UOW) data for monitoring. */
    MON_UOW_DATA?: CreateCustomSettingsDb.Constants.MonUowData | string;
    /** Configures whether UOW execution list is monitored. */
    MON_UOW_EXECLIST?: CreateCustomSettingsDb.Constants.MonUowExeclist | string;
    /** Configures whether UOW package list is monitored. */
    MON_UOW_PKGLIST?: CreateCustomSettingsDb.Constants.MonUowPkglist | string;
    /** Configures the mapping of NCHAR character types. */
    NCHAR_MAPPING?: CreateCustomSettingsDb.Constants.NcharMapping | string;
    /** Configures the number of frequent values for optimization. */
    NUM_FREQVALUES?: CreateCustomSettingsDb.Constants.NumFreqvalues | string;
    /** Configures the number of IO cleaners. */
    NUM_IOCLEANERS?: CreateCustomSettingsDb.Constants.NumIocleaners | string;
    /** Configures the number of IO servers. */
    NUM_IOSERVERS?: CreateCustomSettingsDb.Constants.NumIoservers | string;
    /** Configures the number of log spans. */
    NUM_LOG_SPAN?: CreateCustomSettingsDb.Constants.NumLogSpan | string;
    /** Configures the number of quantiles for optimizations. */
    NUM_QUANTILES?: CreateCustomSettingsDb.Constants.NumQuantiles | string;
    /** Configures the buffer page optimization setting. */
    OPT_BUFFPAGE?: string;
    /** Configures the direct workload optimization setting. */
    OPT_DIRECT_WRKLD?: CreateCustomSettingsDb.Constants.OptDirectWrkld | string;
    /** Configures the lock list optimization setting. */
    OPT_LOCKLIST?: string;
    /** Configures the max locks optimization setting. */
    OPT_MAXLOCKS?: string;
    /** Configures the sort heap optimization setting. */
    OPT_SORTHEAP?: string;
    /** Configures the page age target for garbage collection. */
    PAGE_AGE_TRGT_GCR?: CreateCustomSettingsDb.Constants.PageAgeTrgtGcr | string;
    /** Configures the page age target for memory collection. */
    PAGE_AGE_TRGT_MCR?: CreateCustomSettingsDb.Constants.PageAgeTrgtMcr | string;
    /** Configures the package cache size. */
    PCKCACHESZ?: CreateCustomSettingsDb.Constants.Pckcachesz | string;
    /** Configures the level of stack trace logging for stored procedures. */
    PL_STACK_TRACE?: CreateCustomSettingsDb.Constants.PlStackTrace | string;
    /** Configures whether self-tuning memory is enabled. */
    SELF_TUNING_MEM?: CreateCustomSettingsDb.Constants.SelfTuningMem | string;
    /** Configures sequence detection for queries. */
    SEQDETECT?: CreateCustomSettingsDb.Constants.Seqdetect | string;
    /** Configures the shared heap threshold size. */
    SHEAPTHRES_SHR?: CreateCustomSettingsDb.Constants.SheapthresShr | string;
    /** Configures the soft max setting. */
    SOFTMAX?: string;
    /** Configures the sort heap memory size. */
    SORTHEAP?: CreateCustomSettingsDb.Constants.Sortheap | string;
    /** Configures the SQL compiler flags. */
    SQL_CCFLAGS?: string;
    /** Configures the statistics heap size. */
    STAT_HEAP_SZ?: CreateCustomSettingsDb.Constants.StatHeapSz | string;
    /** Configures the statement heap size. */
    STMTHEAP?: CreateCustomSettingsDb.Constants.Stmtheap | string;
    /** Configures the statement concurrency. */
    STMT_CONC?: CreateCustomSettingsDb.Constants.StmtConc | string;
    /** Configures the string unit settings. */
    STRING_UNITS?: CreateCustomSettingsDb.Constants.StringUnits | string;
    /** Configures whether system time period adjustments are enabled. */
    SYSTIME_PERIOD_ADJ?: CreateCustomSettingsDb.Constants.SystimePeriodAdj | string;
    /** Configures whether modifications to tracked objects are logged. */
    TRACKMOD?: CreateCustomSettingsDb.Constants.Trackmod | string;
    /** Configures the utility heap size. */
    UTIL_HEAP_SZ?: CreateCustomSettingsDb.Constants.UtilHeapSz | string;
    /** Configures whether WLM (Workload Management) admission control is enabled. */
    WLM_ADMISSION_CTRL?: CreateCustomSettingsDb.Constants.WlmAdmissionCtrl | string;
    /** Configures the WLM agent load target. */
    WLM_AGENT_LOAD_TRGT?: CreateCustomSettingsDb.Constants.WlmAgentLoadTrgt | string;
    /** Configures the CPU limit for WLM workloads. */
    WLM_CPU_LIMIT?: CreateCustomSettingsDb.Constants.WlmCpuLimit | string;
    /** Configures the CPU share count for WLM workloads. */
    WLM_CPU_SHARES?: CreateCustomSettingsDb.Constants.WlmCpuShares | string;
    /** Configures the mode of CPU shares for WLM workloads. */
    WLM_CPU_SHARE_MODE?: CreateCustomSettingsDb.Constants.WlmCpuShareMode | string;
  }
  export namespace CreateCustomSettingsDb {
    export namespace Constants {
      /** Configures the sort memory limit for DB2. */
      export enum ActSortmemLimit {
        NONE = 'NONE',
        RANGE_10_100 = 'range(10, 100)',
      }
      /** Configures the collation sequence. */
      export enum AltCollate {
        NULL = 'NULL',
        IDENTITY_16BIT = 'IDENTITY_16BIT',
      }
      /** Sets the application group memory size. */
      export enum AppgroupMemSz {
        RANGE_1_1000000 = 'range(1, 1000000)',
      }
      /** Configures the application heap size. */
      export enum Applheapsz {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_16_2147483647 = 'range(16, 2147483647)',
      }
      /** Configures the application memory allocation. */
      export enum ApplMemory {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_128_4294967295 = 'range(128, 4294967295)',
      }
      /** Configures the application control heap size. */
      export enum AppCtlHeapSz {
        RANGE_1_64000 = 'range(1, 64000)',
      }
      /** Configures the archive retry delay time. */
      export enum Archretrydelay {
        RANGE_0_65535 = 'range(0, 65535)',
      }
      /** Configures the authentication cache duration. */
      export enum AuthnCacheDuration {
        RANGE_1_10000 = 'range(1,10000)',
      }
      /** Configures whether the database will automatically restart. */
      export enum Autorestart {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures whether auto collection of CG statistics is enabled. */
      export enum AutoCgStats {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures automatic maintenance for the database. */
      export enum AutoMaint {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures automatic reorganization for the database. */
      export enum AutoReorg {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures the auto refresh or revalidation method. */
      export enum AutoReval {
        IMMEDIATE = 'IMMEDIATE',
        DISABLED = 'DISABLED',
        DEFERRED = 'DEFERRED',
        DEFERRED_FORCE = 'DEFERRED_FORCE',
      }
      /** Configures automatic collection of run-time statistics. */
      export enum AutoRunstats {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures whether auto-sampling is enabled. */
      export enum AutoSampling {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures automatic collection of statistics on views. */
      export enum AutoStatsViews {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures automatic collection of statement-level statistics. */
      export enum AutoStmtStats {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures automatic table maintenance. */
      export enum AutoTblMaint {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures the change pages threshold percentage. */
      export enum ChngpgsThresh {
        RANGE_5_99 = 'range(5,99)',
      }
      /** Configures the commit behavior. */
      export enum CurCommit {
        ON = 'ON',
        AVAILABLE = 'AVAILABLE',
        DISABLED = 'DISABLED',
      }
      /** Configures the database memory management. */
      export enum DatabaseMemory {
        AUTOMATIC = 'AUTOMATIC',
        COMPUTED = 'COMPUTED',
        RANGE_0_4294967295 = 'range(0, 4294967295)',
      }
      /** Configures the database heap size. */
      export enum Dbheap {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_32_2147483647 = 'range(32, 2147483647)',
      }
      /** Configures the memory threshold percentage for database. */
      export enum DbMemThresh {
        RANGE_0_100 = 'range(0, 100)',
      }
      /** Defines the default DDL compression behavior. */
      export enum DdlCompressionDef {
        YES = 'YES',
        NO = 'NO',
      }
      /** Defines the default constraint behavior in DDL. */
      export enum DdlConstraintDef {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures the decimal floating-point rounding method. */
      export enum DecfltRounding {
        ROUND_HALF_EVEN = 'ROUND_HALF_EVEN',
        ROUND_CEILING = 'ROUND_CEILING',
        ROUND_FLOOR = 'ROUND_FLOOR',
        ROUND_HALF_UP = 'ROUND_HALF_UP',
        ROUND_DOWN = 'ROUND_DOWN',
      }
      /** Configures the decimal-to-character conversion format. */
      export enum DecToCharFmt {
        NEW = 'NEW',
        V95 = 'V95',
      }
      /** Configures the default degree for parallelism. */
      export enum DftDegree {
        ANY = 'ANY',
        RANGE_1_32767 = 'range(1, 32767)',
      }
      /** Configures the default extent size for tables. */
      export enum DftExtentSz {
        RANGE_2_256 = 'range(2, 256)',
      }
      /** Configures the default load record session count. */
      export enum DftLoadrecSes {
        RANGE_1_30000 = 'range(1, 30000)',
      }
      /** Configures the default prefetch size for queries. */
      export enum DftPrefetchSz {
        RANGE_0_32767 = 'range(0, 32767)',
        AUTOMATIC = 'AUTOMATIC',
      }
      /** Configures the default query optimization level. */
      export enum DftQueryopt {
        RANGE_0_9 = 'range(0, 9)',
      }
      /** Configures whether DCC (database control center) is enabled for schemas. */
      export enum DftSchemasDcc {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures whether SQL math warnings are enabled. */
      export enum DftSqlmathwarn {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures the default table organization (ROW or COLUMN). */
      export enum DftTableOrg {
        COLUMN = 'COLUMN',
        ROW = 'ROW',
      }
      /** Configures the deadlock check time in milliseconds. */
      export enum Dlchktime {
        RANGE_1000_600000 = 'range(1000, 600000)',
      }
      /** Configures whether XML character support is enabled. */
      export enum EnableXmlchar {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures whether extended row size is enabled. */
      export enum ExtendedRowSz {
        ENABLE = 'ENABLE',
        DISABLE = 'DISABLE',
      }
      /** Configures the heap ratio for group heap memory. */
      export enum GroupheapRatio {
        RANGE_1_99 = 'range(1, 99)',
      }
      /** Configures the index recovery method. */
      export enum Indexrec {
        SYSTEM = 'SYSTEM',
        ACCESS = 'ACCESS',
        ACCESS_NO_REDO = 'ACCESS_NO_REDO',
        RESTART = 'RESTART',
        RESTART_NO_REDO = 'RESTART_NO_REDO',
      }
      /** Configures whether large aggregation is enabled. */
      export enum LargeAggregation {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures the lock list memory size. */
      export enum Locklist {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_4_134217728 = 'range(4, 134217728)',
      }
      /** Configures the lock timeout duration. */
      export enum Locktimeout {
        RANGE_0_32767 = 'range(0, 32767)',
      }
      /** Configures whether index builds are logged. */
      export enum Logindexbuild {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures whether application information is logged. */
      export enum LogApplInfo {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures whether DDL statements are logged. */
      export enum LogDdlStmts {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures the disk capacity log setting. */
      export enum LogDiskCap {
        RANGE_1_2147483647 = 'range(1, 2147483647)',
      }
      /** Configures the maximum number of applications. */
      export enum Maxappls {
        RANGE_1_60000 = 'range(1, 60000)',
      }
      /** Configures the maximum number of file operations. */
      export enum Maxfilop {
        RANGE_64_61440 = 'range(64, 61440)',
      }
      /** Configures the maximum number of locks. */
      export enum Maxlocks {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_1_100 = 'range(1, 100)',
      }
      /** Configures whether decimal division by 3 should be handled. */
      export enum MinDecDiv3 {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures the level of activity metrics to be monitored. */
      export enum MonActMetrics {
        NONE = 'NONE',
        BASE = 'BASE',
        EXTENDED = 'EXTENDED',
      }
      /** Configures deadlock monitoring settings. */
      export enum MonDeadlock {
        NONE = 'NONE',
        WITHOUT_HIST = 'WITHOUT_HIST',
        HISTORY = 'HISTORY',
        HIST_AND_VALUES = 'HIST_AND_VALUES',
      }
      /** Configures the lock message level for monitoring. */
      export enum MonLckMsgLvl {
        RANGE_0_3 = 'range(0, 3)',
      }
      /** Configures lock timeout monitoring settings. */
      export enum MonLocktimeout {
        NONE = 'NONE',
        WITHOUT_HIST = 'WITHOUT_HIST',
        HISTORY = 'HISTORY',
        HIST_AND_VALUES = 'HIST_AND_VALUES',
      }
      /** Configures lock wait monitoring settings. */
      export enum MonLockwait {
        NONE = 'NONE',
        WITHOUT_HIST = 'WITHOUT_HIST',
        HISTORY = 'HISTORY',
        HIST_AND_VALUES = 'HIST_AND_VALUES',
      }
      /** Configures the lightweight threshold for monitoring. */
      export enum MonLwThresh {
        RANGE_1000_4294967295 = 'range(1000, 4294967295)',
      }
      /** Configures the object metrics level for monitoring. */
      export enum MonObjMetrics {
        NONE = 'NONE',
        BASE = 'BASE',
        EXTENDED = 'EXTENDED',
      }
      /** Configures the package list size for monitoring. */
      export enum MonPkglistSz {
        RANGE_0_1024 = 'range(0, 1024)',
      }
      /** Configures the request metrics level for monitoring. */
      export enum MonReqMetrics {
        NONE = 'NONE',
        BASE = 'BASE',
        EXTENDED = 'EXTENDED',
      }
      /** Configures the level of return data for monitoring. */
      export enum MonRtnData {
        NONE = 'NONE',
        BASE = 'BASE',
      }
      /** Configures whether stored procedure execution list is monitored. */
      export enum MonRtnExeclist {
        OFF = 'OFF',
        ON = 'ON',
      }
      /** Configures the level of unit of work (UOW) data for monitoring. */
      export enum MonUowData {
        NONE = 'NONE',
        BASE = 'BASE',
      }
      /** Configures whether UOW execution list is monitored. */
      export enum MonUowExeclist {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures whether UOW package list is monitored. */
      export enum MonUowPkglist {
        OFF = 'OFF',
        ON = 'ON',
      }
      /** Configures the mapping of NCHAR character types. */
      export enum NcharMapping {
        CHAR_CU32 = 'CHAR_CU32',
        GRAPHIC_CU32 = 'GRAPHIC_CU32',
        GRAPHIC_CU16 = 'GRAPHIC_CU16',
        NOT_APPLICABLE = 'NOT APPLICABLE',
      }
      /** Configures the number of frequent values for optimization. */
      export enum NumFreqvalues {
        RANGE_0_32767 = 'range(0, 32767)',
      }
      /** Configures the number of IO cleaners. */
      export enum NumIocleaners {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_0_255 = 'range(0, 255)',
      }
      /** Configures the number of IO servers. */
      export enum NumIoservers {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_1_255 = 'range(1, 255)',
      }
      /** Configures the number of log spans. */
      export enum NumLogSpan {
        RANGE_0_65535 = 'range(0, 65535)',
      }
      /** Configures the number of quantiles for optimizations. */
      export enum NumQuantiles {
        RANGE_0_32767 = 'range(0, 32767)',
      }
      /** Configures the direct workload optimization setting. */
      export enum OptDirectWrkld {
        ON = 'ON',
        OFF = 'OFF',
        YES = 'YES',
        NO = 'NO',
        AUTOMATIC = 'AUTOMATIC',
      }
      /** Configures the page age target for garbage collection. */
      export enum PageAgeTrgtGcr {
        RANGE_1_65535 = 'range(1, 65535)',
      }
      /** Configures the page age target for memory collection. */
      export enum PageAgeTrgtMcr {
        RANGE_1_65535 = 'range(1, 65535)',
      }
      /** Configures the package cache size. */
      export enum Pckcachesz {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_32_2147483646 = 'range(32, 2147483646)',
      }
      /** Configures the level of stack trace logging for stored procedures. */
      export enum PlStackTrace {
        NONE = 'NONE',
        ALL = 'ALL',
        UNHANDLED = 'UNHANDLED',
      }
      /** Configures whether self-tuning memory is enabled. */
      export enum SelfTuningMem {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures sequence detection for queries. */
      export enum Seqdetect {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures the shared heap threshold size. */
      export enum SheapthresShr {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_250_2147483647 = 'range(250, 2147483647)',
      }
      /** Configures the sort heap memory size. */
      export enum Sortheap {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_16_4294967295 = 'range(16, 4294967295)',
      }
      /** Configures the statistics heap size. */
      export enum StatHeapSz {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_1096_2147483647 = 'range(1096, 2147483647)',
      }
      /** Configures the statement heap size. */
      export enum Stmtheap {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_128_2147483647 = 'range(128, 2147483647)',
      }
      /** Configures the statement concurrency. */
      export enum StmtConc {
        OFF = 'OFF',
        LITERALS = 'LITERALS',
        COMMENTS = 'COMMENTS',
        COMM_LIT = 'COMM_LIT',
      }
      /** Configures the string unit settings. */
      export enum StringUnits {
        SYSTEM = 'SYSTEM',
        CODEUNITS32 = 'CODEUNITS32',
      }
      /** Configures whether system time period adjustments are enabled. */
      export enum SystimePeriodAdj {
        NO = 'NO',
        YES = 'YES',
      }
      /** Configures whether modifications to tracked objects are logged. */
      export enum Trackmod {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures the utility heap size. */
      export enum UtilHeapSz {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_16_2147483647 = 'range(16, 2147483647)',
      }
      /** Configures whether WLM (Workload Management) admission control is enabled. */
      export enum WlmAdmissionCtrl {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures the WLM agent load target. */
      export enum WlmAgentLoadTrgt {
        AUTOMATIC = 'AUTOMATIC',
        RANGE_1_65535 = 'range(1, 65535)',
      }
      /** Configures the CPU limit for WLM workloads. */
      export enum WlmCpuLimit {
        RANGE_0_100 = 'range(0, 100)',
      }
      /** Configures the CPU share count for WLM workloads. */
      export enum WlmCpuShares {
        RANGE_1_65535 = 'range(1, 65535)',
      }
      /** Configures the mode of CPU shares for WLM workloads. */
      export enum WlmCpuShareMode {
        HARD = 'HARD',
        SOFT = 'SOFT',
      }
    }
  }

  /**
   * Container for general database management settings.
   */
  export interface CreateCustomSettingsDbm {
    /** Configures the communication bandwidth for the database manager. */
    COMM_BANDWIDTH?: CreateCustomSettingsDbm.Constants.CommBandwidth | string;
    /** Configures the CPU speed for the database manager. */
    CPUSPEED?: CreateCustomSettingsDbm.Constants.Cpuspeed | string;
    /** Configures whether the buffer pool is monitored by default. */
    DFT_MON_BUFPOOL?: CreateCustomSettingsDbm.Constants.DftMonBufpool | string;
    /** Configures whether lock monitoring is enabled by default. */
    DFT_MON_LOCK?: CreateCustomSettingsDbm.Constants.DftMonLock | string;
    /** Configures whether sort operations are monitored by default. */
    DFT_MON_SORT?: CreateCustomSettingsDbm.Constants.DftMonSort | string;
    /** Configures whether statement execution is monitored by default. */
    DFT_MON_STMT?: CreateCustomSettingsDbm.Constants.DftMonStmt | string;
    /** Configures whether table operations are monitored by default. */
    DFT_MON_TABLE?: CreateCustomSettingsDbm.Constants.DftMonTable | string;
    /** Configures whether timestamp monitoring is enabled by default. */
    DFT_MON_TIMESTAMP?: CreateCustomSettingsDbm.Constants.DftMonTimestamp | string;
    /** Configures whether unit of work (UOW) monitoring is enabled by default. */
    DFT_MON_UOW?: CreateCustomSettingsDbm.Constants.DftMonUow | string;
    /** Configures the diagnostic level for the database manager. */
    DIAGLEVEL?: CreateCustomSettingsDbm.Constants.Diaglevel | string;
    /** Configures whether federated asynchronous mode is enabled. */
    FEDERATED_ASYNC?: CreateCustomSettingsDbm.Constants.FederatedAsync | string;
    /** Configures the type of indexing to be used in the database manager. */
    INDEXREC?: CreateCustomSettingsDbm.Constants.Indexrec | string;
    /** Configures the parallelism settings for intra-query parallelism. */
    INTRA_PARALLEL?: CreateCustomSettingsDbm.Constants.IntraParallel | string;
    /** Configures whether fenced routines are kept in memory. */
    KEEPFENCED?: CreateCustomSettingsDbm.Constants.Keepfenced | string;
    /** Configures the maximum number of connection retries. */
    MAX_CONNRETRIES?: CreateCustomSettingsDbm.Constants.MaxConnretries | string;
    /** Configures the maximum degree of parallelism for queries. */
    MAX_QUERYDEGREE?: CreateCustomSettingsDbm.Constants.MaxQuerydegree | string;
    /** Configures the size of the monitoring heap. */
    MON_HEAP_SZ?: CreateCustomSettingsDbm.Constants.MonHeapSz | string;
    /** Configures the size of multipart queries in MB. */
    MULTIPARTSIZEMB?: CreateCustomSettingsDbm.Constants.Multipartsizemb | string;
    /** Configures the level of notifications for the database manager. */
    NOTIFYLEVEL?: CreateCustomSettingsDbm.Constants.Notifylevel | string;
    /** Configures the number of initial agents in the database manager. */
    NUM_INITAGENTS?: CreateCustomSettingsDbm.Constants.NumInitagents | string;
    /** Configures the number of initial fenced routines. */
    NUM_INITFENCED?: CreateCustomSettingsDbm.Constants.NumInitfenced | string;
    /** Configures the number of pool agents. */
    NUM_POOLAGENTS?: CreateCustomSettingsDbm.Constants.NumPoolagents | string;
    /** Configures the interval between resync operations. */
    RESYNC_INTERVAL?: CreateCustomSettingsDbm.Constants.ResyncInterval | string;
    /** Configures the request/response I/O block size. */
    RQRIOBLK?: CreateCustomSettingsDbm.Constants.Rqrioblk | string;
    /** Configures the time in minutes for start/stop operations. */
    START_STOP_TIME?: CreateCustomSettingsDbm.Constants.StartStopTime | string;
    /** Configures the utility impact limit. */
    UTIL_IMPACT_LIM?: CreateCustomSettingsDbm.Constants.UtilImpactLim | string;
    /** Configures whether the WLM (Workload Management) dispatcher is enabled. */
    WLM_DISPATCHER?: CreateCustomSettingsDbm.Constants.WlmDispatcher | string;
    /** Configures the concurrency level for the WLM dispatcher. */
    WLM_DISP_CONCUR?: CreateCustomSettingsDbm.Constants.WlmDispConcur | string;
    /** Configures whether CPU shares are used for WLM dispatcher. */
    WLM_DISP_CPU_SHARES?: CreateCustomSettingsDbm.Constants.WlmDispCpuShares | string;
    /** Configures the minimum utility threshold for WLM dispatcher. */
    WLM_DISP_MIN_UTIL?: CreateCustomSettingsDbm.Constants.WlmDispMinUtil | string;
  }
  export namespace CreateCustomSettingsDbm {
    export namespace Constants {
      /** Configures the communication bandwidth for the database manager. */
      export enum CommBandwidth {
        RANGE_0_1_100000 = 'range(0.1, 100000)',
      }
      /** Configures the CPU speed for the database manager. */
      export enum Cpuspeed {
        RANGE_0_0000000001_1 = 'range(0.0000000001, 1)',
      }
      /** Configures whether the buffer pool is monitored by default. */
      export enum DftMonBufpool {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures whether lock monitoring is enabled by default. */
      export enum DftMonLock {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures whether sort operations are monitored by default. */
      export enum DftMonSort {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures whether statement execution is monitored by default. */
      export enum DftMonStmt {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures whether table operations are monitored by default. */
      export enum DftMonTable {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures whether timestamp monitoring is enabled by default. */
      export enum DftMonTimestamp {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures whether unit of work (UOW) monitoring is enabled by default. */
      export enum DftMonUow {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures the diagnostic level for the database manager. */
      export enum Diaglevel {
        RANGE_0_4 = 'range(0, 4)',
      }
      /** Configures whether federated asynchronous mode is enabled. */
      export enum FederatedAsync {
        RANGE_0_32767 = 'range(0, 32767)',
        ANY = 'ANY',
      }
      /** Configures the type of indexing to be used in the database manager. */
      export enum Indexrec {
        RESTART = 'RESTART',
        RESTART_NO_REDO = 'RESTART_NO_REDO',
        ACCESS = 'ACCESS',
        ACCESS_NO_REDO = 'ACCESS_NO_REDO',
      }
      /** Configures the parallelism settings for intra-query parallelism. */
      export enum IntraParallel {
        SYSTEM = 'SYSTEM',
        NO = 'NO',
        YES = 'YES',
      }
      /** Configures whether fenced routines are kept in memory. */
      export enum Keepfenced {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures the maximum number of connection retries. */
      export enum MaxConnretries {
        RANGE_0_100 = 'range(0, 100)',
      }
      /** Configures the maximum degree of parallelism for queries. */
      export enum MaxQuerydegree {
        RANGE_1_32767 = 'range(1, 32767)',
        ANY = 'ANY',
      }
      /** Configures the size of the monitoring heap. */
      export enum MonHeapSz {
        RANGE_0_2147483647 = 'range(0, 2147483647)',
        AUTOMATIC = 'AUTOMATIC',
      }
      /** Configures the size of multipart queries in MB. */
      export enum Multipartsizemb {
        RANGE_5_5120 = 'range(5, 5120)',
      }
      /** Configures the level of notifications for the database manager. */
      export enum Notifylevel {
        RANGE_0_4 = 'range(0, 4)',
      }
      /** Configures the number of initial agents in the database manager. */
      export enum NumInitagents {
        RANGE_0_64000 = 'range(0, 64000)',
      }
      /** Configures the number of initial fenced routines. */
      export enum NumInitfenced {
        RANGE_0_64000 = 'range(0, 64000)',
      }
      /** Configures the number of pool agents. */
      export enum NumPoolagents {
        RANGE_0_64000 = 'range(0, 64000)',
      }
      /** Configures the interval between resync operations. */
      export enum ResyncInterval {
        RANGE_1_60000 = 'range(1, 60000)',
      }
      /** Configures the request/response I/O block size. */
      export enum Rqrioblk {
        RANGE_4096_65535 = 'range(4096, 65535)',
      }
      /** Configures the time in minutes for start/stop operations. */
      export enum StartStopTime {
        RANGE_1_1440 = 'range(1, 1440)',
      }
      /** Configures the utility impact limit. */
      export enum UtilImpactLim {
        RANGE_1_100 = 'range(1, 100)',
      }
      /** Configures whether the WLM (Workload Management) dispatcher is enabled. */
      export enum WlmDispatcher {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures the concurrency level for the WLM dispatcher. */
      export enum WlmDispConcur {
        RANGE_1_32767 = 'range(1, 32767)',
        COMPUTED = 'COMPUTED',
      }
      /** Configures whether CPU shares are used for WLM dispatcher. */
      export enum WlmDispCpuShares {
        NO = 'NO',
        YES = 'YES',
      }
      /** Configures the minimum utility threshold for WLM dispatcher. */
      export enum WlmDispMinUtil {
        RANGE_0_100 = 'range(0, 100)',
      }
    }
  }

  /**
   * registry for db2 related configuration settings/configurations.
   */
  export interface CreateCustomSettingsRegistry {
    /** Configures the bidi (bidirectional) support for DB2. */
    DB2BIDI?: CreateCustomSettingsRegistry.Constants.DB2Bidi | string;
    /** Configures the DB2 component options (not specified in values). */
    DB2COMPOPT?: string;
    /** Configures the DB2 lock timeout behavior. */
    DB2LOCK_TO_RB?: CreateCustomSettingsRegistry.Constants.DB2LockToRb | string;
    /** Configures whether DB2's self-tuning memory manager (STMM) is enabled. */
    DB2STMM?: CreateCustomSettingsRegistry.Constants.DB2Stmm | string;
    /** Configures the alternate authorization behavior for DB2. */
    DB2_ALTERNATE_AUTHZ_BEHAVIOUR?: CreateCustomSettingsRegistry.Constants.DB2AlternateAuthzBehaviour | string;
    /** Configures how DB2 handles anti-joins. */
    DB2_ANTIJOIN?: CreateCustomSettingsRegistry.Constants.DB2Antijoin | string;
    /** Configures whether DB2 asynchronous table scanning (ATS) is enabled. */
    DB2_ATS_ENABLE?: CreateCustomSettingsRegistry.Constants.DB2AtsEnable | string;
    /** Configures whether deferred prepare semantics are enabled in DB2. */
    DB2_DEFERRED_PREPARE_SEMANTICS?: CreateCustomSettingsRegistry.Constants.DB2DeferredPrepareSemantics | string;
    /** Configures whether uncommitted data is evaluated by DB2. */
    DB2_EVALUNCOMMITTED?: CreateCustomSettingsRegistry.Constants.DB2Evaluncommitted | string;
    /** Configures extended optimization in DB2 (not specified in values). */
    DB2_EXTENDED_OPTIMIZATION?: string;
    /** Configures the default percentage of free space for DB2 indexes. */
    DB2_INDEX_PCTFREE_DEFAULT?: CreateCustomSettingsRegistry.Constants.DB2IndexPctfreeDefault | string;
    /** Configures whether in-list queries are converted to nested loop joins. */
    DB2_INLIST_TO_NLJN?: CreateCustomSettingsRegistry.Constants.DB2InlistToNljn | string;
    /** Configures whether DB2 minimizes list prefetching for queries. */
    DB2_MINIMIZE_LISTPREFETCH?: CreateCustomSettingsRegistry.Constants.DB2MinimizeListprefetch | string;
    /** Configures the number of entries for DB2 object tables. */
    DB2_OBJECT_TABLE_ENTRIES?: CreateCustomSettingsRegistry.Constants.DB2ObjectTableEntries | string;
    /** Configures whether DB2's optimizer profile is enabled. */
    DB2_OPTPROFILE?: CreateCustomSettingsRegistry.Constants.DB2Optprofile | string;
    /** Configures the logging of optimizer statistics (not specified in values). */
    DB2_OPTSTATS_LOG?: string;
    /** Configures the maximum temporary space size for DB2 optimizer. */
    DB2_OPT_MAX_TEMP_SIZE?: string;
    /** Configures parallel I/O behavior in DB2 (not specified in values). */
    DB2_PARALLEL_IO?: string;
    /** Configures whether reduced optimization is applied in DB2 (not specified in values). */
    DB2_REDUCED_OPTIMIZATION?: string;
    /** Configures the selectivity behavior for DB2 queries. */
    DB2_SELECTIVITY?: CreateCustomSettingsRegistry.Constants.DB2Selectivity | string;
    /** Configures whether DB2 skips deleted rows during query processing. */
    DB2_SKIPDELETED?: CreateCustomSettingsRegistry.Constants.DB2Skipdeleted | string;
    /** Configures whether DB2 skips inserted rows during query processing. */
    DB2_SKIPINSERTED?: CreateCustomSettingsRegistry.Constants.DB2Skipinserted | string;
    /** Configures whether DB2 synchronizes lock release attributes. */
    DB2_SYNC_RELEASE_LOCK_ATTRIBUTES?: CreateCustomSettingsRegistry.Constants.DB2SyncReleaseLockAttributes | string;
    /** Configures the types of operations that reuse storage after truncation. */
    DB2_TRUNCATE_REUSESTORAGE?: CreateCustomSettingsRegistry.Constants.DB2TruncateReusestorage | string;
    /** Configures whether DB2 uses alternate page cleaning methods. */
    DB2_USE_ALTERNATE_PAGE_CLEANING?: CreateCustomSettingsRegistry.Constants.DB2UseAlternatePageCleaning | string;
    /** Configures whether DB2 view reoptimization values are used. */
    DB2_VIEW_REOPT_VALUES?: CreateCustomSettingsRegistry.Constants.DB2ViewReoptValues | string;
    /** Configures the WLM (Workload Management) settings for DB2 (not specified in values). */
    DB2_WLM_SETTINGS?: string;
    /** Configures the DB2 workload type. */
    DB2_WORKLOAD?: CreateCustomSettingsRegistry.Constants.DB2Workload | string;
  }
  export namespace CreateCustomSettingsRegistry {
    export namespace Constants {
      /** Configures the bidi (bidirectional) support for DB2. */
      export enum DB2Bidi {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures the DB2 lock timeout behavior. */
      export enum DB2LockToRb {
        STATEMENT = 'STATEMENT',
      }
      /** Configures whether DB2's self-tuning memory manager (STMM) is enabled. */
      export enum DB2Stmm {
        NO = 'NO',
        YES = 'YES',
      }
      /** Configures the alternate authorization behavior for DB2. */
      export enum DB2AlternateAuthzBehaviour {
        EXTERNAL_ROUTINE_DBADM = 'EXTERNAL_ROUTINE_DBADM',
        EXTERNAL_ROUTINE_DBAUTH = 'EXTERNAL_ROUTINE_DBAUTH',
      }
      /** Configures how DB2 handles anti-joins. */
      export enum DB2Antijoin {
        YES = 'YES',
        NO = 'NO',
        EXTEND = 'EXTEND',
      }
      /** Configures whether DB2 asynchronous table scanning (ATS) is enabled. */
      export enum DB2AtsEnable {
        YES = 'YES',
        NO = 'NO',
      }
      /** Configures whether deferred prepare semantics are enabled in DB2. */
      export enum DB2DeferredPrepareSemantics {
        NO = 'NO',
        YES = 'YES',
      }
      /** Configures whether uncommitted data is evaluated by DB2. */
      export enum DB2Evaluncommitted {
        NO = 'NO',
        YES = 'YES',
      }
      /** Configures the default percentage of free space for DB2 indexes. */
      export enum DB2IndexPctfreeDefault {
        RANGE_0_99 = 'range(0, 99)',
      }
      /** Configures whether in-list queries are converted to nested loop joins. */
      export enum DB2InlistToNljn {
        NO = 'NO',
        YES = 'YES',
      }
      /** Configures whether DB2 minimizes list prefetching for queries. */
      export enum DB2MinimizeListprefetch {
        NO = 'NO',
        YES = 'YES',
      }
      /** Configures the number of entries for DB2 object tables. */
      export enum DB2ObjectTableEntries {
        RANGE_0_65532 = 'range(0, 65532)',
      }
      /** Configures whether DB2's optimizer profile is enabled. */
      export enum DB2Optprofile {
        NO = 'NO',
        YES = 'YES',
      }
      /** Configures the selectivity behavior for DB2 queries. */
      export enum DB2Selectivity {
        YES = 'YES',
        NO = 'NO',
        ALL = 'ALL',
      }
      /** Configures whether DB2 skips deleted rows during query processing. */
      export enum DB2Skipdeleted {
        NO = 'NO',
        YES = 'YES',
      }
      /** Configures whether DB2 skips inserted rows during query processing. */
      export enum DB2Skipinserted {
        NO = 'NO',
        YES = 'YES',
      }
      /** Configures whether DB2 synchronizes lock release attributes. */
      export enum DB2SyncReleaseLockAttributes {
        NO = 'NO',
        YES = 'YES',
      }
      /** Configures the types of operations that reuse storage after truncation. */
      export enum DB2TruncateReusestorage {
        IMPORT = 'IMPORT',
        LOAD = 'LOAD',
        TRUNCATE = 'TRUNCATE',
      }
      /** Configures whether DB2 uses alternate page cleaning methods. */
      export enum DB2UseAlternatePageCleaning {
        ON = 'ON',
        OFF = 'OFF',
      }
      /** Configures whether DB2 view reoptimization values are used. */
      export enum DB2ViewReoptValues {
        NO = 'NO',
        YES = 'YES',
      }
      /** Configures the DB2 workload type. */
      export enum DB2Workload {
        ANALYTICS = 'ANALYTICS',
        CM = 'CM',
        COGNOS_CS = 'COGNOS_CS',
        FILENET_CM = 'FILENET_CM',
        INFOR_ERP_LN = 'INFOR_ERP_LN',
        MAXIMO = 'MAXIMO',
        MDM = 'MDM',
        SAP = 'SAP',
        TPM = 'TPM',
        WAS = 'WAS',
        WC = 'WC',
        WP = 'WP',
      }
    }
  }

  /**
   * CreateUserAuthentication.
   */
  export interface CreateUserAuthentication {
    /** Authentication method. */
    method: string;
    /** Authentication policy ID. */
    policy_id: string;
  }

  /**
   * Details of an IP address.
   */
  export interface IpAddress {
    /** The IP address, in IPv4/ipv6 format. */
    address: string;
    /** Description of the IP address. */
    description: string;
  }

  /**
   * The details of the autoscale.
   */
  export interface SuccessAutoScaling {
    /** Indicates the maximum number of scaling actions that are allowed within a specified time period. */
    auto_scaling_allow_plan_limit: boolean;
    /** Indicates if automatic scaling is enabled or not. */
    auto_scaling_enabled: boolean;
    /** The maximum limit for automatically increasing storage capacity to handle growing data needs. */
    auto_scaling_max_storage: number;
    /** Defines the time period over which auto-scaling adjustments are monitored and applied. */
    auto_scaling_over_time_period: number;
    /** Specifies the duration to pause auto-scaling actions after a scaling event has occurred. */
    auto_scaling_pause_limit: number;
    /** Specifies the resource utilization level that triggers an auto-scaling. */
    auto_scaling_threshold: number;
    /** Specifies the unit of measurement for storage capacity. */
    storage_unit: string;
    /** Represents the percentage of total storage capacity currently in use. */
    storage_utilization_percentage: number;
    /** Indicates whether a system or service can automatically adjust resources based on demand. */
    support_auto_scaling: boolean;
  }

  /**
   * Responds with JSON of the connection information for the Db2 SaaS Instance.
   */
  export interface SuccessConnectionInfo {
    public?: SuccessConnectionInfoPublic;
    private?: SuccessConnectionInfoPrivate;
  }

  /**
   * SuccessConnectionInfoPrivate.
   */
  export interface SuccessConnectionInfoPrivate {
    hostname?: string;
    databaseName?: string;
    sslPort?: string;
    ssl?: boolean;
    databaseVersion?: string;
    private_serviceName?: string;
    cloud_service_offering?: string;
    vpe_service_crn?: string;
    db_vpc_endpoint_service?: string;
  }

  /**
   * SuccessConnectionInfoPublic.
   */
  export interface SuccessConnectionInfoPublic {
    hostname?: string;
    databaseName?: string;
    sslPort?: string;
    ssl?: boolean;
    databaseVersion?: string;
  }

  /**
   * Success response of post backup.
   */
  export interface SuccessCreateBackup {
    task: SuccessCreateBackupTask;
  }

  /**
   * SuccessCreateBackupTask.
   */
  export interface SuccessCreateBackupTask {
    /** CRN of the instance. */
    id?: string;
  }

  /**
   * Success response of get allowlist IPs.
   */
  export interface SuccessGetAllowlistIPs {
    /** List of IP addresses. */
    ip_addresses: IpAddress[];
  }

  /**
   * The details of the backups.
   */
  export interface SuccessGetBackups {
    backups: Backup[];
  }

  /**
   * The details of the users.
   */
  export interface SuccessGetUserByID {
    /** User's DV role. */
    dvRole: string;
    /** Metadata associated with the user. */
    metadata: JsonObject;
    /** Formatted IBM ID. */
    formatedIbmid: string;
    /** Role assigned to the user. */
    role: SuccessGetUserByID.Constants.Role | string;
    /** IAM ID for the user. */
    iamid: string;
    /** List of allowed actions of the user. */
    permittedActions: string[];
    /** Indicates if the user account has no issues. */
    allClean: boolean;
    /** User's password. */
    password: string;
    /** Indicates if IAM is enabled or not. */
    iam: boolean;
    /** The display name of the user. */
    name: string;
    /** IBM ID of the user. */
    ibmid: string;
    /** Unique identifier for the user. */
    id: string;
    /** Account lock status for the user. */
    locked: SuccessGetUserByID.Constants.Locked | string;
    /** Initial error message. */
    initErrorMsg: string;
    /** Email address of the user. */
    email: string;
    /** Authentication details for the user. */
    authentication: SuccessGetUserByIDAuthentication;
  }
  export namespace SuccessGetUserByID {
    export namespace Constants {
      /** Role assigned to the user. */
      export enum Role {
        BLUADMIN = 'bluadmin',
        BLUUSER = 'bluuser',
      }
      /** Account lock status for the user. */
      export enum Locked {
        YES = 'yes',
        NO = 'no',
      }
    }
  }

  /**
   * Authentication details for the user.
   */
  export interface SuccessGetUserByIDAuthentication {
    /** Authentication method. */
    method: string;
    /** Policy ID of authentication. */
    policy_id: string;
  }

  /**
   * Success response of get user.
   */
  export interface SuccessGetUserInfo {
    /** The total number of resources. */
    count: number;
    /** A list of user resource. */
    resources: SuccessGetUserInfoResourcesItem[];
  }

  /**
   * SuccessGetUserInfoResourcesItem.
   */
  export interface SuccessGetUserInfoResourcesItem {
    /** User's DV role. */
    dvRole?: string;
    /** Metadata associated with the user. */
    metadata?: JsonObject;
    /** Formatted IBM ID. */
    formatedIbmid?: string;
    /** Role assigned to the user. */
    role?: SuccessGetUserInfoResourcesItem.Constants.Role | string;
    /** IAM ID for the user. */
    iamid?: string;
    /** List of allowed actions of the user. */
    permittedActions?: string[];
    /** Indicates if the user account has no issues. */
    allClean?: boolean;
    /** User's password. */
    password?: string;
    /** Indicates if IAM is enabled or not. */
    iam?: boolean;
    /** The display name of the user. */
    name?: string;
    /** IBM ID of the user. */
    ibmid?: string;
    /** Unique identifier for the user. */
    id?: string;
    /** Account lock status for the user. */
    locked?: SuccessGetUserInfoResourcesItem.Constants.Locked | string;
    /** Initial error message. */
    initErrorMsg?: string;
    /** Email address of the user. */
    email?: string;
    /** Authentication details for the user. */
    authentication?: SuccessGetUserInfoResourcesItemAuthentication;
  }
  export namespace SuccessGetUserInfoResourcesItem {
    export namespace Constants {
      /** Role assigned to the user. */
      export enum Role {
        BLUADMIN = 'bluadmin',
        BLUUSER = 'bluuser',
      }
      /** Account lock status for the user. */
      export enum Locked {
        YES = 'yes',
        NO = 'no',
      }
    }
  }

  /**
   * Authentication details for the user.
   */
  export interface SuccessGetUserInfoResourcesItemAuthentication {
    /** Authentication method. */
    method: string;
    /** Policy ID of authentication. */
    policy_id: string;
  }

  /**
   * Success response of post allowlist IPs.
   */
  export interface SuccessPostAllowedlistIPs {
    /** status of the post allowlist IPs request. */
    status: string;
  }

  /**
   * The details of created custom settings of db2.
   */
  export interface SuccessPostCustomSettings {
    /** Describes the operation done. */
    description: string;
    /** CRN of the db2 instance. */
    id: string;
    /** Defines the status of the instance. */
    status: string;
  }

  /**
   * Response of tuneable params of the Db2 instance.
   */
  export interface SuccessTuneableParams {
    tuneable_param?: SuccessTuneableParamsTuneableParam;
  }

  /**
   * SuccessTuneableParamsTuneableParam.
   */
  export interface SuccessTuneableParamsTuneableParam {
    /** Tunable parameters related to the Db2 database instance. */
    db?: SuccessTuneableParamsTuneableParamDb;
    /** Tunable parameters related to the Db2 instance manager (dbm). */
    dbm?: SuccessTuneableParamsTuneableParamDbm;
    /** Tunable parameters related to the Db2 registry. */
    registry?: SuccessTuneableParamsTuneableParamRegistry;
  }

  /**
   * Tunable parameters related to the Db2 database instance.
   */
  export interface SuccessTuneableParamsTuneableParamDb {
    ACT_SORTMEM_LIMIT?: string;
    ALT_COLLATE?: string;
    APPGROUP_MEM_SZ?: string;
    APPLHEAPSZ?: string;
    APPL_MEMORY?: string;
    APP_CTL_HEAP_SZ?: string;
    ARCHRETRYDELAY?: string;
    AUTHN_CACHE_DURATION?: string;
    AUTORESTART?: string;
    AUTO_CG_STATS?: string;
    AUTO_MAINT?: string;
    AUTO_REORG?: string;
    AUTO_REVAL?: string;
    AUTO_RUNSTATS?: string;
    AUTO_SAMPLING?: string;
    AUTO_STATS_VIEWS?: string;
    AUTO_STMT_STATS?: string;
    AUTO_TBL_MAINT?: string;
    AVG_APPLS?: string;
    CATALOGCACHE_SZ?: string;
    CHNGPGS_THRESH?: string;
    CUR_COMMIT?: string;
    DATABASE_MEMORY?: string;
    DBHEAP?: string;
    DB_COLLNAME?: string;
    DB_MEM_THRESH?: string;
    DDL_COMPRESSION_DEF?: string;
    DDL_CONSTRAINT_DEF?: string;
    DECFLT_ROUNDING?: string;
    DEC_ARITHMETIC?: string;
    DEC_TO_CHAR_FMT?: string;
    DFT_DEGREE?: string;
    DFT_EXTENT_SZ?: string;
    DFT_LOADREC_SES?: string;
    DFT_MTTB_TYPES?: string;
    DFT_PREFETCH_SZ?: string;
    DFT_QUERYOPT?: string;
    DFT_REFRESH_AGE?: string;
    DFT_SCHEMAS_DCC?: string;
    DFT_SQLMATHWARN?: string;
    DFT_TABLE_ORG?: string;
    DLCHKTIME?: string;
    ENABLE_XMLCHAR?: string;
    EXTENDED_ROW_SZ?: string;
    GROUPHEAP_RATIO?: string;
    INDEXREC?: string;
    LARGE_AGGREGATION?: string;
    LOCKLIST?: string;
    LOCKTIMEOUT?: string;
    LOGINDEXBUILD?: string;
    LOG_APPL_INFO?: string;
    LOG_DDL_STMTS?: string;
    LOG_DISK_CAP?: string;
    MAXAPPLS?: string;
    MAXFILOP?: string;
    MAXLOCKS?: string;
    MIN_DEC_DIV_3?: string;
    MON_ACT_METRICS?: string;
    MON_DEADLOCK?: string;
    MON_LCK_MSG_LVL?: string;
    MON_LOCKTIMEOUT?: string;
    MON_LOCKWAIT?: string;
    MON_LW_THRESH?: string;
    MON_OBJ_METRICS?: string;
    MON_PKGLIST_SZ?: string;
    MON_REQ_METRICS?: string;
    MON_RTN_DATA?: string;
    MON_RTN_EXECLIST?: string;
    MON_UOW_DATA?: string;
    MON_UOW_EXECLIST?: string;
    MON_UOW_PKGLIST?: string;
    NCHAR_MAPPING?: string;
    NUM_FREQVALUES?: string;
    NUM_IOCLEANERS?: string;
    NUM_IOSERVERS?: string;
    NUM_LOG_SPAN?: string;
    NUM_QUANTILES?: string;
    OPT_BUFFPAGE?: string;
    OPT_DIRECT_WRKLD?: string;
    OPT_LOCKLIST?: string;
    OPT_MAXLOCKS?: string;
    OPT_SORTHEAP?: string;
    PAGE_AGE_TRGT_GCR?: string;
    PAGE_AGE_TRGT_MCR?: string;
    PCKCACHESZ?: string;
    PL_STACK_TRACE?: string;
    SELF_TUNING_MEM?: string;
    SEQDETECT?: string;
    SHEAPTHRES_SHR?: string;
    SOFTMAX?: string;
    SORTHEAP?: string;
    SQL_CCFLAGS?: string;
    STAT_HEAP_SZ?: string;
    STMTHEAP?: string;
    STMT_CONC?: string;
    STRING_UNITS?: string;
    SYSTIME_PERIOD_ADJ?: string;
    TRACKMOD?: string;
    UTIL_HEAP_SZ?: string;
    WLM_ADMISSION_CTRL?: string;
    WLM_AGENT_LOAD_TRGT?: string;
    WLM_CPU_LIMIT?: string;
    WLM_CPU_SHARES?: string;
    WLM_CPU_SHARE_MODE?: string;
  }

  /**
   * Tunable parameters related to the Db2 instance manager (dbm).
   */
  export interface SuccessTuneableParamsTuneableParamDbm {
    COMM_BANDWIDTH?: string;
    CPUSPEED?: string;
    DFT_MON_BUFPOOL?: string;
    DFT_MON_LOCK?: string;
    DFT_MON_SORT?: string;
    DFT_MON_STMT?: string;
    DFT_MON_TABLE?: string;
    DFT_MON_TIMESTAMP?: string;
    DFT_MON_UOW?: string;
    DIAGLEVEL?: string;
    FEDERATED_ASYNC?: string;
    INDEXREC?: string;
    INTRA_PARALLEL?: string;
    KEEPFENCED?: string;
    MAX_CONNRETRIES?: string;
    MAX_QUERYDEGREE?: string;
    MON_HEAP_SZ?: string;
    MULTIPARTSIZEMB?: string;
    NOTIFYLEVEL?: string;
    NUM_INITAGENTS?: string;
    NUM_INITFENCED?: string;
    NUM_POOLAGENTS?: string;
    RESYNC_INTERVAL?: string;
    RQRIOBLK?: string;
    START_STOP_TIME?: string;
    UTIL_IMPACT_LIM?: string;
    WLM_DISPATCHER?: string;
    WLM_DISP_CONCUR?: string;
    WLM_DISP_CPU_SHARES?: string;
    WLM_DISP_MIN_UTIL?: string;
  }

  /**
   * Tunable parameters related to the Db2 registry.
   */
  export interface SuccessTuneableParamsTuneableParamRegistry {
    DB2BIDI?: string;
    DB2COMPOPT?: string;
    DB2LOCK_TO_RB?: string;
    DB2STMM?: string;
    DB2_ALTERNATE_AUTHZ_BEHAVIOUR?: string;
    DB2_ANTIJOIN?: string;
    DB2_ATS_ENABLE?: string;
    DB2_DEFERRED_PREPARE_SEMANTICS?: string;
    DB2_EVALUNCOMMITTED?: string;
    DB2_EXTENDED_OPTIMIZATION?: string;
    DB2_INDEX_PCTFREE_DEFAULT?: string;
    DB2_INLIST_TO_NLJN?: string;
    DB2_MINIMIZE_LISTPREFETCH?: string;
    DB2_OBJECT_TABLE_ENTRIES?: string;
    DB2_OPTPROFILE?: string;
    DB2_OPTSTATS_LOG?: string;
    DB2_OPT_MAX_TEMP_SIZE?: string;
    DB2_PARALLEL_IO?: string;
    DB2_REDUCED_OPTIMIZATION?: string;
    DB2_SELECTIVITY?: string;
    DB2_SKIPDELETED?: string;
    DB2_SKIPINSERTED?: string;
    DB2_SYNC_RELEASE_LOCK_ATTRIBUTES?: string;
    DB2_TRUNCATE_REUSESTORAGE?: string;
    DB2_USE_ALTERNATE_PAGE_CLEANING?: string;
    DB2_VIEW_REOPT_VALUES?: string;
    DB2_WLM_SETTINGS?: string;
    DB2_WORKLOAD?: string;
  }

  /**
   * Response of successful updation of scaling configurations.
   */
  export interface SuccessUpdateAutoScale {
    /** Indicates the message of the updation. */
    message: string;
  }

  /**
   * The details of the users.
   */
  export interface SuccessUserResponse {
    /** User's DV role. */
    dvRole: string;
    /** Metadata associated with the user. */
    metadata: JsonObject;
    /** Formatted IBM ID. */
    formatedIbmid: string;
    /** Role assigned to the user. */
    role: SuccessUserResponse.Constants.Role | string;
    /** IAM ID for the user. */
    iamid: string;
    /** List of allowed actions of the user. */
    permittedActions: string[];
    /** Indicates if the user account has no issues. */
    allClean: boolean;
    /** User's password. */
    password: string;
    /** Indicates if IAM is enabled or not. */
    iam: boolean;
    /** The display name of the user. */
    name: string;
    /** IBM ID of the user. */
    ibmid: string;
    /** Unique identifier for the user. */
    id: string;
    /** Account lock status for the user. */
    locked: SuccessUserResponse.Constants.Locked | string;
    /** Initial error message. */
    initErrorMsg: string;
    /** Email address of the user. */
    email: string;
    /** Authentication details for the user. */
    authentication: SuccessUserResponseAuthentication;
  }
  export namespace SuccessUserResponse {
    export namespace Constants {
      /** Role assigned to the user. */
      export enum Role {
        BLUADMIN = 'bluadmin',
        BLUUSER = 'bluuser',
      }
      /** Account lock status for the user. */
      export enum Locked {
        YES = 'yes',
        NO = 'no',
      }
    }
  }

  /**
   * Authentication details for the user.
   */
  export interface SuccessUserResponseAuthentication {
    /** Authentication method. */
    method: string;
    /** Policy ID of authentication. */
    policy_id: string;
  }
}

export = Db2saasV1;
