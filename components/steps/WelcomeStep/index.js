import Head from 'next/head';
import Image from 'next/image';
import s from './WelcomeStep.module.css';

function WelcomeStep() {
  return (
    <div id={s.block} className="container">
      <Head>
        <title>Clubhouse: The Social Audio App</title>
      </Head>
      <div id={s.welcomeBlock}>
        <Image
          src="/static/wave-hand.png"
          alt="wave-hand"
          width={40}
          height={40}
        />
        <h1>Welcome to Clubhouse!</h1>
      </div>
      <p>
        We&apos;re working hard to get Clubhouse ready for everyone!
        <br />
        While we wrap up the finishing youches, we&apos;re adding
        <br />
        gradually to make sure nothing breaks :)
      </p>
      <button id={s.loginButton}>Get your username</button>
      <span>Have an invite text? Sign in</span>
    </div>
  );
}

export default WelcomeStep;
