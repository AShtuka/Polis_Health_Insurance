import React, {useState} from "react";
import styles from "./LanguageBlock.module.scss";

const LanguageBlock = (props) => {

    const { isMobile, containerStyle } = props;
    const [activeLanguage, setActiveLanguage] = useState(false);
    const container = isMobile ? `${containerStyle} ${styles.languageBlock}` : null;
    let ru = activeLanguage ? styles.languageItem : `${styles.languageItem} ${styles.active}`;
    let ua = activeLanguage ? `${styles.languageItem} ${styles.active}` : styles.languageItem;

    return (
        <div className={container}>
            <span className={ru} onClick={() => setActiveLanguage(false)}>RU</span>
            <span className={ua} onClick={() => setActiveLanguage(true)}>UA</span>
        </div>
    )
};

export default LanguageBlock;