import app from '~/app'
import config from '~/configs/config.app'

const server = app.listen(config.port, () => {
  console.log(`Server listening on port: ${config.port}`)
})

process.on('SIGINT', () => {
  server.close(() => console.log(`Exit sever express successfully!`))
  process.exit(0)
})
