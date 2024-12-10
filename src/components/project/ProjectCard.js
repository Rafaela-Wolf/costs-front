import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function ProjectCard({ id, name, budget, category, handleRemove }) {

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p><span>Budget:</span>${budget}</p>
            <p className={styles.category_text}><span className={`${styles[category.toLowerCase()]}`}></span>{category}</p>

            <div className={styles.project_card_actions}>
                <Link to={`/projects/${id}`}>
                    <BsPencil>Edit</BsPencil>
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill>Remove</BsFillTrashFill>
                </button>
            </div>
        </div>
    )
}

export default ProjectCard;