import React from "react";
import { useTranslation }  from "react-i18next";

export const Header = () => {
    const { t } = useTranslation();
    //const { t } = jest ? { t: s => s } : useTranslation.useTranslation();
    return (
        <div style = {{width:"100%" , textAlign:"center", backgroundColor:"lightskyblue"}}>
            <h2 className="font-weight-normal mn-3">
                {t("expense_tracker")}
            </h2>
        </div>
    )
}