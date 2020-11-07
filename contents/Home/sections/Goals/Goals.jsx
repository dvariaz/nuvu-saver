//Components
import { GoalCard } from "../../../../components/Cards";

const Goals = () => {
    return (
        <div>
            <div className="flex-row-between padding-x-2">
                <h2 className="section-title">Tus metas</h2>
                <button>+</button>
            </div>
            <div className="flex-row-inline" style={{ height: 200 }}>
                <GoalCard
                    title="Viaje a Islas Canarias"
                    goal={8000000}
                    currentMoney={1630000}
                    imageSrc="/goals/travel-picture.png"
                />
                <GoalCard
                    title="Macbook Pro"
                    currentMoney={0}
                    goal={7000000}
                    imageSrc="/goals/macbook-picture.png"
                />
            </div>
        </div>
    );
};

export default Goals;
