import React, {useState} from "react";
import styles from './Header.module.scss';
import Logo from './icons/logo.svg';
import SearchIcon from './icons/searchIcon.svg';
import MenuIcon from './icons/menuIcon.svg';
import MobileMenu from "./MobileMenu";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const panelHide = isOpen ? `${styles.panelHide}` : `${styles.panelHide} ${styles.hidden}`;
    const openMenuHandler = () => setIsOpen(!isOpen);

    return (
        <header>
            <nav className={styles.navbar}>
                <a href="/health">
                    <img src={Logo} alt="PolisUA"/>
                </a>
                <div className={styles.btnBlock}>
                    <img className={styles.searchIcon} src={SearchIcon} alt="Search"/>
                    <img className={styles.menuIcon}
                         src={MenuIcon}
                         alt="Menu"
                         onClick={openMenuHandler}
                    />
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