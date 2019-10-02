import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { get } from 'lodash';
import playersFromJson from '../data/data.json';
import Player from '../component/';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Main = () => {
  const players = get(playersFromJson, 'players');
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Player players={players}/>
    </div>
  );
}

export default Main;