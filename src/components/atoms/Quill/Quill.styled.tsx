import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { AiFillAlert } from 'react-icons/ai';
import Typography from '../Typography/Typography';
import { theme } from '../../../style';

export const Wrapper = styled.div``;

export const Header = styled.div`

`;
export const Label = styled(Typography)`
  
`;
export const Require = styled(Typography)`

`;

export const Editor = styled.div<{ errorMode: boolean }>`
  border-radius: 4px;
  ${({ errorMode }) => css`
    border: 1px solid ${errorMode && theme.alert.error};
    ${!errorMode &&
    css`
      &:focus-within {
        border: 1px solid ${theme.alert.success};
      }
    `}
  `};
`;

export const ErrorBox = styled.div`
  
`;
export const ErrorIcon = styled(AiFillAlert)`
    
z`;
export const Error = styled(Typography)`
  
`;
