import React, { FunctionComponent } from 'react';
import { fromNow } from '../../../utils/helpers/dateHelpers';
import { SimpleUserFieldsFragment } from '../../../generated/graphql';
import styled from '@emotion/styled';
import { theme } from '../../../style';
import Typography from '../../atoms/Typography/Typography';
import { textOverflowMixin } from '../../../style';
import SimpleUser from '../../molecules/SimpleUser/SimpleUser';
import { css, useTheme } from '@emotion/react';

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 6px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(4px);
  cursor: pointer;
  overflow: hidden;
  grid-gap: ${theme.space}px;
`;

const TopBox = styled.div`
  width: 100%;
  height: 240px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BottomBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  gap: ${theme.space}px;
  padding-right: ${theme.space}px;
  padding: ${theme.space * 3}px;
`;

const BottomBoxDate = styled(Typography)`
  align-self: flex-start;
  font-weight: 600;
`;

function BottomBoxTitle(props: any) {
  const theme = useTheme();
  return (
    <Typography
      css={css`
        align-self: flex-start;
        margin-bottom: auto;
        color: ${theme.colors.yellow};
        font-weight: 700;
        ${textOverflowMixin({ line: 1 })}
      `}
      {...props}
    />
  );
}

const BottomBoxSimpleUser = styled(SimpleUser)`
  justify-content: flex-end;
`;

interface OwnProps {
  onClickCard: any;
  date: string;
  title: string;
  user: SimpleUserFieldsFragment;
  thumbnail?: string | null | undefined;
  className?: string;
}

type Props = OwnProps;

const CardThree: FunctionComponent<Props> = ({
  onClickCard,
  date,
  title,
  user,
  thumbnail,
  className,
  ...otherProps
}) => {
  return (
    <Wrapper className={className} onClick={onClickCard} {...otherProps}>
      <TopBox>
        <img
          src={
            thumbnail ??
            'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzvQ5z%2FbtqCcBwLtAX%2FqjMgn8q3AawB5nIDChbNF0%2Fimg.png'
          }
          alt={'notice image'}
        />
      </TopBox>
      <BottomBox>
        <BottomBoxDate>{fromNow(date)}</BottomBoxDate>
        <BottomBoxTitle>{title}</BottomBoxTitle>
        <BottomBoxSimpleUser username={user.username} avatar={user.avatar} />
      </BottomBox>
    </Wrapper>
  );
};

export default CardThree;
