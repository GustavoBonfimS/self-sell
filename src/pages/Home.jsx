import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import AppMenu from '../components/AppMenu';

export default function Home() {
  const produtos = [
    {
      idProduto: 1,
      name: 'Coca-cola',
      price: 5.0,
      tam: '2',
      um: 'litro',
      qtdEstoque: 10,
    },
    {
      idProduto: 2,
      name: 'Fanta',
      price: 4.5,
      tam: '2',
      um: 'litro',
      qtdEstoque: 8,
    },
    {
      idProduto: 3,
      name: 'Pepsi',
      price: 4.8,
      tam: '2',
      um: 'litro',
      qtdEstoque: 5,
    },
    {
      idProduto: 4,
      name: 'Antartica',
      price: 4.9,
      tam: '2',
      um: 'litro',
      qtdEstoque: 13,
    },
  ];
  return (
    <>
      <AppMenu title='Pagina Inicial' />
      <h1 className='text-center my-3'>Visão geral</h1>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col'>
            <BarChart width={500} height={300} data={produtos} barSize={20}>
              <XAxis
                dataKey='name'
                scale='point'
                padding={{ left: 20, right: 20 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray='3 3' />
              <Bar
                dataKey='qtdEstoque'
                fill='#8884d8'
                background={{ fill: '#eee' }}
              />
            </BarChart>
          </div>
          <div className='col'>
            <h3>Tenha controle do seu estoque</h3>
            <p className='text-muted'>
              Não deixe faltar produtos para seus clientes, fique de olho!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
