import styles from "./Recruit.module.css";
import { useRef } from "react";

const Recruit = () => {
  const ref = {
    0: useRef(),
    1: useRef(),
    2: useRef(),
  };
  const onMoveClick0 = () => {
    ref[0].current?.scrollIntoView();
  };
  const onMoveClick1 = () => {
    ref[1].current?.scrollIntoView();
  };
  const onMoveClick2 = () => {
    ref[2].current?.scrollIntoView();
  };

  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <ul>
          <li>
            <div onClick={onMoveClick0} className={styles.sidebar__contents}>
              입사절차
            </div>
          </li>
          <li>
            <div onClick={onMoveClick1} className={styles.sidebar__contents}>
              입사서류
            </div>
          </li>
          <li>
            <div onClick={onMoveClick2} className={styles.sidebar__contents}>
              찾아오는 길
            </div>
          </li>
        </ul>
      </div>
      <h1>기사모집</h1>
      <div ref={ref[0]} className={styles.test1}>
        입사절차
      </div>
      <div ref={ref[1]} className={styles.test2}>
        입사서류
      </div>
      <div ref={ref[2]} className={styles.test3}>
        찾아오는 길
      </div>
    </div>
  );
};

export default Recruit;
