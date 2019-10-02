import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  { 
  AppBar, Toolbar, Typography, Card, CardActionArea, CardMedia, CardContent, ListItem, ListItemText, Divider,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    marginLeft: '3.125rem',
    marginTop: '0.9375rem',
    width: '25rem',
  },
  media: {
    height: '18rem',
  },
  country: {
    height: '1.25rem',
    width: '1.25rem'
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const Main = (props) => {
  const { players } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Player Stats
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.box}>
        {
          players && players.map(player => 
          (<Card 
              key={player.firstname} 
              className={classes.card}
            >
            <CardActionArea>
            <CardMedia
              className={classes.media}
              image={player.picture}
              title="Contemplative Reptile"
            />
            <CardContent>
              {
                <React.Fragment>
                  <ListItem alignItems="flex-start">
                      <ListItemText primary="Firstname" />
                      <em><ListItemText primary={player.firstname} /></em>
                  </ListItem>
                  <Divider/>
                  <ListItem>
                      <ListItemText primary="Name" />
                      <em><ListItemText primary={player.lastname} /></em>
                  </ListItem>
                  <Divider/>
                  <ListItem>
                      <ListItemText primary="Age" />
                      <em><ListItemText primary={player.data.age} /></em>
                  </ListItem>
                  <Divider/>
                  <ListItem>
                      <ListItemText primary="Height" />
                      <em><ListItemText primary={`${player.data.height} Cms`} /></em>
                  </ListItem>
                  <Divider/>
                  <ListItem>
                      <ListItemText primary="Weight" />
                      <em><ListItemText primary={`${(player.data.weight/1000)} Kgs`} /></em>
                  </ListItem>
                  <Divider/>
                  <ListItem>
                      <ListItemText primary="Gender" />
                      <em><ListItemText primary={player.sex} /></em>
                  </ListItem>
                  <Divider/>
                  <ListItem>
                      <ListItemText primary="Nationality" />
                      <CardMedia
                        className={classes.country}
                        image={player.country.picture}
                      />
                  </ListItem>
                  <Divider/>
                  <ListItem>
                      <ListItemText primary="Total Wins" />
                      {
                        player.data.last.reduce((acc, win) => acc+win)
                      }
                  </ListItem>
                  <Divider/>
                  <ListItem>
                      <ListItemText primary="Total Losses"/>
                      {
                        player.data.last.length - player.data.last.reduce((acc, win) => acc+win)
                      }
                  </ListItem>
                </React.Fragment>
              }
            </CardContent>
          </CardActionArea>
          </Card>))
        }
      </div>
    </Fragment>
  );
}

export default Main;