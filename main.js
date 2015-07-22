var app = require('app')
var setting = require('./module/setting.js')
var BrowserWindow = require('browser-window')

var window = null

// Generate default settings
setting.default('window.width', 608)
    .default('window.height', 648)
    .default('window.minwidth', 550)
    .default('window.minheight', 590)
    .default('view.fuzzy_stone_placement', true)
    .default('view.show_coordinates', false)
    .default('view.show_variations', true)
    .default('view.show_sidebar', false)
    .default('view.sidebar_width', 200)
    .default('view.sidebar_minwidth', 100)
    .default('graph.grid_size', 25)
    .default('scoring.method', 'territory')
    .default('sound.enable', true)

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit()
})

app.on('ready', function() {
    window = new BrowserWindow({
        'width': setting.get('window.width'),
        'height': setting.get('window.height'),
        'min-width': setting.get('window.minwidth'),
        'min-height': setting.get('window.minheight'),
        'use-content-size': true,
        'show': false,
        'web-preferences': {
            'text-areas-are-resizable': false,
        }
    })

    // window.toggleDevTools()
    window.webContents.setAudioMuted(!setting.get('sound.enable'))

    window.on('closed', function() { window = null })
    window.webContents.on("will-navigate", function(e, url) { e.preventDefault() })
    window.webContents.on('dom-ready', function() { window.show() })

    window.loadUrl('file://' + __dirname + '/view/index.html')
})
