import { makeStyles, Theme, createStyles, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import React from 'react';

interface ITopBarProps {
  logout: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const TopBar = (props: ITopBarProps) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Dave&apos;s Shop Manager
        </Typography>
        <Button color="inherit" onClick={props.logout}>
          LOG OUT
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
