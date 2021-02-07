import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

export default function Copyright() {
  return (
    <Typography
      style={{
        paddingTop: 40,
        paddingBottom: 10,
      }}
      variant='body2'
      color='textSecondary'
      align='center'
    >
      {'Copyright © '}
      <MuiLink
        target='_blank'
        rel='noopener noreferrer'
        color='inherit'
        href='https://github.com/GustavoBonfimS/self-sell'
      >
        Self Sell
      </MuiLink>
      {' - '}
      <Link to='/'>
        <a>Politica de privacidade e Termos de Uso</a>
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
