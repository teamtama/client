import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Board = {
  __typename?: 'Board';
  category: BoardCategory;
  comments: Array<BoardComment>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  likes: Array<BoardLike>;
  thumbnail?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export enum BoardCategory {
  All = 'ALL',
  Fq = 'FQ',
  Free = 'FREE',
  Job = 'JOB',
  Trade = 'TRADE'
}

export type BoardComment = {
  __typename?: 'BoardComment';
  board: Board;
  boardId: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type BoardEdge = {
  __typename?: 'BoardEdge';
  cursor: Scalars['String'];
  node: Board;
};

export type BoardLike = {
  __typename?: 'BoardLike';
  board: Board;
  boardId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type BoardPageInfo = {
  __typename?: 'BoardPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['String']>;
};

export type CreateBoardCommentInput = {
  boardId: Scalars['String'];
  body: Scalars['String'];
};

export type CreateBoardInput = {
  category: BoardCategory;
  description: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateDetailInput = {
  company: Scalars['String'];
  experience: Scalars['Float'];
  introduce: Scalars['String'];
  position: Scalars['String'];
  startDate: Scalars['DateTime'];
  status: Scalars['Boolean'];
};

export type CreateNoticeInput = {
  category: NoticeCategory;
  description: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateSkillInput = {
  name: Scalars['String'];
};

export type CreateSnsInput = {
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  kakaotalk?: Maybe<Scalars['String']>;
  line?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type CreateUserSkillInput = {
  skillId: Scalars['String'];
};


export type Detail = {
  __typename?: 'Detail';
  company: Scalars['String'];
  experience: Scalars['Float'];
  id: Scalars['ID'];
  introduce: Scalars['String'];
  position: Scalars['String'];
  startDate: Scalars['DateTime'];
  status: Scalars['Boolean'];
  user: User;
  userId: Scalars['String'];
};

export type ForgotEmailInput = {
  username: Scalars['String'];
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type GetBoardListOutput = {
  __typename?: 'GetBoardListOutput';
  edges?: Maybe<Array<BoardEdge>>;
  pageInfo?: Maybe<BoardPageInfo>;
};

export type GetNoticeListOutput = {
  __typename?: 'GetNoticeListOutput';
  edges?: Maybe<Array<NoticeEdge>>;
  pageInfo?: Maybe<NoticePageInfo>;
};

export type GoogleLoginInput = {
  tokenId: Scalars['String'];
};

export type GoogleRegisterInput = {
  tokenId: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard: Board;
  createBoardComment: BoardComment;
  createDetail: Scalars['String'];
  createNotice: Notice;
  createSkill: Scalars['String'];
  createSns: Scalars['String'];
  createUserSkill: Scalars['String'];
  deleteBoard: Scalars['String'];
  deleteNotice: Notice;
  deleteUserSkill: Scalars['String'];
  forgotEmail: User;
  forgotPassword: Scalars['String'];
  googleLogin: User;
  googleRegister: User;
  like: Scalars['String'];
  localLogin: User;
  localLogout: Scalars['String'];
  login: LoginOutput;
  register: User;
  resetPassword: User;
  subscribe: UserSubscription;
  unlike: Scalars['String'];
  unsubscribe: Scalars['String'];
  updateBoard: Board;
  updateBoardComment: BoardComment;
  updateDetail: Scalars['String'];
  updateNotice: Notice;
  updateSns: Scalars['String'];
  updateUser: Scalars['String'];
  uploadNoticeImage: Scalars['String'];
};


export type MutationCreateBoardArgs = {
  input: CreateBoardInput;
};


export type MutationCreateBoardCommentArgs = {
  input: CreateBoardCommentInput;
};


export type MutationCreateDetailArgs = {
  input: CreateDetailInput;
};


export type MutationCreateNoticeArgs = {
  input: CreateNoticeInput;
};


export type MutationCreateSkillArgs = {
  input: CreateSkillInput;
};


export type MutationCreateSnsArgs = {
  input: CreateSnsInput;
};


export type MutationCreateUserSkillArgs = {
  input: CreateUserSkillInput;
};


export type MutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type MutationDeleteNoticeArgs = {
  noticeId: Scalars['String'];
};


export type MutationDeleteUserSkillArgs = {
  skillId: Scalars['String'];
};


export type MutationForgotEmailArgs = {
  input: ForgotEmailInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationGoogleLoginArgs = {
  input: GoogleLoginInput;
};


export type MutationGoogleRegisterArgs = {
  input: GoogleRegisterInput;
};


export type MutationLikeArgs = {
  boardId: Scalars['String'];
};


export type MutationLocalLoginArgs = {
  input: LoginInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSubscribeArgs = {
  targetUserId: Scalars['String'];
};


export type MutationUnlikeArgs = {
  boardId: Scalars['String'];
};


export type MutationUnsubscribeArgs = {
  targetUserId: Scalars['String'];
};


export type MutationUpdateBoardArgs = {
  input: UpdateBoardInput;
};


export type MutationUpdateBoardCommentArgs = {
  input: UpdateBoardCommentInput;
};


export type MutationUpdateDetailArgs = {
  input: UpdateDetailInput;
};


export type MutationUpdateNoticeArgs = {
  input: UpdateNoticeInput;
};


export type MutationUpdateSnsArgs = {
  input: UpdateSnsInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUploadNoticeImageArgs = {
  file: Scalars['Upload'];
  noticeId: Scalars['String'];
};

export type Notice = {
  __typename?: 'Notice';
  category: NoticeCategory;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export enum NoticeCategory {
  Event = 'EVENT',
  Notice = 'NOTICE'
}

export type NoticeEdge = {
  __typename?: 'NoticeEdge';
  cursor: Scalars['String'];
  node: Notice;
};

export type NoticePageInfo = {
  __typename?: 'NoticePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findUser: User;
  getBoard: Board;
  getBoardList: GetBoardListOutput;
  getNotice: Notice;
  getNoticeList: GetNoticeListOutput;
  getSkillList: Array<Skill>;
  me: User;
};


export type QueryFindUserArgs = {
  userId: Scalars['String'];
};


export type QueryGetBoardArgs = {
  boardId: Scalars['String'];
};


export type QueryGetBoardListArgs = {
  after?: Maybe<Scalars['String']>;
  category?: Maybe<BoardCategory>;
  first?: Maybe<Scalars['String']>;
  keyword?: Maybe<Scalars['String']>;
};


export type QueryGetNoticeArgs = {
  noticeId: Scalars['String'];
};


export type QueryGetNoticeListArgs = {
  after?: Maybe<Scalars['String']>;
  category?: Maybe<NoticeCategory>;
  first?: Maybe<Scalars['String']>;
  keyword?: Maybe<Scalars['String']>;
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<UserRole>;
  username: Scalars['String'];
};

export type ResetPasswordInput = {
  confirmCode?: Maybe<Scalars['Float']>;
  password: Scalars['String'];
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['ID'];
  name: Scalars['String'];
  users: Array<UserSkill>;
};

export type Sns = {
  __typename?: 'Sns';
  facebook?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  instagram?: Maybe<Scalars['String']>;
  kakaotalk?: Maybe<Scalars['String']>;
  line?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['String'];
};

export type UpdateBoardCommentInput = {
  boardId?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  commentId: Scalars['String'];
};

export type UpdateBoardInput = {
  boardId: Scalars['String'];
  category?: Maybe<BoardCategory>;
  description?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateDetailInput = {
  company?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Float']>;
  introduce?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type UpdateNoticeInput = {
  category?: Maybe<NoticeCategory>;
  description?: Maybe<Scalars['String']>;
  noticeId: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateSnsInput = {
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  kakaotalk?: Maybe<Scalars['String']>;
  line?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  avatar: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  username?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  avatar: Scalars['String'];
  confirmCode?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  detail?: Maybe<Detail>;
  email: Scalars['String'];
  id: Scalars['String'];
  role: UserRole;
  skills: Array<UserSkill>;
  sns?: Maybe<Sns>;
  subscribers?: Maybe<Array<UserSubscription>>;
  subscriptions?: Maybe<Array<UserSubscription>>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export enum UserRole {
  Admin = 'Admin',
  Client = 'Client'
}

export type UserSkill = {
  __typename?: 'UserSkill';
  skill: Skill;
  skillId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type UserSubscription = {
  __typename?: 'UserSubscription';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  subscribedTo: User;
  subscribedToId: Scalars['String'];
  subscriber: User;
  subscriberId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type RegsiterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegsiterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & SimpleUserFieldsFragment
  ) }
);

export type GoogleRegisterMutationVariables = Exact<{
  input: GoogleRegisterInput;
}>;


export type GoogleRegisterMutation = (
  { __typename?: 'Mutation' }
  & { googleRegister: (
    { __typename?: 'User' }
    & SimpleUserFieldsFragment
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginOutput' }
    & Pick<LoginOutput, 'token'>
  ) }
);

export type LocalLoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LocalLoginMutation = (
  { __typename?: 'Mutation' }
  & { localLogin: (
    { __typename?: 'User' }
    & SimpleUserFieldsFragment
  ) }
);

export type GoogleLoginMutationVariables = Exact<{
  input: GoogleLoginInput;
}>;


export type GoogleLoginMutation = (
  { __typename?: 'Mutation' }
  & { googleLogin: (
    { __typename?: 'User' }
    & SimpleUserFieldsFragment
  ) }
);

export type LocalLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LocalLogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'localLogout'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & SimpleUserFieldsFragment
  ) }
);

export type FindUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FindUserQuery = (
  { __typename?: 'Query' }
  & { findUser: (
    { __typename?: 'User' }
    & { detail?: Maybe<(
      { __typename?: 'Detail' }
      & UserDetailFieldsFragment
    )>, sns?: Maybe<(
      { __typename?: 'Sns' }
      & UserSnsFieldsFragment
    )>, subscribers?: Maybe<Array<(
      { __typename?: 'UserSubscription' }
      & SubscriberFieldsFragment
    )>>, subscriptions?: Maybe<Array<(
      { __typename?: 'UserSubscription' }
      & SubscribedToFieldsFragment
    )>>, skills: Array<(
      { __typename?: 'UserSkill' }
      & UserSkillFieldsFragment
    )> }
    & SimpleUserFieldsFragment
  ) }
);

export type SubscribeMutationVariables = Exact<{
  targetUserId: Scalars['String'];
}>;


export type SubscribeMutation = (
  { __typename?: 'Mutation' }
  & { subscribe: (
    { __typename?: 'UserSubscription' }
    & Pick<UserSubscription, 'id'>
  ) }
);

export type UnsubscribeMutationVariables = Exact<{
  targetUserId: Scalars['String'];
}>;


export type UnsubscribeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'unsubscribe'>
);

export type ForgotEmailMutationVariables = Exact<{
  input: ForgotEmailInput;
}>;


export type ForgotEmailMutation = (
  { __typename?: 'Mutation' }
  & { forgotEmail: (
    { __typename?: 'User' }
    & SimpleUserFieldsFragment
  ) }
);

export type ForgotPasswordMutationVariables = Exact<{
  input: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { resetPassword: (
    { __typename?: 'User' }
    & SimpleUserFieldsFragment
  ) }
);

export type CreateDetailMutationVariables = Exact<{
  input: CreateDetailInput;
}>;


export type CreateDetailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createDetail'>
);

export type UpdateDetailMutationVariables = Exact<{
  input: UpdateDetailInput;
}>;


export type UpdateDetailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateDetail'>
);

export type UpdateSnsMutationVariables = Exact<{
  input: UpdateSnsInput;
}>;


export type UpdateSnsMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateSns'>
);

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateUser'>
);

export type SimpleUserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'role' | 'avatar'>
);

export type UserDetailFieldsFragment = (
  { __typename?: 'Detail' }
  & Pick<Detail, 'company' | 'introduce' | 'status' | 'position' | 'experience' | 'startDate'>
);

export type UserSnsFieldsFragment = (
  { __typename?: 'Sns' }
  & Pick<Sns, 'facebook' | 'instagram' | 'kakaotalk' | 'line' | 'twitter'>
);

export type SubscriberFieldsFragment = (
  { __typename?: 'UserSubscription' }
  & { subscriber: (
    { __typename?: 'User' }
    & SimpleUserFieldsFragment
  ) }
);

export type SubscribedToFieldsFragment = (
  { __typename?: 'UserSubscription' }
  & { subscribedTo: (
    { __typename?: 'User' }
    & SimpleUserFieldsFragment
  ) }
);

export type UserSkillFieldsFragment = (
  { __typename?: 'UserSkill' }
  & { skill: (
    { __typename?: 'Skill' }
    & Pick<Skill, 'id' | 'name'>
  ) }
);

export type GetBoardListQueryVariables = Exact<{
  first?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  category?: Maybe<BoardCategory>;
  keyword?: Maybe<Scalars['String']>;
}>;


export type GetBoardListQuery = (
  { __typename?: 'Query' }
  & { getBoardList: (
    { __typename?: 'GetBoardListOutput' }
    & { edges?: Maybe<Array<(
      { __typename?: 'BoardEdge' }
      & Pick<BoardEdge, 'cursor'>
      & { node: (
        { __typename?: 'Board' }
        & { likes: Array<(
          { __typename?: 'BoardLike' }
          & BoardLikeFieldsFragment
        )>, comments: Array<(
          { __typename?: 'BoardComment' }
          & BoardCommentFieldsFragment
        )> }
        & SimpleBoardFieldsFragment
      ) }
    )>>, pageInfo?: Maybe<(
      { __typename?: 'BoardPageInfo' }
      & Pick<BoardPageInfo, 'endCursor' | 'hasNextPage' | 'startCursor'>
    )> }
  ) }
);

export type GetBoardQueryVariables = Exact<{
  boardId: Scalars['String'];
}>;


export type GetBoardQuery = (
  { __typename?: 'Query' }
  & { getBoard: (
    { __typename?: 'Board' }
    & { likes: Array<(
      { __typename?: 'BoardLike' }
      & BoardLikeFieldsFragment
    )>, comments: Array<(
      { __typename?: 'BoardComment' }
      & BoardCommentFieldsFragment
    )> }
    & SimpleBoardFieldsFragment
  ) }
);

export type CreateBoardMutationVariables = Exact<{
  input: CreateBoardInput;
}>;


export type CreateBoardMutation = (
  { __typename?: 'Mutation' }
  & { createBoard: (
    { __typename?: 'Board' }
    & SimpleBoardFieldsFragment
  ) }
);

export type UpdateBoardMutationVariables = Exact<{
  input: UpdateBoardInput;
}>;


export type UpdateBoardMutation = (
  { __typename?: 'Mutation' }
  & { updateBoard: (
    { __typename?: 'Board' }
    & SimpleBoardFieldsFragment
  ) }
);

export type DeleteBoardMutationVariables = Exact<{
  boardId: Scalars['String'];
}>;


export type DeleteBoardMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteBoard'>
);

export type LikeMutationVariables = Exact<{
  boardId: Scalars['String'];
}>;


export type LikeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'like'>
);

export type UnlikeMutationVariables = Exact<{
  boardId: Scalars['String'];
}>;


export type UnlikeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'unlike'>
);

export type CreateBoardCommentMutationVariables = Exact<{
  input: CreateBoardCommentInput;
}>;


export type CreateBoardCommentMutation = (
  { __typename?: 'Mutation' }
  & { createBoardComment: (
    { __typename?: 'BoardComment' }
    & BoardCommentFieldsFragment
  ) }
);

export type UpdateBoardCommentMutationVariables = Exact<{
  input: UpdateBoardCommentInput;
}>;


export type UpdateBoardCommentMutation = (
  { __typename?: 'Mutation' }
  & { updateBoardComment: (
    { __typename?: 'BoardComment' }
    & BoardCommentFieldsFragment
  ) }
);

export type SimpleBoardFieldsFragment = (
  { __typename?: 'Board' }
  & Pick<Board, 'id' | 'category' | 'title' | 'description' | 'imageUrl' | 'thumbnail' | 'updatedAt' | 'createdAt' | 'userId'>
  & { user: (
    { __typename?: 'User' }
    & SimpleUserFieldsFragment
  ) }
);

export type BoardCommentFieldsFragment = (
  { __typename?: 'BoardComment' }
  & Pick<BoardComment, 'id' | 'body' | 'createdAt' | 'updatedAt' | 'userId' | 'boardId'>
  & { user: (
    { __typename?: 'User' }
    & SimpleUserFieldsFragment
  ) }
);

export type BoardLikeFieldsFragment = (
  { __typename?: 'BoardLike' }
  & Pick<BoardLike, 'id' | 'createdAt' | 'updatedAt' | 'userId' | 'boardId'>
  & { user: (
    { __typename?: 'User' }
    & SimpleUserFieldsFragment
  ) }
);

export type GetNoticeListQueryVariables = Exact<{
  first?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  category: NoticeCategory;
}>;


export type GetNoticeListQuery = (
  { __typename?: 'Query' }
  & { getNoticeList: (
    { __typename?: 'GetNoticeListOutput' }
    & { edges?: Maybe<Array<(
      { __typename?: 'NoticeEdge' }
      & Pick<NoticeEdge, 'cursor'>
      & { node: (
        { __typename?: 'Notice' }
        & { user: (
          { __typename?: 'User' }
          & SimpleUserFieldsFragment
        ) }
        & SimpleNoticeFieldsFragment
      ) }
    )>>, pageInfo?: Maybe<(
      { __typename?: 'NoticePageInfo' }
      & Pick<NoticePageInfo, 'endCursor' | 'startCursor' | 'hasNextPage'>
    )> }
  ) }
);

export type GetNoticeQueryVariables = Exact<{
  noticeId: Scalars['String'];
}>;


export type GetNoticeQuery = (
  { __typename?: 'Query' }
  & { getNotice: (
    { __typename?: 'Notice' }
    & SimpleNoticeFieldsFragment
  ) }
);

export type CreateNoticeMutationVariables = Exact<{
  input: CreateNoticeInput;
}>;


export type CreateNoticeMutation = (
  { __typename?: 'Mutation' }
  & { createNotice: (
    { __typename?: 'Notice' }
    & { user: (
      { __typename?: 'User' }
      & SimpleUserFieldsFragment
    ) }
    & SimpleNoticeFieldsFragment
  ) }
);

export type UpdateNoticeMutationVariables = Exact<{
  input: UpdateNoticeInput;
}>;


export type UpdateNoticeMutation = (
  { __typename?: 'Mutation' }
  & { updateNotice: (
    { __typename?: 'Notice' }
    & { user: (
      { __typename?: 'User' }
      & SimpleUserFieldsFragment
    ) }
    & SimpleNoticeFieldsFragment
  ) }
);

export type DeleteNoticeMutationVariables = Exact<{
  noticeId: Scalars['String'];
}>;


export type DeleteNoticeMutation = (
  { __typename?: 'Mutation' }
  & { deleteNotice: (
    { __typename?: 'Notice' }
    & { user: (
      { __typename?: 'User' }
      & SimpleUserFieldsFragment
    ) }
    & SimpleNoticeFieldsFragment
  ) }
);

export type SimpleNoticeFieldsFragment = (
  { __typename?: 'Notice' }
  & Pick<Notice, 'id' | 'title' | 'description' | 'thumbnail' | 'updatedAt' | 'createdAt' | 'category'>
  & { user: (
    { __typename?: 'User' }
    & SimpleUserFieldsFragment
  ) }
);

export type GetSkillListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkillListQuery = (
  { __typename?: 'Query' }
  & { getSkillList: Array<(
    { __typename?: 'Skill' }
    & Pick<Skill, 'id' | 'name'>
  )> }
);

export type CreateSkillMutationVariables = Exact<{
  input: CreateSkillInput;
}>;


export type CreateSkillMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createSkill'>
);

export type CreateUserSkillMutationVariables = Exact<{
  input: CreateUserSkillInput;
}>;


export type CreateUserSkillMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createUserSkill'>
);

