const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const nextCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const args = ['next', 'dev'];

// remove .next dir if exists
const nextDir = path.resolve(process.cwd(), '.next');
if (fs.existsSync(nextDir)) {
  console.log('Removing stale .next directory...');
  try {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log('.next removed');
  } catch (err) {
    console.error('Failed to remove .next:', err.message);
  }
}

console.log('Starting Next dev...');
const child = spawn(nextCmd, args, { stdio: 'inherit' });

child.on('close', (code) => {
  process.exit(code);
});
