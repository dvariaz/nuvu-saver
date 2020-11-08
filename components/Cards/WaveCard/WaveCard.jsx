/**
 * WaveCard - Card to display videos with wave-decorated captions
 */

import Image from "next/image";
import styles from "./WaveCard.module.scss";

const WaveCard = ({ title, description, background }) => {
    return (
        <div className={styles.body}>
            <div className={styles.wave}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={styles.background}>
                <div className={`${styles.player} flex-center`}>
                    <img src="/icons/play_circle_outline_24px.svg" />
                </div>
                <Image src={background} layout="fill" />
            </div>
        </div>
    );
};

export default WaveCard;
