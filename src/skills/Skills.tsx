import React from 'react';
import style from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";


export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description = {"fsddddddddddd"}/>
                    <Skill title = {"CSS"} description = {"fsdeggtg"}/>
                    <Skill title = {"React"} description = {"gtgrgtggg"}/>
                </div>
            </div>
        </div>
    );
}