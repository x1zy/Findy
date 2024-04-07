import styles from "./hobby.module.scss"

export const Hobby = () => {


    return (
      <div>
     <div className={styles.Hobbies}>Увлечения</div>
     <div className={styles.dance}>Танцы</div>
     <div className={styles.Marketing}>Маркетинг</div>
     <div className={styles.Volleyball}>Волейбол</div>
     <div className={styles.Bars}>Бары</div>
     <div className={styles.Networking}>Нетворкинг</div>
     <div className={styles.View_all}>Смотреть все</div>
    
      </div>
    );
  }