 // Karma configuration
 // Generated on Wed Mar 12 2014 16:33:15 GMT+0000 (GMT)

 module.exports = function(config) {
     config.set({

         // base path that will be used to resolve all patterns (eg. files, exclude)
         basePath: '../',


         // frameworks to use
         // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
         frameworks: ['mocha', 'requirejs'],


         // list of files / patterns to load in the browser
         files: [
             {pattern: 'test/thirdparty/proclaim.js', included: false},
             {pattern: 'test/thirdparty/squire/squire.js', included: false},
             {pattern: 'test/thirdparty/sinon/**/*.js', included: false},
             {pattern: 'test/thirdparty/json2/json2.js', included: true},
             {pattern: 'test/javascript/**/*.js', included: false},
             {pattern: 'javascript/**/*.js', included: false},

             'test/main-test.js'
         ],

         // list of files to exclude
         exclude: [
         ],

         // test results reporter to use
         // possible values: 'dots', 'progress'
         // available reporters: https://npmjs.org/browse/keyword/karma-reporter
         reporters: ['mocha'],


         // web server port
         port: 9876,


         // enable / disable colors in the output (reporters and logs)
         colors: true,


         // level of logging
         // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
         logLevel: config.LOG_ERROR,


         // enable / disable watching file and executing tests whenever any file changes
         autoWatch: true,


         // start these browsers
         // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
         browsers: ['PhantomJS'],

         // Continuous Integration mode
         // if true, Karma captures browsers, runs the tests and exits
         singleRun: false

     });
 };
