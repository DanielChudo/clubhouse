import Image from 'next/image';
import s from './StepsInfo.module.css';

function StepsInfo({icon, alt, title, description}) {
  return (
    <div id={s.stepsInfoBlock}>
      <img
        src={icon}
        alt={alt}
        width={64}
        height={64}
      />
      <h3>{title}</h3>
      <h3 id={s.description}>{description}</h3>
    </div>
  );
}

export default StepsInfo;
