import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { HeaderStyle } from './styles';

const MenuItems: React.FC = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const classes = HeaderStyle();

  const handleMenuClick = (pageURL: string) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const menuItems = [
    {
      menuTitle: 'Home',
      pageURL: '/',
    },
    {
      menuTitle: 'Configuration',
      pageURL: '/config',
    },
    {
      menuTitle: 'About',
      pageURL: '/about',
    },
  ];

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {menuItems.map((menuItem) => {
          const { menuTitle, pageURL } = menuItem;
          return (
            <MenuItem onClick={() => handleMenuClick(pageURL)}>
              {menuTitle}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default MenuItems;
