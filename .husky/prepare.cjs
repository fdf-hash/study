const fs = require('fs')
const path = require('path')

const { exec } = require('child_process')

if (!fs.existsSync(path.resolve(__dirname, 'commit-msg'))) {
  exec(`husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`, (err, stdout) => {
    if (err) {
      process.stderr.write(err)
    } else {
      process.stdout.write(stdout)
    }
  })
} else {
  process.stdout.write('commit-msg文件存在')
}
