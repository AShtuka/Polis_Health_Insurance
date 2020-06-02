import React, {useState} from "react";
import styles from './Header.module.scss';
import Logo from './icons/logo.svg';
import SearchIcon from './icons/searchIcon.svg';
import MenuIcon from './icons/menuIcon.svg';
import MobileMenu from "./MobileMenu";
import LanguageBlock from "./LanguageBlock";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const panelHide = isOpen ? `${styles.panelHide}` : `${styles.panelHide} ${styles.hidden}`;
    const openMenuHandler = () => setIsOpen(!isOpen);

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.navbarLeftBlock}>
                    <a href="/health">
                        <img src={Logo} alt="PolisUA" className={styles.logoImg}/>
                    </a>
                    <p className={`${styles.desktopItem} ${styles.active}`}>Частным лицам</p>
                    <p className={styles.desktopItem}>Бизнесу</p>
                </div>

                <div className={styles.navbarRightBlock}>
                    <img className={styles.searchIcon} src={SearchIcon} alt="Search"/>
                    <img className={styles.menuIcon}
                         src={MenuIcon}
                         alt="Menu"
                         onClick={openMenuHandler}
                    />
                    <p className={styles.desktopItem}>Контакты</p>
                    <LanguageBlock />
                </div>
            </nav>
            <div className={panelHide}
                 onClick={() => setIsOpen(false)}
            />
            {isOpen ? <MobileMenu openMenu={openMenuHandler} /> : null}
        </header>
    )

};

export default Header;