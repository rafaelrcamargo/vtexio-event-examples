export const event = async (
  ctx: InstalledAppEvent,
  next: () => Promise<any>
) => {
  console.log('onAppInstalled', ctx.clients.example.test("event"))

  await next()
}