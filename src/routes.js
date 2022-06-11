const {
  addTransaksi,
  getAllTransaksi,
  getTransaksiByIdUser,
  deleteTransaksi,
  addMitra,
  getAllMitra,
  addSeller,
  getAllSeller,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/transaksi',
    handler: addTransaksi,
  },
  {
    method: 'GET',
    path: '/transaksi',
    handler: getAllTransaksi,
  },
  {
    method: 'GET',
    path: '/transaksi/{idUser}',
    handler: getTransaksiByIdUser,
  },
  {
    method: 'DELETE',
    path: '/transaksi/{idTransaksi}',
    handler: deleteTransaksi,
  },
  {
    method: 'POST',
    path: '/mitra',
    handler: addMitra,
  },
  {
    method: 'GET',
    path: '/mitra',
    handler: getAllMitra,
  },
  {
    method: 'POST',
    path: '/seller',
    handler: addSeller,
  },
  {
    method: 'GET',
    path: '/seller',
    handler: getAllSeller,
  },
];

module.exports = routes;
