/* eslint-disable import/order */
import type {
  ClientsConfig,
  EventContext,
  ParamsContext,
  RecorderState,
  ServiceContext,
} from '@vtex/api'
import { LRUCache, Service } from '@vtex/api'

import { Clients } from './clients'

// * Events
import onAppInstalled from './events/onAppInstalled'

const TIMEOUT_MS = 800

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({ max: 5000 })
metrics.trackCache('status', memoryCache)

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<Clients> = {
  // We pass our custom implementation of the clients bag, containing the Status client.
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 3,
      timeout: TIMEOUT_MS,
    },
    // This key will be merged with the default options and add this cache to our Status client.
    status: {
      memoryCache,
    },
  },
}

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients, State>

  interface InstalledAppEvent extends EventContext<Clients> {
    body: { id?: string }
  }

  // The shape of our State object found in `ctx.state`. This is used as state bag to communicate between middlewares.
  interface State extends RecorderState {
    id: number
  }
}

// * Export a service that defines route handlers and client options.
export default new Service<Clients, State, ParamsContext>({
  // ? We pass our clients bag to the service.
  clients,
  events: { onAppInstalled: onAppInstalled },
})
