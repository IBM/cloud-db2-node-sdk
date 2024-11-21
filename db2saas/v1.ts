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
   * whitelist
   ************************/

  /**
   * Whitelisting of new IPs.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDeploymentId - CRN deployment id.
   * @param {IpAddress[]} params.ipAddresses - List of IP addresses.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessPostWhitelistIPs>>}
   */
  public postDb2SaasWhitelist(
    params: Db2saasV1.PostDb2SaasWhitelistParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessPostWhitelistIPs>> {
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

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'postDb2SaasWhitelist');

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
   * Get whitelisted IPs.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDeploymentId - CRN deployment id.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessGetWhitelistIPs>>}
   */
  public getDb2SaasWhitelist(
    params: Db2saasV1.GetDb2SaasWhitelistParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessGetWhitelistIPs>> {
    const _params = { ...params };
    const _requiredParams = ['xDeploymentId'];
    const _validParams = ['xDeploymentId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'getDb2SaasWhitelist');

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
   * Update the details of existing user.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.xDeploymentId - CRN deployment id.
   * @param {string} params.id - id of the user.
   * @param {string} params.newId - The unique identifier of the User.
   * @param {string} params.newName - The name of the User.
   * @param {string} params.newOldPassword - Current password of the User.
   * @param {string} params.newNewPassword - New password for the User.
   * @param {string} params.newRole - Role of the User.
   * @param {string} params.newEmail - Email of the User.
   * @param {string} params.newLocked - Indicates if the account is locked.
   * @param {UpdateUserAuthentication} params.newAuthentication -
   * @param {string} [params.newIbmid] - IBM ID of the User.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessUserResponse>>}
   */
  public putDb2SaasUser(
    params: Db2saasV1.PutDb2SaasUserParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessUserResponse>> {
    const _params = { ...params };
    const _requiredParams = ['xDeploymentId', 'id', 'newId', 'newName', 'newOldPassword', 'newNewPassword', 'newRole', 'newEmail', 'newLocked', 'newAuthentication'];
    const _validParams = ['xDeploymentId', 'id', 'newId', 'newName', 'newOldPassword', 'newNewPassword', 'newRole', 'newEmail', 'newLocked', 'newAuthentication', 'newIbmid', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'id': _params.newId,
      'name': _params.newName,
      'old_password': _params.newOldPassword,
      'new_password': _params.newNewPassword,
      'role': _params.newRole,
      'email': _params.newEmail,
      'locked': _params.newLocked,
      'authentication': _params.newAuthentication,
      'ibmid': _params.newIbmid,
    };

    const path = {
      'id': _params.id,
    };

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'putDb2SaasUser');

    const parameters = {
      options: {
        url: '/users/{id}',
        method: 'PUT',
        body,
        path,
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
   * @param {string} params.xDeploymentId - CRN deployment id.
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
    const _requiredParams = ['xDeploymentId'];
    const _validParams = ['xDeploymentId', 'autoScalingEnabled', 'autoScalingThreshold', 'autoScalingOverTimePeriod', 'autoScalingPauseLimit', 'autoScalingAllowPlanLimit', 'headers'];
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
            'x-deployment-id': _params.xDeploymentId,
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
   * @param {string} params.xDeploymentId - CRN deployment id.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<Db2saasV1.Response<Db2saasV1.SuccessAutoScaling>>}
   */
  public getDb2SaasAutoscale(
    params: Db2saasV1.GetDb2SaasAutoscaleParams
  ): Promise<Db2saasV1.Response<Db2saasV1.SuccessAutoScaling>> {
    const _params = { ...params };
    const _requiredParams = ['xDeploymentId'];
    const _validParams = ['xDeploymentId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(Db2saasV1.DEFAULT_SERVICE_NAME, 'v1', 'getDb2SaasAutoscale');

    const parameters = {
      options: {
        url: '/scaling/auto',
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

  /** Parameters for the `postDb2SaasWhitelist` operation. */
  export interface PostDb2SaasWhitelistParams {
    /** CRN deployment id. */
    xDeploymentId: string;
    /** List of IP addresses. */
    ipAddresses: IpAddress[];
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDb2SaasWhitelist` operation. */
  export interface GetDb2SaasWhitelistParams {
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

  /** Parameters for the `putDb2SaasUser` operation. */
  export interface PutDb2SaasUserParams {
    /** CRN deployment id. */
    xDeploymentId: string;
    /** id of the user. */
    id: string;
    /** The unique identifier of the User. */
    newId: string;
    /** The name of the User. */
    newName: string;
    /** Current password of the User. */
    newOldPassword: string;
    /** New password for the User. */
    newNewPassword: string;
    /** Role of the User. */
    newRole: PutDb2SaasUserConstants.Role | string;
    /** Email of the User. */
    newEmail: string;
    /** Indicates if the account is locked. */
    newLocked: PutDb2SaasUserConstants.Locked | string;
    newAuthentication: UpdateUserAuthentication;
    /** IBM ID of the User. */
    newIbmid?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `putDb2SaasUser` operation. */
  export namespace PutDb2SaasUserConstants {
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
    /** CRN deployment id. */
    xDeploymentId: string;
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
    /** CRN deployment id. */
    xDeploymentId: string;
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

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
    host_ros?: string;
    certificateBase64?: string;
    sslPort?: string;
    ssl?: boolean;
    databaseVersion?: string;
  }

  /**
   * SuccessConnectionInfoPublic.
   */
  export interface SuccessConnectionInfoPublic {
    hostname?: string;
    databaseName?: string;
    host_ros?: string;
    certificateBase64?: string;
    sslPort?: string;
    ssl?: boolean;
    databaseVersion?: string;
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
   * Success response of get whitelist IPs.
   */
  export interface SuccessGetWhitelistIPs {
    /** List of IP addresses. */
    ip_addresses: IpAddress[];
  }

  /**
   * Success response of post whitelist IPs.
   */
  export interface SuccessPostWhitelistIPs {
    /** status of the post whitelist IPs request. */
    status: string;
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

  /**
   * UpdateUserAuthentication.
   */
  export interface UpdateUserAuthentication {
    /** Authentication method. */
    method?: string;
    /** Authentication policy ID. */
    policy_id?: string;
  }
}

export = Db2saasV1;
