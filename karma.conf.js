// Karma configuration
// Generated on Sun Apr 03 2016 21:04:58 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    client : {
      mocha : {
          ui : 'bdd'
      },
      chai: { includeStack: true}
    },
    
    // list of files / patterns to load in the browser
    files: [
      'vendor/xregexp-all.js',
      'assets/js/medida.js',
      'assets/js/temperature.js',
      'assets/js/volumen.js',
      'assets/js/distancias.js',
      'assets/js/main.js',
      //'vendor/sinon.js',
      'vendor/sinon-1.17.2.js',
      'vendor/blanket.js',
      'vendor/blanket_mocha.js',
      'vendor/chai.js',
      'vendor/mocha.js',
      'vendor/tests.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    customLaunchers: {
      chromeTravisCI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
