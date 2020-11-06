//Components
import { GoalCard } from "../../../../components/Cards";

const Goals = () => {
    return (
        <div>
            <div className="flex-row-between">
                <h2>Tus metas</h2>
                <button>+</button>
            </div>
            <div className="flex-row-inline">
                <GoalCard />
                <GoalCard />
            </div>
        </div>
    );
};

export default Goals;
