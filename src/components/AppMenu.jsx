import React, { useState } from 'react';
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
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            className=''
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
          {['Pagina inicial', 'Produtos', 'Pedidos', 'Relatório'].map(text => (
            <ListItem button key={text}>
              <ListItemIcon>
                {text === 'Pagina inicial' && <Home />}
                {text === 'Produtos' && <LocalGroceryStore />}
                {text === 'Pedidos' && <LocalMall />}
                {text === 'Relatório' && <Assessment />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
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
