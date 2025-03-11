const simpleGit = require('simple-git');

const git = simpleGit({
  binary: 'C:/Program Files/Git/bin/git.exe'  // ← Git のパスを明示的に設定
});

git.status((err, status) => {
  if (err) {
    console.error('Git error:', err);
  } else {
    console.log('Git status:', status);
  }
});
