import { FC, useState } from 'react';
import { StepProps } from '../../../types';
import StepInfo from '../../stepInfo';
import s from './ChooseAvatarStep.module.css';

const ChooseAvatarStep: FC<StepProps> = ({ onNextStep }) => {
  const [avatarImage, setAvatarImage] = useState('');

  const onFileChange = (e) => {
    // add optional chaining
    if (e.target.files && e.target.files[0]) {
      setAvatarImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div id="step-block">
      <StepInfo
        icon="/static/party-popper.png"
        alt="party popper"
        title="Okay, Daniel!"
        description="Choose your best photo"
      />
      <div className="container">
        <label htmlFor="chooseAvatarButton" id={s.chosenAvatarBlock}>
          <img
            className="avatar"
            alt="avatar"
            src={avatarImage || '/static/default-avatar.png'}
            width={120}
            height={120}
          />
        </label>
        <label htmlFor="chooseAvatarButton">
          Choose a different photo
        </label>
        <input
          id="chooseAvatarButton"
          type="file"
          onChange={onFileChange}
          hidden
        />
        <button onClick={onNextStep} disabled={!avatarImage}>
          Next
          <img src="/static/arrow.svg" />
        </button>
      </div>
    </div>
  );
}

export default ChooseAvatarStep;
