import React from "react";
import { styles } from "./AboutMe.style";
import classNames from "classnames";
const AboutMe = () => {
	const classes = styles();
	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<div className={classes.title}>About / &gt;</div>
				<div className={classes.marTop}>
					<div className={classes.codeWrap}>
						<div data-line-nmbr="01">
							<span className={classes.specialKeyword}>class</span>
							<span className={classes.className}>Aezaz Ali</span>
							<span>&#123;</span>
						</div>
						<div data-line-nmbr="02">
							<span className={classes.comment}>/*</span>
							<span className={classes.comment}>
								I am a web developer current working in React Js.
							</span>
						</div>
						<div data-line-nmbr="03">
							<span className={classes.comment}>*/</span>
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
							<span className={classes.variable}>trait</span>
							<span>:</span>
							<span className={classNames(classes.string, classes.noMargin)}>
								'Friendly'
							</span>
							<span> &#125;</span>
							<span className={classes.noMargin}>,</span>
						</div>
						<div data-line-nmbr="09"></div>
						<div data-line-nmbr="10"></div>
						<div data-line-nmbr="11"></div>
						<div data-line-nmbr="12"></div>
						<div data-line-nmbr="13"></div>
						<div data-line-nmbr="14"></div>
						<div data-line-nmbr="15"></div>
						<div data-line-nmbr="16"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
