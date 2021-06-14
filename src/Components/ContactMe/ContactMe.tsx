
import React, { useState } from 'react'
import { styles } from './ContactMe.style'
import classNames from 'classnames'
import { timeStyles } from '@components/Home/Home.style'
import Zonat from '@images/zonsol.png';
import axios from 'axios';
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

const ContactMe = () => {

  const [close, setClose] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: { name, email, message }
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        resetForm();
        setClose(false)
      }
      else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');

  }

  const matUseStyles = makeStyles(() => ({
    card: {
      width: '100%',
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
      borderColor: 'gray !important'
    },
    btn: {
      background: "transparent",
      color: "#fff",
    },
    btnOutline: {
      borderColor: "1px solid red !important",

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
          <form onSubmit={handleData} method="POST">
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
                    required
                    variant="outlined"
                    label="Name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}

                    InputLabelProps={{
                      classes: {
                        root: _matClases.labelColor,
                      }
                    }}
                    InputProps={{
                      className: _matClases.input,
                      classes: {
                        notchedOutline: _matClases.notchedOutline,
                      }
                    }}
                    fullWidth={true}
                  />
                </Box>
                <Box mb="1rem">
                  <TextField
                    required
                    fullWidth={true}
                    variant="outlined"
                    label="Email"
                    value={email}
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    InputLabelProps={{
                      classes: {
                        root: _matClases.labelColor,
                      }
                    }}
                    InputProps={{
                      className: _matClases.input,
                      classes: {
                        notchedOutline: _matClases.notchedOutline,
                      }
                    }}
                  /> </Box>
                <Box width={1}>
                  <TextField
                    required
                    fullWidth={true}
                    variant="outlined"
                    label="Message"
                    value={message}
                    type="text"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    rows={4}
                    multiline
                    InputLabelProps={{
                      classes: {
                        root: _matClases.labelColor,
                      }
                    }}
                    InputProps={{
                      className: _matClases.input,
                      classes: {
                        notchedOutline: _matClases.notchedOutline,
                      }
                    }}
                  /></Box>
              </CardContent>
              <CardActions >
                <Box
                  mx="auto"
                >
                  <Button
                    color="primary"
                    variant="outlined"
                    size="large"
                    fullWidth={true}
                    type="submit"
                    classes={{
                      root: _matClases.btn,
                      outlinedPrimary: _matClases.btnOutline
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
            <a href="https://github.com/aezazali1997" target="_blank" rel="noreferrer">
              <span className="fab fa-github"></span> <span>Github</span>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/aezaz.ali.1997" target="_blank" rel="noreferrer">
              <span className="fab fa-facebook"></span> <span>Facebook</span>
            </a>
          </div>
          <div>
            <a href="https://www.zonatsolutions.com/" target="_blank" rel="noreferrer">
              <img className={_classes.blog} src={Zonat} alt="Zonat solutions logo" /> <span>Zonat Solutions</span>
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
    </div >
  )
}

export default ContactMe
