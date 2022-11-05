import '@fastify/jwt'

declare module '@fastify/jwt' {
  interface FastiFyJWT {
    user: {
      sub: string;
      name: string;
      avatarUrl: string;
    }
  }
}