import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date | string; output: Date | string; }
};

export type Mutation = {
  __typename?: 'Mutation';
  broadcast: Value;
  deleteProject: Project;
  incrementProjectRequestCount: Project;
  request: Requests;
  signin: UserSignIn;
  toggleActiveProject: Project;
};


export type MutationDeleteProjectArgs = {
  id: Scalars['Int']['input'];
};


export type MutationIncrementProjectRequestCountArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSigninArgs = {
  data: UserSignInInput;
};


export type MutationToggleActiveProjectArgs = {
  id: Scalars['Int']['input'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['ID']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['ID']['output']>;
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  requestCount: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type ProjectCreateInput = {
  title: Scalars['String']['input'];
};

export type ProjectOrderByUpdatedAtInput = {
  updatedAt: SortOrder;
};

export type Query = {
  __typename?: 'Query';
  auth: UserAuth;
  me: User;
  projectById?: Maybe<Project>;
  projects: QueryProjectsConnection;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAuthArgs = {
  data: UserAuthInput;
};


export type QueryProjectByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  address: Scalars['String']['input'];
};

export type QueryProjectsConnection = {
  __typename?: 'QueryProjectsConnection';
  edges: Array<Maybe<QueryProjectsConnectionEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type QueryProjectsConnectionEdge = {
  __typename?: 'QueryProjectsConnectionEdge';
  cursor: Scalars['ID']['output'];
  node: Project;
};

export type Requests = {
  __typename?: 'Requests';
  count: Scalars['Int']['output'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Subscription = {
  __typename?: 'Subscription';
  countdown: Value;
  random: Value;
  requests: Requests;
};


export type SubscriptionCountdownArgs = {
  from: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  address: Scalars['String']['output'];
  challenge: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  isAuthenticated: Scalars['Boolean']['output'];
  projects: Array<Project>;
};

export type UserAuth = {
  __typename?: 'UserAuth';
  authenticated: Scalars['Boolean']['output'];
  challenge?: Maybe<Scalars['String']['output']>;
};

export type UserAuthInput = {
  address: Scalars['String']['input'];
};

export type UserSignIn = {
  __typename?: 'UserSignIn';
  authenticated: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UserSignInInput = {
  address: Scalars['String']['input'];
  projects?: InputMaybe<Array<ProjectCreateInput>>;
  signature: Scalars['String']['input'];
};

export type Value = {
  __typename?: 'Value';
  value: Scalars['Int']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Project: ResolverTypeWrapper<Project>;
  ProjectCreateInput: ProjectCreateInput;
  ProjectOrderByUpdatedAtInput: ProjectOrderByUpdatedAtInput;
  Query: ResolverTypeWrapper<{}>;
  QueryProjectsConnection: ResolverTypeWrapper<QueryProjectsConnection>;
  QueryProjectsConnectionEdge: ResolverTypeWrapper<QueryProjectsConnectionEdge>;
  Requests: ResolverTypeWrapper<Requests>;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  UserAuth: ResolverTypeWrapper<UserAuth>;
  UserAuthInput: UserAuthInput;
  UserSignIn: ResolverTypeWrapper<UserSignIn>;
  UserSignInInput: UserSignInInput;
  Value: ResolverTypeWrapper<Value>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  DateTime: Scalars['DateTime']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  PageInfo: PageInfo;
  Project: Project;
  ProjectCreateInput: ProjectCreateInput;
  ProjectOrderByUpdatedAtInput: ProjectOrderByUpdatedAtInput;
  Query: {};
  QueryProjectsConnection: QueryProjectsConnection;
  QueryProjectsConnectionEdge: QueryProjectsConnectionEdge;
  Requests: Requests;
  String: Scalars['String']['output'];
  Subscription: {};
  User: User;
  UserAuth: UserAuth;
  UserAuthInput: UserAuthInput;
  UserSignIn: UserSignIn;
  UserSignInInput: UserSignInInput;
  Value: Value;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  broadcast?: Resolver<ResolversTypes['Value'], ParentType, ContextType>;
  deleteProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationDeleteProjectArgs, 'id'>>;
  incrementProjectRequestCount?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationIncrementProjectRequestCountArgs, 'id'>>;
  request?: Resolver<ResolversTypes['Requests'], ParentType, ContextType>;
  signin?: Resolver<ResolversTypes['UserSignIn'], ParentType, ContextType, RequireFields<MutationSigninArgs, 'data'>>;
  toggleActiveProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationToggleActiveProjectArgs, 'id'>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  requestCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  auth?: Resolver<ResolversTypes['UserAuth'], ParentType, ContextType, RequireFields<QueryAuthArgs, 'data'>>;
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  projectById?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectByIdArgs, 'id'>>;
  projects?: Resolver<ResolversTypes['QueryProjectsConnection'], ParentType, ContextType, Partial<QueryProjectsArgs>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'address'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type QueryProjectsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryProjectsConnection'] = ResolversParentTypes['QueryProjectsConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['QueryProjectsConnectionEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryProjectsConnectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryProjectsConnectionEdge'] = ResolversParentTypes['QueryProjectsConnectionEdge']> = {
  cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequestsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Requests'] = ResolversParentTypes['Requests']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  countdown?: SubscriptionResolver<ResolversTypes['Value'], "countdown", ParentType, ContextType, RequireFields<SubscriptionCountdownArgs, 'from'>>;
  random?: SubscriptionResolver<ResolversTypes['Value'], "random", ParentType, ContextType>;
  requests?: SubscriptionResolver<ResolversTypes['Requests'], "requests", ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  challenge?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  isAuthenticated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAuth'] = ResolversParentTypes['UserAuth']> = {
  authenticated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  challenge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSignInResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSignIn'] = ResolversParentTypes['UserSignIn']> = {
  authenticated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['Value'] = ResolversParentTypes['Value']> = {
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QueryProjectsConnection?: QueryProjectsConnectionResolvers<ContextType>;
  QueryProjectsConnectionEdge?: QueryProjectsConnectionEdgeResolvers<ContextType>;
  Requests?: RequestsResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAuth?: UserAuthResolvers<ContextType>;
  UserSignIn?: UserSignInResolvers<ContextType>;
  Value?: ValueResolvers<ContextType>;
};

