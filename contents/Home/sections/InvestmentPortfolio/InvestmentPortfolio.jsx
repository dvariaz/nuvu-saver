//Components
import { InvestmentCard } from "../../../../components/Cards";
import Chip from "../../../../components/Chip";
import { CHIP_LIGHT } from "../../../../components/Chip/chipTypes";

const InvestmentPortfolio = () => {
    return (
        <section className="padding-2">
            <div className="flex-row-between flex-row-middle">
                <h2 className="section-title">Conoce tu portafolio</h2>
                <Chip chipStyle={CHIP_LIGHT}>Estratega</Chip>
            </div>
            <InvestmentCard />
        </section>
    );
};

export default InvestmentPortfolio;
