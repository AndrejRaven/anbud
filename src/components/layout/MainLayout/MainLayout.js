import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { BrowserView, MobileView } from 'react-device-detect';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <BrowserView className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              Anbud
            </Typography>
          </Toolbar>
        </AppBar>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </BrowserView>
      <MobileView />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;
