const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashGenerator } = require('../utils/hashGenerator');

const createLandTitle = async (data, callback) => {
  const hash = await hashGenerator(data.hash);

  try {
    const user = await prisma.user.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        emailUser: data.emailUser,
        cni_number: data.cni_number,
        city: data.city,
        address: data.address,
        phone: data.phone,
        // banks: bank.id
      },
    });

    const bank = await prisma.bank.create({
      data: {
        name: data.name,
        city: data.city,
        locality: data.locality,
        email: data.email,
        hash: hash,
        users:
      },
    });

    const land = await prisma.landTitle.create({
      data: {
        number: data.number,
        department: data.department,
        vol: data.vol,
        folio: data.folio,
        status: data.status,
        userId: user.id,
        bankId: bank.id
      },
    });
    callback(null, land);
  } catch (err) {
    callback(err, null);
  }
};

const readLandTitle = async (data, callback) => {
  try {
    const lands = await prisma.landTitle.findMany({
      /* where: {
        name: data.name,
        number: data.number,
        vol: data.vol,
        folio: data.folio,
      }, */
    });

    callback(null, lands);
  } catch (err) {
    callback(err, null);
  }
};

const updateLandTitle = async (data, callback) => {
  try {
    const land = await prisma.landTitle.update({
      where: {
        email: 'viola@prisma.io',
      },
      data: {
        name: 'Viola the Magnificent',
      },
    });

    callback(null, land);
  } catch (err) {
    callback(err, null);
  }
};

const deleteLandTitle = async (data, callback) => {
  try {
    const land = await prisma.landTitle.delete({
      where: {
        email: 'bert@prisma.io',
      },
    });

    callback(null, land);
  } catch (err) {
    callback(err, null);
  }
};

module.exports = {
  createLandTitle,
  deleteLandTitle,
  readLandTitle,
  updateLandTitle,
};
