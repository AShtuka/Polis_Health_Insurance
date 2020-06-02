import React from "react";
import styles from './MobileMenu.module.scss'
import Logo from "../icons/logo.svg";
import MenuIcon from "../icons/menuIcon.svg";
import ArrowRightIcon from '../icons/arrowRightIcon.png';
import CompereIcon from '../icons/compereIcon.svg';

const MobileMenu = (props) => {

    const {openMenu} = props;

    return (
        <div className={`${styles.mobileMenu}`}>
            <div className={styles.mobileMenuHeader}>
                <a href="/health" className={styles.logoLink}>
                    <img src={Logo} alt="LogoPolisUA"/>
                </a>
                <img src={MenuIcon}
                     alt="MenuIcon"
                     onClick={openMenu}
                />
            </div>
            <div className={styles.mobileMenuBody}>
                <div className={`${styles.mobileMenuItem} ${styles.accordionItem}`}>
                    <p> Частным лицам</p>
                    <img src={ArrowRightIcon} alt="Arrow right icon"/>
                </div>
                <div className={`${styles.mobileMenuItem} ${styles.accordionItem}`}>
                    <p>Бизнесу</p>
                    <img src={ArrowRightIcon} alt="Arrow right icon"/>
                </div>
                <div className={styles.mobileMenuItem}>
                    <p>Реферальная программа</p>
                </div>
            </div>
            <div className={styles.mobileMenuFooter}>
                <div className={styles.mobileMenuItem}>
                    <p>Лист сравнения</p>
                    <img src={CompereIcon} alt="Compere Icon"/>
                </div>
                <div className={`${styles.mobileMenuItem} ${styles.languageBlock}`}>
                    <span className={styles.languageItem}>RU</span>
                    <span className={styles.languageItem}>UA</span>
                </div>
            </div>
        </div>
    )
};

export default MobileMenu;