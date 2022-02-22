import React, { FC, useState } from 'react';
import Head from 'next/head';
import { IStepProps } from '../types';
import { ChooseAvatarStep, EnterNameStep, WelcomeStep } from '../components';
import Profile from './profile/[username]';

const stepsComponents = [WelcomeStep, EnterNameStep, ChooseAvatarStep, Profile];

const Home: FC = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const Step: FC<IStepProps> = stepsComponents[stepNumber];

  return (
    <>
      <Head>
        <title>Clubhouse: The Social Audio App</title>
      </Head>
      <Step
        onNextStep={() => setStepNumber((prevStepNumber) => prevStepNumber + 1)}
      />
    </>
  );
};

export default Home;
