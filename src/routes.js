const {
  addTransaksiKirim,
  addTransaksiTerima,
  getAllTransaksi,
  getTransaksiById,
  deleteTransaksi,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/transaksi/kirim',
    handler: addTransaksiKirim,
  },
  {
    method: 'POST',
    path: '/transaksi/terima',
    handler: addTransaksiTerima,
  },
  {
    method: 'GET',
    path: '/transaksi',
    handler: getAllTransaksi,
  },
  {
    method: 'GET',
    path: '/transaksi/{idUser}',
    handler: getTransaksiById,
  },
  {
    method: 'DELETE',
    path: '/transaksi/{idTransaksi}',
    handler: deleteTransaksi,
  },

];

module.exports = routes;
