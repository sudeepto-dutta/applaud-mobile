/* @flow */

import {type GraphQLResolveInfo} from 'graphql';
export type $RequireFields<Origin, Keys> = $Diff<Origin, Keys> &
  $ObjMapi<Keys, <Key>(k: Key) => $NonMaybeType<$ElementType<Origin, Key>>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {|
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: Date,
  Date: string,
  Time: string,
|};

export type Applaud = {|
  __typename?: 'Applaud',
  id: $ElementType<Scalars, 'Int'>,
  balance: $ElementType<Scalars, 'Int'>,
  allocatedToUserId: $ElementType<Scalars, 'Int'>,
  allocatedByUserId: $ElementType<Scalars, 'Int'>,
  message?: ?$ElementType<Scalars, 'String'>,
  type: $ElementType<Scalars, 'String'>,
  createdAt: $ElementType<Scalars, 'DateTime'>,
|};

export type ApplaudBalance = {|
  __typename?: 'ApplaudBalance',
  id: $ElementType<Scalars, 'Int'>,
  balance: $ElementType<Scalars, 'Int'>,
  userId: $ElementType<Scalars, 'Int'>,
  allocatedAt: $ElementType<Scalars, 'DateTime'>,
|};

export type ApplaudConnection = {|
  __typename?: 'ApplaudConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  pageInfo?: ?PageInfo,
  nodes?: ?Array<Applaud>,
|};

export const ApplaudSortValues = Object.freeze({
  IdAsc: 'ID_ASC',
  IdDesc: 'ID_DESC',
});

export type ApplaudSort = $Values<typeof ApplaudSortValues>;

export type Constant = {|
  __typename?: 'Constant',
  id: $ElementType<Scalars, 'Int'>,
  name: $ElementType<Scalars, 'String'>,
  value: $ElementType<Scalars, 'String'>,
|};

export type ConstantConnection = {|
  __typename?: 'ConstantConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  pageInfo?: ?PageInfo,
  nodes?: ?Array<Constant>,
|};

export const ConstantSortValues = Object.freeze({
  IdAsc: 'ID_ASC',
  IdDesc: 'ID_DESC',
});

export type ConstantSort = $Values<typeof ConstantSortValues>;

export type CreateApplaudInput = {|
  balance: $ElementType<Scalars, 'Int'>,
  allocatedToUserId: $ElementType<Scalars, 'Int'>,
  allocatedByUserId: $ElementType<Scalars, 'Int'>,
  message?: ?$ElementType<Scalars, 'String'>,
  type: $ElementType<Scalars, 'String'>,
|};

export type CreateApplaudResponse = {|
  __typename?: 'CreateApplaudResponse',
  applaud: Applaud,
|};

export type CreateDepartmentInput = {|
  name: $ElementType<Scalars, 'String'>,
  description: $ElementType<Scalars, 'String'>,
|};

export type CreateDepartmentResponse = {|
  __typename?: 'CreateDepartmentResponse',
  department: Department,
|};

export type CreateDepartmentTeamInput = {|
  departmentId: $ElementType<Scalars, 'Int'>,
  teamId: $ElementType<Scalars, 'Int'>,
|};

export type CreateDepartmentTeamResponse = {|
  __typename?: 'CreateDepartmentTeamResponse',
  departmentTeam: DepartmentTeam,
|};

export type CreateTeamInput = {|
  name: $ElementType<Scalars, 'String'>,
  description: $ElementType<Scalars, 'String'>,
|};

export type CreateTeamResponse = {|
  __typename?: 'CreateTeamResponse',
  team: Team,
|};

export type CreateUserInput = {|
  firstName: $ElementType<Scalars, 'String'>,
  lastName: $ElementType<Scalars, 'String'>,
  email: $ElementType<Scalars, 'String'>,
|};

export type CreateUserResponse = {|
  __typename?: 'CreateUserResponse',
  user?: ?User,
|};

export type CreateUserRoleInput = {|
  userId: $ElementType<Scalars, 'Int'>,
  roleId: $ElementType<Scalars, 'String'>,
|};

export type CreateUserRoleResponse = {|
  __typename?: 'CreateUserRoleResponse',
  userRole?: ?UserRole,
|};

export type CreateUserTeamInput = {|
  userId: $ElementType<Scalars, 'Int'>,
  teamId: $ElementType<Scalars, 'Int'>,
|};

export type CreateUserTeamResponse = {|
  __typename?: 'CreateUserTeamResponse',
  userTeam: UserTeam,
|};

export type Department = {|
  __typename?: 'Department',
  id: $ElementType<Scalars, 'Int'>,
  name: $ElementType<Scalars, 'String'>,
  description: $ElementType<Scalars, 'String'>,
|};

export type DepartmentsConnection = {|
  __typename?: 'DepartmentsConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  pageInfo?: ?PageInfo,
  nodes?: ?Array<Department>,
|};

export const DepartmentsSortValues = Object.freeze({
  IdAsc: 'ID_ASC',
  IdDesc: 'ID_DESC',
});

