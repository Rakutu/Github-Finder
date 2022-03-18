import styles from './spiner.module.css';

export function Spiner() {
  return (
    <div className={styles.spiner__wrapper}>
      <div className={styles.spiner}></div>
    </div>
  );
}
