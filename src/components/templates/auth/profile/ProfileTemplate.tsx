import React, { FunctionComponent, useCallback, useState } from 'react';
import * as S from './ProfileTemplate.styled';
import {
  FindUserDocument,
  MeDocument,
  MutationCreateSkillArgs,
  MutationCreateUserSkillArgs,
  MutationUpdateDetailArgs,
  MutationUpdateSnsArgs,
  SimpleUserFieldsFragment,
  useCreateSkillMutation,
  useCreateUserSkillMutation,
  useDeleteUserSkillMutation,
  useFindUserQuery,
  useUpdateDetailMutation,
  useUpdateSnsMutation,
  useUpdateUserMutation,
} from '../../../../generated/graphql';
import { AiOutlineUserAdd } from 'react-icons/ai';
import IconButton from '../../../molecules/IconButton/IconButton';
import { theme } from '../../../../style';
import 'react-datepicker/dist/react-datepicker.css';
import { useAlert } from '../../../../utils/contexts/AlertContext';
import { useRouter } from 'next/router';
import useResizeFileToBlob from '../../../../utils/hooks/useResizeFileToBlob';
import useUploadImage from '../../../../utils/hooks/useUploadImage';
import Loading from '../../../atoms/Loading/Loading';

interface OwnProps {
  currentUser: SimpleUserFieldsFragment | undefined;
}

type Props = OwnProps;

