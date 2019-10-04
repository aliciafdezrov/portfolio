import * as React from "react";
import * as classes from './home.scss';
import { Parallax } from 'react-parallax';
import { AnimatedTitle } from 'react-genie';

export const HomePage = () => {
	return (
		<>
			<Parallax strength={-200}
								blur={10}
								bgImage={require("../../../assets/ash-edmonds-510566-unsplash-min.jpg")}
								bgImageAlt="the cat">
				<div className={classes.wrapper}>
					<div className={classes.slide}/>
					<div className={classes.card}>
						<div className={classes.title}>
							<AnimatedTitle style={{
								color: 'white',
								fontWeight: 'bold',
								fontSize: '2em',
								marginTop: '0.67em',
								marginBottom: '0.67em',
								marginLeft: '0',
								marginRight: '0'
							}}>
								Esto es una prueba
							</AnimatedTitle>
							<AnimatedTitle
								style={{
									color: 'white',
									fontWeight: 'bold',
									fontSize: '1.2em',
									marginTop: '1.33em',
									marginBottom: '1.33em',
									marginLeft: '0',
									marginRight: '0'
								}}>Y esto es texto de prueba</AnimatedTitle>
						</div>
					</div>
				</div>
			</Parallax>
		</>
	);
}

//Alicia Fernández Rovira
//Desarrolladora Full-Stack en Málaga