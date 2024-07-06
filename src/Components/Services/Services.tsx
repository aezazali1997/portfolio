// @ts-nocheck
import React from 'react'
import { styles } from './Services.style'
import classNames from 'classnames'
import { timeStyles } from '@components/Home/Home.style'
import Service from './Service/Service'
import services from './Service/Service.json'
import { Link } from 'react-scroll'
const Services = () => {
  const classes = styles()
  const _timelineClasses = timeStyles()

  return (
    <div id="services" className={classes.wrapper}>
      <div
        className={classNames(_timelineClasses.alt, _timelineClasses.timeline)}
      ></div>
      <div className={classes.textContainer}>
        <span className={classes.work}>Services / &gt;</span>
        <h3 className={classes.projectCreated}>Web Services</h3>
        <span className={classes.web}>WEB</span>
      </div>
      <div className={classes.services}>
        {services.map((service, id) => (
          <Service
            key={id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className={classes.getServiceContainer}>
        <Link to="contact" smooth={true} duration={800}>
          <button>Contact me</button>
        </Link>
      </div>
    </div>
  )
}

export default Services
