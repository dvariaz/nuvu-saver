/**
 * Chip - Minimal and customizable component to show text inside based in 2 chip types (solid and light)
 */

import styles from "./Chip.module.scss";

import { CHIP_SOLID, CHIP_LIGHT } from "./chipTypes";

const Chip = ({ type, chipStyle, children }) => {
    switch (chipStyle) {
        case CHIP_LIGHT: {
            return <div className={`${styles.body} ${styles.light}`}>{children}</div>;
        }
        case CHIP_SOLID: {
            return <div className={`${styles.body} ${styles.solid}`}>{children}</div>;
        }
        default:
            return <div className={`${styles.body} ${styles.solid}`}>{children}</div>;
    }
};

export default Chip;
