import React, { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';
import BaseInput from '../../molecules/BaseInput/BaseInput';
import Quill from '../../atoms/Quill/Quill';
import Button from '../../atoms/Button/Button';
import BaseSelect, {
  SelectOption,
} from '../../molecules/BaseSelect/BaseSelect';
import { BoardCategory } from '../../../generated/graphql';
import useBoardCrud from '../../../utils/hooks/useBoardCrud';
import { css, useTheme } from '@emotion/react';

const categoryOptions: SelectOption[] = [
  {
    value: BoardCategory.Free,
    label: '자유게시판',
  },
  {
    value: BoardCategory.Fq,
    label: '질문답변',
  },
  {
    value: BoardCategory.Trade,
    label: '프리마켓',
  },
  {
    value: BoardCategory.Job,
    label: '취업정보',
  },
];

interface OwnProps {
  isEdit?: boolean;
  boardId?: string;
  board?: any;
}

type Props = OwnProps;

const BoardForm: FunctionComponent<Props> = ({
  isEdit = false,
  boardId,
  board,
}) => {
  const theme = useTheme();
  const { onSubmit, control, errors } = useBoardCrud({
    isEdit,
    boardId,
    board,
  });

  return (
    <form
      css={css`
        display: grid;
        grid-gap: ${theme.space * 4}px;
      `}
      onSubmit={onSubmit}
    >
      <Controller
        control={control}
        name={'category'}
        render={({ onChange, value }) => {
          return (
            <BaseSelect
              required
              onChange={onChange}
              value={value}
              label={'Category'}
              errorMessage={errors.category?.message}
              options={categoryOptions}
            />
          );
        }}
      />
      <Controller
        control={control}
        name={'title'}
        render={({ onChange, value }) => (
          <BaseInput
            required
            value={value}
            onChange={onChange}
            label={'Title'}
            errorMessage={errors.title?.message}
          />
        )}
      />
      <Controller
        control={control}
        name={'description'}
        render={({ onChange }) => (
          <Quill
            label={'Description'}
            required
            body={board.description}
            onChange={onChange}
            placeholder={'본문을 입력해주세요. '}
            errorMessage={errors.description?.message}
          />
        )}
      />
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Button>{isEdit ? 'Edit' : 'Create'}</Button>
      </div>
    </form>
  );
};

export default BoardForm;
