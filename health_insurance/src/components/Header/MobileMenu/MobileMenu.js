import React, {useState} from "react";

import MobileMenuItem from "./MobileMenuItem";
import AccordionMenu from "./AccordionMenu";
import MobileSubMenu from './SubMenu';

import Logo from "../icons/logo.svg";
import MenuIcon from "../icons/menuIcon.svg";
import ArrowRightIcon from '../icons/arrowRightIcon.png';
import CompereIcon from '../icons/compereIcon.svg';

import styles from './MobileMenu.module.scss';

const accordionMenuForPerson = [
    {
        id: 1,
        title: 'Страхование',
        icon: ArrowRightIcon,
        iconTitle: 'Arrow',
        style: styles.accordionMenuItem
    },
    {
        id: 2,
        title: 'Онлайн-кредиты',
        style: styles.accordionMenuItem
    },
    {
        id: 3,
        title: 'Кредитные карты',
        style: styles.accordionMenuItem
    },
];
const accordionMenuForBusiness = [
    {
        id: 1,
        title: 'Платформа для бизнеса',
        style: styles.accordionMenuItem
    },
    {
        id: 2,
        title: 'Документация API',
        style: styles.accordionMenuItem
    },
];

const MobileMenuHeader = (props) => {

    const { clickHandler } = props;
    return (
        <div className={styles.mobileMenuHeader}>
            <a href="/health" className={styles.logoLink}>
                <img src={Logo} alt="PolisUA"/>
            </a>
            <img src={MenuIcon}
                 alt="Menu"
                 onClick={clickHandler}
            />
        </div>
    )
};

const MobileMenu = (props) => {

    const { openMenu } = props;
    const [isAccordionMenuOpen, setIsAccordionMenuOpen] = useState({
        isPersonMenuOpen: false,
        isBusinessMenuOpen: false
    });

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [activeLanguage, setActiveLanguage] = useState(true);

    return (
        <div className={styles.mobileMenu}>
            <MobileMenuHeader clickHandler={openMenu}/>
            <div className={styles.mobileMenuBody}>
                <MobileMenuItem title='Частным лицам'
                            icon={ArrowRightIcon}
                            iconTitle='Arrow'
                            rotated={isAccordionMenuOpen.isPersonMenuOpen ? styles.rotated270 : null}
                            style={isAccordionMenuOpen.isPersonMenuOpen ? styles.active : styles.accordionItem}
                            onClickHandler={() => setIsAccordionMenuOpen(
                                     {isPersonMenuOpen: !isAccordionMenuOpen.isPersonMenuOpen,
                                            isBusinessMenuOpen: false})} />

                {isAccordionMenuOpen.isPersonMenuOpen ? <AccordionMenu items={accordionMenuForPerson}
                                                              clickHandler={() => setIsSubMenuOpen(!isSubMenuOpen)} />
                                             :
                                             null
                }
                {isSubMenuOpen ? <MobileSubMenu onClickHandler={() => setIsSubMenuOpen(!isSubMenuOpen)}/>: null}

                <MobileMenuItem title='Бизнесу'
                            icon={ArrowRightIcon}
                            iconTitle='Arrow'
                            rotated={isAccordionMenuOpen.isBusinessMenuOpen ? styles.rotated270 : null}
                            style={isAccordionMenuOpen.isBusinessMenuOpen ? styles.active : styles.accordionItem}
                            onClickHandler={() => setIsAccordionMenuOpen(
                                     {isBusinessMenuOpen: !isAccordionMenuOpen.isBusinessMenuOpen,
                                            isPersonMenuOpen: false})} />

                {isAccordionMenuOpen.isBusinessMenuOpen ? <AccordionMenu items={accordionMenuForBusiness} /> : null}

                <MobileMenuItem title='Реферальная программа' />
            </div>
            <div className={styles.mobileMenuFooter}>
                <MobileMenuItem title='Лист сравнения'
                            icon={CompereIcon}
                            iconTitle='Compere' />
                <div className={`${styles.mobileMenuItem} ${styles.languageBlock}`}>
                    <span className={activeLanguage ?
                                    `${styles.languageItem} ${styles.activeLanguageItem}`
                                    : styles.languageItem}
                          onClick={() => setActiveLanguage(true)}
                    >UA</span>
                    <span className={activeLanguage ?
                                    styles.languageItem
                                    : `${styles.languageItem} ${styles.activeLanguageItem}`}
                          onClick={() => setActiveLanguage(false)}
                    >RU</span>
                </div>
            </div>
        </div>
    )
};

export default MobileMenu;