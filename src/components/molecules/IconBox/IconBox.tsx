import React, { FunctionComponent } from 'react';
import { css, useTheme } from '@emotion/react';
import Typography from '../../atoms/Typography/Typography';

interface OwnProps {
  icon: any;
  className?: any;
  text?: any;
  bgColor: string;
}

type Props = OwnProps;

const IconBox: FunctionComponent<Props> = ({
  icon,
  className,
  text,
  bgColor,
  ...otherProps
}) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        height: 32px;
        border-radius: 4px;
        display: flex;
        gap: 4px;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.white};
        background-color: ${bgColor};
        padding: 0 ${theme.space}px;
      `}
      className={className}
      {...otherProps}
    >
      {icon}
      {text && (
        <Typography
          css={css`
            display: block;
            font-weight: 600;
          `}
          size={'small'}
        >
          {text}
        </Typography>
      )}
    </div>
  );
};

export default IconBox;
