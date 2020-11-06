import styles from "./Home.module.css";

//Sections
import Profile from "./sections/Profile";
import Goals from "./sections/Goals";
import InvestmentPortfolio from "./sections/InvestmentPortfolio";
import SavingTips from "./sections/SavingTips";

const Home = () => {
    return (
        <main>
            <Profile />
            <Goals />
            <InvestmentPortfolio />
            <SavingTips />
        </main>
    );
};

export default Home;
