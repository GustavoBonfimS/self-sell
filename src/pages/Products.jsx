import React from 'react';

import AppMenu from '../components/AppMenu';
import Copyright from '../components/Copyright';

export default function Products() {
  return (
    <>
      <AppMenu title='Produtos'     />
      <div className='container'>
        <h1>Produtos</h1>
      </div>
      <Copyright />
    </>
  );
}
