import React from 'react';

import AppMenu from '../components/AppMenu';

export default function Home() {
  return (
    <>
      <AppMenu title='Pagina Inicial' />
      <h1>Visão geral</h1>
      <div className='container'>
        <h2 className='text-muted'>teste bootstrap</h2>
      </div>
    </>
  );
}
