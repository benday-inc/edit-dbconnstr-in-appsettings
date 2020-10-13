import {wait} from '../src/wait'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import * as fs from "fs";

// shows how the runner will run a javascript action with env / stdout protocol
test('set connection string in empty appsettings.json file', () => {
  const now = Date.now().toString();

  const sampleFilename = "sample-appsettings.json";
  var pathToFile = path.join(__dirname, sampleFilename);
  var pathToTempDir = path.join(__dirname, "temp");
  var pathToTempDirForThisRun = path.join(pathToTempDir, now);

  if (!fs.existsSync(pathToTempDir)) {
    fs.mkdirSync(pathToTempDir);
  }

  if (!fs.existsSync(pathToTempDirForThisRun)) {
    fs.mkdirSync(pathToTempDirForThisRun);
  }

  var pathToTempConfigFile = path.join(pathToTempDirForThisRun, sampleFilename);

  fs.copyFileSync(pathToFile, pathToTempConfigFile);

  process.env['INPUT_NAME'] = 'dingdong';
  process.env['INPUT_CONNECTIONSTRING'] = 'bing bong';
  process.env['INPUT_PATHTOSETTINGSFILE'] = pathToTempConfigFile;
  process.env['ACTIONS_RUNNER_DEBUG'] = 'true';

  const systemUnderTest = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: process.env
  }

  let temp = cp.execSync(`node ${systemUnderTest}`, options).toString();

  console.log(temp);
})
