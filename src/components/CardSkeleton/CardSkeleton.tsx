import styles from './CardSkeleton.module.scss';

const CardSkeleton = () => {
  return (
    <div className={styles.root}>
      <div className={styles.image}></div>
      <div className={styles.title}></div>
      <div className={styles.desc}>
        <div className={styles.textRow}></div>
        <div className={styles.textRow}></div>
        <div className={styles.textRow}></div>
      </div>
      <div className={styles.footer}>
        <div className={styles.price}></div>
        <div className={styles.button}></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
