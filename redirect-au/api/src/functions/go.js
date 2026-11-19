import { app } from '@azure/functions'
import { target } from '../target.js'

// Every request to this Static Web App is rewritten to /api/go (see public/staticwebapp.config.json).
// Static Web Apps passes the address the visitor asked for in x-ms-original-url; answer with a 301 to egeloma.com.
app.http('go', {
  route: 'go',
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  authLevel: 'anonymous',
  handler: async req => ({
    status: 301,
    headers: {
      location: target(req.headers.get('x-ms-original-url') || req.url),
      'cache-control': 'public, max-age=86400',
    },
  }),
})
