import React from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import leafbg from 'assets/img/Leaf-background.png'
import clsx from 'clsx';
import styles from './login.module.scss';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  wrapper: {
    width: "600px",
    margin: "0 auto",
  },
  loginForm: {
    fontSize: "1.6rem",
    marginTop: "50px",
    padding: "20px",
    border: "5px solid #3A7D52",
    backgroundImage: `url(${leafbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  inputGroup: {
    width: "350px",
    margin: "10px auto",
  },
  inputText: {
    width: "100%",
    marginTop: "5px",
  },
  inputTextSize: {
    fontSize: "1.6rem",
  },
  tac: {
    textAlign: "center",
  },
  header: {
    fontSize: "3rem",
    marginTop: "10px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.6rem",
    marginTop: "10px",
    marginBottom: "10px",
  },
  button: {
    fontSize: "1.6rem",
  },
}));

function Login() {
  const initState = {
    username : "",
    password : "",
  };
  const classes = useStyles();
  const [ state, setState ] = React.useState(initState);

  const handlerInputChange = (e) => {
    const { target: {name, value} } = e;
    setState({
      ...state,
      [name] : value,
    });
  };

  return (
    <div className={clsx(styles.login, classes.root)}>
      <Paper elevation={3} className={clsx(classes.wrapper, classes.loginForm)}>
        <h3 className={clsx(classes.tac, classes.header)}>Welcome to Leaf Chat</h3>
        <p className={clsx(classes.tac, classes.text)}>*This web only for Portfolio use</p>
        <form>
          <div className={classes.inputGroup}>
            <label htmlFor="username">Username</label>
            <TextField
              id="username"
              name="username"
              required
              className={classes.inputText}
              variant="outlined"
              InputProps={{
                classes: {
                  input: classes.inputTextSize,
                }
              }}
              value={state.username}
              onChange={handlerInputChange}
            />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="password">Password</label>
            <TextField
              id="password"
              name="password"
              required
              className={classes.inputText}
              variant="outlined"
              type="password"
              InputProps={{
                classes: {
                  input: classes.inputTextSize,
                }
              }}
              value={state.password}
              onChange={handlerInputChange}
            />
          </div>
          <div className={clsx(classes.tac, classes.inputGroup)}>
            <Button variant="contained" className={classes.button} color="primary">Login</Button>
            <p className={clsx(classes.tac, classes.text)}>Or <a href="#">Sign up</a></p>
          </div>
        </form>
      </Paper>
    </div>
  );
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
