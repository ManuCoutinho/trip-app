import Rollbar from 'rollbar'

export const rollbarConfig: Rollbar.Configuration = {
  accessToken: process.env.NEXT_PUBLIC_ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    client: {
      javascript: {
        code_version: '1.0.0',
        source_map_enabled: true
      }
    }
  }
}
