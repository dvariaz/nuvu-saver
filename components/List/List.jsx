import styles from "./List.module.scss";

const List = ({ children }) => {
    return <div className={styles.body}>{children}</div>;
};

export default List;
