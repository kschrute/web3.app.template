import * as Apollo from '@apollo/client'
import { gql } from '@apollo/client'
import * as React from 'react'
import * as ApolloReactComponents from '@apollo/client/react/components'

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
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

export type ProjectsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProjectsQuery = { __typename?: 'Query', projects: { __typename?: 'QueryProjectsConnection', pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'QueryProjectsConnectionEdge', cursor: string, node: { __typename?: 'Project', id: number, title: string, isActive: boolean, createdAt: Date | string } } | null> } };

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


export const BroadcastDocument = gql`
    mutation Broadcast {
  broadcast {
    value
  }
}
    `;
export type BroadcastMutationFn = Apollo.MutationFunction<BroadcastMutation, BroadcastMutationVariables>;
export type BroadcastComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<BroadcastMutation, BroadcastMutationVariables>, 'mutation'>;

    export const BroadcastComponent = (props: BroadcastComponentProps) => (
      <ApolloReactComponents.Mutation<BroadcastMutation, BroadcastMutationVariables> mutation={BroadcastDocument} {...props} />
    );


/**
 * __useBroadcastMutation__
 *
 * To run a mutation, you first call `useBroadcastMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBroadcastMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [broadcastMutation, { data, loading, error }] = useBroadcastMutation({
 *   variables: {
 *   },
 * });
 */
export function useBroadcastMutation(baseOptions?: Apollo.MutationHookOptions<BroadcastMutation, BroadcastMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BroadcastMutation, BroadcastMutationVariables>(BroadcastDocument, options);
      }
export type BroadcastMutationHookResult = ReturnType<typeof useBroadcastMutation>;
export type BroadcastMutationResult = Apollo.MutationResult<BroadcastMutation>;
export type BroadcastMutationOptions = Apollo.BaseMutationOptions<BroadcastMutation, BroadcastMutationVariables>;
export const RequestDocument = gql`
    mutation Request {
  request {
    count
  }
}
    `;
export type RequestMutationFn = Apollo.MutationFunction<RequestMutation, RequestMutationVariables>;
export type RequestComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RequestMutation, RequestMutationVariables>, 'mutation'>;

    export const RequestComponent = (props: RequestComponentProps) => (
      <ApolloReactComponents.Mutation<RequestMutation, RequestMutationVariables> mutation={RequestDocument} {...props} />
    );


/**
 * __useRequestMutation__
 *
 * To run a mutation, you first call `useRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestMutation, { data, loading, error }] = useRequestMutation({
 *   variables: {
 *   },
 * });
 */
export function useRequestMutation(baseOptions?: Apollo.MutationHookOptions<RequestMutation, RequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestMutation, RequestMutationVariables>(RequestDocument, options);
      }
