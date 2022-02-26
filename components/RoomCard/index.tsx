import React, { FC } from 'react';
import Avatar from '../Avatar';
import s from './RoomCard.module.css';

interface IRoomCardProps {
  title: string;
  listeners: string[];
  listenersCount: number;
  speakersAvatars: string[];
  speakersCount: number;
}

const RoomCard: FC<IRoomCardProps> = ({
  title,
  listeners,
  listenersCount,
  speakersAvatars,
  speakersCount,
}) => {
  return (
    <div className={`${s.card} container`}>
      <h4 className={s.title}>{title}</h4>
      <div style={{ display: 'flex' }}>
        <div className={s.avatars}>
          {speakersAvatars.map((url, i) => (
            <Avatar
              className={
                speakersAvatars.length > 1 && i === speakersAvatars.length - 1
                  ? s.lastAvatar
                  : ''
              }
              key={url}
              src={url}
              alt="avatar"
              width={45}
              height={45}
            />
          ))}
        </div>
        <div className={s.info}>
          <ul className={s.listeners}>
            {listeners.map((name) => (
              <li key={name}>
                {name}
                <img
                  src="/static/cloud.png"
                  alt="listening"
                  width={14}
                  height={14}
                />
              </li>
            ))}
          </ul>
          <ul className={s.details}>
            <li>
              {listenersCount}
              <img
                src="/static/user.svg"
                alt="listeners count"
                width={12}
                height={12}
              />
            </li>
            <li>
              {speakersCount}
              <img
                src="/static/message.svg"
                alt="spekers count"
                width={12}
                height={12}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
