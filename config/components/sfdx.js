const CLI_SERVICE_AGREEMENT = 'You acknowledge and agree that the CLI tool may collect usage information, user environment, and crash reports for the purposes of providing services or functions that are relevant to use of the CLI tool and product improvements.';
const FORCE_IGNORE_FILENAME = '.forceignore'
const PACKAGE_ALIAS_DELIMITER = '@';
const PACKAGE_BUILD_NUMBER = 1;
const PACKAGE_ID_PREFIX = '0Ho';
const PACKAGE_LIMIT_NAME = 'Package2VersionCreates';
const PACKAGE_VERSION_ID_PREFIX = '04t';
const PACKAGE_VERSION_INCREMENT = 1;
const SFDX_PROJECT_JSON_FILENAME = './sfdx-project.json';

const AUTH_JWT_GRANT_COMMAND = 'sfdx force:auth:jwt:grant';
const LIMITS_API_DISPLAY_COMMAND = 'sfdx force:limits:api:display';
const PACKAGE_INSTALL_COMMAND = 'sfdx force:package:beta:install';
const PACKAGE_VERSION_CREATE_COMMAND = 'sfdx force:package:beta:version:create';
const PACKAGE_VERSION_PROMOTE_COMMAND = 'sfdx force:package:beta:version:promote';
const SOQL_QUERY_COMMAND = 'sfdx force:data:soql:query';

module.exports = {
    AUTH_JWT_GRANT_COMMAND,
    CLI_SERVICE_AGREEMENT,
    FORCE_IGNORE_FILENAME,
    LIMITS_API_DISPLAY_COMMAND,
    PACKAGE_ALIAS_DELIMITER,
    PACKAGE_BUILD_NUMBER,
    PACKAGE_ID_PREFIX,
    PACKAGE_INSTALL_COMMAND,
    PACKAGE_LIMIT_NAME,
    PACKAGE_VERSION_CREATE_COMMAND,
    PACKAGE_VERSION_ID_PREFIX,
    PACKAGE_VERSION_INCREMENT,
    PACKAGE_VERSION_PROMOTE_COMMAND,
    SFDX_PROJECT_JSON_FILENAME,
    SOQL_QUERY_COMMAND
};