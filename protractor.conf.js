exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',

    suites: {
        search: ['./Specs/spec*.js']
    },

    capabilities: {
        browserName: 'chrome'
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 50000
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    },
};