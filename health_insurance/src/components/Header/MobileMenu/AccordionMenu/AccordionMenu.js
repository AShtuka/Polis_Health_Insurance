import React from "react";

import MobileMenuItem from "../MobileMenuItem";

import styles from './accordionMenu.module.scss'

const AccordionMenu = (props) => {
    const { items, clickHandler } = props;

    const content = items.map(item => <MobileMenuItem title={item.title}
                                                      icon={item.icon}
                                                      iconTitle={item.iconTitle}
                                                      style={item.style}
                                                      key={item.id}
                                                      onClickHandler={item.icon ? clickHandler : null} />);
    return (
        <div className={styles.accordionMenu}>
            {content}
        </div>
    )
};

export default AccordionMenu;