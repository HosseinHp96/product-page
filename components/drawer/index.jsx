import styles from "./index.module.scss";

const Drawer = ({ children, isOpen, contentRef }) => {
  return (
    <div
      className={styles.drawer}
      ref={contentRef}
      style={
        isOpen
          ? { height: contentRef.current?.scrollHeight + "px" }
          : { height: "0px" }
      }
    >
      <div className={styles["drawer-content"]}>{children}</div>
    </div>
  );
};

export default Drawer;
