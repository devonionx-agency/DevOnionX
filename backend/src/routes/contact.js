import { Router } from 'express'

const router = Router()

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  // TODO: send email / save to DB
  console.log('Contact form submission:', { name, email, message })

  res.json({ success: true, message: 'Message received!' })
})

export default router
