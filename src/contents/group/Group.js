import styles from "./Group.module.css";
import { useRef } from "react";
import styled from "styled-components";
import SayHi from "./SayHi.js"
import CEOIntroduction from "./CEOIntroduction.js"

const ContextBox = styled.div`
  width:1200px;
  margin: 0 auto;
  border-width: 0px 0.5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.25);
`

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
      <ContextBox>
        <SayHi></SayHi>
        <div ref={ref[1]} >
         대표이사 소개
        </div>
        <CEOIntroduction></CEOIntroduction>
      </ContextBox>
    </div>
  );
};

export default Group;
