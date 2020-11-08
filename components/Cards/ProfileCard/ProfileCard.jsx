/**
 * ProfileCard - Card to display the profile data based on usertype
 */

import Image from "next/image";
import styles from "./ProfileCard.module.scss";

import { getName, getGraphic } from "../../../utils/userTypes.js";
import { toCurrency } from "../../../utils/numbers";

const ProfileCard = ({ amount, usertype }) => {
    const name = getName(usertype);
    const graphicUrl = getGraphic(usertype);

    return (
        <div className={styles.body}>
            <div className={`${styles.userData} flex-column-between`}>
                <h3>Eres {name}</h3>
                <div className={styles.amount}>
                    <small>Tu saldo</small>
                    <strong>{toCurrency(amount)}</strong>
                </div>
            </div>
            {graphicUrl && (
                <div className={styles.userGraphic}>
                    <Image
                        src={graphicUrl}
                        alt={name}
                        width={200}
                        height={200}
                        layout="responsive"
                    />
                </div>
            )}
        </div>
    );
};

export default ProfileCard;
