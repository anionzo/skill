#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const scriptDir = path.dirname(__filename);
const installer = path.join(scriptDir, 'install-opencode-skills.mjs');

const args = process.argv.slice(2);

function runInstaller(installerArgs) {
  const result = spawnSync(process.execPath, [installer, ...installerArgs], {
    stdio: 'inherit',
    env: process.env
  });

  if (result.error) {
    console.error(`Failed to run installer: ${result.error.message}`);
    process.exit(1);
  }

  process.exit(result.status ?? 1);
}

function showHelp() {
  console.log('Usage:');
  console.log('  anionzo init [options] [project-dir]');
  console.log('  anionzo skill init [options] [project-dir]');
  console.log('  anionzo skill help');
  console.log('  npx @anionzo/skill');
  console.log('');
  console.log('Commands:');
  console.log('  init          Install the skill library into the current project');
  console.log('  skill init    Install the skill library into the current project');
  console.log('');
  console.log('Options:');
  console.log('  --yes         Skip the interactive picker and install all agent files');
  console.log('  --platform    Comma-separated list: opencode,claude,agents,gemini,copilot,gitignore');
  console.log('');
  console.log('Notes:');
  console.log('  - `npx @anionzo/skill` remains the quick installer entrypoint');
  console.log('  - After `npm link`, you can run `anionzo init` or `anionzo skill init` in any repo');
}

if (args.length === 0) {
  runInstaller([]);
}

if (args[0] === '-h' || args[0] === '--help' || args[0] === 'help') {
  showHelp();
  process.exit(0);
}

if (args[0] === 'init') {
  runInstaller(args.slice(1));
}

if (args[0] === 'skill') {
  if (args[1] === 'init') {
    runInstaller(args.slice(2));
  }

  if (args[1] === 'help' || args[1] === '--help' || args.length === 1) {
    showHelp();
    process.exit(0);
  }
}

// Preserve the original installer behavior for `npx @anionzo/skill [project-dir]`.
runInstaller(args);
