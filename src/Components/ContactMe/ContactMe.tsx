import React, { useState } from 'react'
import { styles } from './ContactMe.style'
import classNames from 'classnames'
import { timeStyles } from '@components/Home/Home.style'
import { observer } from 'mobx-react';
//@ts-ignore
import MobxReactForm from 'mobx-react-form';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  Box
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

type Props = {
  form: MobxReactForm
}
const ContactMe: React.FC<Props> = observer(({ form }) => {
  const [close, setClose] = useState<boolean>(false);
  const matUseStyles = makeStyles(() => ({
    card: {
      width: 400,
      background: 'black',
      padding: '1rem 3rem',
      border: '1px solid gray'
    },
    header: {
      color: '#fff',
      paddingBottom: 10,
      borderBottom: '1px solid #fff',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    labelColor: {
      color: '#fff !important',
    },
    input: {
      color: '#fff'
    },
    notchedOutline: {
      borderWidth: '1px',
      borderColor: 'gray',
    },
    root: {
      "&:hover:not($error) $notchedOutline": {
        borderColor: "gray"
      }
    },
    btn: {
      background: "transparent",
      color: "#fff"
    },
    btnOutline: {
      borderColor: "1px solid red !important"
    }
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
      <div className={classNames(_timelineClasses.timeline, _timelineClasses.alt)}></div>

      <div
        className={classNames(_classes.formOverLay, close
          ? null
          : `${_classes.removeformOverLay}`)}>
        <div className={_classes.childOverLay}>
          <button className={_classes.closeBtn} onClick={closeOverLay}>
            <span className={classNames(_classes.icon, 'fas fa-times')}></span>
          </button>
        </div>
        <div className={_classes.form}>
          <form onSubmit={form.onSubmit} method="POST">
            <Card className={_matClases.card}>
              <CardContent>
                <Typography className={_matClases.header} variant="h5" component="h1">
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
                        root: _matClases.labelColor
                      }
                    }}
                    InputProps={{
                      className: _matClases.input,
                      classes: {
                        root: _matClases.root,
                        notchedOutline: _matClases.notchedOutline,
                      }
                    }}
                    fullWidth={true} />
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
                        root: _matClases.labelColor
                      }
                    }}
                    InputProps={{
                      className: _matClases.input,
                      classes: {
                        root: _matClases.root,
                        notchedOutline: _matClases.notchedOutline
                      }
                    }} />
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
                        root: _matClases.labelColor
                      }
                    }}
                    InputProps={{
                      className: _matClases.input,
                      classes: {
                        root: _matClases.root,
                        notchedOutline: _matClases.notchedOutline
                      }
                    }} /></Box>
              </CardContent>
              <CardActions >
                <Box mx="auto">
                  <Button
                    color="primary"
                    variant="outlined"
                    size="large"
                    fullWidth={true}
                    type="submit"
                    classes={{
                      root: _matClases.btn,
                      outlinedPrimary: _matClases.btnOutline
                    }}>
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
            <a href="https://github.com/aezazali1997" target="_blank" rel="noreferrer">
              <span className="fab fa-github"></span>
              <span>Github</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/aezaz.ali.1997"
              target="_blank"
              rel="noreferrer">
              <span className="fab fa-facebook"></span>
              <span>Facebook</span>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/aezaz-ali-2020/" target="_blank" rel="noreferrer">
              <span className='fab fa-linkedin'></span>
              <span className={_classes.linkedin}>Linkedin</span>
            </a>
          </div>
          <div>
            <a href="mailto:aezazali.pro@gmail.com" target="_blank " rel="noreferrer">
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
    </div >
  )
});

export default ContactMe
