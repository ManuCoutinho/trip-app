import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-sa-east-1.hygraph.com/v2/cla5jnjly4ds501ug7msl1f41/master',
  documents: 'src/graphql/queries.ts',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations']
    }
  },
  hooks: { afterOneFileWrite: ['/* eslint-disable */'] }
}

export default config
