import { IOClients } from '@vtex/api'

import { Example } from './example'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get example() {
    return this.getOrSet('example', Example)
  }
}
