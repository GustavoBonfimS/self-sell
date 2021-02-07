import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Menu,
  Close,
  Home,
  LocalGroceryStore,
  LocalMall,
  Assessment,
} from '@material-ui/icons';

export default function AppMenu(props) {
  const history = useHistory();
  const [openDrawer, setOpenDrawer] = useState(false);

  function handleMenuClick(path) {
    setOpenDrawer(false);
    history.push(path);
  }

  const options = [
    {
      title: 'Pagina Inicial',
      path: '/',
      icon: Home,
    },
    {
      title: 'Produtos',
      path: '/products',
      icon: LocalGroceryStore,
    },
    {
      title: 'Pedidos',
      path: '/',
      icon: LocalMall,
    },
    {
      title: 'Relatório',
      path: '/',
      icon: Assessment,
    },
  ];

  return (
    <>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={() => setOpenDrawer(true)}
          >
            <Menu />
          </IconButton>
          <Typography variant='h6' color='inherit'>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div>
          <IconButton onClick={() => setOpenDrawer(false)}>
            Fechar <Close />
          </IconButton>
        </div>
        <Divider />
        <List>
          {options.map(page => (
            <div onClick={() => handleMenuClick(page.path)} key={page.path}>
              <ListItem button>
                <ListItemIcon>{<page.icon />}</ListItemIcon>
                <ListItemText primary={page.title} />
              </ListItem>
            </div>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Close />
            </ListItemIcon>
            <ListItemText primary='Sair do sistema' />
          </ListItem>
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <ArrowForward />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </>
  );
}
