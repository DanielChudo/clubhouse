import { FC, useState } from 'react';
import StepInfo from '../../stepInfo';
import s from './ChooseAvatarStep.module.css';

const ChooseAvatarStep: FC = () => {
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
        <div id={s.chosenAvatarBlock}>
          <img
            className="avatar"
            src={avatarImage}
            width={120}
            height={120}
          />
        </div>
        <label htmlFor="chooseAvatarButton">
          Choose a different photo
        </label>
        <input
          id="chooseAvatarButton"
          type="file"
          onChange={onFileChange}
          hidden
        />
        <button>
          Next
          <img src="/static/arrow.svg" />
        </button>
      </div>
    </div>
  );
}

export default ChooseAvatarStep;
