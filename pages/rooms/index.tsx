import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import { GetServerSideProps } from 'next/types';
import { Header, RoomCard } from '../../components';
import s from './Rooms.module.css';
import { IRoomCardProps } from '../../types';

interface IRoomsProps {
  rooms: IRoomCardProps[];
}

const Rooms: FC<IRoomsProps> = ({ rooms }) => {
  return (
    <>
      <Head>
        <title>Clubhouse: Rooms</title>
      </Head>
      <Header />
      {/* button changes div height */}
      <div id={s.menu} style={{ height: '1.4rem' }}>
        <h3>All rooms</h3>
        <button type="button" id={s.startButton}>
          Start room
        </button>
      </div>
      <div id={s.rooms}>
        {rooms.map((room) => (
          <Link key={room.id} href={`/rooms/${room.id}`}>
            <a className={s.roomCard}>
              <RoomCard
                id={room.id}
                title={room.title}
                listeners={room.listeners}
                listenersCount={room.listenersCount}
                speakersAvatars={room.speakersAvatars}
                speakersCount={room.speakersCount}
              />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data }: { data: IRoomCardProps[] } = await axios.get(
    'http://localhost:3000/rooms.json'
  );
  return {
    props: { rooms: data },
  };
};

export default Rooms;
