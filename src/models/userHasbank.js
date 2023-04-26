const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashGenerator } = require('../utils/hashGenerator');

const createUserHasBank = async (data, callback) => {
  const hash = await hashGenerator(data.hash);

  try {
    const user = await prisma.user.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        cni_number: data.cni_number,
        city: data.city,
        address: data.address,
        phone: data.phone,
      },
    });

    const bank = await prisma.bank.create({
      data: {
        name: data.name,
        city: data.city,
        locality: data.locality,
        email: data.email,
        hash: hash,
      },
    });

    const userbank = await prisma.user_Has_Bank.create({
      data: {
        userId: user.id,
        bankId: bank.id,
      },
    });
    callback(null, userbank);
  } catch (err) {
    callback(err, null);
  }
};

const readUserHasBank = async (data, callback) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        email: data.email,
      },
    });

    callback(null, users);
  } catch (err) {
    callback(err, null);
  }
};

const updateUserHasBank = async (data, callback) => {
  try {
    const user = await prisma.user.update({
      where: {
        email: 'viola@prisma.io',
      },
      data: {
        name: 'Viola the Magnificent',
      },
    });

    callback(null, user);
  } catch (err) {
    callback(err, null);
  }
};

const deleteUserHasBank = async (data, callback) => {
  try {
    const user = await prisma.user.delete({
      where: {
        email: 'bert@prisma.io',
      },
    });

    callback(null, user);
  } catch (err) {
    callback(err, null);
  }
};

module.exports = {
  createUserHasBank,
  deleteUserHasBank,
  readUserHasBank,
  updateUserHasBank,
};
