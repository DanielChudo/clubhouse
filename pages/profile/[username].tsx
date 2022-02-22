import React, { FC } from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import { Avatar, Header } from '../../components';
import s from './Profile.module.css';

const Profile: FC = () => {
  // let { username } = useRouter().query;

  // if (!username) {
  //   return <div>username пуст</div>;
  // }

  // if (Array.isArray(username)) {
  //   username = username[0];
  // }

  return (
    <>
      <Header />
      <Link href="/rooms">
        <div id={s.back}>
          <img src="/static/back-arrow.svg" alt="back" />
          <h3>Back</h3>
        </div>
      </Link>
      <div id={s.info}>
        <Avatar
          src="/static/default-avatar.png"
          alt="avatar"
          width={100}
          height={100}
        />
        <div>
          <h2>Daniel Tchudnovski</h2>
          <h3 id={s.username}>@tchudnovski</h3>
        </div>
        <button id={s.followButton} type="button">
          Follow
        </button>
      </div>
      <p>
        Hey, guys. I am develop a clubhouse clone now. Seems very close, right?
      </p>
    </>
  );
};

export default Profile;
