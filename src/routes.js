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
    path: '/transaksi/{id}',
    handler: getTransaksiById,
  },
  {
    method: 'DELETE',
    path: '/transaksi/{id}',
    handler: deleteTransaksi,
  },

];

module.exports = routes;
