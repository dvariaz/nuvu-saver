import Image from "next/image";

//Components
import { GoalCard } from "../../../../components/Cards";

const Goals = () => {
    return (
        <div className="padding-x-2">
            <div className="flex-row-between">
                <h2 className="section-title">Tus metas</h2>
                <button className="title-action-button">
                    <Image
                        src="/icons/add_circle_outline_24px.svg"
                        alt="Notificaciones"
                        width={25}
                        height={25}
                    />
                </button>
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
