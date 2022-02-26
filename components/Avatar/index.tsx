import React, { FC } from 'react';
import s from './Avatar.module.css';

interface IAvatarProps {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Avatar: FC<IAvatarProps> = ({
  className = '',
  src,
  alt,
  width,
  height,
}) => {
  return (
    <img
      className={`${s.avatar} ${className}`}
      alt={alt}
      src={src || '/static/default-avatar.png'}
      width={width}
      height={height}
    />
  );
};

export default Avatar;
