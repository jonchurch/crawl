
var webdriverio = require('webdriverio')

var options = { desiredCapabilities: { browserName: 'chrome' } }
var browser = webdriverio.remote(options)

var getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

browser
    .init()
    .url('https://instagram.com/jonchurch/')
    .pause(getRandomInt(2000, 5000))
    .getTitle()
    .then(function(title){
    
        console.log('=====Title:', title)
    })

    
