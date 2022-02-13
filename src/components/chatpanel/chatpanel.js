import React from 'react';
import { Paper } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';

function Chatpanel() {
  // const initState = {
  //   username : "",
  //   password : "",
  // };
  const classes = useStyles();
  // const [ state, setState ] = React.useState(initState);

  return (
    <div className={clsx(classes.wrapperPanel, classes.root)}>
      <h3 className={clsx(classes.wrapper, classes.header)}>Leaf Chat</h3>
      <Paper elevation={3} className={classes.wrapper}>
        <div className={clsx(classes.panel, classes.chatPanel)}>
          <div className={classes.chatSubTitle}>
            <div className={classes.activeList} title="Panji">Panji</div>
          </div>
          <p>Panji 1</p>
          <p>Panji 1</p>
          <p>Panji 1</p>
          <p>Panji 1</p>
          <p>Panji 1</p>
          <p>Panji 1</p>
          <p>Panji 1</p>
          <div className={clsx(classes.panel, classes.titlePanel)}>Chat</div>
          <div className={classes.leafTop} />
          <div className={classes.leafBottom} />
        </div>          
        <div className={clsx(classes.panel, classes.roomPanel)}>
          <p>Room 1</p>
          <p>Room 1</p>
          <p>Room 1</p>
          <div className={clsx(classes.panel, classes.titlePanel)}>Rooms</div>
          <div className={classes.leafTopRight} />
        </div>
        <div className={clsx(classes.panel, classes.memberPanel)}>
          <p>Member 1</p>
          <p>Member 1</p>
          <p>Member 1</p>
          <div className={clsx(classes.panel, classes.titlePanel)}>Members</div>
          <div className={classes.leafBottom} />
        </div>
      </Paper>
    </div>
  );
}

Chatpanel.propTypes = {};

Chatpanel.defaultProps = {};

export default Chatpanel;
