import React, { FC } from 'react';
import { Avatar, BackButton, Header } from '../../components';
import s from './Profile.module.css';

const Profile: FC = () => {
  return (
    <>
      <Header />
      <BackButton title="Back" href="/rooms" />
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
