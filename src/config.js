import morgan from 'morgan';
import nconf from 'nconf';
import nconfYaml from 'nconf-yaml';

// Create config object
nconf.argv()
  .env()
  .file({
    file: 'defaults.yml',
    format: nconfYaml,
  });

export default nconf;
