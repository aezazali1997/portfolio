import React, { FC } from "react";
import AppContext from "./ContextApi/ContextApi";
import { styles } from "./AboutMe.style";
import Class from "./Class/Class";
import { data } from "./data/data";
const AboutMe: FC = () => {
	const classes = styles();

	return (
		<AppContext.Provider value={data}>
			<div className={classes.container}>
				<div className={classes.wrapper}>
					<div className={classes.title}>About / &gt;</div>
					<div className={classes.marTop}>
						<div className={classes.codeWrap}>
							<Class />
						</div>
					</div>
				</div>
			</div>
		</AppContext.Provider>
	);
};

export default AboutMe;

/* 
<div data-line-nmbr="01">
							<span className={classes.specialKeyword}>class</span>
							<span className={classes.className}>AezazAli</span>
							<span>&#123;</span>
						</div>
						<div data-line-nmbr="02">
							<span className={classes.comment}>
								/* I am a web developer current working in React Js.
							</span>
						</div>
						<div data-line-nmbr="03">
							<span className={classes.comment}>
								I learn continously to enhance my skills and improve in my
								field.
							</span>
						</div>
						<div data-line-nmbr="04">
							<span className={classes.comment}></span>
						</div>
						<div data-line-nmbr="05">
							<span className={classes.cons}>constructor</span>
							<span>( )</span>
							<span>&#123;</span>
						</div>
	<div data-line-nmbr="02">
							<span className={classes.comment}>/*</span>
							<span className={classes.comment}>
								I am a web developer current working in React Js.
							</span>
						</div>
						<div data-line-nmbr="03">
							<span className={classes.comment}></span>
							<span className={classes.comment}>
								I learn continously to enhance my skills and improve in my
								field.
							</span>
						</div>
						<div data-line-nmbr="04">
							<span className={classes.cons}>constructor</span>
							<span>( )</span>
							<span>&#123;</span>
						</div>
						<div data-line-nmbr="05">
							<span
								className={classNames(classes.specialKeyword, classes.noMargin)}
							>
								this
							</span>
							<span className={classes.noMargin}>.</span>
							<span className={classNames(classes.noMargin, classes.variable)}>
								birthDay
							</span>
							<span>=</span>
							<span className={classNames(classes.string, classes.noMargin)}>
								'16 January 1999'
							</span>
							<span className={classes.noMargin}>,</span>
						</div>
						<div data-line-nmbr="06">
							<span
								className={classNames(classes.specialKeyword, classes.noMargin)}
							>
								this
							</span>
							<span className={classes.noMargin}>.</span>
							<span className={classNames(classes.noMargin, classes.variable)}>
								age
							</span>
							<span>=</span>
							<span className={classNames(classes.string, classes.noMargin)}>
								'23'
							</span>
							<span className={classes.noMargin}>,</span>
						</div>
						<div data-line-nmbr="07">
							<span
								className={classNames(classes.specialKeyword, classes.noMargin)}
							>
								this
							</span>
							<span className={classes.noMargin}>.</span>
							<span className={classNames(classes.noMargin, classes.variable)}>
								hobby
							</span>
							<span>=</span>
							<span className={classNames(classes.string, classes.noMargin)}>
								'Web Development'
							</span>
							<span className={classes.noMargin}>,</span>
						</div>
						<div data-line-nmbr="08">
							<span
								className={classNames(classes.specialKeyword, classes.noMargin)}
							>
								this
							</span>
							<span className={classes.noMargin}>.</span>
							<span className={classNames(classes.noMargin, classes.variable)}>
								personality
							</span>
							<span>=</span>
							<span>&#123;</span>
						</div>
						<div data-line-nmbr="09">
							<span className={classes.variable}>trait</span>
							<span>:</span>
							<span className={classNames(classes.string, classes.noMargin)}>
								'Friendly'
							</span>
							<span className={classes.noMargin}> ,</span>
						</div>
						<div data-line-nmbr="10">
							<span className={classes.brac1}>&#125;</span>
						</div>
						<div data-line-nmbr="11">
							<span className={classes.noMargin}>&#125;</span>
						</div>
						<div data-line-nmbr="12">
							<span className={classNames(classes.variable, classes.noMargin)}>
								const
							</span>
							<span className={classes.method}>skills</span>
							<span>=</span>
							<span>()</span>
							<span className={classes.variable}>=&gt;</span>
							<span>&#123;</span>
						</div>
						<div data-line-nmbr="13">
							<span
								className={classNames(classes.specialKeyword, classes.brac1)}
							>
								const
							</span>
							<span className={classes.array}>Frontend</span>
							<span>= [</span>
						</div>
						<div data-line-nmbr="14">
							<span className={classNames(classes.brac2, classes.string)}>
								'React'
							</span>
							<span className={classes.noMargin}>,</span>
							<span className={classNames(classes.string)}>'Angular'</span>
							<span className={classes.noMargin}>,</span>
							<span className={classNames(classes.string)}>'Vue'</span>
							<span className={classes.noMargin}>,</span>
							<span className={classNames(classes.string)}>'JQuery'</span>
						</div>
						<div data-line-nmbr="15">
							<span className={classes.brac1}>] ;</span>
						</div>
						<div data-line-nmbr="16">
							<span
								className={classNames(classes.specialKeyword, classes.brac1)}
							>
								const
							</span>
							<span className={classes.array}>Backend</span>
							<span>= [</span>
						</div>
						<div data-line-nmbr="17">
							<span className={classNames(classes.brac2, classes.string)}>
								'Node'
							</span>
							<span className={classes.noMargin}>,</span>
							<span className={classNames(classes.string)}>'PHP'</span>
							<span className={classes.noMargin}>,</span>
							<span className={classNames(classes.string)}>'Express'</span>
						</div>
						<div data-line-nmbr="18">
							<span className={classes.brac1}>] ;</span>
						</div>
						<div data-line-nmbr="19">
							<span
								className={classNames(classes.specialKeyword, classes.brac1)}
							>
								const
							</span>
							<span className={classes.array}>Databases</span>
							<span>= [</span>
						</div>
						<div data-line-nmbr="20">
							<span className={classNames(classes.brac2, classes.string)}>
								'React'
							</span>
							<span className={classes.noMargin}>,</span>
							<span className={classNames(classes.string)}>'MongoDB'</span>
							<span className={classes.noMargin}>,</span>
							<span className={classNames(classes.string)}>'SQL'</span>
							<span className={classes.noMargin}>,</span>
							<span className={classNames(classes.string)}>'SQLite'</span>
						</div>
						<div data-line-nmbr="21">
							<span className={classes.brac1}>] ;</span>
						</div>
						<div data-line-nmbr="22">
							<span
								className={classNames(classes.specialKeyword, classes.brac1)}
							>
								const
							</span>
							<span className={classes.array}>CMS</span>
							<span>= [</span>
						</div>
						<div data-line-nmbr="23">
							<span className={classNames(classes.brac2, classes.string)}>
								'Wordpress'
							</span>
						</div>
						<div data-line-nmbr="24">
							<span className={classes.brac1}>] ;</span>
						</div>
						<div data-line-nmbr="25">
							<span className={classNames(classes.noMargin, classes.return)}>
								return
							</span>
							<span
								className={classNames(
									classes.array,
									classes.noMargin,
									classes.brac1
								)}
							>
								Frontend
							</span>
							<span className={classes.noMargin}>+</span>
							<span className={classNames(classes.array, classes.noMargin)}>
								Backend
							</span>
							<span className={classes.noMargin}>+</span>
							<span className={classNames(classes.array, classes.noMargin)}>
								Databases
							</span>
							<span className={classes.noMargin}>+</span>
							<span className={classNames(classes.array, classes.noMargin)}>
								CMS
							</span>
							<span className={classNames(classes.noMargin)}>;</span>
						</div>
						<div data-line-nmbr="26">
							<span>&#125;</span>
						</div>

						<div data-line-nmbr="27">
							<span className={classNames(classes.variable, classes.noMargin)}>
								const
							</span>
							<span className={classes.method}>experience</span>
							<span>=</span>
							<span>()</span>
							<span className={classes.variable}>=&gt;</span>
							<span>&#123;</span>
						</div>
						<div data-line-nmbr="28">
							<span className={classNames(classes.return, classes.brac1)}>
								return
							</span>

							<span> &#123;</span>
						</div>
						<div data-line-nmbr="29">
							<span
								className={classNames(classes.brac2, classes.variable)}
							></span>
							<span>=</span>
							<span
								className={classNames(classes.string, classes.noMargin)}
							></span>
						</div>
						<div data-line-nmbr="15">
							<span className={classes.brac1}></span>
						</div>
						<div data-line-nmbr="16">
							<span
								className={classNames(classes.specialKeyword, classes.brac1)}
							></span>
							<span className={classes.array}>Backend</span>
							<span>= [</span>
						</div>
						<div data-line-nmbr="17">
							<span className={classNames(classes.brac2, classes.string)}>
								'Node'
							</span>
							<span className={classes.noMargin}>,</span>
							<span className={classNames(classes.string)}>'PHP'</span>
							<span className={classes.noMargin}>,</span>
							<span className={classNames(classes.string)}>'Express'</span>
						</div>
						<div data-line-nmbr="18">
							<span className={classes.brac1}>] ;</span>
						</div>
						<div data-line-nmbr="19">
							<span
								className={classNames(classes.specialKeyword, classes.brac1)}
							>
								const
							</span>
							<span className={classes.array}>Databases</span>
							<span>= [</span>
						</div>
						<div data-line-nmbr="20">
							<span className={classNames(classes.brac2, classes.string)}>
								'React'
							</span>
							<span className={classes.noMargin}>,</span>
							<span className={classNames(classes.string)}>'MongoDB'</span>
							<span className={classes.noMargin}>,</span>
							<span className={classNames(classes.string)}>'SQL'</span>
							<span className={classes.noMargin}>,</span>
							<span className={classNames(classes.string)}>'SQLite'</span>
						</div>
						<div data-line-nmbr="21">
							<span className={classes.brac1}>] ;</span>
						</div>
						<div data-line-nmbr="22">
							<span
								className={classNames(classes.specialKeyword, classes.brac1)}
							>
								const
							</span>
							<span className={classes.array}>CMS</span>
							<span>= [</span>
						</div>
						<div data-line-nmbr="23">
							<span className={classNames(classes.brac2, classes.string)}>
								'Wordpress'
							</span>
						</div>
						<div data-line-nmbr="24">
							<span className={classes.brac1}>] ;</span>
						</div>
						<div data-line-nmbr="25">
							<span className={classNames(classes.noMargin, classes.return)}>
								return
							</span>
							<span
								className={classNames(
									classes.array,
									classes.noMargin,
									classes.brac1
								)}
							>
								Frontend
							</span>
							<span className={classes.noMargin}>+</span>
							<span className={classNames(classes.array, classes.noMargin)}>
								Backend
							</span>
							<span className={classes.noMargin}>+</span>
							<span className={classNames(classes.array, classes.noMargin)}>
								Databases
							</span>
							<span className={classes.noMargin}>+</span>
							<span className={classNames(classes.array, classes.noMargin)}>
								CMS
							</span>
							<span className={classNames(classes.noMargin)}>;</span>
						</div>
						<div data-line-nmbr="26">
							<span>&#125;</span>
						</div>

*/
