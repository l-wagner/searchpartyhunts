const express = require('express')
const path = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

var cors = require('cors');


const i18nextMiddleware = require('i18next-express-middleware')
const Backend = require('i18next-node-fs-backend')
const i18n = require('./i18n')

// init i18next with serverside settings
// using i18next-express-middleware
i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(
    {
      fallbackLng: 'en',
      preload: ['en'], // preload all langages
      ns: ['common', 'home', 'about', 'carousel', 'footer', 'header', 'howitworks', 'testimonials', 'values'], // need to preload all the namespaces
      backend: {
        loadPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
        addPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.missing.json'),
      },
    },
    () => {
      // loaded translations we can bootstrap our routes
      app.prepare().then(() => {
        const server = express()

        // enable middleware for i18next
        server.use(i18nextMiddleware.handle(i18n))

        

        // serve locales for client
        server.use('/locales', express.static(path.join(__dirname, '/locales')))

        // missing keys
        server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n))

        server.get('/favicon.ico', (req, res) => (
       res.status(200).sendFile('favicon.ico', {root: __dirname + '/static/'})
));

        
        // use next.js
        server.get('*', (req, res) => handle(req, res))
        var PORT = process.env.PORT || 5000

        server.listen(PORT, err => {
          if (err) throw err
          console.log('> Ready on ' + PORT)
        })
      })
    }
  )