export type DeleteUserSkillMutationVariables = Exact<{
  skillId: Scalars['String'];
}>;


export type DeleteUserSkillMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteUserSkill'>
);

export const UserDetailFieldsFragmentDoc = gql`
    fragment userDetailFields on Detail {
  company
  introduce
  status
  position
  experience
  startDate
}
    `;
export const UserSnsFieldsFragmentDoc = gql`
    fragment userSnsFields on Sns {
  facebook
  instagram
  kakaotalk
  line
  twitter
}
    `;
export const SimpleUserFieldsFragmentDoc = gql`
    fragment simpleUserFields on User {
  id
  username
  email
  role
  avatar
}
    `;
export const SubscriberFieldsFragmentDoc = gql`
    fragment subscriberFields on UserSubscription {
  subscriber {
    ...simpleUserFields
  }
}
    ${SimpleUserFieldsFragmentDoc}`;
export const SubscribedToFieldsFragmentDoc = gql`
    fragment subscribedToFields on UserSubscription {
  subscribedTo {
    ...simpleUserFields
  }
}
    ${SimpleUserFieldsFragmentDoc}`;
export const UserSkillFieldsFragmentDoc = gql`
    fragment userSkillFields on UserSkill {
  skill {
    id
    name
  }
}
    `;
export const SimpleBoardFieldsFragmentDoc = gql`
    fragment simpleBoardFields on Board {
  id
  category
  title
  description
  imageUrl
  thumbnail
  updatedAt
  createdAt
  userId
  user {
    ...simpleUserFields
  }
}
    ${SimpleUserFieldsFragmentDoc}`;
