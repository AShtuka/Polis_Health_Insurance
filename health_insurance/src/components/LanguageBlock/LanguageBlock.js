import React, {useState} from "react";
import styles from "./LanguageBlock.module.scss";

const LanguageBlock = (props) => {

    const { isMobile, containerStyle } = props;
    const [activeLanguage, setActiveLanguage] = useState(false);
    const itemStyle = isMobile ? styles.languageItem : styles.languageItemDesktop;
    const container = isMobile ? `${containerStyle} ${styles.languageBlock}` : containerStyle;
    let ru = activeLanguage ? itemStyle : `${itemStyle} ${styles.active}`;
    let ua = activeLanguage ? `${itemStyle} ${styles.active}` : itemStyle;

    return (
        <div className={container}>
            <span className={ru} onClick={() => setActiveLanguage(false)}>RU</span>
            <span className={ua} onClick={() => setActiveLanguage(true)}>UA</span>
        </div>
    )
};

export default LanguageBlock;