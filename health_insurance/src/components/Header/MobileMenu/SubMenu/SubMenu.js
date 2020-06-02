import React from "react";

import MobileMenuItem from "../MobileMenuItem";
import ArrowRightIcon from "../../icons/arrowRightIcon.png";

import styles from './SubMenu.module.scss'

const HeaderItem = (props) => {

    const { title, icon, style, iconTitle, onClickHandler = () => {}, rotated } = props;

    return (
          <div className={`${styles.mobileMenuItem} ${style}`} onClick={onClickHandler}>
              {icon ? <img className={rotated} src={icon} alt={iconTitle} /> : null}
              <p>{title}</p>
          </div>
    )
};

const SubMenu = (props) => {

    const { onClickHandler } = props;

    return (
        <div className={styles.mobileSubMenu}>
            <HeaderItem title='Страхование'
                            icon={ArrowRightIcon}
                            iconTitle='Arrow'
                            rotated={styles.rotated180}
                            style={styles.accordionItem}
                            onClickHandler={onClickHandler}
            />
            <MobileMenuItem title='ОСАГО' style={styles.accordionMenuItem}/>
            <MobileMenuItem title='Туристическое страхование' style={styles.accordionMenuItem}/>
            <MobileMenuItem title='КАСКО' style={styles.accordionMenuItem}/>
            <div className={styles.mobileSubMenuBody}>
                <div className={styles.card}>
                    <img className={styles.cardImg} src="https://test.polis.ua/kasko/static/media/1.c1a9cce9.jpg" alt="IMG NOT FOUND"/>
                    <div className={styles.cardTitle}>
                        <p>ОСАГО</p>
                        <p className={styles.cardItemPrice}>600 ГРН</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.cardImg} src="https://test.polis.ua/kasko/static/media/2.087f1b20.jpg" alt="IMG NOT FOUND"/>
                    <div className={styles.cardTitle}>
                        <p>Европа, Турция, Египет</p>
                        <p className={styles.cardItemPrice}>50 ГРН</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SubMenu;