export type DepartmentsSort = $Values<typeof DepartmentsSortValues>;

export type DepartmentTeam = {|
  __typename?: 'DepartmentTeam',
  id: $ElementType<Scalars, 'Int'>,
  departmentId: $ElementType<Scalars, 'Int'>,
  teamId: $ElementType<Scalars, 'Int'>,
  createdAt: $ElementType<Scalars, 'DateTime'>,
|};

export type DepartmentTeamsConnection = {|
  __typename?: 'DepartmentTeamsConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  pageInfo?: ?PageInfo,
  nodes?: ?Array<DepartmentTeam>,
|};

export const DepartmentTeamsSortValues = Object.freeze({
  IdAsc: 'ID_ASC',
  IdDesc: 'ID_DESC',
});

export type DepartmentTeamsSort = $Values<typeof DepartmentTeamsSortValues>;

export type LoginUserInput = {|
  googleIdToken?: ?$ElementType<Scalars, 'String'>,
  email?: ?$ElementType<Scalars, 'String'>,
  temporaryLoginCode?: ?$ElementType<Scalars, 'String'>,
  magicLink?: ?$ElementType<Scalars, 'String'>,
|};

export type LoginUserResponse = {|
  __typename?: 'LoginUserResponse',
  isLoggedIn?: ?$ElementType<Scalars, 'Boolean'>,
|};

export type LogoutUserResponse = {|
  __typename?: 'LogoutUserResponse',
  isLoggedOut: $ElementType<Scalars, 'Boolean'>,
|};

export type Mutation = {|
  __typename?: 'Mutation',
  createApplaud: CreateApplaudResponse,
  createTeam: CreateTeamResponse,
  createDepartment: CreateDepartmentResponse,
  createDepartmentTeam: CreateDepartmentTeamResponse,
  createUserTeam: CreateUserTeamResponse,
  createUser: CreateUserResponse,
  createUserRole: CreateUserRoleResponse,
  loginUser: LoginUserResponse,
  logoutUser: LogoutUserResponse,
  updateTeam: UpdateTeamResponse,
  updateDepartment: UpdateDepartmentResponse,
  updateApplaudBalance: UpdateApplaudBalanceResponse,
  updateConstants: UpdateConstantResponse,
|};

export type MutationCreateApplaudArgs = {|
  input: CreateApplaudInput,
|};

export type MutationCreateTeamArgs = {|
  input: CreateTeamInput,
|};

export type MutationCreateDepartmentArgs = {|
  input: CreateDepartmentInput,
|};

export type MutationCreateDepartmentTeamArgs = {|
  input: CreateDepartmentTeamInput,
|};

export type MutationCreateUserTeamArgs = {|
  input: CreateUserTeamInput,
|};

export type MutationCreateUserArgs = {|
  input: CreateUserInput,
|};

export type MutationCreateUserRoleArgs = {|
  input: CreateUserRoleInput,
|};

export type MutationLoginUserArgs = {|
  input: LoginUserInput,
|};

export type MutationUpdateTeamArgs = {|
  input: UpdateTeamInput,
|};

export type MutationUpdateDepartmentArgs = {|
  input: UpdateDepartmentInput,
|};

export type MutationUpdateApplaudBalanceArgs = {|
  input: UpdateApplaudBalanceInput,
|};

export type MutationUpdateConstantsArgs = {|
  input: UpdateConstantInput,
|};

export type PageInfo = {|
  __typename?: 'PageInfo',
  hasNextPage: $ElementType<Scalars, 'Boolean'>,
  hasPreviousPage: $ElementType<Scalars, 'Boolean'>,
|};

export type Query = {|
  __typename?: 'Query',
  applaud?: ?ApplaudConnection,
  department?: ?Department,
  departments?: ?DepartmentsConnection,
  roles?: ?RoleConnection,
  team?: ?Team,
  teams?: ?TeamsConnection,
  user?: ?User,
  users?: ?UserConnection,
  viewer?: ?User,
|};

export type QueryApplaudArgs = {|
  limit?: ?$ElementType<Scalars, 'Int'>,
  offset?: ?$ElementType<Scalars, 'Int'>,
  sort?: ?ApplaudSort,
  allocatedToUserId?: ?$ElementType<Scalars, 'Int'>,
  allocatedByUserId?: ?$ElementType<Scalars, 'Int'>,
|};

export type QueryDepartmentArgs = {|
  id: $ElementType<Scalars, 'Int'>,
|};

export type QueryDepartmentsArgs = {|
  limit?: ?$ElementType<Scalars, 'Int'>,
  offset?: ?$ElementType<Scalars, 'Int'>,
  sort?: ?DepartmentsSort,
  search?: ?$ElementType<Scalars, 'String'>,
|};

export type QueryTeamArgs = {|
  id: $ElementType<Scalars, 'Int'>,
|};

