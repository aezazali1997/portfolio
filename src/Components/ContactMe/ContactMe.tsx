// @ts-nocheck
import React, { useState } from 'react'
import { styles } from './ContactMe.style'
import classNames from 'classnames'
import { timeStyles } from '@components/Home/Home.style'
import { observer } from 'mobx-react'
//@ts-ignore
import MobxReactForm from 'mobx-react-form'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  Box,
  makeStyles,
} from '@material-ui/core'

type Props = {
  form: MobxReactForm
}

const UpworkIcon = () => {
  return (
    <svg
      style={{ marginRight: 9 }}
      role="img"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
    >
      <title>Upwork</title>
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  )
}

const LinkedinIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="14"
      viewBox="0 0 448 512"
      fill="#ffffff"
    >
      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
    </svg>
  )
}

const ContactMe: React.FC<Props> = observer(({ form }) => {
  const [close, setClose] = useState<boolean>(false)
  const matUseStyles = makeStyles(() => ({
    card: {
      width: 400,
      background: 'black',
      padding: '1rem 3rem',
      border: '1px solid gray',
    },
    header: {
      color: '#fff',
      paddingBottom: 10,
      borderBottom: '1px solid #fff',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    labelColor: {
      color: '#fff !important',
    },
    input: {
      color: '#fff',
    },
    notchedOutline: {
      borderWidth: '1px',
      borderColor: 'gray',
    },
    root: {
      '&:hover:not($error) $notchedOutline': {
        borderColor: 'gray',
      },
    },
    btn: {
      background: 'transparent',
      color: '#fff',
    },
    btnOutline: {
      borderColor: '1px solid red !important',
    },
  }))

  const _classes = styles()
  const _matClases = matUseStyles()
  const _timelineClasses = timeStyles()

  const showContactForm = () => {
    setClose(true)
  }
  const closeOverLay = () => {
    setClose(false)
  }

  return (
    <div id="contact" className={_classes.container}>
      <div
        className={classNames(_timelineClasses.timeline, _timelineClasses.alt)}
      ></div>

      <div
        className={classNames(
          _classes.formOverLay,
          close ? null : `${_classes.removeformOverLay}`,
        )}
      >
        <div className={_classes.childOverLay}>
          <button className={_classes.closeBtn} onClick={closeOverLay}>
            <span className={classNames(_classes.icon, 'fas fa-times')}></span>
          </button>
        </div>
        <div className={_classes.form}>
          <form onSubmit={form.onSubmit} method="POST">
            <Card className={_matClases.card}>
              <CardContent>
                <Typography
                  className={_matClases.header}
                  variant="h5"
                  component="h1"
                >
                  Get in Touch with Me!
                </Typography>
                <Box mb="1rem">
                  <TextField
                    variant="outlined"
                    {...form.$('name').bind()}
                    error={!!form.$('name').error}
                    helperText={form.$('name').error}
                    InputLabelProps={{
                      classes: {
                        root: _matClases.labelColor,
                      },
                    }}
                    InputProps={{
                      className: _matClases.input,
                      classes: {
                        root: _matClases.root,
                        notchedOutline: _matClases.notchedOutline,
                      },
                    }}
                    fullWidth={true}
                  />
                </Box>
                <Box mb="1rem">
                  <TextField
                    fullWidth={true}
                    variant="outlined"
                    {...form.$('email').bind()}
                    error={!!form.$('email').error}
                    helperText={form.$('email').error}
                    InputLabelProps={{
                      classes: {
                        root: _matClases.labelColor,
                      },
                    }}
                    InputProps={{
                      className: _matClases.input,
                      classes: {
                        root: _matClases.root,
                        notchedOutline: _matClases.notchedOutline,
                      },
                    }}
                  />
                </Box>
                <Box width={1}>
                  <TextField
                    fullWidth={true}
                    variant="outlined"
                    {...form.$('message').bind()}
                    error={!!form.$('message').error}
                    helperText={form.$('message').error}
                    rows={4}
                    multiline
                    InputLabelProps={{
                      classes: {
                        root: _matClases.labelColor,
                      },
                    }}
                    InputProps={{
                      className: _matClases.input,
                      classes: {
                        root: _matClases.root,
                        notchedOutline: _matClases.notchedOutline,
                      },
                    }}
                  />
                </Box>
              </CardContent>
              <CardActions>
                <Box mx="auto">
                  <Button
                    color="primary"
                    variant="outlined"
                    size="large"
                    fullWidth={true}
                    type="submit"
                    classes={{
                      root: _matClases.btn,
                      outlinedPrimary: _matClases.btnOutline,
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </form>
        </div>
      </div>
      <div className={_classes.contact}>
        <span>Contact / &gt;</span>
      </div>
      <div>
        <h3 className={_classes.findMe}>Find Me On:</h3>
        <div className={_classes.grid}>
          <div>
            <a
              href="https://github.com/aezazali1997"
              target="_blank"
              rel="noreferrer"
            >
              <span className="fab fa-github"></span>
              <span>Github</span>
            </a>
          </div>
          <div>
            <a
              style={{ display: 'flex', marginRight: '9px' }}
              target="_blank"
              href="https://www.upwork.com/freelancers/~01ad0f080062ce3e09"
              rel="noreferrer"
            >
              <UpworkIcon /> Upwork
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/aezaz-ali-2020/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
              <span className={_classes.zonat}>Linkedin</span>
            </a>
          </div>
          <div>
            <a
              href="mailto:aezazali.pro@gmail.com"
              target="_blank "
              rel="noreferrer"
            >
              <span className="fas fa-envelope-open-text"></span>{' '}
              <span>Gmail</span>
            </a>
          </div>
        </div>
        <div className={_classes.containerBtn}>
          <button onClick={showContactForm} className={_classes.btn}>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
})

export default ContactMe
