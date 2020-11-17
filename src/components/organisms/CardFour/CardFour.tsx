import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { textOverflowMixin } from '../../../style';
import UserInfo from '../UserInfo/UserInfo';
import { BoardCategory } from '../../../generated/graphql';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Typography from '../../atoms/Typography/Typography';
import Tag from '../../molecules/Tag/Tag';

function Wrapper(props: any) {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        gap: 24px;
        padding: ${theme.space * 3}px 0;
        border-bottom: 1px solid ${theme.colors.lightGray};
      `}
      {...props}
    />
  );
}

function LeftWrapper(props: any) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 24px;
        margin-right: auto;
      `}
      {...props}
    />
  );
}

function LeftDefaultWrapper(props: any) {
  const theme = useTheme();
  return (
    <div
      css={css`
        text-align: center;
        color: ${theme.colors.darkGray};
      `}
      {...props}
    />
  );
}

const LeftLikeWrapper = styled(LeftDefaultWrapper)``;
const LeftCommentWrapper = styled(LeftDefaultWrapper)``;

function RightWrapper(props: any) {
  return (
    <div
      css={css`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
        * {
          font-size: 0.8rem;
          &:not(:last-of-type) {
            margin-bottom: 4px;
          }
        }
      `}
      {...props}
    />
  );
}

function RightTitle(props: any) {
  const theme = useTheme();
  return (
    <div
      css={css`
        a {
          font-size: 1.2rem;
          color: ${theme.colors.darkBlue};
          ${textOverflowMixin({ line: 2 })}
        }
      `}
      {...props}
    />
  );
}

const RightUserWrapper = styled(UserInfo)`
  justify-content: flex-end;
`;

interface OwnProps {
  likeLength: number;
  commentLength: number;
  href: string;
  title: string;
  category: BoardCategory;
  username: string;
  avatar?: string;
  createdAt: string;
}

type Props = OwnProps;

const CardFour: FunctionComponent<Props> = ({
  likeLength,
  commentLength,
  href,
  title,
  category,
  username,
  avatar,
  createdAt,
}) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <LeftLikeWrapper>
          <Typography variant={'body3'}>{likeLength}</Typography>
          <Typography variant={'small'}>Likes</Typography>
        </LeftLikeWrapper>
        <LeftCommentWrapper>
          <Typography variant={'body3'}>{commentLength}</Typography>
          <Typography variant={'small'}>Comments</Typography>
        </LeftCommentWrapper>
      </LeftWrapper>
      <RightWrapper>
        <RightTitle>
          <Link href={href}>
            <a>
              <Typography variant={'h4'}>{title}</Typography>
              <Tag
                bgColor={'#e1ecf4'}
                color={'#39739d'}
                text={category}
              />
            </a>
          </Link>
        </RightTitle>
        <RightUserWrapper
          username={username}
          createdAt={createdAt}
          avatar={avatar}
        />
      </RightWrapper>
    </Wrapper>
  );
};

export default CardFour;