export type RequestMutationHookResult = ReturnType<typeof useRequestMutation>;
export type RequestMutationResult = Apollo.MutationResult<RequestMutation>;
export type RequestMutationOptions = Apollo.BaseMutationOptions<RequestMutation, RequestMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($data: UserSignInInput!) {
  signin(data: $data) {
    authenticated
    token
    user {
      address
      challenge
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;
export type SignInComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignInMutation, SignInMutationVariables>, 'mutation'>;

    export const SignInComponent = (props: SignInComponentProps) => (
      <ApolloReactComponents.Mutation<SignInMutation, SignInMutationVariables> mutation={SignInDocument} {...props} />
    );


/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const AuthDocument = gql`
    query Auth($data: UserAuthInput!) {
  auth(data: $data) {
    authenticated
    challenge
  }
}
    `;
export type AuthComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AuthQuery, AuthQueryVariables>, 'query'> & ({ variables: AuthQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AuthComponent = (props: AuthComponentProps) => (
      <ApolloReactComponents.Query<AuthQuery, AuthQueryVariables> query={AuthDocument} {...props} />
    );


/**
 * __useAuthQuery__
 *
 * To run a query within a React component, call `useAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAuthQuery(baseOptions: Apollo.QueryHookOptions<AuthQuery, AuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthQuery, AuthQueryVariables>(AuthDocument, options);
      }
export function useAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthQuery, AuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthQuery, AuthQueryVariables>(AuthDocument, options);
        }
export type AuthQueryHookResult = ReturnType<typeof useAuthQuery>;
export type AuthLazyQueryHookResult = ReturnType<typeof useAuthLazyQuery>;
export type AuthQueryResult = Apollo.QueryResult<AuthQuery, AuthQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    address
    isAuthenticated
    createdAt
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );


/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ProjectsDocument = gql`
    query Projects($take: Int, $cursor: ID) {
  projects(first: $take, after: $cursor) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        title
        isActive
        createdAt
      }
    }
  }
}
    `;
export type ProjectsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProjectsQuery, ProjectsQueryVariables>, 'query'>;

    export const ProjectsComponent = (props: ProjectsComponentProps) => (
      <ApolloReactComponents.Query<ProjectsQuery, ProjectsQueryVariables> query={ProjectsDocument} {...props} />
    );


/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;
export const UserDocument = gql`
    query User($address: String!) {
  user(address: $address) {
    challenge
    isAuthenticated
  }
}
    `;
export type UserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserQuery, UserQueryVariables>, 'query'> & ({ variables: UserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserComponent = (props: UserComponentProps) => (
      <ApolloReactComponents.Query<UserQuery, UserQueryVariables> query={UserDocument} {...props} />
    );


/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const CountdownDocument = gql`
    subscription Countdown {
  countdown(from: 10) {
    value
  }
}
    `;
export type CountdownComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<CountdownSubscription, CountdownSubscriptionVariables>, 'subscription'>;

    export const CountdownComponent = (props: CountdownComponentProps) => (
      <ApolloReactComponents.Subscription<CountdownSubscription, CountdownSubscriptionVariables> subscription={CountdownDocument} {...props} />
    );


/**
 * __useCountdownSubscription__
 *
 * To run a query within a React component, call `useCountdownSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCountdownSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountdownSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCountdownSubscription(baseOptions?: Apollo.SubscriptionHookOptions<CountdownSubscription, CountdownSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CountdownSubscription, CountdownSubscriptionVariables>(CountdownDocument, options);
      }
export type CountdownSubscriptionHookResult = ReturnType<typeof useCountdownSubscription>;
export type CountdownSubscriptionResult = Apollo.SubscriptionResult<CountdownSubscription>;
export const RandomDocument = gql`
    subscription Random {
  random {
    value
  }
}
    `;
export type RandomComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<RandomSubscription, RandomSubscriptionVariables>, 'subscription'>;

    export const RandomComponent = (props: RandomComponentProps) => (
      <ApolloReactComponents.Subscription<RandomSubscription, RandomSubscriptionVariables> subscription={RandomDocument} {...props} />
    );


/**
 * __useRandomSubscription__
 *
 * To run a query within a React component, call `useRandomSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRandomSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRandomSubscription({
 *   variables: {
 *   },
 * });
 */
export function useRandomSubscription(baseOptions?: Apollo.SubscriptionHookOptions<RandomSubscription, RandomSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<RandomSubscription, RandomSubscriptionVariables>(RandomDocument, options);
      }
export type RandomSubscriptionHookResult = ReturnType<typeof useRandomSubscription>;
export type RandomSubscriptionResult = Apollo.SubscriptionResult<RandomSubscription>;
export const RequestsDocument = gql`
    subscription Requests {
  requests {
    count
  }
}
    `;
export type RequestsComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<RequestsSubscription, RequestsSubscriptionVariables>, 'subscription'>;

    export const RequestsComponent = (props: RequestsComponentProps) => (
      <ApolloReactComponents.Subscription<RequestsSubscription, RequestsSubscriptionVariables> subscription={RequestsDocument} {...props} />
    );


/**
 * __useRequestsSubscription__
 *
 * To run a query within a React component, call `useRequestsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRequestsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRequestsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useRequestsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<RequestsSubscription, RequestsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<RequestsSubscription, RequestsSubscriptionVariables>(RequestsDocument, options);
      }
export type RequestsSubscriptionHookResult = ReturnType<typeof useRequestsSubscription>;
export type RequestsSubscriptionResult = Apollo.SubscriptionResult<RequestsSubscription>;
