import React from "react";
import styles from './Desktop.module.scss';
import ArrowDownIcon from "../icons/arrowDownIcon.svg";

const DesktopMenu = (props) => {

    const { items, mouseOverHandler, mouseLeaveHandler, itemId } = props;

    let itemStyle = `${styles.headerBottomItem} ${styles.active}`;
    console.log(itemId);

    const content = items.map(item => {
        return item.linkTo ? <a href={item.linkTo}
                                className={styles.headerBottomItem}
                                key={item.id}>
                                    {item.title}
                            </a>
                            :
                            <a href={item.linkTo}
                               className={(itemId !== 0 && itemId === item.id) ? itemStyle : styles.headerBottomItem}
                               onMouseOver={() => mouseOverHandler(item.id)}
                               onMouseLeave={() => mouseLeaveHandler(item.id)}
                               key={item.id}>
                                <p>{item.title}</p>
                                <img  className={styles.headerBottomIcon} src={ArrowDownIcon} alt="Arrow"/>
                            </a>
    });

    return (
        <>
            {content}
        </>
    )
};

export default DesktopMenu;