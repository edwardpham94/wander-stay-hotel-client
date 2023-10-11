import '~/dbs/init.mongodb'
import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import router from './routers'
import { create } from 'express-handlebars'

const app = express()

app.use(express.json(), morgan('dev'), helmet(), compression())

app.engine('hbs', create({ extname: '.hbs', defaultLayout: false, layoutsDir: 'views/' }).engine)
app.set('view engine', 'hbs')
app.set('views', 'src/views')

app.use('/', router)

export default app
