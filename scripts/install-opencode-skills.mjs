#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const scriptDir = path.dirname(__filename);
const bashScript = path.join(scriptDir, 'install-opencode-skills');
const psScript = path.join(scriptDir, 'install-opencode-skills.ps1');

const args = process.argv.slice(2);

function translateWindowsArgs(inputArgs) {
  const translated = [];

  for (let i = 0; i < inputArgs.length; i += 1) {
    const arg = inputArgs[i];

    if (arg === '--help' || arg === '-h') {
      translated.push('-Help');
      continue;
    }

    if (arg === '--yes' || arg === '-y') {
      translated.push('-Yes');
      continue;
    }

    if (arg === '--platform' && inputArgs[i + 1]) {
      translated.push('-Platform', inputArgs[i + 1]);
      i += 1;
      continue;
    }

    if (arg.startsWith('--platform=')) {
      translated.push('-Platform', arg.slice('--platform='.length));
      continue;
    }

    translated.push(arg);
  }

  return translated;
}

function run(command, commandArgs) {
  const result = spawnSync(command, commandArgs, { stdio: 'inherit' });

  if (result.error) {
    console.error(`Failed to run ${command}: ${result.error.message}`);
    process.exit(1);
  }

  process.exit(result.status ?? 1);
}

if (process.platform === 'win32') {
  const powershellArgs = ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', psScript, ...translateWindowsArgs(args)];

  // Prefer pwsh when available, fallback to Windows PowerShell.
  const pwsh = spawnSync('pwsh', ['-NoProfile', '-Command', '$PSVersionTable.PSVersion.ToString()'], {
    stdio: 'ignore'
  });

  if (!pwsh.error && pwsh.status === 0) {
    run('pwsh', powershellArgs);
  } else {
    run('powershell', powershellArgs);
  }
} else {
  run('bash', [bashScript, ...args]);
}
