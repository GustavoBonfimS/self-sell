import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import AppMenu from '../components/AppMenu';
import Copyright from '../components/Copyright';

export default function Home() {
  const history = useHistory();
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
            <p className='text-muted'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popula
            </p>
          </div>
        </div>

        <div className='d-flex justify-content-between py-5'>
          <Button color='primary' onClick={() => history.push('/products')}>
            Produtos
          </Button>
          <Button color='primary'>Pedidos</Button>
          <Button color='primary'>Visualizar relatório</Button>
        </div>
      </div>

      <Copyright />
    </>
  );
}
