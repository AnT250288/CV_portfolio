import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css"
import {Project} from "./project/Project";


export function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title={"Social Network"} link={"gh.io"} description={"fsddddddddddd"}/>
                    <Project title={"To DO List"} link={"gh.io"} description={"fsdeggtg"}/>
                </div>
            </div>
        </div>
    );
}