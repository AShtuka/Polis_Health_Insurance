import React from "react";
import Card from "../Card";
import styles from './DeskTopSubMenu.module.scss';

const DesktopSubMenu = (props) => {

    const { mouseOverHandler, mouseLeaveHandler, items } = props;
    const content = items.map(item => <a className={styles.desktopSubMenuItem}
                                         href={item.linkTo}
                                         key={item.id}>{item.title}</a>);
    return (
        <div className={styles.desktopSubMenuContainer}
             onMouseOver={() => mouseOverHandler()}
             onMouseLeave={() => mouseLeaveHandler()}>
            <div className={styles.desktopSubMenu}>
                <nav className={styles.desktopSubMenuItems}>
                    {content}
                </nav>
                <div className={styles.desktopSubMenuCards}>
                    <Card linkTo='/osago'
                          img='https://test.polis.ua/kasko/static/media/1.c1a9cce9.jpg'
                          title='ОСАГО' price='ОТ 600 ГРН' />
                    <Card linkTo='/insurance'
                          img='https://test.polis.ua/kasko/static/media/2.087f1b20.jpg'
                          title='Европа, Турция, Египет' price='ОТ 50 ГРН' />
                </div>
            </div>
        </div>
    )
};

export default DesktopSubMenu;