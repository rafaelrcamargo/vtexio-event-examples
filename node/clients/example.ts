import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export class Example extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(``, context, options)
  }

  public async test() {
    return this.http.get(`https://4006c06b-d8de-4361-8e53-6f7f2b431d32.mock.pstmn.io/link`)
  }
}
