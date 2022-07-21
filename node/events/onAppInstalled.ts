export default async (
  ctx: InstalledAppEvent,
  next: () => Promise<any>
) => {
  console.log('onAppInstalled', ctx.body.id)

  ctx.vtex.logger.info({
      setup: {
        status: 'success',
        message: 'Setup successfully completed',
      },
  })

  await next()
}