export type QueryTeamsArgs = {|
  limit?: ?$ElementType<Scalars, 'Int'>,
  offset?: ?$ElementType<Scalars, 'Int'>,
  sort?: ?TeamsSort,
  search?: ?$ElementType<Scalars, 'String'>,
|};

export type QueryUserArgs = {|
  id: $ElementType<Scalars, 'Int'>,
|};

export type QueryUsersArgs = {|
  limit?: ?$ElementType<Scalars, 'Int'>,
  offset?: ?$ElementType<Scalars, 'Int'>,
  sort?: ?UsersSort,
  search?: ?$ElementType<Scalars, 'String'>,
|};

export type Role = {|
  __typename?: 'Role',
  id: $ElementType<Scalars, 'String'>,
  name: $ElementType<Scalars, 'String'>,
|};

export type RoleConnection = {|
  __typename?: 'RoleConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  pageInfo?: ?PageInfo,
  nodes: Array<Role>,
|};

export type Team = {|
  __typename?: 'Team',
  id: $ElementType<Scalars, 'Int'>,
  name: $ElementType<Scalars, 'String'>,
  description: $ElementType<Scalars, 'String'>,
|};

export type TeamsConnection = {|
  __typename?: 'TeamsConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  pageInfo?: ?PageInfo,
  nodes?: ?Array<Team>,
|};

export const TeamsSortValues = Object.freeze({
  IdAsc: 'ID_ASC',
  IdDesc: 'ID_DESC',
});

export type TeamsSort = $Values<typeof TeamsSortValues>;

export type UpdateApplaudBalanceInput = {|
  coinBalanceId: $ElementType<Scalars, 'Int'>,
  balance: $ElementType<Scalars, 'Int'>,
|};

export type UpdateApplaudBalanceResponse = {|
  __typename?: 'UpdateApplaudBalanceResponse',
  applaudBalance: ApplaudBalance,
|};

export type UpdateConstantInput = {|
  constantId: $ElementType<Scalars, 'Int'>,
  name?: ?$ElementType<Scalars, 'String'>,
  value?: ?$ElementType<Scalars, 'String'>,
|};

export type UpdateConstantResponse = {|
  __typename?: 'UpdateConstantResponse',
  constant: Constant,
|};

export type UpdateDepartmentInput = {|
  departmentId: $ElementType<Scalars, 'Int'>,
  name?: ?$ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
|};

export type UpdateDepartmentResponse = {|
  __typename?: 'UpdateDepartmentResponse',
  department: Department,
|};

export type UpdateTeamInput = {|
  teamId: $ElementType<Scalars, 'Int'>,
  name?: ?$ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
|};

export type UpdateTeamResponse = {|
  __typename?: 'UpdateTeamResponse',
  team: Team,
|};

export type User = {|
  __typename?: 'User',
  id: $ElementType<Scalars, 'Int'>,
  firstName: $ElementType<Scalars, 'String'>,
  lastName: $ElementType<Scalars, 'String'>,
  email: $ElementType<Scalars, 'String'>,
|};

export type UserConnection = {|
  __typename?: 'UserConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  pageInfo?: ?PageInfo,
  nodes: Array<User>,
|};

export type UserRole = {|
  __typename?: 'UserRole',
  id: $ElementType<Scalars, 'Int'>,
  userId: $ElementType<Scalars, 'Int'>,
  roleId: $ElementType<Scalars, 'String'>,
  createdAt: $ElementType<Scalars, 'DateTime'>,
  /** relationships */
  user: User,
  role: Role,
|};

export const UsersSortValues = Object.freeze({
  IdAsc: 'ID_ASC',
  IdDesc: 'ID_DESC',
});

export type UsersSort = $Values<typeof UsersSortValues>;

export type UserTeam = {|
  __typename?: 'UserTeam',
  id: $ElementType<Scalars, 'Int'>,
  userId: $ElementType<Scalars, 'Int'>,
  teamId: $ElementType<Scalars, 'Int'>,
  createdAt: $ElementType<Scalars, 'DateTime'>,
|};

export type UserTeamsConnection = {|
  __typename?: 'UserTeamsConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  pageInfo?: ?PageInfo,
  nodes?: ?Array<UserTeam>,
|};

export const UserTeamsSortValues = Object.freeze({
  IdAsc: 'ID_ASC',
  IdDesc: 'ID_DESC',
});

export type UserTeamsSort = $Values<typeof UserTeamsSortValues>;

type $Pick<Origin: Object, Keys: Object> = $ObjMapi<
  Keys,
  <Key>(k: Key) => $ElementType<Origin, Key>,
>;

export type LoginUserMutationVariables = {};

export type LoginUserMutation = {
  ...{__typename?: 'Mutation'},
  ...{|
    loginUser: {
      ...{__typename?: 'LoginUserResponse'},
      ...$Pick<LoginUserResponse, {|isLoggedIn: *|}>,
    },
  |},
};

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<Result> | Result;

