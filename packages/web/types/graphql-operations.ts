import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryAuthArgs = {
  data: UserAuthInput;
};

export type QueryProjectByIdArgs = {
  id: Scalars['Int']['input'];
};

export type QueryUserArgs = {
  address: Scalars['String']['input'];
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

export type BroadcastMutationVariables = Exact<{ [key: string]: never; }>;

export type BroadcastMutation = { __typename?: 'Mutation', broadcast: { __typename?: 'Value', value: number } };

export type RequestMutationVariables = Exact<{ [key: string]: never; }>;

export type RequestMutation = { __typename?: 'Mutation', request: { __typename?: 'Requests', count: number } };

export type SignInMutationVariables = Exact<{
  data: UserSignInInput;
}>;

export type SignInMutation = { __typename?: 'Mutation', signin: { __typename?: 'UserSignIn', authenticated: boolean, token?: string | null, user?: { __typename?: 'User', address: string, challenge: string } | null } };

export type AuthQueryVariables = Exact<{
  data: UserAuthInput;
}>;

export type AuthQuery = { __typename?: 'Query', auth: { __typename?: 'UserAuth', authenticated: boolean, challenge?: string | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;

export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', address: string, isAuthenticated: boolean, createdAt: Date | string } };

export type UserQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;

export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', challenge: string, isAuthenticated: boolean } | null };

export type CountdownSubscriptionVariables = Exact<{ [key: string]: never; }>;

export type CountdownSubscription = { __typename?: 'Subscription', countdown: { __typename?: 'Value', value: number } };

export type RandomSubscriptionVariables = Exact<{ [key: string]: never; }>;

export type RandomSubscription = { __typename?: 'Subscription', random: { __typename?: 'Value', value: number } };

export type RequestsSubscriptionVariables = Exact<{ [key: string]: never; }>;

export type RequestsSubscription = { __typename?: 'Subscription', requests: { __typename?: 'Requests', count: number } };

export const BroadcastDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'Broadcast' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'broadcast' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' } }] } }] } }] } as unknown as DocumentNode<BroadcastMutation, BroadcastMutationVariables>
export const RequestDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'Request' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'request' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }] } }] } }] } as unknown as DocumentNode<RequestMutation, RequestMutationVariables>
export const SignInDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'SignIn' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'UserSignInInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'signin' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'data' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'authenticated' } }, { kind: 'Field', name: { kind: 'Name', value: 'token' } }, { kind: 'Field', name: { kind: 'Name', value: 'user' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'address' } }, { kind: 'Field', name: { kind: 'Name', value: 'challenge' } }] } }] } }] } }] } as unknown as DocumentNode<SignInMutation, SignInMutationVariables>
export const AuthDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'Auth' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'UserAuthInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'auth' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'data' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'authenticated' } }, { kind: 'Field', name: { kind: 'Name', value: 'challenge' } }] } }] } }] } as unknown as DocumentNode<AuthQuery, AuthQueryVariables>
export const MeDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'Me' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'me' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'address' } }, { kind: 'Field', name: { kind: 'Name', value: 'isAuthenticated' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }] } }] } }] } as unknown as DocumentNode<MeQuery, MeQueryVariables>
export const UserDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'User' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'user' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'address' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'address' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'challenge' } }, { kind: 'Field', name: { kind: 'Name', value: 'isAuthenticated' } }] } }] } }] } as unknown as DocumentNode<UserQuery, UserQueryVariables>
export const CountdownDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'subscription', name: { kind: 'Name', value: 'Countdown' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countdown' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'from' }, value: { kind: 'IntValue', value: '10' } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' } }] } }] } }] } as unknown as DocumentNode<CountdownSubscription, CountdownSubscriptionVariables>
export const RandomDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'subscription', name: { kind: 'Name', value: 'Random' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'random' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' } }] } }] } }] } as unknown as DocumentNode<RandomSubscription, RandomSubscriptionVariables>
export const RequestsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'subscription', name: { kind: 'Name', value: 'Requests' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'requests' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }] } }] } }] } as unknown as DocumentNode<RequestsSubscription, RequestsSubscriptionVariables>
