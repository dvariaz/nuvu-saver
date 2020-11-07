import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./Post.module.scss";

const Post = ({ title, description, thumbnail }) => {
    return (
        <article className={`${styles.body} flex-row-between`}>
            <div className="flex-column flex-1">
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.thumbnail}>
                <Image src={thumbnail} alt={title} width={200} height={200} layout="responsive" />
            </div>
        </article>
    );
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
};

export default Post;
