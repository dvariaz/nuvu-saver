//Components
import { ProfileCard } from "../../../../components/Cards";
import List from "../../../../components/List";

const Profile = () => {
    return (
        <div>
            <div className="flex-row-between">
                <h2>Hola, Camila</h2>
                <button>🔔</button>
            </div>
            <ProfileCard />
            <List />
        </div>
    );
};

export default Profile;
