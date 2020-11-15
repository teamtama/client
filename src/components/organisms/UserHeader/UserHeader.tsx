import React, { FunctionComponent } from 'react';
import Avatar from '../../molecules/Avatar/Avatar';

interface OwnProps {
  className?: string;
  onClickAvatar: any;
  avatar?: string;
}

type Props = OwnProps;

const UserHeader: FunctionComponent<Props> = ({
  className,
  onClickAvatar,
  avatar,
  ...otherProps
}) => {
  return (
    <div className={className} {...otherProps}>
      <Avatar onClick={onClickAvatar} src={avatar} />
    </div>
  );
};

export default UserHeader;
