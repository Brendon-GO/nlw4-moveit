import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://i.pinimg.com/736x/f2/33/2c/f2332c0f88240cb8724acd7f6d44e3af.jpg"
        alt="Brendon Gama"
      />
      <div>
        <strong>Brendon Gama</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
