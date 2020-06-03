import React, {useState, useEffect} from "react";
import styles from './Header.module.scss';
import Logo from './icons/logo.svg';
import SearchIcon from './icons/searchIcon.svg';
import MenuIcon from './icons/menuIcon.svg';
import CompareIcon from './icons/compereIcon.svg';
import MobileMenu from "./MobileMenu";
import LanguageBlock from "../LanguageBlock";
import DesktopMenu from "./DesktopMenu";

import { menuForPersonDesktop, menuForBusiness, subMenuInsurance, subMenuMore } from './MenuItems/MenuItems'
import DesktopSubMenu from "./DesktopSubMenu";

const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [desktopMenu, setDesktopMenu] = useState(false);
    const [desktopSubMenu, setDesktopSubMenu] = useState(0);
    const [desktopSubMenuClose, setDesktopSubMenuClose] = useState(false);
    const panelHide = mobileMenuOpen ? `${styles.panelHide}` : `${styles.panelHide} ${styles.hidden}`;
    const openMenuHandler = () => setMobileMenuOpen(!mobileMenuOpen);

    const menuItems = desktopMenu ? menuForBusiness : menuForPersonDesktop;
    const tabItemActive = `${styles.desktopItemLeftBlock} ${styles.active}`;

    const mouseOverHandler = itemId => {
        itemId ? setDesktopSubMenu(itemId) : setDesktopSubMenu(desktopSubMenu);
        setDesktopSubMenuClose(false);
    };

    const mouseLeaveHandler = () => {
         setDesktopSubMenuClose(true);
    };

    useEffect(() => {
        let timer;
        if (desktopSubMenuClose) {
            timer = setTimeout(() => {
                setDesktopSubMenu(0);
            }, 200)
        };
        return () => clearTimeout(timer);
    });

    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <nav className={styles.navbar}>
                    <div className={styles.navbarLeftBlock}>
                        <a href="/health">
                            <img src={Logo} alt="PolisUA" className={styles.logoImg}/>
                        </a>
                        <p className={desktopMenu ? styles.desktopItemLeftBlock : tabItemActive}
                           onClick={() => setDesktopMenu(false)}>
                            Частным лицам
                        </p>
                        <p className={desktopMenu ? tabItemActive : styles.desktopItemLeftBlock}
                           onClick={() => setDesktopMenu(true)}>
                            Бизнесу
                        </p>
                    </div>

                    <div className={styles.navbarRightBlock}>
                        <img className={styles.searchIcon} src={SearchIcon} alt="Search"/>
                        <img className={styles.menuIcon}
                             src={MenuIcon}
                             alt="Menu"
                             onClick={openMenuHandler}
                        />
                        <a href='/contacts' className={styles.desktopItemRightBlock}>Контакты</a>
                        <LanguageBlock containerStyle={styles.desktopItemRightBlock}/>
                        <img className={styles.desktopItemRightBlock} src={CompareIcon} alt="Compare" />
                        <button className={`${styles.desktopItemRightBlock} ${styles.loginBtn}`}>ВОЙТИ</button>
                    </div>
                </nav>
                <div className={panelHide}
                     onClick={() => setMobileMenuOpen(false)}
                />
                {mobileMenuOpen ? <MobileMenu openMenu={openMenuHandler} /> : null}
            </div>
            <div className={styles.headerBottom}>
                <nav className={styles.navbarBottom}>
                    <div className={styles.navbarLeftBlock}>
                        <DesktopMenu items={menuItems}
                                     mouseOverHandler={mouseOverHandler}
                                     mouseLeaveHandler={mouseLeaveHandler}
                                     itemId={desktopSubMenu}/>
                    </div>
                    <div className={styles.navbarRightBlock}>
                        <img className={styles.headerBottomIcon} src={SearchIcon} alt="Search"/>
                    </div>
                </nav>
            </div>
            {(desktopSubMenu !== 0) ? <DesktopSubMenu mouseOverHandler={mouseOverHandler}
                                                      mouseLeaveHandler={mouseLeaveHandler}
                                                      items={desktopSubMenu === 6 ? subMenuMore : subMenuInsurance}/> : null}
        </header>
    )
};

export default Header;