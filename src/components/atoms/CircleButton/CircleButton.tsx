import React, { FunctionComponent } from 'react';
import { css, useTheme } from "@emotion/react";

interface OwnProps {
  bgColor: string;
  icon: any;
  className?: string;
  onClick: any;
}

type Props = OwnProps;

const CircleButton: FunctionComponent<Props> = ({
  onClick,
  bgColor,
  icon,
  className,
  ...otherProps
}) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        position: fixed;
        border-radius: 50%;
        right: ${theme.space * 4}px;
        bottom: ${theme.space * 4}px;
        padding: ${theme.space * 1.5}px;
        background-color: ${bgColor};
        ${onClick && 'cursor: pointer'}
      `}
      onClick={onClick}
      className={className}
      {...otherProps}
    >
      {icon}
    </div>
  );
};

export default CircleButton;