export type SubscriptionSubscribeFn<Result, Parent, Context, Args> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo,
) => AsyncIterator<Result> | Promise<AsyncIterator<Result>>;

export type SubscriptionResolveFn<Result, Parent, Context, Args> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo,
) => Result | Promise<Result>;

export interface SubscriptionSubscriberObject<
  Result,
  Key: string,
  Parent,
  Context,
  Args,
> {
  subscribe: SubscriptionSubscribeFn<
    {[key: Key]: Result},
    Parent,
    Context,
    Args,
  >;
  resolve?: SubscriptionResolveFn<Result, {[key: Key]: Result}, Context, Args>;
}

export interface SubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe: SubscriptionSubscribeFn<mixed, Parent, Context, Args>;
  resolve: SubscriptionResolveFn<Result, mixed, Context, Args>;
}

export type SubscriptionObject<Result, Key: string, Parent, Context, Args> =
  | SubscriptionSubscriberObject<Result, Key, Parent, Context, Args>
  | SubscriptionResolverObject<Result, Parent, Context, Args>;

export type SubscriptionResolver<
  Result,
  Key: string,
  Parent = {},
  Context = {},
  Args = {},
> =
  | ((
      ...args: Array<any>
    ) => SubscriptionObject<Result, Key, Parent, Context, Args>)
  | SubscriptionObject<Result, Key, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo,
) => ?Types;

export type isTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo,
) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  Result = {},
  Parent = {},
  Args = {},
  Context = {},
> = (
  next: NextResolverFn<Result>,
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo,
) => Result | Promise<Result>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Int: ResolverTypeWrapper<$ElementType<Scalars, 'Int'>>,
  ApplaudSort: ApplaudSort,
  ApplaudConnection: ResolverTypeWrapper<ApplaudConnection>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  Boolean: ResolverTypeWrapper<$ElementType<Scalars, 'Boolean'>>,
  Applaud: ResolverTypeWrapper<Applaud>,
  String: ResolverTypeWrapper<$ElementType<Scalars, 'String'>>,
  DateTime: ResolverTypeWrapper<$ElementType<Scalars, 'DateTime'>>,
  Department: ResolverTypeWrapper<Department>,
  DepartmentsSort: DepartmentsSort,
  DepartmentsConnection: ResolverTypeWrapper<DepartmentsConnection>,
  RoleConnection: ResolverTypeWrapper<RoleConnection>,
  Role: ResolverTypeWrapper<Role>,
  Team: ResolverTypeWrapper<Team>,
  TeamsSort: TeamsSort,
  TeamsConnection: ResolverTypeWrapper<TeamsConnection>,
  User: ResolverTypeWrapper<User>,
  UsersSort: UsersSort,
  UserConnection: ResolverTypeWrapper<UserConnection>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateApplaudInput: CreateApplaudInput,
  CreateApplaudResponse: ResolverTypeWrapper<CreateApplaudResponse>,
  CreateTeamInput: CreateTeamInput,
  CreateTeamResponse: ResolverTypeWrapper<CreateTeamResponse>,
  CreateDepartmentInput: CreateDepartmentInput,
  CreateDepartmentResponse: ResolverTypeWrapper<CreateDepartmentResponse>,
  CreateDepartmentTeamInput: CreateDepartmentTeamInput,
  CreateDepartmentTeamResponse: ResolverTypeWrapper<CreateDepartmentTeamResponse>,
  DepartmentTeam: ResolverTypeWrapper<DepartmentTeam>,
  CreateUserTeamInput: CreateUserTeamInput,
  CreateUserTeamResponse: ResolverTypeWrapper<CreateUserTeamResponse>,
  UserTeam: ResolverTypeWrapper<UserTeam>,
  CreateUserInput: CreateUserInput,
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>,
  CreateUserRoleInput: CreateUserRoleInput,
  CreateUserRoleResponse: ResolverTypeWrapper<CreateUserRoleResponse>,
  UserRole: ResolverTypeWrapper<UserRole>,
  LoginUserInput: LoginUserInput,
  LoginUserResponse: ResolverTypeWrapper<LoginUserResponse>,
  LogoutUserResponse: ResolverTypeWrapper<LogoutUserResponse>,
  UpdateTeamInput: UpdateTeamInput,
  UpdateTeamResponse: ResolverTypeWrapper<UpdateTeamResponse>,
  UpdateDepartmentInput: UpdateDepartmentInput,
  UpdateDepartmentResponse: ResolverTypeWrapper<UpdateDepartmentResponse>,
  UpdateApplaudBalanceInput: UpdateApplaudBalanceInput,
  UpdateApplaudBalanceResponse: ResolverTypeWrapper<UpdateApplaudBalanceResponse>,
  ApplaudBalance: ResolverTypeWrapper<ApplaudBalance>,
  UpdateConstantInput: UpdateConstantInput,
  UpdateConstantResponse: ResolverTypeWrapper<UpdateConstantResponse>,
  Constant: ResolverTypeWrapper<Constant>,
  Date: ResolverTypeWrapper<$ElementType<Scalars, 'Date'>>,
  Time: ResolverTypeWrapper<$ElementType<Scalars, 'Time'>>,
  UserTeamsSort: UserTeamsSort,
  UserTeamsConnection: ResolverTypeWrapper<UserTeamsConnection>,
  DepartmentTeamsSort: DepartmentTeamsSort,
  DepartmentTeamsConnection: ResolverTypeWrapper<DepartmentTeamsConnection>,
  ConstantSort: ConstantSort,
  ConstantConnection: ResolverTypeWrapper<ConstantConnection>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Int: $ElementType<Scalars, 'Int'>,
  ApplaudSort: ApplaudSort,
  ApplaudConnection: ApplaudConnection,
  PageInfo: PageInfo,
  Boolean: $ElementType<Scalars, 'Boolean'>,
  Applaud: Applaud,
  String: $ElementType<Scalars, 'String'>,
  DateTime: $ElementType<Scalars, 'DateTime'>,
  Department: Department,
  DepartmentsSort: DepartmentsSort,
  DepartmentsConnection: DepartmentsConnection,
  RoleConnection: RoleConnection,
  Role: Role,
  Team: Team,
  TeamsSort: TeamsSort,
  TeamsConnection: TeamsConnection,
  User: User,
  UsersSort: UsersSort,
  UserConnection: UserConnection,
  Mutation: {},
  CreateApplaudInput: CreateApplaudInput,
  CreateApplaudResponse: CreateApplaudResponse,
  CreateTeamInput: CreateTeamInput,
  CreateTeamResponse: CreateTeamResponse,
  CreateDepartmentInput: CreateDepartmentInput,
  CreateDepartmentResponse: CreateDepartmentResponse,
  CreateDepartmentTeamInput: CreateDepartmentTeamInput,
  CreateDepartmentTeamResponse: CreateDepartmentTeamResponse,
  DepartmentTeam: DepartmentTeam,
  CreateUserTeamInput: CreateUserTeamInput,
  CreateUserTeamResponse: CreateUserTeamResponse,
  UserTeam: UserTeam,
  CreateUserInput: CreateUserInput,
  CreateUserResponse: CreateUserResponse,
  CreateUserRoleInput: CreateUserRoleInput,
  CreateUserRoleResponse: CreateUserRoleResponse,
  UserRole: UserRole,
  LoginUserInput: LoginUserInput,
  LoginUserResponse: LoginUserResponse,
  LogoutUserResponse: LogoutUserResponse,
  UpdateTeamInput: UpdateTeamInput,
  UpdateTeamResponse: UpdateTeamResponse,
  UpdateDepartmentInput: UpdateDepartmentInput,
  UpdateDepartmentResponse: UpdateDepartmentResponse,
  UpdateApplaudBalanceInput: UpdateApplaudBalanceInput,
  UpdateApplaudBalanceResponse: UpdateApplaudBalanceResponse,
  ApplaudBalance: ApplaudBalance,
  UpdateConstantInput: UpdateConstantInput,
  UpdateConstantResponse: UpdateConstantResponse,
  Constant: Constant,
  Date: $ElementType<Scalars, 'Date'>,
  Time: $ElementType<Scalars, 'Time'>,
  UserTeamsSort: UserTeamsSort,
  UserTeamsConnection: UserTeamsConnection,
  DepartmentTeamsSort: DepartmentTeamsSort,
  DepartmentTeamsConnection: DepartmentTeamsConnection,
  ConstantSort: ConstantSort,
  ConstantConnection: ConstantConnection,
};

