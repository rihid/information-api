import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: "Hello",
  })
})

const port = 3000
console.log(`Server is running on port ${port}: http://localhost:3000/`)

serve({
  fetch: app.fetch,
  port
})
