// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function test(ctx: Context, next: () => Promise<any>) {
  console.log('onAppInstalled', ctx.clients.example.test('client'))
  await next()
}