export const BoardCommentFieldsFragmentDoc = gql`
    fragment boardCommentFields on BoardComment {
  id
  body
  createdAt
  updatedAt
  userId
  boardId
  user {
    ...simpleUserFields
  }
}
    ${SimpleUserFieldsFragmentDoc}`;
export const BoardLikeFieldsFragmentDoc = gql`
    fragment boardLikeFields on BoardLike {
  id
  createdAt
  updatedAt
  userId
  boardId
  user {
    ...simpleUserFields
  }
}
    ${SimpleUserFieldsFragmentDoc}`;
export const SimpleNoticeFieldsFragmentDoc = gql`
    fragment simpleNoticeFields on Notice {
  id
  title
  description
  thumbnail
  updatedAt
  createdAt
  category
  user {
    ...simpleUserFields
  }
}
    ${SimpleUserFieldsFragmentDoc}`;
export const RegsiterDocument = gql`
    mutation regsiter($input: RegisterInput!) {
  register(input: $input) {
    ...simpleUserFields
  }
}
    ${SimpleUserFieldsFragmentDoc}`;
export type RegsiterMutationFn = Apollo.MutationFunction<RegsiterMutation, RegsiterMutationVariables>;

/**
 * __useRegsiterMutation__
 *
 * To run a mutation, you first call `useRegsiterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegsiterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [regsiterMutation, { data, loading, error }] = useRegsiterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegsiterMutation(baseOptions?: Apollo.MutationHookOptions<RegsiterMutation, RegsiterMutationVariables>) {
        return Apollo.useMutation<RegsiterMutation, RegsiterMutationVariables>(RegsiterDocument, baseOptions);
      }
export type RegsiterMutationHookResult = ReturnType<typeof useRegsiterMutation>;
export type RegsiterMutationResult = Apollo.MutationResult<RegsiterMutation>;
export type RegsiterMutationOptions = Apollo.BaseMutationOptions<RegsiterMutation, RegsiterMutationVariables>;
export const GoogleRegisterDocument = gql`
    mutation googleRegister($input: GoogleRegisterInput!) {
  googleRegister(input: $input) {
    ...simpleUserFields
  }
}
    ${SimpleUserFieldsFragmentDoc}`;
export type GoogleRegisterMutationFn = Apollo.MutationFunction<GoogleRegisterMutation, GoogleRegisterMutationVariables>;

/**
 * __useGoogleRegisterMutation__
 *
 * To run a mutation, you first call `useGoogleRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleRegisterMutation, { data, loading, error }] = useGoogleRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGoogleRegisterMutation(baseOptions?: Apollo.MutationHookOptions<GoogleRegisterMutation, GoogleRegisterMutationVariables>) {
        return Apollo.useMutation<GoogleRegisterMutation, GoogleRegisterMutationVariables>(GoogleRegisterDocument, baseOptions);
      }
export type GoogleRegisterMutationHookResult = ReturnType<typeof useGoogleRegisterMutation>;
export type GoogleRegisterMutationResult = Apollo.MutationResult<GoogleRegisterMutation>;
export type GoogleRegisterMutationOptions = Apollo.BaseMutationOptions<GoogleRegisterMutation, GoogleRegisterMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LocalLoginDocument = gql`
    mutation localLogin($input: LoginInput!) {
  localLogin(input: $input) {
    ...simpleUserFields
  }
}
    ${SimpleUserFieldsFragmentDoc}`;
export type LocalLoginMutationFn = Apollo.MutationFunction<LocalLoginMutation, LocalLoginMutationVariables>;

/**
 * __useLocalLoginMutation__
 *
 * To run a mutation, you first call `useLocalLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLocalLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [localLoginMutation, { data, loading, error }] = useLocalLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLocalLoginMutation(baseOptions?: Apollo.MutationHookOptions<LocalLoginMutation, LocalLoginMutationVariables>) {
        return Apollo.useMutation<LocalLoginMutation, LocalLoginMutationVariables>(LocalLoginDocument, baseOptions);
      }
export type LocalLoginMutationHookResult = ReturnType<typeof useLocalLoginMutation>;
export type LocalLoginMutationResult = Apollo.MutationResult<LocalLoginMutation>;
export type LocalLoginMutationOptions = Apollo.BaseMutationOptions<LocalLoginMutation, LocalLoginMutationVariables>;
export const GoogleLoginDocument = gql`
    mutation googleLogin($input: GoogleLoginInput!) {
  googleLogin(input: $input) {
    ...simpleUserFields
  }
}
    ${SimpleUserFieldsFragmentDoc}`;
export type GoogleLoginMutationFn = Apollo.MutationFunction<GoogleLoginMutation, GoogleLoginMutationVariables>;

/**
 * __useGoogleLoginMutation__
 *
 * To run a mutation, you first call `useGoogleLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleLoginMutation, { data, loading, error }] = useGoogleLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGoogleLoginMutation(baseOptions?: Apollo.MutationHookOptions<GoogleLoginMutation, GoogleLoginMutationVariables>) {
        return Apollo.useMutation<GoogleLoginMutation, GoogleLoginMutationVariables>(GoogleLoginDocument, baseOptions);
      }
export type GoogleLoginMutationHookResult = ReturnType<typeof useGoogleLoginMutation>;
export type GoogleLoginMutationResult = Apollo.MutationResult<GoogleLoginMutation>;
export type GoogleLoginMutationOptions = Apollo.BaseMutationOptions<GoogleLoginMutation, GoogleLoginMutationVariables>;
export const LocalLogoutDocument = gql`
    mutation localLogout {
  localLogout
}
    `;
export type LocalLogoutMutationFn = Apollo.MutationFunction<LocalLogoutMutation, LocalLogoutMutationVariables>;

/**
 * __useLocalLogoutMutation__
 *
 * To run a mutation, you first call `useLocalLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLocalLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [localLogoutMutation, { data, loading, error }] = useLocalLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLocalLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LocalLogoutMutation, LocalLogoutMutationVariables>) {
        return Apollo.useMutation<LocalLogoutMutation, LocalLogoutMutationVariables>(LocalLogoutDocument, baseOptions);
      }
export type LocalLogoutMutationHookResult = ReturnType<typeof useLocalLogoutMutation>;
export type LocalLogoutMutationResult = Apollo.MutationResult<LocalLogoutMutation>;
export type LocalLogoutMutationOptions = Apollo.BaseMutationOptions<LocalLogoutMutation, LocalLogoutMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...simpleUserFields
  }
}
    ${SimpleUserFieldsFragmentDoc}`;

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
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const FindUserDocument = gql`
    query findUser($userId: String!) {
  findUser(userId: $userId) {
    ...simpleUserFields
    detail {
      ...userDetailFields
    }
    sns {
      ...userSnsFields
    }
    subscribers {
      ...subscriberFields
    }
    subscriptions {
      ...subscribedToFields
    }
    skills {
      ...userSkillFields
    }
  }
}
    ${SimpleUserFieldsFragmentDoc}
${UserDetailFieldsFragmentDoc}
${UserSnsFieldsFragmentDoc}
${SubscriberFieldsFragmentDoc}
${SubscribedToFieldsFragmentDoc}
${UserSkillFieldsFragmentDoc}`;

/**
 * __useFindUserQuery__
 *
 * To run a query within a React component, call `useFindUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFindUserQuery(baseOptions?: Apollo.QueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
        return Apollo.useQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, baseOptions);
      }
export function useFindUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          return Apollo.useLazyQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, baseOptions);
        }
export type FindUserQueryHookResult = ReturnType<typeof useFindUserQuery>;
export type FindUserLazyQueryHookResult = ReturnType<typeof useFindUserLazyQuery>;
export type FindUserQueryResult = Apollo.QueryResult<FindUserQuery, FindUserQueryVariables>;
export const SubscribeDocument = gql`
    mutation subscribe($targetUserId: String!) {
  subscribe(targetUserId: $targetUserId) {
    id
  }
}
    `;
export type SubscribeMutationFn = Apollo.MutationFunction<SubscribeMutation, SubscribeMutationVariables>;

/**
 * __useSubscribeMutation__
 *
 * To run a mutation, you first call `useSubscribeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeMutation, { data, loading, error }] = useSubscribeMutation({
 *   variables: {
 *      targetUserId: // value for 'targetUserId'
 *   },
 * });
 */
