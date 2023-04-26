const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashGenerator } = require('../utils/hashGenerator');

const createBank = async (data, callback) => {
  const hash = await hashGenerator(data.hash);
  try {
    const bank = await prisma.bank.create({
      data: {
        name: data.name,
        city: data.city,
        locality: data.locality,
        email: data.email,
        hash: hash,
      },
    });
    callback(null, bank);
  } catch (err) {
    callback(err, null);
  }
};

const readBankByEmail = async (data, callback) => {
  try {
    const bank = await prisma.bank.findUnique({ where: { email: data.email } });
    callback(null, bank);
  } catch (err) {
    callback(err, null);
  }
};

const readBank = async (data, callback) => {
  try {
    const banks = await prisma.bank.findMany({ where: { email: data.email } });
    callback(null, banks);
  } catch (err) {
    callback(err, null);
  }
};

module.exports = {
  createBank,
  readBankByEmail,
  readBank,
};
