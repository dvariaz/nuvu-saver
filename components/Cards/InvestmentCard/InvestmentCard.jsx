import { toCurrency, toPercent } from "../../../utils/numbers";
import styles from "./InvestmentCard.module.scss";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import Chip from "../../Chip";
import { CHIP_SOLID } from "../../Chip/chipTypes";

import RadialSeparators from "./RadialSeparators";

const InvestmentCard = ({ investments }) => {
    return (
        <div className={styles.body}>
            <div className="flex-row margin-bottom-1">
                <div className={`${styles.progress} margin-right-1`}>
                    <CircularProgressbarWithChildren
                        value={10}
                        strokeWidth={8}
                        styles={buildStyles({
                            pathColor: "var(--success-color)",
                            strokeLinecap: "butt",
                        })}
                    >
                        <div className={`${styles.advisor} text-center`}>
                            <img src="/logos/robo-advisor-logo.png" />
                            <div className={`${styles.advisorData} flex-column text-center`}>
                                <span className={styles.advisorBrand}>RoboAdvisor</span>
                                <span className={styles.advisorFunds}>10 Fondos</span>
                            </div>
                        </div>
                        <RadialSeparators
                            count={10}
                            style={{
                                background: "var(--trail-color)",
                                width: "2px",
                                // This needs to be equal to props.strokeWidth
                                height: `${10}%`,
                            }}
                        />
                    </CircularProgressbarWithChildren>
                </div>
                <div className="flex-1 flex-column margin-left-1">
                    <div className="flex-row-between">
                        <img
                            src="/investment-funds/skandia-logo.png"
                            className={styles.investmentFund}
                        />
                        <Chip chipStyle={CHIP_SOLID}>{toPercent(0.15)}</Chip>
                    </div>
                    <div className={`${styles.investment} margin-bottom-1`}>
                        <h4 className={styles.investmentName}>FIC Old Mutual Efectivo</h4>
                        <strong className={styles.investmentValue}>{toCurrency(240000)}</strong>
                    </div>
                    <div className={styles.activeTypes}>
                        <div className="success-title">Tipo de activo</div>
                        <ul>
                            <li>Renta fija</li>
                            <li>Deposito a la fija</li>
                        </ul>
                    </div>
                    <div className="flex-row-between margin-top-1">
                        <button className={styles.navigator}>
                            <img src="/icons/chevron_left_24px.svg" />
                        </button>
                        <button className={styles.navigator}>
                            <img src="/icons/chevron_right_24px.svg" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                Tu dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo
                asignado por nuestro RoboAdvisor.
            </div>
        </div>
    );
};

export default InvestmentCard;
