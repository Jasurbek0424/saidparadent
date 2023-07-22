import Image from "next/image"
import styles from "./results.module.css"

const Result = () => {
  return (
    <section className={styles.result}>
      <div>
        <div className={styles.result_title}>
          <h1>Результат работы</h1>
        </div>
        <div className={styles.result_item}>
          <div className={styles.result_right}>
            <Image
              className={styles.result_photo}
              src="/img/results/result_photo.png"
              width={450}
              height={450}
              alt={'Dental Clinic'}
            />
          </div>
          <div className={styles.result_left}>
            <p>
              Результат нашей работы складывается <br /> из нескольких важных
              составляющих:
            </p>
            <button className={styles.btn_length}>
              <span>+</span> Оснащение клиники современным импортным
              оборудованием
            </button>
            <div className={styles.btn_flex}>
              <button className={styles.btn_medium}>
                <span>+</span> Первоклассный сервис
              </button>
              <button className={styles.btn_medium}>
                <span>+</span> Точность диагностики
              </button>
            </div>
            <div className={styles.btn_flex}>
              <button className={styles.btn_short}>
                <span>+</span> Безопасность
              </button>
              <button className={styles.btn_medium2}>
                <span>+</span>Специалисты с многолетним опытом
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
