
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.1
 * Query Engine version: 2f302df92bd8945e20ad4595a73def5b96afa54f
 */
Prisma.prismaVersion = {
  client: "5.4.1",
  engine: "2f302df92bd8945e20ad4595a73def5b96afa54f"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  address: 'address',
  nonce: 'nonce',
  challenge: 'challenge',
  signature: 'signature',
  requestCount: 'requestCount',
  isAuthenticated: 'isAuthenticated',
  isSubscribed: 'isSubscribed',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  authenticatedAt: 'authenticatedAt'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  title: 'title',
  requestCount: 'requestCount',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userAddress: 'userAddress'
};

exports.Prisma.EventScalarFieldEnum = {
  id: 'id',
  prevEventId: 'prevEventId',
  blockNumber: 'blockNumber',
  logIndex: 'logIndex',
  blockHash: 'blockHash',
  transactionHash: 'transactionHash',
  name: 'name',
  address: 'address',
  args: 'args',
  event: 'event',
  isProcessed: 'isProcessed',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  User: 'User',
  Project: 'Project',
  Event: 'Event'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/konstantin/repo/my/web3.app.template/packages/graphql/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.4.1",
  "engineVersion": "2f302df92bd8945e20ad4595a73def5b96afa54f",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2NsaWVudCIKfQoKZ2VuZXJhdG9yIHBvdGhvcyB7CiAgcHJvdmlkZXIgICAgID0gInByaXNtYS1wb3Rob3MtdHlwZXMiCiAgY2xpZW50T3V0cHV0ID0gIi4vY2xpZW50IgogIG91dHB1dCAgICAgICA9ICIuL2dlbmVyYXRlZC5kLnRzIgp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJteXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgVXNlciB7CiAgYWRkcmVzcyAgICAgICAgIFN0cmluZyAgICBAaWQKICBub25jZSAgICAgICAgICAgU3RyaW5nCiAgY2hhbGxlbmdlICAgICAgIFN0cmluZyAgICBAZGIuVGV4dAogIHNpZ25hdHVyZSAgICAgICBTdHJpbmc/CiAgcmVxdWVzdENvdW50ICAgIEludCAgICAgICBAZGVmYXVsdCgwKQogIGlzQXV0aGVudGljYXRlZCBCb29sZWFuICAgQGRlZmF1bHQoZmFsc2UpCiAgaXNTdWJzY3JpYmVkICAgIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkKICBjcmVhdGVkQXQgICAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgICAgICBEYXRlVGltZSAgQHVwZGF0ZWRBdAogIGF1dGhlbnRpY2F0ZWRBdCBEYXRlVGltZT8KCiAgcHJvamVjdHMgUHJvamVjdFtdCn0KCm1vZGVsIFByb2plY3QgewogIGlkICAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHRpdGxlICAgICAgICBTdHJpbmcKICByZXF1ZXN0Q291bnQgSW50ICAgICAgQGRlZmF1bHQoMCkKICBpc0FjdGl2ZSAgICAgQm9vbGVhbiAgQGRlZmF1bHQodHJ1ZSkKICBjcmVhdGVkQXQgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgIERhdGVUaW1lIEB1cGRhdGVkQXQKCiAgdXNlciAgICAgICAgVXNlcj8gICBAcmVsYXRpb24oZmllbGRzOiBbdXNlckFkZHJlc3NdLCByZWZlcmVuY2VzOiBbYWRkcmVzc10sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHVzZXJBZGRyZXNzIFN0cmluZz8KfQoKbW9kZWwgRXZlbnQgewogIGlkICAgICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIHByZXZFdmVudCAgICAgICBFdmVudD8gICBAcmVsYXRpb24oIkV2ZW50VG9FdmVudCIsIGZpZWxkczogW3ByZXZFdmVudElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcmV2RXZlbnRJZCAgICAgU3RyaW5nPwogIGJsb2NrTnVtYmVyICAgICBJbnQKICBsb2dJbmRleCAgICAgICAgSW50CiAgYmxvY2tIYXNoICAgICAgIFN0cmluZwogIHRyYW5zYWN0aW9uSGFzaCBTdHJpbmcKICBuYW1lICAgICAgICAgICAgU3RyaW5nCiAgYWRkcmVzcyAgICAgICAgIFN0cmluZwogIGFyZ3MgICAgICAgICAgICBKc29uCiAgZXZlbnQgICAgICAgICAgIEpzb24KICBpc1Byb2Nlc3NlZCAgICAgQm9vbGVhbiAgQGRlZmF1bHQoZmFsc2UpCiAgY3JlYXRlZEF0ICAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQoKICBldmVudHMgRXZlbnRbXSBAcmVsYXRpb24oIkV2ZW50VG9FdmVudCIpCgogIEBAdW5pcXVlKFtibG9ja0hhc2gsIHRyYW5zYWN0aW9uSGFzaCwgbG9nSW5kZXhdKQogIEBAaW5kZXgoW2Jsb2NrTnVtYmVyLCBsb2dJbmRleF0pCiAgQEBpbmRleChibG9ja051bWJlcikKICBAQGluZGV4KGxvZ0luZGV4KQogIEBAaW5kZXgoYmxvY2tIYXNoKQogIEBAaW5kZXgodHJhbnNhY3Rpb25IYXNoKQogIEBAaW5kZXgobmFtZSkKICBAQGluZGV4KGFkZHJlc3MpCiAgQEBpbmRleChpc1Byb2Nlc3NlZCkKICBAQGluZGV4KFthZGRyZXNzLCB0cmFuc2FjdGlvbkhhc2hdKQogIEBAaW5kZXgoW25hbWUsIGFkZHJlc3MsIGlzUHJvY2Vzc2VkLCBibG9ja051bWJlciwgbG9nSW5kZXhdKQogIEBAaW5kZXgoW25hbWUsIGFkZHJlc3MsIGlzUHJvY2Vzc2VkXSkKICBAQGluZGV4KFtuYW1lLCBhZGRyZXNzLCB0cmFuc2FjdGlvbkhhc2hdKQogIEBAaW5kZXgoW25hbWUsIGlzUHJvY2Vzc2VkLCBibG9ja051bWJlciwgbG9nSW5kZXhdKQogIEBAaW5kZXgoW25hbWUsIGlzUHJvY2Vzc2VkLCBjcmVhdGVkQXRdKQogIEBAaW5kZXgoW25hbWUsIGlzUHJvY2Vzc2VkXSkKfQo=",
  "inlineSchemaHash": "a2d69747b4b0af0f550be056862cb7949ab89bfe59173397ec45d16f8eb70e42",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nonce\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"challenge\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"signature\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requestCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isAuthenticated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isSubscribed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"authenticatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projects\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Project\",\"relationName\":\"ProjectToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Project\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requestCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ProjectToUser\",\"relationFromFields\":[\"userAddress\"],\"relationToFields\":[\"address\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Event\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prevEvent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"EventToEvent\",\"relationFromFields\":[\"prevEventId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prevEventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blockNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logIndex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blockHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"args\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isProcessed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"events\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"EventToEvent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"blockHash\",\"transactionHash\",\"logIndex\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"blockHash\",\"transactionHash\",\"logIndex\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