export function useSubscribeMutation(baseOptions?: Apollo.MutationHookOptions<SubscribeMutation, SubscribeMutationVariables>) {
        return Apollo.useMutation<SubscribeMutation, SubscribeMutationVariables>(SubscribeDocument, baseOptions);
      }
export type SubscribeMutationHookResult = ReturnType<typeof useSubscribeMutation>;
export type SubscribeMutationResult = Apollo.MutationResult<SubscribeMutation>;
export type SubscribeMutationOptions = Apollo.BaseMutationOptions<SubscribeMutation, SubscribeMutationVariables>;
export const UnsubscribeDocument = gql`
    mutation unsubscribe($targetUserId: String!) {
  unsubscribe(targetUserId: $targetUserId)
}
    `;
export type UnsubscribeMutationFn = Apollo.MutationFunction<UnsubscribeMutation, UnsubscribeMutationVariables>;

/**
 * __useUnsubscribeMutation__
 *
 * To run a mutation, you first call `useUnsubscribeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnsubscribeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unsubscribeMutation, { data, loading, error }] = useUnsubscribeMutation({
 *   variables: {
 *      targetUserId: // value for 'targetUserId'
 *   },
 * });
 */
export function useUnsubscribeMutation(baseOptions?: Apollo.MutationHookOptions<UnsubscribeMutation, UnsubscribeMutationVariables>) {
        return Apollo.useMutation<UnsubscribeMutation, UnsubscribeMutationVariables>(UnsubscribeDocument, baseOptions);
      }
