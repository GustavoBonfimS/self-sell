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
  Brightness2,
  WbSunny,
} from '@material-ui/icons';
import Darkmode from 'darkmode-js';
const darkmode = new Darkmode();

export default function AppMenu(props) {
  const history = useHistory();
  const [openDrawer, setOpenDrawer] = useState(false);

  function handleMenuClick(path) {
    setOpenDrawer(false);
    history.push(path);
  }

  function handleDarkmodeSwitch() {
    setOpenDrawer(false);
    darkmode.toggle();
  }

  function handleTabClose() {
    window.close();
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
      <AppBar position='static' className='darkmode-ignore'>
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
          <div onClick={handleDarkmodeSwitch}>
            <ListItem button>
              <ListItemIcon>
                {darkmode.isActivated() ? <WbSunny /> : <Brightness2 />}
              </ListItemIcon>
              <ListItemText
                primary={darkmode.isActivated() ? 'Modo claro' : 'Modo escuro'}
              />
            </ListItem>
          </div>
          <div onClick={handleTabClose}>
            <ListItem button>
              <ListItemIcon>
                <Close />
              </ListItemIcon>
              <ListItemText primary='Sair do sistema' />
            </ListItem>
          </div>
        </List>
      </Drawer>
    </>
  );
}
