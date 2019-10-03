import * as React from "react";
import * as classes from './home.scss';

export const HomePage = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.slide}/>

                <div className={classes.card}>
                    <div className={classes.title}>
                        <h1>Alicia Fernández Rovira</h1>
                        <h4>Desarrolladora Full-Stack en Málaga</h4>
                    </div>
                </div>
            </div>
        </>
    );
}