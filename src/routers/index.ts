import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  const message = 'Hello'
  res.render('home', { message })
})

export default router