export type UnsubscribeMutationHookResult = ReturnType<typeof useUnsubscribeMutation>;
export type UnsubscribeMutationResult = Apollo.MutationResult<UnsubscribeMutation>;
export type UnsubscribeMutationOptions = Apollo.BaseMutationOptions<UnsubscribeMutation, UnsubscribeMutationVariables>;
export const ForgotEmailDocument = gql`
    mutation forgotEmail($input: ForgotEmailInput!) {
  forgotEmail(input: $input) {
    ...simpleUserFields
  }
}
    ${SimpleUserFieldsFragmentDoc}`;
export type ForgotEmailMutationFn = Apollo.MutationFunction<ForgotEmailMutation, ForgotEmailMutationVariables>;

/**
 * __useForgotEmailMutation__
 *
 * To run a mutation, you first call `useForgotEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotEmailMutation, { data, loading, error }] = useForgotEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useForgotEmailMutation(baseOptions?: Apollo.MutationHookOptions<ForgotEmailMutation, ForgotEmailMutationVariables>) {
        return Apollo.useMutation<ForgotEmailMutation, ForgotEmailMutationVariables>(ForgotEmailDocument, baseOptions);
      }
export type ForgotEmailMutationHookResult = ReturnType<typeof useForgotEmailMutation>;
export type ForgotEmailMutationResult = Apollo.MutationResult<ForgotEmailMutation>;
export type ForgotEmailMutationOptions = Apollo.BaseMutationOptions<ForgotEmailMutation, ForgotEmailMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($input: ForgotPasswordInput!) {
  forgotPassword(input: $input)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($input: ResetPasswordInput!) {
  resetPassword(input: $input) {
    ...simpleUserFields
  }
}
    ${SimpleUserFieldsFragmentDoc}`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const CreateDetailDocument = gql`
    mutation createDetail($input: CreateDetailInput!) {
  createDetail(input: $input)
}
    `;
export type CreateDetailMutationFn = Apollo.MutationFunction<CreateDetailMutation, CreateDetailMutationVariables>;

/**
 * __useCreateDetailMutation__
 *
 * To run a mutation, you first call `useCreateDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDetailMutation, { data, loading, error }] = useCreateDetailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDetailMutation(baseOptions?: Apollo.MutationHookOptions<CreateDetailMutation, CreateDetailMutationVariables>) {
        return Apollo.useMutation<CreateDetailMutation, CreateDetailMutationVariables>(CreateDetailDocument, baseOptions);
      }
export type CreateDetailMutationHookResult = ReturnType<typeof useCreateDetailMutation>;
export type CreateDetailMutationResult = Apollo.MutationResult<CreateDetailMutation>;
export type CreateDetailMutationOptions = Apollo.BaseMutationOptions<CreateDetailMutation, CreateDetailMutationVariables>;
export const UpdateDetailDocument = gql`
    mutation updateDetail($input: UpdateDetailInput!) {
  updateDetail(input: $input)
}
    `;
export type UpdateDetailMutationFn = Apollo.MutationFunction<UpdateDetailMutation, UpdateDetailMutationVariables>;

/**
 * __useUpdateDetailMutation__
 *
 * To run a mutation, you first call `useUpdateDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDetailMutation, { data, loading, error }] = useUpdateDetailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDetailMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDetailMutation, UpdateDetailMutationVariables>) {
        return Apollo.useMutation<UpdateDetailMutation, UpdateDetailMutationVariables>(UpdateDetailDocument, baseOptions);
      }
export type UpdateDetailMutationHookResult = ReturnType<typeof useUpdateDetailMutation>;
export type UpdateDetailMutationResult = Apollo.MutationResult<UpdateDetailMutation>;
export type UpdateDetailMutationOptions = Apollo.BaseMutationOptions<UpdateDetailMutation, UpdateDetailMutationVariables>;
export const UpdateSnsDocument = gql`
    mutation updateSns($input: UpdateSnsInput!) {
  updateSns(input: $input)
}
    `;
export type UpdateSnsMutationFn = Apollo.MutationFunction<UpdateSnsMutation, UpdateSnsMutationVariables>;

/**
 * __useUpdateSnsMutation__
 *
 * To run a mutation, you first call `useUpdateSnsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSnsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSnsMutation, { data, loading, error }] = useUpdateSnsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSnsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSnsMutation, UpdateSnsMutationVariables>) {
        return Apollo.useMutation<UpdateSnsMutation, UpdateSnsMutationVariables>(UpdateSnsDocument, baseOptions);
      }
export type UpdateSnsMutationHookResult = ReturnType<typeof useUpdateSnsMutation>;
export type UpdateSnsMutationResult = Apollo.MutationResult<UpdateSnsMutation>;
export type UpdateSnsMutationOptions = Apollo.BaseMutationOptions<UpdateSnsMutation, UpdateSnsMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($input: UpdateUserInput!) {
  updateUser(input: $input)
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetBoardListDocument = gql`
    query getBoardList($first: String, $after: String, $category: BoardCategory, $keyword: String) {
  getBoardList(
    first: $first
    after: $after
    category: $category
    keyword: $keyword
  ) {
    edges {
      cursor
      node {
        ...simpleBoardFields
        likes {
          ...boardLikeFields
        }
        comments {
          ...boardCommentFields
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      startCursor
    }
  }
}
    ${SimpleBoardFieldsFragmentDoc}
${BoardLikeFieldsFragmentDoc}
${BoardCommentFieldsFragmentDoc}`;

/**
 * __useGetBoardListQuery__
 *
 * To run a query within a React component, call `useGetBoardListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      category: // value for 'category'
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useGetBoardListQuery(baseOptions?: Apollo.QueryHookOptions<GetBoardListQuery, GetBoardListQueryVariables>) {
        return Apollo.useQuery<GetBoardListQuery, GetBoardListQueryVariables>(GetBoardListDocument, baseOptions);
      }
export function useGetBoardListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoardListQuery, GetBoardListQueryVariables>) {
          return Apollo.useLazyQuery<GetBoardListQuery, GetBoardListQueryVariables>(GetBoardListDocument, baseOptions);
        }
export type GetBoardListQueryHookResult = ReturnType<typeof useGetBoardListQuery>;
export type GetBoardListLazyQueryHookResult = ReturnType<typeof useGetBoardListLazyQuery>;
export type GetBoardListQueryResult = Apollo.QueryResult<GetBoardListQuery, GetBoardListQueryVariables>;
export const GetBoardDocument = gql`
    query getBoard($boardId: String!) {
  getBoard(boardId: $boardId) {
    ...simpleBoardFields
    likes {
      ...boardLikeFields
    }
    comments {
      ...boardCommentFields
    }
  }
}
    ${SimpleBoardFieldsFragmentDoc}
${BoardLikeFieldsFragmentDoc}
${BoardCommentFieldsFragmentDoc}`;

/**
 * __useGetBoardQuery__
 *
 * To run a query within a React component, call `useGetBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardQuery({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useGetBoardQuery(baseOptions?: Apollo.QueryHookOptions<GetBoardQuery, GetBoardQueryVariables>) {
        return Apollo.useQuery<GetBoardQuery, GetBoardQueryVariables>(GetBoardDocument, baseOptions);
      }
export function useGetBoardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoardQuery, GetBoardQueryVariables>) {
          return Apollo.useLazyQuery<GetBoardQuery, GetBoardQueryVariables>(GetBoardDocument, baseOptions);
        }
export type GetBoardQueryHookResult = ReturnType<typeof useGetBoardQuery>;
export type GetBoardLazyQueryHookResult = ReturnType<typeof useGetBoardLazyQuery>;
export type GetBoardQueryResult = Apollo.QueryResult<GetBoardQuery, GetBoardQueryVariables>;
export const CreateBoardDocument = gql`
    mutation createBoard($input: CreateBoardInput!) {
  createBoard(input: $input) {
    ...simpleBoardFields
  }
}
    ${SimpleBoardFieldsFragmentDoc}`;
export type CreateBoardMutationFn = Apollo.MutationFunction<CreateBoardMutation, CreateBoardMutationVariables>;

/**
 * __useCreateBoardMutation__
 *
 * To run a mutation, you first call `useCreateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardMutation, { data, loading, error }] = useCreateBoardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBoardMutation(baseOptions?: Apollo.MutationHookOptions<CreateBoardMutation, CreateBoardMutationVariables>) {
        return Apollo.useMutation<CreateBoardMutation, CreateBoardMutationVariables>(CreateBoardDocument, baseOptions);
      }
export type CreateBoardMutationHookResult = ReturnType<typeof useCreateBoardMutation>;
export type CreateBoardMutationResult = Apollo.MutationResult<CreateBoardMutation>;
export type CreateBoardMutationOptions = Apollo.BaseMutationOptions<CreateBoardMutation, CreateBoardMutationVariables>;
export const UpdateBoardDocument = gql`
    mutation updateBoard($input: UpdateBoardInput!) {
  updateBoard(input: $input) {
    ...simpleBoardFields
  }
}
    ${SimpleBoardFieldsFragmentDoc}`;
export type UpdateBoardMutationFn = Apollo.MutationFunction<UpdateBoardMutation, UpdateBoardMutationVariables>;

/**
 * __useUpdateBoardMutation__
 *
 * To run a mutation, you first call `useUpdateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoardMutation, { data, loading, error }] = useUpdateBoardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBoardMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBoardMutation, UpdateBoardMutationVariables>) {
        return Apollo.useMutation<UpdateBoardMutation, UpdateBoardMutationVariables>(UpdateBoardDocument, baseOptions);
      }
export type UpdateBoardMutationHookResult = ReturnType<typeof useUpdateBoardMutation>;
export type UpdateBoardMutationResult = Apollo.MutationResult<UpdateBoardMutation>;
export type UpdateBoardMutationOptions = Apollo.BaseMutationOptions<UpdateBoardMutation, UpdateBoardMutationVariables>;
export const DeleteBoardDocument = gql`
    mutation deleteBoard($boardId: String!) {
  deleteBoard(boardId: $boardId)
}
    `;
export type DeleteBoardMutationFn = Apollo.MutationFunction<DeleteBoardMutation, DeleteBoardMutationVariables>;

/**
 * __useDeleteBoardMutation__
 *
 * To run a mutation, you first call `useDeleteBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBoardMutation, { data, loading, error }] = useDeleteBoardMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useDeleteBoardMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBoardMutation, DeleteBoardMutationVariables>) {
        return Apollo.useMutation<DeleteBoardMutation, DeleteBoardMutationVariables>(DeleteBoardDocument, baseOptions);
      }
export type DeleteBoardMutationHookResult = ReturnType<typeof useDeleteBoardMutation>;
export type DeleteBoardMutationResult = Apollo.MutationResult<DeleteBoardMutation>;
export type DeleteBoardMutationOptions = Apollo.BaseMutationOptions<DeleteBoardMutation, DeleteBoardMutationVariables>;
export const LikeDocument = gql`
    mutation like($boardId: String!) {
  like(boardId: $boardId)
}
    `;
export type LikeMutationFn = Apollo.MutationFunction<LikeMutation, LikeMutationVariables>;

/**
 * __useLikeMutation__
 *
 * To run a mutation, you first call `useLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMutation, { data, loading, error }] = useLikeMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useLikeMutation(baseOptions?: Apollo.MutationHookOptions<LikeMutation, LikeMutationVariables>) {
        return Apollo.useMutation<LikeMutation, LikeMutationVariables>(LikeDocument, baseOptions);
      }
export type LikeMutationHookResult = ReturnType<typeof useLikeMutation>;
export type LikeMutationResult = Apollo.MutationResult<LikeMutation>;
export type LikeMutationOptions = Apollo.BaseMutationOptions<LikeMutation, LikeMutationVariables>;
export const UnlikeDocument = gql`
    mutation unlike($boardId: String!) {
  unlike(boardId: $boardId)
}
    `;
export type UnlikeMutationFn = Apollo.MutationFunction<UnlikeMutation, UnlikeMutationVariables>;

/**
 * __useUnlikeMutation__
 *
 * To run a mutation, you first call `useUnlikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeMutation, { data, loading, error }] = useUnlikeMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useUnlikeMutation(baseOptions?: Apollo.MutationHookOptions<UnlikeMutation, UnlikeMutationVariables>) {
        return Apollo.useMutation<UnlikeMutation, UnlikeMutationVariables>(UnlikeDocument, baseOptions);
      }
export type UnlikeMutationHookResult = ReturnType<typeof useUnlikeMutation>;
export type UnlikeMutationResult = Apollo.MutationResult<UnlikeMutation>;
export type UnlikeMutationOptions = Apollo.BaseMutationOptions<UnlikeMutation, UnlikeMutationVariables>;
export const CreateBoardCommentDocument = gql`
    mutation createBoardComment($input: CreateBoardCommentInput!) {
  createBoardComment(input: $input) {
    ...boardCommentFields
  }
}
    ${BoardCommentFieldsFragmentDoc}`;
export type CreateBoardCommentMutationFn = Apollo.MutationFunction<CreateBoardCommentMutation, CreateBoardCommentMutationVariables>;

/**
 * __useCreateBoardCommentMutation__
 *
 * To run a mutation, you first call `useCreateBoardCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardCommentMutation, { data, loading, error }] = useCreateBoardCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBoardCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateBoardCommentMutation, CreateBoardCommentMutationVariables>) {
        return Apollo.useMutation<CreateBoardCommentMutation, CreateBoardCommentMutationVariables>(CreateBoardCommentDocument, baseOptions);
      }
export type CreateBoardCommentMutationHookResult = ReturnType<typeof useCreateBoardCommentMutation>;
export type CreateBoardCommentMutationResult = Apollo.MutationResult<CreateBoardCommentMutation>;
export type CreateBoardCommentMutationOptions = Apollo.BaseMutationOptions<CreateBoardCommentMutation, CreateBoardCommentMutationVariables>;
export const UpdateBoardCommentDocument = gql`
    mutation updateBoardComment($input: UpdateBoardCommentInput!) {
  updateBoardComment(input: $input) {
    ...boardCommentFields
  }
}
    ${BoardCommentFieldsFragmentDoc}`;
export type UpdateBoardCommentMutationFn = Apollo.MutationFunction<UpdateBoardCommentMutation, UpdateBoardCommentMutationVariables>;

/**
 * __useUpdateBoardCommentMutation__
 *
 * To run a mutation, you first call `useUpdateBoardCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoardCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoardCommentMutation, { data, loading, error }] = useUpdateBoardCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBoardCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBoardCommentMutation, UpdateBoardCommentMutationVariables>) {
        return Apollo.useMutation<UpdateBoardCommentMutation, UpdateBoardCommentMutationVariables>(UpdateBoardCommentDocument, baseOptions);
      }
export type UpdateBoardCommentMutationHookResult = ReturnType<typeof useUpdateBoardCommentMutation>;
export type UpdateBoardCommentMutationResult = Apollo.MutationResult<UpdateBoardCommentMutation>;
export type UpdateBoardCommentMutationOptions = Apollo.BaseMutationOptions<UpdateBoardCommentMutation, UpdateBoardCommentMutationVariables>;
export const GetNoticeListDocument = gql`
    query getNoticeList($first: String, $after: String, $category: NoticeCategory!) {
  getNoticeList(first: $first, after: $after, category: $category) {
    edges {
      cursor
      node {
        ...simpleNoticeFields
        user {
          ...simpleUserFields
        }
      }
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
  }
}
    ${SimpleNoticeFieldsFragmentDoc}
${SimpleUserFieldsFragmentDoc}`;

/**
 * __useGetNoticeListQuery__
 *
 * To run a query within a React component, call `useGetNoticeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNoticeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNoticeListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useGetNoticeListQuery(baseOptions?: Apollo.QueryHookOptions<GetNoticeListQuery, GetNoticeListQueryVariables>) {
        return Apollo.useQuery<GetNoticeListQuery, GetNoticeListQueryVariables>(GetNoticeListDocument, baseOptions);
      }
export function useGetNoticeListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNoticeListQuery, GetNoticeListQueryVariables>) {
          return Apollo.useLazyQuery<GetNoticeListQuery, GetNoticeListQueryVariables>(GetNoticeListDocument, baseOptions);
        }
export type GetNoticeListQueryHookResult = ReturnType<typeof useGetNoticeListQuery>;
export type GetNoticeListLazyQueryHookResult = ReturnType<typeof useGetNoticeListLazyQuery>;
export type GetNoticeListQueryResult = Apollo.QueryResult<GetNoticeListQuery, GetNoticeListQueryVariables>;
export const GetNoticeDocument = gql`
    query getNotice($noticeId: String!) {
  getNotice(noticeId: $noticeId) {
    ...simpleNoticeFields
  }
}
    ${SimpleNoticeFieldsFragmentDoc}`;

/**
 * __useGetNoticeQuery__
 *
 * To run a query within a React component, call `useGetNoticeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNoticeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNoticeQuery({
 *   variables: {
 *      noticeId: // value for 'noticeId'
 *   },
 * });
 */
