const { nanoid } = require('nanoid');
const transaksi = require('./transaksi');

const addTransaksiTerima = (request, h) => {
  const {
    jumlah,
    idPengirim,
    namaPengirim,
  } = request.payload;
  const id = nanoid(16);
  const jenis = 'Terima';
  const tanggal = new Date().toISOString();

  if (!jumlah && !idPengirim) {
    return h.response({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Jumlah harus diisi',
    }).code(400);
  }
  const newTransaksi = {
    id,
    namaPengirim,
    jumlah,
    jenis,
    idPengirim,
    tanggal,
  };
  transaksi.push(newTransaksi);

  const isSuccess = transaksi.filter((transaction) => transaction.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Transaksi berhasil ditambahkan',
      data: {
        TransaksiId: id,
      },
    }).code(201);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Transaksi gagal ditambahkan',
  }).code(500);
  return response;
};

const addTransaksiKirim = (request, h) => {
  const {
    jumlah,
    idPenerima,
    namaPenerima,
  } = request.payload;
  const id = nanoid(16);
  const jenis = 'Kirim';
  const tanggal = new Date().toISOString();

  if (!jumlah && !idPenerima) {
    return h.response({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Jumlah harus diisi',
    }).code(400);
  }

  const newTransaksi = {
    id,
    namaPenerima,
    jumlah,
    jenis,
    idPenerima,
    tanggal,
  };
  transaksi.push(newTransaksi);

  const isSuccess = transaksi.filter((transaction) => transaction.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Transaksi berhasil ditambahkan',
      data: {
        TransaksiId: id,
      },
    }).code(201);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Transaksi gagal ditambahkan',
  }).code(500);
  return response;
};

const getAllTransaksi = (request, h) => {
  const response = h.response({
    status: 'success',
    data: transaksi,
  }).code(200);
  return response;
};

const getTransaksiById = (request, h) => {
  const { id } = request.params;
  const hist = transaksi.filter((transaction) => transaction.id === id)[0];
  if (hist) {
    const response = h.response({
      status: 'success',
      data: hist,
    }).code(200);
    return response;
  }
  const response = h.response({
    status: 'error',
    message: 'Transaksi tidak ditemukan',
  }).code(404);
  return response;
};

const deleteTransaksi = (request, h) => {
  const { id } = request.params;
  const index = transaksi.findIndex((transaction) => transaction.id === id);
  if (index > -1) {
    transaksi.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Transaksi berhasil dihapus',
    }).code(200);
    return response;
  }
  const response = h.response({
    status: 'error',
    message: 'Transaksi tidak ditemukan',
  }).code(404);
  return response;
};

module.exports = {
  addTransaksiTerima,
  addTransaksiKirim,
  getAllTransaksi,
  getTransaksiById,
  deleteTransaksi,
};
