import React, { FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { GetServerSideProps } from 'next/types';
import { BackButton, Header } from '../../components';
import s from './Rooms.module.css';
import { IRoomCardProps } from '../../types';

interface IRoomProps {
  room: IRoomCardProps;
}

const Room: FC<IRoomProps> = ({ room }) => {
  return (
    <>
      <Head>
        <title>Clubhouse: Room</title>
      </Head>
      <Header />
      <BackButton title="All rooms" href="/rooms" />
      <div className={`${s.room} container`}>
        <div id={s.menu}>
          <h2>{room.title}</h2>
          <Link href="/">
            <a>
              <button type="button" id={s.leaveButton}>
                <img
                  width={18}
                  height={18}
                  src="/static/peace.png"
                  alt="leave"
                />
                Leave quietly
              </button>
            </a>
          </Link>
        </div>
        <div>users</div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data }: { data: IRoomCardProps[] } = await axios.get(
    'http://localhost:3000/rooms.json'
  );
  const roomId = context.query.id;
  const room = data.find((roomCard) => roomCard.id === roomId);
  return {
    props: { room },
  };
};

export default Room;