export function useGetNoticeQuery(baseOptions?: Apollo.QueryHookOptions<GetNoticeQuery, GetNoticeQueryVariables>) {
        return Apollo.useQuery<GetNoticeQuery, GetNoticeQueryVariables>(GetNoticeDocument, baseOptions);
      }
export function useGetNoticeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNoticeQuery, GetNoticeQueryVariables>) {
          return Apollo.useLazyQuery<GetNoticeQuery, GetNoticeQueryVariables>(GetNoticeDocument, baseOptions);
        }
export type GetNoticeQueryHookResult = ReturnType<typeof useGetNoticeQuery>;
export type GetNoticeLazyQueryHookResult = ReturnType<typeof useGetNoticeLazyQuery>;
export type GetNoticeQueryResult = Apollo.QueryResult<GetNoticeQuery, GetNoticeQueryVariables>;
export const CreateNoticeDocument = gql`
    mutation createNotice($input: CreateNoticeInput!) {
  createNotice(input: $input) {
    ...simpleNoticeFields
    user {
      ...simpleUserFields
    }
  }
}
    ${SimpleNoticeFieldsFragmentDoc}
${SimpleUserFieldsFragmentDoc}`;
export type CreateNoticeMutationFn = Apollo.MutationFunction<CreateNoticeMutation, CreateNoticeMutationVariables>;

