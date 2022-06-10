const {
  addTransaksi,
  getAllTransaksi,
  getTransaksiByIdUser,
  deleteTransaksi,
  addMitraSeller,
  getAllMitraSeller,
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
    path: '/mitra-seller',
    handler: addMitraSeller,
  },
  {
    method: 'GET',
    path: '/mitra-seller',
    handler: getAllMitraSeller,
  },

];

module.exports = routes;
