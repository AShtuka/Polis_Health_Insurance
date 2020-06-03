import React from "react";

import MobileMenuItem from "../MobileMenuItem";
import ArrowRightIcon from '../../icons/arrowRightIcon.png';

import styles from './accordionMenu.module.scss'

const AccordionMenu = (props) => {
    const { items, clickHandler } = props;

    const content = items.map(item => {
        return item.linkTo ?
            <a href={item.linkTo} key={item.id}>
                <MobileMenuItem title={item.title}
                                style={styles.accordionMenuItem} />
            </a>
            :
                <MobileMenuItem title={item.title}
                               icon={ArrowRightIcon}
                               iconTitle="Arrow"
                               style={styles.accordionMenuItem}
                               key={item.id}
                               onClickHandler={clickHandler} />
    });
    return (
        <div className={styles.accordionMenu}>
            {content}
        </div>
    )
};

export default AccordionMenu;