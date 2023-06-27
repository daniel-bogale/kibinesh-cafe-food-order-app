import Card from "../UI/Card";
import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <>
      <section className={styles.summary}>
        <h2>Kibinesh Foods, Order From Anywhere</h2>
        <p>Check if your food is finished</p>
        <div className={styles.form}>
          <input placeholder="insert your order id"></input>
          <button className={styles.button}>Check</button>
        </div>
        {/* <p>your Order is finished</p>
      <p>your Order is </p> */}
      </section>
    </>
  );
};

export default MealsSummary;
