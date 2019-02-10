import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const NavBar = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Open drawer">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
            Material-UI
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={26} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

export default NavBar;
