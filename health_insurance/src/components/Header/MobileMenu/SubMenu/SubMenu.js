import React from "react";
import Card from "../../Card";

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
            <a href="/osago"><MobileMenuItem title='ОСАГО' style={styles.accordionMenuItem}/></a>
            <a href="/insurance"><MobileMenuItem title='Туристическое страхование' style={styles.accordionMenuItem}/></a>
            <a href="/casko"><MobileMenuItem title='КАСКО' style={styles.accordionMenuItem}/></a>
            <div className={styles.mobileSubMenuBody}>
                <Card linkTo='/osago'
                      img='https://test.polis.ua/kasko/static/media/1.c1a9cce9.jpg'
                      title='ОСАГО' price='600 ГРН'
                      isMobile={true} />
                <Card linkTo='/insurance'
                      img='https://test.polis.ua/kasko/static/media/2.087f1b20.jpg'
                      title='Европа, Турция, Египет' price='50 ГРН'
                      isMobile={true}  />
            </div>
        </div>
    )
};

export default SubMenu;