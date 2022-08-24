import { ActiveModelSerializer, createServer, Factory, Model, Response } from 'miragejs'
import faker from 'faker'

type User = {
  name: string
  email: string
  created_at: string
}

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    serializers: {
      // cadastra tudo junto com os relacionamentos, apenas 1 request.
      application: ActiveModelSerializer
    },

    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.firstName()
        },
        email() {
          return faker.internet.email().toLowerCase()
        },
        createdAt() {
          return faker.date.recent(360)
        }
      })
    },

    seeds(server) {
      server.createList('user', 30)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      // Miragejs shorthand
      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams

        const total = schema.all('user').length

        const pageStart = Number(page - 1) * Number(per_page)
        const pageEnd = pageStart + Number(per_page)

        const users = this.serialize(schema.all('user'))
          .users.sort(
            (a: User, b: User) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          )
          .slice(pageStart, pageEnd)

        return new Response(200, { 'x-total-count': String(total) }, { users })
      })

      this.get('/users/:id')
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
