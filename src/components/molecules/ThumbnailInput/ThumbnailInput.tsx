import React, { FunctionComponent } from 'react';
import { css, useTheme } from '@emotion/react';
import Typography from '../../atoms/Typography/Typography';
import useResizeFileToBlob from '../../../utils/hooks/useResizeFileToBlob';

interface OwnProps {
  state: Blob | null | undefined;
  setState: any;
}

type Props = OwnProps;

const ThumbnailInput: FunctionComponent<Props> = ({ state, setState }) => {
  const theme = useTheme();
  const { resizeFileToBlob } = useResizeFileToBlob();

  const handleChangeFile = async (e: any) => {
    if (e.target.files.length === 0) {
      return null;
    }
    const file = e.target.files[0];
    const image = await resizeFileToBlob(file);
    setState(image);
  };

  return (
    <div
      css={css`
        display: flex;
        gap: ${theme.space * 2}px;
      `}
    >
      <div
        css={css`
          width: 120px;
          height: 120px;
          overflow: hidden;
          border-radius: 4px;
        `}
      >
        <img
          css={css`
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
          src={
            state
              ? URL.createObjectURL(state)
              : 'https://www.hopkinsmedicine.org/-/media/feature/noimageavailable.ashx'
          }
          alt={'thumbnail'}
        />
      </div>
      <div
        css={css`
          display: flex;
          flex: 1;
        `}
      >
        <input
          id={'notice-file-input'}
          css={css`
            display: none;
          `}
          onChange={handleChangeFile}
          type="file"
          accept="image/png, image/jpeg"
        />
        <label
          htmlFor="notice-file-input"
          css={css`
            flex: 1;
            border: 2px dashed ${theme.colors.lightGray};
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <Typography variant={'small'}>
            썸네일에 사용 될 이미지를 업로드 해 주세요.
          </Typography>
        </label>
      </div>
    </div>
  );
};

export default ThumbnailInput;
