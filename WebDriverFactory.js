
var config = exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // getPageTimeout: 600000,
  // allScriptsTimeout: 500000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['Cucumber Features/FirstScenario.feature'],
          ignoreUncaughtExceptions: true,

  cucumberOpts: {
    require: ['step_definitions/HomePageSteps.js'],
    format: 'json:.tmp/results.json',
       strict: true,
    // tags: false,
    // profile: false,
    // 'no-source': true
  },

  plugins: [{
    package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
       options:{
           // read the options part
           automaticallyGenerateReport: true,
           removeExistingJsonReportFile: true,
       }
   }]


  };
