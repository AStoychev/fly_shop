import { useState } from "react";

import { BiSolidStar } from "react-icons/bi";
import styles from './Stars.module.css'

export const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? styles.on : styles.off}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className={styles.star}><BiSolidStar/></span>
                    </button>
                );
            })}
        </div>
    );
};