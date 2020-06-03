import React from "react";
import styles from './Card.module.scss';

const Card = (props) => {

    const { linkTo, img, title, price, isMobile} = props;

    return (
        <div className={isMobile ? styles.cardMobile : styles.cardDesktop}>
            <a href={linkTo}>
                <img className={styles.cardImg} src={img} alt="IMG NOT FOUND"/>
                <div className={styles.cardTitle}>
                    <p>{title}</p>
                    <p className={styles.cardItemPrice}>{price}</p>
                </div>
            </a>
        </div>
    )
};

export default Card;