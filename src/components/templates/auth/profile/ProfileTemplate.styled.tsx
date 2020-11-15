import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Avatar from '../../../molecules/Avatar/Avatar';
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiKakaoTalkFill,
  RiLineFill,
  RiTwitterFill,
} from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';
import { theme } from '../../../../style';

export const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  display: grid;
  grid-gap: 64px;
`;

// UserCard
export const UserCard = styled.div`
  border: 1px solid #eaeaea;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: #ffffff;
  border-radius: 6px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(4px);
  position: relative;
`;
export const UserCardEditButton = styled(FaEdit)`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${theme.colors.darkBlue};
`;
export const UserCardTop = styled.div`
  display: flex;
  gap: 16px;
`;
export const UserCardAvatarBox = styled.div`
  flex: 1;
  display: flex;
  align-self: center;
  justify-content: center;
`;
export const UserCardAvatarInput = styled.input`
  display: none;
`;
export const UserCardAvatar = styled(Avatar)``;
export const UserCardInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`;
export const UserCardUserName = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
`;
export const UserCardButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
`;

export const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Status = styled.div`
  display: flex;
`;
export const StatusTitle = styled.p`
  flex: 1;
  font-size: 0.8rem;
  font-weight: 700;
`;
export const StatusExpInput = styled.input``;
export const StatusDescription = styled.p`
  flex: 1;
  font-size: 0.8rem;
  font-weight: 200;
`;

// My Introduce
export const SelfIntroCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const BaseCardTitle = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  span {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: ${theme.space * 2}px;
    color: ${theme.colors.darkBlue};
  }
`;
// Edit Button
export const EditButton = styled(FaEdit)`
  cursor: pointer;
  font-size: 1.5rem;
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    margin-bottom: ${theme.space * 2.5}px;
  `};
`;

export const SelfIntroCardTitle = styled(BaseCardTitle)``;
export const SelfIntroCardDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.1;
`;

// SNS
export const SNSCard = styled.div``;
export const SNSCardTitle = styled(BaseCardTitle)``;
export const SNSCardContents = styled.div`
  display: flex;
  gap: 4px;
`;
export const SNSCardForm = styled.form``;
export const SNSCardFormItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const SNSCardInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  border-bottom: 1px solid #eaeaea;
  padding: ${theme.space}px;
  &::placeholder {
    color: ${theme.colors.lightGray};
  }
`;

export const Line = styled(RiLineFill)<{ disabled: boolean }>`
  font-size: 2.4rem;
  ${({ disabled }) => css`
    ${disabled && 'pinter-events: none'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    color: ${disabled ? theme.colors.lightGray : '#00c300'};
  `};
`;
export const Kakao = styled(RiKakaoTalkFill)<{ disabled: boolean }>`
  cursor: pointer;
  font-size: 2.4rem;
  ${({ disabled }) => css`
    ${disabled && 'pinter-events: none'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    color: ${disabled ? theme.colors.lightGray : '#ffe812'};
  `};
`;
export const Facebook = styled(RiFacebookBoxFill)<{ disabled: boolean }>`
  cursor: pointer;
  font-size: 2.4rem;
  ${({ disabled }) => css`
    ${disabled && 'pinter-events: none'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    color: ${disabled ? theme.colors.lightGray : '#3b5998'};
  `};
`;
export const Instagram = styled(RiInstagramFill)<{ disabled: boolean }>`
  cursor: pointer;
  font-size: 2.4rem;
  ${({ disabled }) => css`
    ${disabled && 'pinter-events: none'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    color: ${disabled ? theme.colors.lightGray : '#e1306c'};
  `};
`;
export const Twitter = styled(RiTwitterFill)<{ disabled: boolean }>`
  cursor: pointer;
  font-size: 2.4rem;
  ${({ disabled }) => css`
    ${disabled && 'pinter-events: none'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    color: ${disabled ? theme.colors.lightGray : '#1da1f2'};
  `};
`;

// Skill
export const SkillCard = styled.div``;
export const SkillCardTitle = styled(BaseCardTitle)``;
export const SkillCardContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const SkillCardItem = styled.span`
  display: flex;
  gap: 8px;
  justify-content: space-around;
  align-items: center;
  padding: 8px 16px;
  text-transform: uppercase;
  border-radius: 20px;
  transition: all 100ms ease-out;
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    border: 1px solid ${theme.colors.darkBlue};
    // &:hover {
    //   background-color: ${theme.colors.darkBlue};
    //   color: ${theme.colors.white};
    //   border: 1px solid ${theme.colors.white};
    // }
  `};
`;
export const SkillCardItemName = styled.p`
  font-size: 0.8rem;
`;
export const SkillCardDeleteIcon = styled(TiDelete)`
  font-size: 1.1rem;
  cursor: pointer;
`;
export const SkillCardForm = styled.div`
  position: relative;
`;
export const SKillCardIcon = styled(IoMdAddCircleOutline)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  ${({ theme }) => css`
    font-size: 1.2rem;
    color: ${theme.colors.darkBlue};
  `};
`;
export const SkillCardInput = styled.input`
  width: 200px;
  font-size: 0.8rem;
  padding: 8px 8px 8px 32px;
  text-transform: uppercase;
  border-radius: 20px;
  transition: all 100ms ease-out;
  outline: none;
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    border: 1px solid ${theme.colors.darkBlue};
    &::placeholder {
      color: ${theme.colors.darkBlue};
    }
  `};
`;
