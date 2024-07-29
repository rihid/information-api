import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: "Hello",
  })
})
app.get('/items', (c) => {
  return c.json({
    ok: true,
    message: "Item"
  })
})
app.get('/items/:id', (c) => {
  const id = c.req.param('id')
  return c.json({
    ok: true,
    param: id,
    message: 'Items Detail!',
  })
})

const port = 3000
console.log(`Server is running on port ${port}: http://localhost:3000/`)

serve({
  fetch: app.fetch,
  port
})
