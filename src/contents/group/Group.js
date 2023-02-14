import styles from "./Group.module.css";
import { useRef } from "react";

const Group = () => {
  const ref = {
    0: useRef(),
    1: useRef(),
  };
  const onMoveClick0 = () => {
    ref[0].current?.scrollIntoView();
  };
  const onMoveClick1 = () => {
    ref[1].current?.scrollIntoView();
  };

  return (
    <div>
      <div className={styles.sidebar}>
        <ul>
          <li>
            <div onClick={onMoveClick0} className={styles.sidebar__contents}>
              인사말
            </div>
          </li>
          <li>
            <div onClick={onMoveClick1} className={styles.sidebar__contents}>
              대표이사 소개
            </div>
          </li>
        </ul>
      </div>
      <h1>그룹소개</h1>
      <div ref={ref[0]} className={styles.test1}>
        인사말
      </div>
      <div ref={ref[1]} className={styles.test2}>
        대표이사 소개
      </div>
    </div>
  );
};

export default Group;
