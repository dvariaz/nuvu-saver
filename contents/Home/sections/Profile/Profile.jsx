import Image from "next/image";
//Components
import { ProfileCard } from "../../../../components/Cards";
import List from "../../../../components/List";

const Profile = () => {
    return (
        <section className="padding-2">
            <div className="flex-row-between">
                <h2 className="section-title">Hola, Camila</h2>
                <button className="title-action-button">
                    <Image
                        src="/icons/notifications_24px.svg"
                        alt="Notificaciones"
                        width={25}
                        height={25}
                    />
                </button>
            </div>
            <ProfileCard />
            <List>
                <li className="flex-row-between">
                    <span className="list-item-head">Inversión</span>
                    <span className="list-item-value">$1.600.000</span>
                </li>
                <hr />
                <li className="flex-row-between">
                    <span className="list-item-head">Rendimiento</span>
                    <span className="list-item-value">-$30.000</span>
                </li>
            </List>
        </section>
    );
};

export default Profile;
