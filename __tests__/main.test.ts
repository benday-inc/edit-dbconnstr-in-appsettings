import {wait} from '../src/wait'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

// shows how the runner will run a javascript action with env / stdout protocol
test('set connection string in empty appsettings.json file', () => {
  var pathToFile = path.join(__dirname, "sample-appsettings.json");

  process.env['INPUT_NAME'] = 'dingdong';
  process.env['INPUT_CONNECTIONSTRING'] = 'bing bong';
  process.env['INPUT_PATHTOSETTINGSFILE'] = pathToFile;

  const systemUnderTest = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: process.env
  }

  let temp = cp.execSync(`node ${systemUnderTest}`, options).toString();

  console.log(temp);
})
