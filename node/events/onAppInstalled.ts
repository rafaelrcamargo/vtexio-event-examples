export const event = async (
  ctx: InstalledAppEvent,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  next: () => Promise<any>
) => {
  console.log('onAppInstalled', ctx.clients.example.test('event'))
  await next()
}
