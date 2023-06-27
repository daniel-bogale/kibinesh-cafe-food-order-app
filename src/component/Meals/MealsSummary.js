import { useEffect, useRef, useState } from "react";
import Card from "../UI/Card";
import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  const [allServedOrders, setAllOrders] = useState([]);
  const [orderFinished, setOrderFinished] = useState(null);
  const inputRef = useRef();
  useEffect(() => {
    const fetchServedOrders = async () => {
      try {
        const response = await fetch(
          "https://react-first-38e92-default-rtdb.firebaseio.com/servedOrders.json"
        );

        if (!response.ok) {
          throw new Error("error 404");
        }
        const responseData = await response.json();

        setAllOrders(responseData);
        console.log(responseData);
      } catch (err) {
        console.log(err, "dani");
      }
    };

    fetchServedOrders();
    setInterval(() => {
      fetchServedOrders();
    }, 2000);
  }, []);

  const onCheckHandler = (e) => {
    e.preventDefault();
    const id = inputRef.current.value;
    if (!id) return;
    const elem = allServedOrders.find((orders) => orders.key === +id);
    if (elem) {
      setOrderFinished(true);
    } else {
      setOrderFinished(false);
    }
    setTimeout(() => {
      setOrderFinished(null);
    }, 5000);
  };

  return (
    <>
      <section className={styles.summary}>
        <h2>Kibinesh Foods, Order From Anywhere</h2>
        <p>Check if your food is finished</p>
        <form onSubmit={onCheckHandler} className={styles.form}>
          <input
            type="number"
            ref={inputRef}
            placeholder="insert your order id"
          ></input>
          <button className={styles.button}>Check</button>
        </form>
        {orderFinished && (
          <div>
            <p>Your order is done</p>
            <p>You should come pick it up or request delivery.</p>
          </div>
        )}
        {orderFinished === false && <p>your order isn't done yet </p>}
      </section>
    </>
  );
};

export default MealsSummary;
