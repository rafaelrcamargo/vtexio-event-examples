export async function test(ctx: Context, next: () => Promise<any>) {
  console.log('onAppInstalled', ctx.clients.example.test("client"))

  await next()
}