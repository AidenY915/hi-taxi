const Sidebar = (props) => {
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
    </div>
  );
};

export default Sidebar;
