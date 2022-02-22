import Link from 'next/link';
import React, { FC } from 'react';
import { Avatar } from '..';
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
        <h3>Clubhouse</h3>
      </div>
      <Link href="/profile/Daniel">
        <div id={s.avatar}>
          <h3>Tchudnovski Daniel</h3>
          <Avatar
            src="/static/default-avatar.png"
            alt="avatar"
            width={50}
            height={50}
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
