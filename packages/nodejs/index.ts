import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

fastify.get('/', function (request, reply) {
  let count = 0
  reply.raw.write(`<html><body>`)
  const timer = setInterval(() => {
    reply.raw.write(`#`)
    count ++
    if (count === 20) {
      clearInterval(timer)
      reply.raw.end('Done </body></html>');
    }
  }, 1000)
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`Server is now listening on ${address}`)
})