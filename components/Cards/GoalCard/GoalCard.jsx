import { CircularProgressbar } from "react-circular-progressbar";
import Image from "next/image";
import { toCurrency } from "../../../utils/numbers";
import styles from "./GoalCard.module.scss";

const GoalCard = ({ title, goal, currentMoney, imageSrc }) => {
    const percentage = (currentMoney / goal) * 100;

    return (
        <div className={`${styles.body} flex-column-between`}>
            <div>
                <Image src={imageSrc} width={40} height={40} />
                <h3 className={styles.title}>{title}</h3>
            </div>
            <div className="flex-row">
                <div className={styles.progress}>
                    <CircularProgressbar
                        value={percentage}
                        text={`${parseInt(percentage)}%`}
                        strokeWidth={10}
                        styles={{
                            path: {
                                stroke: "var(--active-color)",
                            },
                            text: {
                                fontSize: "2.5em",
                                fill: "var(--active-color)",
                                fontWeight: "600",
                            },
                            trail: {
                                stroke: "var(--trail-color)",
                            },
                        }}
                        counterClockwise
                    />
                </div>
                <div className={`${styles.values} flex-1 flex-column-center`}>
                    <strong>{toCurrency(currentMoney)}</strong>
                    <span>{toCurrency(goal)}</span>
                </div>
            </div>
        </div>
    );
};

export default GoalCard;
