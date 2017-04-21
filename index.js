

var selenium = require('selenium-webdriver')
var chrome = require('selenium-webdriver/chrome')

var options = new chrome.Options()
             .setChromeBinaryPath('/usr/bin/google-chrome-unstable')
             .addArguments(['--disable-gpu', '--headless'])//, '--window-size=1200x600'])
             .setChromeLogFile('/home/catfish/Projects/crawl/sel_logs.txt')

var driver = new selenium.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            //.withCapabilities(selenium.Capabilities.chrome()) 
            .build()

    driver.get('http://www.google.com/').then(function(res){
    
        console.log('====RESULTS\n', res)
}).catch(function(err) {
console.log('err', error)})


