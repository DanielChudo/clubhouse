import React, { FC } from 'react';
import Link from 'next/link';
import Avatar from '../Avatar';
import s from './Header.module.css';

const Header: FC = () => {
  return (
    <div id={s.header}>
      <div>
        <img
          src="/static/wave-hand.png"
          alt="wave-hand"
          width={40}
          height={40}
        />
        <h4>Clubhouse</h4>
      </div>
      <Link href="/profile/Daniel">
        <div id={s.avatar}>
          <h4>Tchudnovski Daniel</h4>
          <Avatar
            src="/static/default-avatar.png"
            alt="avatar"
            width={45}
            height={45}
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
