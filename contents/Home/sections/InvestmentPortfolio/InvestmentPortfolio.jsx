//Components
import { InvestmentCard } from "../../../../components/Cards";

const InvestmentPortfolio = () => {
    return (
        <section className="padding-2">
            <div className="flex-row-between">
                <h2 className="section-title">Conoce tu portafolio</h2>
                <div>Chip</div>
            </div>
            <InvestmentCard />
        </section>
    );
};

export default InvestmentPortfolio;