const ProfileTemplate: FunctionComponent<Props> = ({ currentUser }) => {
  // HOOKS
  const router = useRouter();
  const { setAlert } = useAlert();
  const { resizeFileToBlob } = useResizeFileToBlob();
  const { uploadImage, uploadImageLoading } = useUploadImage();
  // MODE
  const [introEditMode, setIntroEditMode] = useState(false);
  const [userCardEditMode, setUserCardEditMode] = useState(false);
  const [snsEditMode, setSnsEditMode] = useState(false);
  // DATA
  const [userCard, setUserCard] = useState({
    position: '',
    company: '',
    status: false,
    experience: 0,
  });
  const [introduce, setIntroduce] = useState('');
  const [sns, setSns] = useState({
    line: '',
    kakaotalk: '',
    facebook: '',
    instagram: '',
    twitter: '',
  });
  const [skill, setSkill] = useState('');

  const { data: findUserData } = useFindUserQuery({
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    ssr: true,
    variables: {
      userId: router.query.userId as string,
    },
    onCompleted({ findUser }) {
      if (findUser) {
        if (findUser.detail) {
          setUserCard({
            position: findUser.detail.position,
            company: findUser.detail.company,
            status: findUser.detail.status,
            experience: findUser.detail.experience,
          });
          setIntroduce(findUser.detail.introduce);
        }
        if (findUser.sns) {
          setSns({
            line: findUser.sns.line ?? '',
            kakaotalk: findUser.sns.kakaotalk ?? '',
            facebook: findUser.sns.facebook ?? '',
            instagram: findUser.sns.instagram ?? '',
            twitter: findUser.sns.twitter ?? '',
          });
        }
      }
    },
    onError({ graphQLErrors }) {
      graphQLErrors.map((err) => {
        setAlert(err.message, 'error');
      });
    },
  });

  const onClickIntroEditIcon = useCallback(async () => {
    if (introEditMode) {
      if (introduce === findUserData?.findUser.detail?.introduce) {
        return setIntroEditMode(false);
      } else {
        await updateDetail({ introduce });
        return setIntroEditMode(false);
      }
    } else {
      setIntroEditMode(true);
    }
  }, [introEditMode, introduce]);

  const onClickUserCardEditIcon = useCallback(async () => {
    if (userCardEditMode) {
      if (userCard === findUserData?.findUser.detail) {
        return setUserCardEditMode(false);
      } else {
        await updateDetail({
          company: userCard.company,
          position: userCard.position,
          status: Boolean(userCard.status),
          experience: userCard.experience,
        });
        return setUserCardEditMode(false);
      }
    } else {
      setUserCardEditMode(true);
    }
  }, [userCardEditMode, userCard]);

  const onClickUserSnsIcon = useCallback(async () => {
    if (snsEditMode) {
      if (sns === findUserData?.findUser.sns) {
        return setSnsEditMode(false);
      } else {
        await updateSns({
          line: sns.line,
          kakaotalk: sns.kakaotalk,
          facebook: sns.facebook,
          instagram: sns.instagram,
          twitter: sns.twitter,
        });
        return setSnsEditMode(false);
      }
    } else {
      setSnsEditMode(true);
    }
  }, [snsEditMode, sns]);

  const onClickSNSIcon = useCallback(
    (targetId: string | undefined | null) => () => {
      if (!targetId) return null;
      // TODO: LINK TO PAGE OR ADD Friend
      alert(targetId);
    },
    [],
  );

  const handleChangeIntroduce = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIntroduce(e.target.value);
    },
    [],
  );

  const handleChangeUserCard = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const str2bool = (value: string) => {
        if (value.toLowerCase() === 'true') return true;
        if (value.toLowerCase() === 'false') return false;
        return value;
      };
      const str2number = (value: string) => {
        return parseInt(value || '0', 10);
      };

      if (e.target.name === 'experience') {
        if (str2number(e.target.value) > 40) {
          return setAlert('40년 이하로 입력해주세요. ', 'warning');
        }
        if (str2number(e.target.value) < 0) {
          return setAlert('음수는 안돼 ~ ', 'warning');
        }
      }

      setUserCard({
        ...userCard,
        [e.target.name]:
          e.target.name === 'status'
            ? str2bool(e.target.value)
            : e.target.name === 'experience'
            ? str2number(e.target.value)
            : e.target.value,
      });
    },
    [userCard],
  );

  const handleChangeSkill = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSkill(e.target.value);
    },
    [],
  );

  const handleKeyPressSkill = useCallback(
    async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (!skill) return;
        await createSkill({ name: skill.trim() });
        setSkill('');
      }
    },
    [skill],
  );

  const handleChangeSns = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSns({
        ...sns,
        [e.target.name]: e.target.value,
      });
    },
    [sns],
  );

  const [updateDetailMutation] = useUpdateDetailMutation({
    notifyOnNetworkStatusChange: true,
    awaitRefetchQueries: true,
    refetchQueries: [
      {
        query: FindUserDocument,
        variables: {
          userId: currentUser?.id,
        },
      },
    ],
    onError({ graphQLErrors }) {
      graphQLErrors.map((err) => {
        setAlert(err.message, 'error');
      });
    },
  });

  const updateDetail = useCallback(
    async (input: MutationUpdateDetailArgs['input']) => {
      await updateDetailMutation({
        variables: {
          input,
        },
      });
    },
    [],
  );

  const [updateSnsMutation] = useUpdateSnsMutation({
    notifyOnNetworkStatusChange: true,
    awaitRefetchQueries: true,
    refetchQueries: [
      {
        query: FindUserDocument,
        variables: {
          userId: currentUser?.id,
        },
      },
    ],
    onError({ graphQLErrors }) {
      graphQLErrors.map((err) => {
        setAlert(err.message, 'error');
      });
    },
  });

  const updateSns = useCallback(
    async (input: MutationUpdateSnsArgs['input']) => {
      await updateSnsMutation({
        variables: {
          input,
        },
      });
    },
    [],
  );

  const [createUserSkillMutation] = useCreateUserSkillMutation({
    notifyOnNetworkStatusChange: true,
    awaitRefetchQueries: true,
    refetchQueries: [
      {
        query: FindUserDocument,
        variables: {
          userId: currentUser?.id,
        },
      },
    ],
    onError({ graphQLErrors }) {
      graphQLErrors.map((err) => {
        setAlert(err.message, 'error');
      });
    },
  });

  const createUserSkill = useCallback(
    async (input: MutationCreateUserSkillArgs['input']) => {
      await createUserSkillMutation({
        variables: {
          input,
        },
      });
    },
    [],
  );

  const [createSkillMutation] = useCreateSkillMutation({
    notifyOnNetworkStatusChange: true,
    awaitRefetchQueries: true,
    refetchQueries: [
      {
        query: FindUserDocument,
        variables: {
          userId: currentUser?.id,
        },
      },
    ],
  });

  const createSkill = useCallback(
    async (input: MutationCreateSkillArgs['input']) => {
      const { data } = await createSkillMutation({
        variables: {
          input,
        },
      });
      await createUserSkill({
        skillId: String(data?.createSkill),
      });
    },
    [],
  );

  const [deleteUserSkillMutation] = useDeleteUserSkillMutation({
    notifyOnNetworkStatusChange: true,
    awaitRefetchQueries: true,
    refetchQueries: [
      {
        query: FindUserDocument,
        variables: {
          userId: currentUser?.id,
        },
      },
    ],
  });

  const deleteUserSkill = useCallback(
    (skillId: string) => async () => {
      await deleteUserSkillMutation({
        variables: {
          skillId,
        },
      });
    },
    [],
  );

  const [updateUserMutation] = useUpdateUserMutation({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
    awaitRefetchQueries: true,
    refetchQueries: [
      {
        query: MeDocument,
      },
      {
        query: FindUserDocument,
        variables: {
          userId: currentUser?.id,
        },
      },
    ],
  });

  const handleChangeAvatarImage = async (event: any) => {
    try {
      const file = event.target.files[0];
      const image = await resizeFileToBlob(file);
      const downloadUrl = await uploadImage({
        blob: image,
        filename: 'avatar',
        ext: 'jpeg',
      });
      await updateUserMutation({
        variables: {
          input: {
            avatar: downloadUrl,
          },
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  if (!findUserData) {
    return null;
  }

  const isAuthor = currentUser?.id === findUserData.findUser.id;

  return (
    <S.Wrapper>
      <S.UserCard>
        {isAuthor && <S.UserCardEditButton onClick={onClickUserCardEditIcon} />}
        <S.UserCardTop>
          <S.UserCardAvatarBox>
            {uploadImageLoading ? (
              <Loading
                size={48}
                color={'#000'}
                loading={uploadImageLoading}
              />
            ) : (
              <>
                <S.UserCardAvatarInput
                  type="file"
                  onChange={handleChangeAvatarImage}
                  id="file-input"
                />
                <label htmlFor="file-input">
                  <S.UserCardAvatar
                    size={64}
                    src={findUserData.findUser.avatar}
                  />
                </label>
              </>
            )}
          </S.UserCardAvatarBox>
          <S.UserCardInfo>
            <S.UserCardUserName>
              {findUserData.findUser.username}
            </S.UserCardUserName>
            {!isAuthor && (
              <S.UserCardButtonBox>
                <IconButton
                  icon={<AiOutlineUserAdd />}
                  text={'Follow'}
                  bgColor={theme.colors.darkBlue}
                  onClick={() => alert('clicked Follow Button')}
                />
              </S.UserCardButtonBox>
            )}
          </S.UserCardInfo>
        </S.UserCardTop>
        <S.StatusBox>
          <S.Status>
            <S.StatusTitle>I WORK AS A</S.StatusTitle>
            {userCardEditMode ? (
              <input
                value={userCard.position}
                name={'position'}
                onChange={handleChangeUserCard}
              />
            ) : (
              <S.StatusDescription>
                {findUserData.findUser.detail?.position}
              </S.StatusDescription>
            )}
          </S.Status>
          <S.Status>
            <S.StatusTitle>I'M WORKING AT</S.StatusTitle>
            {userCardEditMode ? (
              <input
                value={userCard.company}
                name={'company'}
                onChange={handleChangeUserCard}
              />
            ) : (
              <S.StatusDescription>
                {findUserData.findUser.detail?.company}
              </S.StatusDescription>
            )}
          </S.Status>
          <S.Status>
            <S.StatusTitle>MY WORK EXPERIENCE</S.StatusTitle>
            {userCardEditMode ? (
              <S.StatusExpInput
                type="number"
                value={userCard.experience}
                name="experience"
                onChange={handleChangeUserCard}
              />
            ) : (
              <S.StatusDescription>
                {userCard.experience} 년
              </S.StatusDescription>
            )}
          </S.Status>
          <S.Status>
            <S.StatusTitle>CURRENTLY</S.StatusTitle>
            {userCardEditMode ? (
              <div>
                <input
                  type="radio"
                  value={'true'}
                  checked={userCard.status}
                  name="status"
                  onChange={handleChangeUserCard}
                />{' '}
                구직 중
                <input
                  type="radio"
                  value={'false'}
                  checked={!userCard.status}
                  name="status"
                  onChange={handleChangeUserCard}
                />{' '}
                생각 없음
              </div>
            ) : (
              <S.StatusDescription>
                {findUserData.findUser.detail?.status ? '구직중' : '생각없음'}
              </S.StatusDescription>
            )}
          </S.Status>
        </S.StatusBox>
      </S.UserCard>

      <S.SelfIntroCard>
        <S.SelfIntroCardTitle>
          <span>SELF INTRO</span>
          {isAuthor && <S.EditButton onClick={onClickIntroEditIcon} />}
        </S.SelfIntroCardTitle>
        {introEditMode ? (
          <input onChange={handleChangeIntroduce} value={introduce} />
        ) : (
          <S.SelfIntroCardDescription>
            {findUserData.findUser.detail?.introduce ?? ''}
          </S.SelfIntroCardDescription>
        )}
      </S.SelfIntroCard>
      <S.SNSCard>
        <S.SNSCardTitle>
          <span>SNS</span>
          {isAuthor && <S.EditButton onClick={onClickUserSnsIcon} />}
        </S.SNSCardTitle>
        {snsEditMode ? (
          <S.SNSCardForm>
            <S.SNSCardFormItem>
              <S.Line disabled={false} />
              <S.SNSCardInput
                value={sns.line}
                onChange={handleChangeSns}
                name={'line'}
                placeholder={'Please input your Line ID (Optional)'}
              />
            </S.SNSCardFormItem>
            <S.SNSCardFormItem>
              <S.Kakao disabled={false} />
              <S.SNSCardInput
                value={sns.kakaotalk}
                onChange={handleChangeSns}
                name={'kakaotalk'}
                placeholder={'Please input your Kakao ID (Optional)'}
              />
            </S.SNSCardFormItem>
            <S.SNSCardFormItem>
              <S.Facebook disabled={false} />
              <S.SNSCardInput
                value={sns.facebook}
                onChange={handleChangeSns}
                name={'facebook'}
                placeholder={'Please input your Facebook ID (Optional)'}
              />
            </S.SNSCardFormItem>
            <S.SNSCardFormItem>
              <S.Instagram disabled={false} />
              <S.SNSCardInput
                value={sns.instagram}
                onChange={handleChangeSns}
                name={'instagram'}
                placeholder={'Please input your Instagram ID (Optional)'}
              />
            </S.SNSCardFormItem>
            <S.SNSCardFormItem>
              <S.Twitter disabled={false} />
              <S.SNSCardInput
                value={sns.twitter}
                onChange={handleChangeSns}
                name={'twitter'}
                placeholder={'Please input your Twitter ID (Optional)'}
              />
            </S.SNSCardFormItem>
          </S.SNSCardForm>
        ) : (
          <S.SNSCardContents>
            <S.Line
              onClick={onClickSNSIcon(findUserData.findUser.sns?.line)}
              disabled={!findUserData.findUser.sns?.line}
            />
            <S.Kakao
              onClick={onClickSNSIcon(findUserData.findUser.sns?.kakaotalk)}
              disabled={!findUserData.findUser.sns?.kakaotalk}
            />
            <S.Facebook
              onClick={onClickSNSIcon(findUserData.findUser.sns?.facebook)}
              disabled={!findUserData.findUser.sns?.facebook}
            />
            <S.Instagram
              onClick={onClickSNSIcon(findUserData.findUser.sns?.instagram)}
              disabled={!findUserData.findUser.sns?.instagram}
            />
            <S.Twitter
              onClick={onClickSNSIcon(findUserData.findUser.sns?.twitter)}
              disabled={!findUserData.findUser.sns?.twitter}
            />
          </S.SNSCardContents>
        )}
      </S.SNSCard>
      <S.SkillCard>
        <S.SkillCardTitle>
          <span>SELF INTRO</span>
        </S.SkillCardTitle>
        <S.SkillCardContents>
          {findUserData.findUser.skills.map((item) => (
            <S.SkillCardItem key={item.skill.id}>
              <S.SkillCardItemName>{item.skill.name}</S.SkillCardItemName>
              {isAuthor && (
                <S.SkillCardDeleteIcon
                  onClick={deleteUserSkill(item.skill.id)}
                />
              )}
            </S.SkillCardItem>
          ))}
          {isAuthor && (
            <S.SkillCardForm>
              <S.SKillCardIcon />
              <S.SkillCardInput
                placeholder={'새로운 스킬을 입력해주세요. '}
                value={skill}
                onChange={handleChangeSkill}
                onKeyPress={handleKeyPressSkill}
              />
            </S.SkillCardForm>
          )}
        </S.SkillCardContents>
      </S.SkillCard>
    </S.Wrapper>
  );
};

export default ProfileTemplate;
