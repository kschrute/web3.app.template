import type { CodegenConfig } from '@graphql-codegen/cli'
import { printSchema } from 'graphql'
import { schema } from './src/schema'

const config: CodegenConfig = {
  overwrite: true,
  // TODO: test this instead of build-schema.js
  schema: printSchema(schema),
  // schema: 'build-schema.js',
  // documents: '../web/src/**/*.tsx',
  documents: ['../web/src/**/*.graphql'],
  generates: {
    'schema.graphql': {
      plugins: ['schema-ast'],
    },
    '../web/types/graphql-operations.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
    './types/graphql-operations.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
    './types/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
    '../web/src/graphql/client.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withComponent: true,
      },
    },
    // 'src/gql/': {
    //   preset: 'client',
    //   plugins: []
    // }
  },
}

export default config
