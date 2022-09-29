import React from 'react'
import { styles } from './Home.style'
import { BiMouse } from 'react-icons/bi'
import classnames from 'classnames'
import ReactTypingEffect from 'react-typing-effect'
import { Link } from 'react-scroll'
import { timeStyles } from './Home.style'
import background from '@images/bGround.jpg'

const Home = () => {
  const classes = styles()
  const _timelineClasses = timeStyles()
  return (
    <div id="home" className={classes.wrapper}>
      <img src={background} alt="aezaz portfolio" className={classes.img} />
      <div className={classes.container}>
        <div className={_timelineClasses.timeline}>
          <div className={classes.bullet}></div>
          <Link activeClass="active" to="services" smooth={true} duration={500}>
            <div className={classes.mouse}>
              <span className={classes.mousebtn}>
                <BiMouse size={25} />
              </span>
              <span className={classes.scroll}>Scroll</span>
            </div>
          </Link>
        </div>
        <span className={classes.start}> Start /&gt;</span>
        <h2 className={classes.intro}>
          Hi, my name is <span className={classes.name}>Aezaz Ali</span>
        </h2>
        <h2 className={classes.more}>
          i <em>design</em> and <span className={classes.develop}>develop</span>
          <span className={classes.typing}>
            <ReactTypingEffect
              text={[
                'React Applications',
                'FullStack Websites',
                'Backend APIs',
              ]}
              speed={200}
              eraseDelay={2000}
              eraseSpeed={100}
              typingDelay={1000}
            />
          </span>
        </h2>
        <span className={classes.show}>Let me show You...</span>
      </div>

      <Link activeClass="active" to="services" smooth={true} duration={500}>
        <div className={classes.down}>
          <span
            className={classnames(
              'fas fa-long-arrow-alt-down',
              `${classes.customization}`,
            )}
          ></span>
        </div>
      </Link>
    </div>
  )
}

export default Home
