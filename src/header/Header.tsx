import React from 'react';
import style from './Header.module.css'
import {Nav} from "../navigation/Nav";

export function Header() {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    );
}