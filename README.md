InVDO
=========================
A Video player for Youtube. 
 - [x] Plays Normal Videos
 - [ ] Playing Live Video (HLS JS is used for this)

Made with [Vue][vue] and [Electron][3] for Dektop. 

 - [Vue CLI Plugin Electron Builder][2]
 - [HLS JS][4]

Vue CLI Plugin Electron Builder makes it very easy to make any [Vue][vue] application to become a desktop application.



## Making Desktop App

```
vue create hello-world
vue add electron-builder
```

## Running the App
Run the Application either as a Desktop Application or a web Application.
```
// Dektop
npm run electron:serve
// Web
npm run serve
```

Vue Project setup, run and build
```
npm install
npm run serve
npm run build
npm run lint
```

Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).








[vue]: https://vuejs.org/
[2]: https://github.com/nklayman/vue-cli-plugin-electron-builder
[3]: https://www.electronjs.org
[4]: https://github.com/video-dev/hls.js/




