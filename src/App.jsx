import {useState} from 'react'
import logo from './logo.svg'
import style from './index.module.css'


function Component() {

    return (
        <div className={style.component}>
            <div className={style.body}>
                <div className={style.component_title}>
                    TRANSPARENCIA GENERAL
                </div>
                <div className={style.column}>
                    <div className={style.container}> </div>
                    <div className={style.container}> </div>
                    <div className={style.container}> </div>
                    <div className={style.container}> </div>
                </div>
            </div>
        </div>
    )
}

export default Component
