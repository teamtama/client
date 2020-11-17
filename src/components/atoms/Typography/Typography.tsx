import React, { ElementType, FunctionComponent } from 'react';
import { css, useTheme } from '@emotion/react';

const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  primary: 'span',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  small: 'p',
} as const;

interface OwnProps {
  variant?: keyof typeof defaultVariantMapping;
  className?: string;
  color?: string;
  component?: ElementType;
  display?: 'initial' | 'block' | 'inline';
}

type Props = OwnProps;

const Typography: FunctionComponent<Props> = ({
  className,
  color,
  variant = 'primary',
  component,
  display,
  ...props
}) => {
  const theme = useTheme();
  const Component = component ?? defaultVariantMapping[variant];

  return (
    <Component
      css={css(
        css`
          justify-items: center;
          align-self: center;
          color: ${color ?? theme.colors.black};
          ${display && `display: ${display}`};
        `,
        { ...theme.font[variant] },
      )}
      className={className}
      {...props}
    />
  );
};

export default Typography;