/**
 * __useCreateNoticeMutation__
 *
 * To run a mutation, you first call `useCreateNoticeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNoticeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNoticeMutation, { data, loading, error }] = useCreateNoticeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNoticeMutation(baseOptions?: Apollo.MutationHookOptions<CreateNoticeMutation, CreateNoticeMutationVariables>) {
        return Apollo.useMutation<CreateNoticeMutation, CreateNoticeMutationVariables>(CreateNoticeDocument, baseOptions);
      }
export type CreateNoticeMutationHookResult = ReturnType<typeof useCreateNoticeMutation>;
export type CreateNoticeMutationResult = Apollo.MutationResult<CreateNoticeMutation>;
export type CreateNoticeMutationOptions = Apollo.BaseMutationOptions<CreateNoticeMutation, CreateNoticeMutationVariables>;
export const UpdateNoticeDocument = gql`
    mutation updateNotice($input: UpdateNoticeInput!) {
  updateNotice(input: $input) {
    ...simpleNoticeFields
    user {
      ...simpleUserFields
    }
  }
}
    ${SimpleNoticeFieldsFragmentDoc}
${SimpleUserFieldsFragmentDoc}`;
export type UpdateNoticeMutationFn = Apollo.MutationFunction<UpdateNoticeMutation, UpdateNoticeMutationVariables>;

/**
 * __useUpdateNoticeMutation__
 *
 * To run a mutation, you first call `useUpdateNoticeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoticeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoticeMutation, { data, loading, error }] = useUpdateNoticeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNoticeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNoticeMutation, UpdateNoticeMutationVariables>) {
        return Apollo.useMutation<UpdateNoticeMutation, UpdateNoticeMutationVariables>(UpdateNoticeDocument, baseOptions);
      }
export type UpdateNoticeMutationHookResult = ReturnType<typeof useUpdateNoticeMutation>;
export type UpdateNoticeMutationResult = Apollo.MutationResult<UpdateNoticeMutation>;
export type UpdateNoticeMutationOptions = Apollo.BaseMutationOptions<UpdateNoticeMutation, UpdateNoticeMutationVariables>;
export const DeleteNoticeDocument = gql`
    mutation deleteNotice($noticeId: String!) {
  deleteNotice(noticeId: $noticeId) {
    ...simpleNoticeFields
    user {
      ...simpleUserFields
    }
  }
}
    ${SimpleNoticeFieldsFragmentDoc}
${SimpleUserFieldsFragmentDoc}`;
export type DeleteNoticeMutationFn = Apollo.MutationFunction<DeleteNoticeMutation, DeleteNoticeMutationVariables>;

/**
 * __useDeleteNoticeMutation__
 *
 * To run a mutation, you first call `useDeleteNoticeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNoticeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNoticeMutation, { data, loading, error }] = useDeleteNoticeMutation({
 *   variables: {
 *      noticeId: // value for 'noticeId'
 *   },
 * });
 */
