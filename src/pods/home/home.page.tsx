import * as React from "react";
import * as classes from './home.scss';
import {Parallax} from 'react-parallax';
import {AnimatedTitle} from 'react-genie';

export const HomePage = () => {
	return (
		<>
			<Parallax strength={-200}
								blur={10}
								bgImage={require("../../../assets/ash-edmonds-510566-unsplash-min.jpg")}
								bgImageAlt="...">
					<div className={classes.card}>
						<div className={classes.title}>
							<AnimatedTitle className={classes.titleText}>
                                Alicia Fernández Rovira
							</AnimatedTitle>
							<AnimatedTitle
								className={classes.subtitleText}>
                                Desarrolladora Full-Stack en Málaga
							</AnimatedTitle>
						</div>
					</div>
			</Parallax>
		</>
	);
}