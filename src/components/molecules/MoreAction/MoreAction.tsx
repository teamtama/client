import React, { FunctionComponent } from 'react';
import { MoreAction } from '../../organisms/BaseDetail/BaseDetail';
import { MdMoreHoriz } from 'react-icons/md';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  isAuthor: boolean;
  moreActions?: MoreAction[];
}

type Props = OwnProps;

const MoreActionComponent: FunctionComponent<Props> = ({
  isAuthor = false,
  moreActions,
}) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  return (
    <div
      css={css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;
      `}
      onMouseLeave={() => setOpen(false)}
    >
      {isAuthor && moreActions && (
        <MdMoreHoriz
          css={css`
            border-radius: 50%;
            transition: all 400ms ease-out;
            cursor: pointer;
            padding: ${theme.space / 2}px;
            font-size: 18px;
            &:hover {
              background-color: ${theme.colors.lightGray};
            }
          `}
          onMouseEnter={() => setOpen(true)}
        />
      )}
      {isAuthor && moreActions && open && (
        <div
          css={css`
            position: absolute;
            z-index: 9999;
            background-color: white;
            top: 18px;
            right: 24px;
            border: 1px solid ${theme.colors.lightGray};
            border-radius: ${theme.space / 2}px;
          `}
        >
          {moreActions.map((action, idx) => (
            <div
              css={css`
                width: 160px;
                height: 32px;
                line-height: 32px;
                transition: all 400ms ease-out;
                cursor: pointer;
                padding-right: ${theme.space * 2}px;
                padding-left: ${theme.space * 2}px;
                color: ${action.color ?? '#000'};
                &:hover {
                  background-color: ${theme.colors.lightGray};
                }
              `}
              key={idx}
              onClick={action.onClick}
            >
              {action.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoreActionComponent;
