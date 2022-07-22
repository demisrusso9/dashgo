import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

type User = {
  name: string
  email: string
  created_at: string
}

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories:{
      user: Factory.extend({
        name() {
          return faker.name.firstName()
        },
        email() {
          return faker.internet.email().toLowerCase()
        },
        createdAt() {
          return faker.date.recent(360)
        },
      })
    },

    seeds(server) {
      server.createList('user', 10)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      // Miragejs shorthand
      this.get('/users')
      this.post('/users')

      // Reseta o namespace para vazio após as rotas
      // Adiciona o passthrough para ignorar rotas que não existem no mirage
      // Para não ter conflito com o NEXTJS
      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}
