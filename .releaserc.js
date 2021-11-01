module.exports = {
  branches: [
    'main',
    {
      name: 'next',
      prerelease: true
    }
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/git',
    '@semantic-release/changelog',
    '@semantic-release/github'
  ]
}
