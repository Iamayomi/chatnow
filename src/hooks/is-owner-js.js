export const isOwnerJs = async (context, next) => {
  console.log(`Running hook is-owner.js on ${context.path}.${context.method}`)
  await next()
}
