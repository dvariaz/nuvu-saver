/**
 * List - It's a simple component to wrap elements with card style
 */
import styles from "./List.module.scss";

const List = ({ children }) => {
    return <div className={styles.body}>{children}</div>;
};

export default List;
