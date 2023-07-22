import React from 'react'
import Card from '../shared/cards/cards'
import styles from '../shared/cards/cards.module.css'

const Standarts = () => {
  return (
    <section className={styles.standarts}>
        <div >
          <div className={styles.card_txt}>
            <h1>По мировым стандартам</h1>
          </div>
          <div className={styles.cards}>
            <Card
              src="/img/results/card1.png"
              title="лечим во сне"
              text="лечим спомощью наркоза"
            />
            <Card
              src="/img/results/card2.png"
              title="следим за безопасностью"
              text="дизинфицируем инструменнты по всем стандартам санпинна"
            />
            <Card
              src="/img/results/card3.png"
              title="лечим пожилых людей"
              text="специальная программа для пожилых клиентов"
            />
            <div className={styles.hidden}>
              <Card
                src="/img/results/card4.png"
                title="отвечаем за свою работу"
                text="Предоставляем гарантию на все виды услуг"
              />
            </div>
            <div className={styles.hidden}>
              <Card
                src="/img/results/card5.png"
                title="лечим матерей"
                text="безопасно лечим матерей"
              />
            </div>
          </div>
          <div className={styles.card2}>
            <Card
              src="/img/results/card4.png"
              title="отвечаем за свою работу"
              text="Предоставляем гарантию на все виды услуг"
            />{" "}
            <Card
              src="/img/results/card5.png"
              title="лечим матерей"
              text="безопасно лечим матерей"
            />
          </div>
        </div>
    </section>
  )
}

export default Standarts