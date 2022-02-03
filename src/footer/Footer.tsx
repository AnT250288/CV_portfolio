import React from 'react';
import style from "./Footer.module.css"
import {Links} from "./links/Links";

export function Footer() {
    return (
        <div className={style.footer}>
            <Links />
        </div>
    );
}