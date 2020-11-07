//Components
import { WaveCard } from "../../../../components/Cards";
import List from "../../../../components/List";
import Post from "../../../../components/Post";

const SavingTips = () => {
    return (
        <div>
            <div>
                <h2 className="section-title">Los P*t@s del ahorro</h2>
            </div>
            <WaveCard />
            <List>
                <Post
                    title="10 gastos que debes evitar"
                    description="Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44%
                    ahorra de manera formal."
                    thumbnail="/articles/post-1.png"
                />
                <hr />
                <Post
                    title="10 gastos que debes evitar"
                    description="Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44%
                    ahorra de manera formal."
                    thumbnail="/articles/post-2.png"
                />
                <hr />
                <Post
                    title="10 gastos que debes evitar"
                    description="Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44%
                    ahorra de manera formal."
                    thumbnail="/articles/post-3.png"
                />
            </List>
        </div>
    );
};

export default SavingTips;
