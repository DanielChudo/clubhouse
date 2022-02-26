import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Header, RoomCard } from '../../components';
import s from './Rooms.module.css';

const Rooms: FC = () => {
  return (
    <>
      <Head>
        <title>Clubhouse: Rooms</title>
      </Head>
      <Header />
      <div id={s.menu}>
        <h2>All rooms</h2>
        <button type="button" id={s.startRoomButton}>
          Start room
        </button>
      </div>
      <div>
        <Link href="/rooms/test">
          <a>
            <RoomCard
              title="Взлетит ли биткоин?"
              listeners={['Vasya Pupkin', 'David Marchellis', 'Mark Kevinov']}
              listenersCount={45}
              speakersAvatars={[
                'https://mota.ru/upload/resize/320/240/upload/wallpapers/2021/06/05/15/14/72810/blonde-girl-dress-beauty-portrait-jellina-krasivia-3bf.jpg',
                'https://i.pinimg.com/736x/be/b9/80/beb9802668755f0e39d1af6aad690c96.jpg',
              ]}
              speakersCount={2}
            />
          </a>
        </Link>
      </div>
    </>
  );
};

export default Rooms;
