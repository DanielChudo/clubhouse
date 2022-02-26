import React, { FC } from 'react';
import Link from 'next/link';
import s from './BackButton.module.css';

interface IBackButtonProps {
  title: string;
  href: string;
}

const BackButton: FC<IBackButtonProps> = ({ title, href }) => {
  return (
    <Link href={href}>
      <a>
        <div id={s.back}>
          <img src="/static/back-arrow.svg" alt="back" />
          <h3>{title}</h3>
        </div>
      </a>
    </Link>
  );
};

export default BackButton;