export function useDeleteNoticeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNoticeMutation, DeleteNoticeMutationVariables>) {
        return Apollo.useMutation<DeleteNoticeMutation, DeleteNoticeMutationVariables>(DeleteNoticeDocument, baseOptions);
      }
export type DeleteNoticeMutationHookResult = ReturnType<typeof useDeleteNoticeMutation>;
export type DeleteNoticeMutationResult = Apollo.MutationResult<DeleteNoticeMutation>;
export type DeleteNoticeMutationOptions = Apollo.BaseMutationOptions<DeleteNoticeMutation, DeleteNoticeMutationVariables>;
export const GetSkillListDocument = gql`
    query getSkillList {
  getSkillList {
    id
    name
  }
}
    `;

/**
 * __useGetSkillListQuery__
 *
 * To run a query within a React component, call `useGetSkillListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSkillListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSkillListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSkillListQuery(baseOptions?: Apollo.QueryHookOptions<GetSkillListQuery, GetSkillListQueryVariables>) {
        return Apollo.useQuery<GetSkillListQuery, GetSkillListQueryVariables>(GetSkillListDocument, baseOptions);
      }
export function useGetSkillListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSkillListQuery, GetSkillListQueryVariables>) {
          return Apollo.useLazyQuery<GetSkillListQuery, GetSkillListQueryVariables>(GetSkillListDocument, baseOptions);
        }
export type GetSkillListQueryHookResult = ReturnType<typeof useGetSkillListQuery>;
export type GetSkillListLazyQueryHookResult = ReturnType<typeof useGetSkillListLazyQuery>;
export type GetSkillListQueryResult = Apollo.QueryResult<GetSkillListQuery, GetSkillListQueryVariables>;
export const CreateSkillDocument = gql`
    mutation createSkill($input: CreateSkillInput!) {
  createSkill(input: $input)
}
    `;
export type CreateSkillMutationFn = Apollo.MutationFunction<CreateSkillMutation, CreateSkillMutationVariables>;

/**
 * __useCreateSkillMutation__
 *
 * To run a mutation, you first call `useCreateSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSkillMutation, { data, loading, error }] = useCreateSkillMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSkillMutation(baseOptions?: Apollo.MutationHookOptions<CreateSkillMutation, CreateSkillMutationVariables>) {
        return Apollo.useMutation<CreateSkillMutation, CreateSkillMutationVariables>(CreateSkillDocument, baseOptions);
      }
export type CreateSkillMutationHookResult = ReturnType<typeof useCreateSkillMutation>;
export type CreateSkillMutationResult = Apollo.MutationResult<CreateSkillMutation>;
export type CreateSkillMutationOptions = Apollo.BaseMutationOptions<CreateSkillMutation, CreateSkillMutationVariables>;
export const CreateUserSkillDocument = gql`
    mutation createUserSkill($input: CreateUserSkillInput!) {
  createUserSkill(input: $input)
}
    `;
export type CreateUserSkillMutationFn = Apollo.MutationFunction<CreateUserSkillMutation, CreateUserSkillMutationVariables>;

/**
 * __useCreateUserSkillMutation__
 *
 * To run a mutation, you first call `useCreateUserSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserSkillMutation, { data, loading, error }] = useCreateUserSkillMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserSkillMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserSkillMutation, CreateUserSkillMutationVariables>) {
        return Apollo.useMutation<CreateUserSkillMutation, CreateUserSkillMutationVariables>(CreateUserSkillDocument, baseOptions);
      }
export type CreateUserSkillMutationHookResult = ReturnType<typeof useCreateUserSkillMutation>;
export type CreateUserSkillMutationResult = Apollo.MutationResult<CreateUserSkillMutation>;
export type CreateUserSkillMutationOptions = Apollo.BaseMutationOptions<CreateUserSkillMutation, CreateUserSkillMutationVariables>;
export const DeleteUserSkillDocument = gql`
    mutation deleteUserSkill($skillId: String!) {
  deleteUserSkill(skillId: $skillId)
}
    `;
export type DeleteUserSkillMutationFn = Apollo.MutationFunction<DeleteUserSkillMutation, DeleteUserSkillMutationVariables>;

/**
 * __useDeleteUserSkillMutation__
 *
 * To run a mutation, you first call `useDeleteUserSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserSkillMutation, { data, loading, error }] = useDeleteUserSkillMutation({
 *   variables: {
 *      skillId: // value for 'skillId'
 *   },
 * });
 */
export function useDeleteUserSkillMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserSkillMutation, DeleteUserSkillMutationVariables>) {
        return Apollo.useMutation<DeleteUserSkillMutation, DeleteUserSkillMutationVariables>(DeleteUserSkillDocument, baseOptions);
      }
export type DeleteUserSkillMutationHookResult = ReturnType<typeof useDeleteUserSkillMutation>;
export type DeleteUserSkillMutationResult = Apollo.MutationResult<DeleteUserSkillMutation>;
export type DeleteUserSkillMutationOptions = Apollo.BaseMutationOptions<DeleteUserSkillMutation, DeleteUserSkillMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    