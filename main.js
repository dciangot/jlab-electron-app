const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL('https://cms-it-hub.cloud.cnaf.infn.it')
}

app.whenReady().then(() => {
  createWindow()
})
