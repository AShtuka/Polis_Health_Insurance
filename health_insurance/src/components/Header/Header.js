import React, {useState} from "react";
import styles from './Header.module.scss';
import Logo from './icons/logo.svg';
import SearchIcon from './icons/searchIcon.svg';
import MenuIcon from './icons/menuIcon.svg';
import MobileMenu from "./MobileMenu";
// import { CSSTransition } from "react-transition-group";
// import slideTransition from './transition/slide.module..scss'


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const panelHide = isOpen ? `${styles.panelHide}` : `${styles.panelHide} ${styles.hidden}`;
    const openMenuHandler = () => setIsOpen(!isOpen);

    return (
        <header>
            <nav className={styles.navbar}>
                <a href="/health">
                    <img src={Logo} alt="LogoPolisUA"/>
                </a>
                <div className={styles.btnBlock}>
                    <img className={styles.searchIcon} src={SearchIcon} alt="SearchIcon"/>
                    <img className={styles.menuIcon}
                         src={MenuIcon}
                         alt="Menu Icon"
                         onClick={openMenuHandler}
                    />
                </div>
            </nav>
            <div className={panelHide}
                 onClick={() => setIsOpen(false)}
            />
            {/*<CSSTransition*/}
            {/*    in={isOpen}*/}
            {/*    timeout={200}*/}
            {/*    classNames={slideTransition}*/}
            {/*    unmountOnExit*/}
            {/*>*/}
            {/*    {*/}
            {/*        state => <MobileMenu openMenu={openMenuHandler}/>*/}
            {/*    }*/}
            {/*</CSSTransition>*/}
            {isOpen ? <MobileMenu openMenu={openMenuHandler} /> : null}
        </header>
    )

};

export default Header;