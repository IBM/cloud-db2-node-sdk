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
      deploymentId:
        'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A69db420f-33d5-4953-8bd8-1950abd356f6%3A%3A',
      xDeploymentId:
        'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
    };

    const res = await db2saasService.getDb2SaasConnectionInfo(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('postDb2SaasAllowlist()', async () => {
    // Request models needed by this operation.

    // IpAddress
    const ipAddressModel = {
      address: '127.0.0.1',
      description: 'A sample IP address',
    };

    const params = {
      xDeploymentId:
        'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
      ipAddresses: [ipAddressModel],
    };

    const res = await db2saasService.postDb2SaasAllowlist(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDb2SaasAllowlist()', async () => {
    const params = {
      xDeploymentId:
        'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
    };

    const res = await db2saasService.getDb2SaasAllowlist(params);
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
      xDeploymentId:
        'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
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
      xDeploymentId:
        'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
    };

    const res = await db2saasService.getDb2SaasUser(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getbyidDb2SaasUser()', async () => {
    const params = {
      xDeploymentId:
        'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
    };

    const res = await db2saasService.getbyidDb2SaasUser(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('putDb2SaasAutoscale()', async () => {
    const params = {
      xDbProfile:
        'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A',
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
      xDbProfile:
        'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A',
    };

    const res = await db2saasService.getDb2SaasAutoscale(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('postDb2SaasDbConfiguration()', async () => {
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

    const params = {
      xDbProfile:
        'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A',
    };

    const res = await db2saasService.postDb2SaasDbConfiguration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDb2SaasTuneableParam()', async () => {
    const res = await db2saasService.getDb2SaasTuneableParam();
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDb2SaasBackup()', async () => {
    const params = {
      xDbProfile:
        'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A',
    };

    const res = await db2saasService.getDb2SaasBackup(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('postDb2SaasBackup()', async () => {
    const params = {
      xDbProfile:
        'crn%3Av1%3Astaging%3Apublic%3Adashdb-for-transactions%3Aus-south%3Aa%2Fe7e3e87b512f474381c0684a5ecbba03%3A39269573-e43f-43e8-8b93-09f44c2ff875%3A%3A',
    };

    const res = await db2saasService.postDb2SaasBackup(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('deleteDb2SaasUser()', async () => {
    const params = {
      xDeploymentId:
        'crn:v1:staging:public:dashdb-for-transactions:us-south:a/e7e3e87b512f474381c0684a5ecbba03:69db420f-33d5-4953-8bd8-1950abd356f6::',
      id: 'test-user',
    };

    const res = await db2saasService.deleteDb2SaasUser(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
});
