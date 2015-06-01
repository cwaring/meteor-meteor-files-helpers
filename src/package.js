Package.describe({
  name: 'sanjo:meteor-files-helpers',
  version: '1.1.0_6',
  summary: 'Helpers for interacting with Meteor files in the filesystem',
  git: 'https://github.com/Sanjo/meteor-meteor-files-helpers.git',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.1')
  api.export('MeteorFilesHelpers', 'server')
  api.use('underscore', 'server')
  api.use('sanjo:meteor-version@1.0.0', 'server')
  api.use('package-version-parser', 'server')
  api.addFiles([
    'lib/meteor/files.js',
    'meteor_files_helpers.js'
  ], 'server')
})
