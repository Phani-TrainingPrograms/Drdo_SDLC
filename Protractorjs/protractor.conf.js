exports.config = {
    // The address of a running Selenium Server
    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // Capabilities to be passed to the WebDriver instance
    capabilities: {
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: [
          // Add any additional arguments you want, such as headless mode
          // '--headless'
        ],
      },
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when protractor is called
    specs: ['spec.js'],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000,
    },
  
    // Additional options
    onPrepare: () => {
      browser.ignoreSynchronization = true; // If testing non-Angular apps
    },
  };
  