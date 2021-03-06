import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

const User = ({
  alt,
  className,
  children,
  ellipsis,
  image,
  small,
  name,
  ...other
}) => {
  var avatar;
  if (image === undefined) {
    avatar = (
      <Icon
        name="user"
        fill="#ffffff"
        width="14"
        height="14"
        description={alt}
        className="wfp--user__icon wfp--user__icon--empty"
        {...other}
      />
    );
  } else {
    avatar = <img alt={alt} className="wfp--user__icon" src={image} />;
  }

  const classes = classNames('wfp--user', className);

  const titleClasses = classNames({
    'wfp--user__title': true,
    'wfp--user__title--ellipsis': ellipsis,
    'wfp--user__title--small': small,
  });

  return (
    <div className={classes} {...other}>
      {avatar}
      {name && <span className={titleClasses}>{name}</span>}
      {children}
    </div>
  );
};

User.propTypes = {
  alt: PropTypes.string,
  ellipsis: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
};

User.defaultProps = {
  alt: 'User Icon',
  ellipsis: false,
};

export default User;
