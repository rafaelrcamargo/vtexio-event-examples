export default async (
  ctx: InstalledAppEvent,
  next: () => Promise<any>
) => {
  console.log('onAppInstalled', ctx.body.id)
  console.log('onAppInstalled', ctx.clients.example.test())

  await next()
}