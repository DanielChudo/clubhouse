import React, { FC } from 'react';
import s from './Avatar.module.css';

interface IAvatarProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Avatar: FC<IAvatarProps> = ({ src, alt, width, height }) => {
  return (
    <img
      className={s.avatar}
      alt={alt}
      src={src || '/static/default-avatar.png'}
      width={width}
      height={height}
    />
  );
};

export default Avatar;