export type ApplaudResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'Applaud'>,
> = {
  id?: Resolver<$ElementType<ResolversTypes, 'Int'>, ParentType, ContextType>,
  balance?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  allocatedToUserId?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  allocatedByUserId?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  message?: Resolver<
    ?$ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  type?: Resolver<
    $ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  createdAt?: Resolver<
    $ElementType<ResolversTypes, 'DateTime'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ApplaudBalanceResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'ApplaudBalance'>,
> = {
  id?: Resolver<$ElementType<ResolversTypes, 'Int'>, ParentType, ContextType>,
  balance?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  userId?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  allocatedAt?: Resolver<
    $ElementType<ResolversTypes, 'DateTime'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ApplaudConnectionResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'ApplaudConnection'>,
> = {
  totalCount?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  pageInfo?: Resolver<
    ?$ElementType<ResolversTypes, 'PageInfo'>,
    ParentType,
    ContextType,
  >,
  nodes?: Resolver<
    ?Array<$ElementType<ResolversTypes, 'Applaud'>>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ConstantResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'Constant'>,
> = {
  id?: Resolver<$ElementType<ResolversTypes, 'Int'>, ParentType, ContextType>,
  name?: Resolver<
    $ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  value?: Resolver<
    $ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ConstantConnectionResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'ConstantConnection'>,
> = {
  totalCount?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  pageInfo?: Resolver<
    ?$ElementType<ResolversTypes, 'PageInfo'>,
    ParentType,
    ContextType,
  >,
  nodes?: Resolver<
    ?Array<$ElementType<ResolversTypes, 'Constant'>>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateApplaudResponseResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'CreateApplaudResponse'>,
> = {
  applaud?: Resolver<
    $ElementType<ResolversTypes, 'Applaud'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateDepartmentResponseResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'CreateDepartmentResponse'>,
> = {
  department?: Resolver<
    $ElementType<ResolversTypes, 'Department'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateDepartmentTeamResponseResolvers<
  ContextType = any,
  ParentType = $ElementType<
    ResolversParentTypes,
    'CreateDepartmentTeamResponse',
  >,
> = {
  departmentTeam?: Resolver<
    $ElementType<ResolversTypes, 'DepartmentTeam'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateTeamResponseResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'CreateTeamResponse'>,
> = {
  team?: Resolver<
    $ElementType<ResolversTypes, 'Team'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateUserResponseResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'CreateUserResponse'>,
> = {
  user?: Resolver<
    ?$ElementType<ResolversTypes, 'User'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateUserRoleResponseResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'CreateUserRoleResponse'>,
> = {
  userRole?: Resolver<
    ?$ElementType<ResolversTypes, 'UserRole'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateUserTeamResponseResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'CreateUserTeamResponse'>,
> = {
  userTeam?: Resolver<
    $ElementType<ResolversTypes, 'UserTeam'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DateScalarConfig = {
  ...GraphQLScalarTypeConfig<$ElementType<ResolversTypes, 'Date'>, any>,
  name: 'Date',
};

export type DateTimeScalarConfig = {
  ...GraphQLScalarTypeConfig<$ElementType<ResolversTypes, 'DateTime'>, any>,
  name: 'DateTime',
};

export type DepartmentResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'Department'>,
> = {
  id?: Resolver<$ElementType<ResolversTypes, 'Int'>, ParentType, ContextType>,
  name?: Resolver<
    $ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  description?: Resolver<
    $ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DepartmentsConnectionResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'DepartmentsConnection'>,
> = {
  totalCount?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  pageInfo?: Resolver<
    ?$ElementType<ResolversTypes, 'PageInfo'>,
    ParentType,
    ContextType,
  >,
  nodes?: Resolver<
    ?Array<$ElementType<ResolversTypes, 'Department'>>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DepartmentTeamResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'DepartmentTeam'>,
> = {
  id?: Resolver<$ElementType<ResolversTypes, 'Int'>, ParentType, ContextType>,
  departmentId?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  teamId?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  createdAt?: Resolver<
    $ElementType<ResolversTypes, 'DateTime'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DepartmentTeamsConnectionResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'DepartmentTeamsConnection'>,
> = {
  totalCount?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  pageInfo?: Resolver<
    ?$ElementType<ResolversTypes, 'PageInfo'>,
    ParentType,
    ContextType,
  >,
  nodes?: Resolver<
    ?Array<$ElementType<ResolversTypes, 'DepartmentTeam'>>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type LoginUserResponseResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'LoginUserResponse'>,
> = {
  isLoggedIn?: Resolver<
    ?$ElementType<ResolversTypes, 'Boolean'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type LogoutUserResponseResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'LogoutUserResponse'>,
> = {
  isLoggedOut?: Resolver<
    $ElementType<ResolversTypes, 'Boolean'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'Mutation'>,
> = {
  createApplaud?: Resolver<
    $ElementType<ResolversTypes, 'CreateApplaudResponse'>,
    ParentType,
    ContextType,
    $RequireFields<MutationCreateApplaudArgs, {input: *}>,
  >,
  createTeam?: Resolver<
    $ElementType<ResolversTypes, 'CreateTeamResponse'>,
    ParentType,
    ContextType,
    $RequireFields<MutationCreateTeamArgs, {input: *}>,
  >,
  createDepartment?: Resolver<
    $ElementType<ResolversTypes, 'CreateDepartmentResponse'>,
    ParentType,
    ContextType,
    $RequireFields<MutationCreateDepartmentArgs, {input: *}>,
  >,
  createDepartmentTeam?: Resolver<
    $ElementType<ResolversTypes, 'CreateDepartmentTeamResponse'>,
    ParentType,
    ContextType,
    $RequireFields<MutationCreateDepartmentTeamArgs, {input: *}>,
  >,
  createUserTeam?: Resolver<
    $ElementType<ResolversTypes, 'CreateUserTeamResponse'>,
    ParentType,
    ContextType,
    $RequireFields<MutationCreateUserTeamArgs, {input: *}>,
  >,
  createUser?: Resolver<
    $ElementType<ResolversTypes, 'CreateUserResponse'>,
    ParentType,
    ContextType,
    $RequireFields<MutationCreateUserArgs, {input: *}>,
  >,
  createUserRole?: Resolver<
    $ElementType<ResolversTypes, 'CreateUserRoleResponse'>,
    ParentType,
    ContextType,
    $RequireFields<MutationCreateUserRoleArgs, {input: *}>,
  >,
  loginUser?: Resolver<
    $ElementType<ResolversTypes, 'LoginUserResponse'>,
    ParentType,
    ContextType,
    $RequireFields<MutationLoginUserArgs, {input: *}>,
  >,
  logoutUser?: Resolver<
    $ElementType<ResolversTypes, 'LogoutUserResponse'>,
    ParentType,
    ContextType,
  >,
  updateTeam?: Resolver<
    $ElementType<ResolversTypes, 'UpdateTeamResponse'>,
    ParentType,
    ContextType,
    $RequireFields<MutationUpdateTeamArgs, {input: *}>,
  >,
  updateDepartment?: Resolver<
    $ElementType<ResolversTypes, 'UpdateDepartmentResponse'>,
    ParentType,
    ContextType,
    $RequireFields<MutationUpdateDepartmentArgs, {input: *}>,
  >,
  updateApplaudBalance?: Resolver<
    $ElementType<ResolversTypes, 'UpdateApplaudBalanceResponse'>,
    ParentType,
    ContextType,
    $RequireFields<MutationUpdateApplaudBalanceArgs, {input: *}>,
  >,
  updateConstants?: Resolver<
    $ElementType<ResolversTypes, 'UpdateConstantResponse'>,
    ParentType,
    ContextType,
    $RequireFields<MutationUpdateConstantsArgs, {input: *}>,
  >,
};

export type PageInfoResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'PageInfo'>,
> = {
  hasNextPage?: Resolver<
    $ElementType<ResolversTypes, 'Boolean'>,
    ParentType,
    ContextType,
  >,
  hasPreviousPage?: Resolver<
    $ElementType<ResolversTypes, 'Boolean'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'Query'>,
> = {
  applaud?: Resolver<
    ?$ElementType<ResolversTypes, 'ApplaudConnection'>,
    ParentType,
    ContextType,
    QueryApplaudArgs,
  >,
  department?: Resolver<
    ?$ElementType<ResolversTypes, 'Department'>,
    ParentType,
    ContextType,
    $RequireFields<QueryDepartmentArgs, {id: *}>,
  >,
  departments?: Resolver<
    ?$ElementType<ResolversTypes, 'DepartmentsConnection'>,
    ParentType,
    ContextType,
    QueryDepartmentsArgs,
  >,
  roles?: Resolver<
    ?$ElementType<ResolversTypes, 'RoleConnection'>,
    ParentType,
    ContextType,
  >,
  team?: Resolver<
    ?$ElementType<ResolversTypes, 'Team'>,
    ParentType,
    ContextType,
    $RequireFields<QueryTeamArgs, {id: *}>,
  >,
  teams?: Resolver<
    ?$ElementType<ResolversTypes, 'TeamsConnection'>,
    ParentType,
    ContextType,
    QueryTeamsArgs,
  >,
  user?: Resolver<
    ?$ElementType<ResolversTypes, 'User'>,
    ParentType,
    ContextType,
    $RequireFields<QueryUserArgs, {id: *}>,
  >,
  users?: Resolver<
    ?$ElementType<ResolversTypes, 'UserConnection'>,
    ParentType,
    ContextType,
    QueryUsersArgs,
  >,
  viewer?: Resolver<
    ?$ElementType<ResolversTypes, 'User'>,
    ParentType,
    ContextType,
  >,
};

export type RoleResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'Role'>,
> = {
  id?: Resolver<
    $ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  name?: Resolver<
    $ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RoleConnectionResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'RoleConnection'>,
> = {
  totalCount?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  pageInfo?: Resolver<
    ?$ElementType<ResolversTypes, 'PageInfo'>,
    ParentType,
    ContextType,
  >,
  nodes?: Resolver<
    Array<$ElementType<ResolversTypes, 'Role'>>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TeamResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'Team'>,
> = {
  id?: Resolver<$ElementType<ResolversTypes, 'Int'>, ParentType, ContextType>,
  name?: Resolver<
    $ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  description?: Resolver<
    $ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TeamsConnectionResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'TeamsConnection'>,
> = {
  totalCount?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  pageInfo?: Resolver<
    ?$ElementType<ResolversTypes, 'PageInfo'>,
    ParentType,
    ContextType,
  >,
  nodes?: Resolver<
    ?Array<$ElementType<ResolversTypes, 'Team'>>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TimeScalarConfig = {
  ...GraphQLScalarTypeConfig<$ElementType<ResolversTypes, 'Time'>, any>,
  name: 'Time',
};

export type UpdateApplaudBalanceResponseResolvers<
  ContextType = any,
  ParentType = $ElementType<
    ResolversParentTypes,
    'UpdateApplaudBalanceResponse',
  >,
> = {
  applaudBalance?: Resolver<
    $ElementType<ResolversTypes, 'ApplaudBalance'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateConstantResponseResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'UpdateConstantResponse'>,
> = {
  constant?: Resolver<
    $ElementType<ResolversTypes, 'Constant'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateDepartmentResponseResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'UpdateDepartmentResponse'>,
> = {
  department?: Resolver<
    $ElementType<ResolversTypes, 'Department'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateTeamResponseResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'UpdateTeamResponse'>,
> = {
  team?: Resolver<
    $ElementType<ResolversTypes, 'Team'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'User'>,
> = {
  id?: Resolver<$ElementType<ResolversTypes, 'Int'>, ParentType, ContextType>,
  firstName?: Resolver<
    $ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  lastName?: Resolver<
    $ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  email?: Resolver<
    $ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserConnectionResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'UserConnection'>,
> = {
  totalCount?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  pageInfo?: Resolver<
    ?$ElementType<ResolversTypes, 'PageInfo'>,
    ParentType,
    ContextType,
  >,
  nodes?: Resolver<
    Array<$ElementType<ResolversTypes, 'User'>>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserRoleResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'UserRole'>,
> = {
  id?: Resolver<$ElementType<ResolversTypes, 'Int'>, ParentType, ContextType>,
  userId?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  roleId?: Resolver<
    $ElementType<ResolversTypes, 'String'>,
    ParentType,
    ContextType,
  >,
  createdAt?: Resolver<
    $ElementType<ResolversTypes, 'DateTime'>,
    ParentType,
    ContextType,
  >,
  user?: Resolver<
    $ElementType<ResolversTypes, 'User'>,
    ParentType,
    ContextType,
  >,
  role?: Resolver<
    $ElementType<ResolversTypes, 'Role'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserTeamResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'UserTeam'>,
> = {
  id?: Resolver<$ElementType<ResolversTypes, 'Int'>, ParentType, ContextType>,
  userId?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  teamId?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  createdAt?: Resolver<
    $ElementType<ResolversTypes, 'DateTime'>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserTeamsConnectionResolvers<
  ContextType = any,
  ParentType = $ElementType<ResolversParentTypes, 'UserTeamsConnection'>,
> = {
  totalCount?: Resolver<
    $ElementType<ResolversTypes, 'Int'>,
    ParentType,
    ContextType,
  >,
  pageInfo?: Resolver<
    ?$ElementType<ResolversTypes, 'PageInfo'>,
    ParentType,
    ContextType,
  >,
  nodes?: Resolver<
    ?Array<$ElementType<ResolversTypes, 'UserTeam'>>,
    ParentType,
    ContextType,
  >,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Applaud?: ApplaudResolvers<ContextType>,
  ApplaudBalance?: ApplaudBalanceResolvers<ContextType>,
  ApplaudConnection?: ApplaudConnectionResolvers<ContextType>,
  Constant?: ConstantResolvers<ContextType>,
  ConstantConnection?: ConstantConnectionResolvers<ContextType>,
  CreateApplaudResponse?: CreateApplaudResponseResolvers<ContextType>,
  CreateDepartmentResponse?: CreateDepartmentResponseResolvers<ContextType>,
  CreateDepartmentTeamResponse?: CreateDepartmentTeamResponseResolvers<ContextType>,
  CreateTeamResponse?: CreateTeamResponseResolvers<ContextType>,
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>,
  CreateUserRoleResponse?: CreateUserRoleResponseResolvers<ContextType>,
  CreateUserTeamResponse?: CreateUserTeamResponseResolvers<ContextType>,
  Date?: GraphQLScalarType<>,
  DateTime?: GraphQLScalarType<>,
  Department?: DepartmentResolvers<ContextType>,
  DepartmentsConnection?: DepartmentsConnectionResolvers<ContextType>,
  DepartmentTeam?: DepartmentTeamResolvers<ContextType>,
  DepartmentTeamsConnection?: DepartmentTeamsConnectionResolvers<ContextType>,
  LoginUserResponse?: LoginUserResponseResolvers<ContextType>,
  LogoutUserResponse?: LogoutUserResponseResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  PageInfo?: PageInfoResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Role?: RoleResolvers<ContextType>,
  RoleConnection?: RoleConnectionResolvers<ContextType>,
  Team?: TeamResolvers<ContextType>,
  TeamsConnection?: TeamsConnectionResolvers<ContextType>,
  Time?: GraphQLScalarType<>,
  UpdateApplaudBalanceResponse?: UpdateApplaudBalanceResponseResolvers<ContextType>,
  UpdateConstantResponse?: UpdateConstantResponseResolvers<ContextType>,
  UpdateDepartmentResponse?: UpdateDepartmentResponseResolvers<ContextType>,
  UpdateTeamResponse?: UpdateTeamResponseResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  UserConnection?: UserConnectionResolvers<ContextType>,
  UserRole?: UserRoleResolvers<ContextType>,
  UserTeam?: UserTeamResolvers<ContextType>,
  UserTeamsConnection?: UserTeamsConnectionResolvers<ContextType>,
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
