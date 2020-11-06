//Components
import { InvestmentCard } from "../../../../components/Cards";

const InvestmentPortfolio = () => {
    return (
        <div>
            <div className="flex-row-between">
                <h2>Conoce tu portafolio</h2>
                <div>Chip</div>
            </div>
            <InvestmentCard />
        </div>
    );
};

export default InvestmentPortfolio;
