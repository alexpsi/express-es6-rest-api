import nconf from 'nconf';
import nconfYaml from 'nconf-yaml';

nconf.argv()
  .env()
  .file({
    file: '../defaults.yml',
    format: nconfYaml,
  });

export default nconf.get;
