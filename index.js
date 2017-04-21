require('chromedriver')
var selenium = require('selenium-webdriver')
            

var options = new selenium.ChromeOptions()

options.binary_location = '/usr/bin/google-chrome-unstable'

options.add_argument('headless')

options.add_argument('window-size=1200x600')


var driver = new selenium.Chrome(options)

