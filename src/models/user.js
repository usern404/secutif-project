const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashGenerator } = require('../utils/hashGenerator');

const createUser = async (data, callback) => {
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
        banks: {
          create: [
            {
              bank: {
                create: {
                  name: data.name,
                  city: data.city,
                  locality: data.locality,
                  email: data.email,
                  hash: hash,
                },
              },
            },
          ],
        },
        landTitle: {
          create: {
            number: data.number,
            department: data.department,
            vol: data.vol,
            folio: data.folio,
            status: data.status,
          },
        },
      },
    });
    callback(null, user);
  } catch (err) {
    callback(err, null);
  }
};

const readUser = async (data, callback) => {
  try {
    const users = await prisma.user.findMany({ where: { email: data.email } });
    callback(null, users);
  } catch (err) {
    callback(err, null);
  }
};

const updateUser = async (data, callback) => {
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

const deleteUser = async (data, callback) => {
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
  createUser,
  deleteUser,
  readUser,
  updateUser,
};
