import React from "react";
import styles from './MobileMenuItem.module.scss'

const MobileMenuItem = (props) => {

    const { title, icon, style, iconTitle, onClickHandler = () => {}, rotated } = props;

    return (
        <div className={`${styles.mobileMenuItem} ${style}`} onClick={onClickHandler}>
            <p>{title}</p>
            {icon ? <img className={rotated} src={icon} alt={iconTitle} /> : null}
        </div>
    )
};

export default MobileMenuItem;