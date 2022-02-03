import React from 'react';
import style from './Project.module.css'

export function Project(props:any) {
    return (
        <div className={style.project}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.link}>{props.link}</span>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
}