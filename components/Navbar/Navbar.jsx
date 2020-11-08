/**
 * Navbar - SVG based component for navigate in the app
 * The SVG container could be animated moving the mask
 */

import { motion } from "framer-motion";
import styles from "./Navbar.module.scss";

const Navbar = ({ links }) => {
    return (
        <header className={`${styles.container} flex-row-center padding-x-2`}>
            <nav className={`${styles.body} flex-row-around`}>
                {links.map((link, index) => (
                    <a key={link.href} href="#">
                        {link.main ? (
                            <motion.div className={styles.main} whileTap={{ scale: 1.25 }}>
                                <img src={link.icon} />
                            </motion.div>
                        ) : (
                            <div className={styles.icon}>
                                <img src={link.icon} className={link.main} />
                            </div>
                        )}
                        <span className={`${styles.name} ${link.main && "margin-top-auto"}`}>
                            {link.name}
                        </span>
                    </a>
                ))}
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="xMidYMin slice"
                    className={styles.background}
                >
                    <defs>
                        <mask id="hole">
                            <rect width="100%" height="100%" fill="white" />
                            <circle r="9" cx="50" cy="0" fill="black" />
                        </mask>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="white" mask="url(#hole)" />
                </svg>
            </nav>
        </header>
    );
};

export default Navbar;
