const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// get all users
const getUserController = async (req, res) => {
  const user = await prisma.user.findMany();
  res.send(user);
};

// post user
const postUserController = async (req, res) => {
  try {
    const body = req.body;
    const user = await prisma.user.create({
      data: {
        city: body.city,
        cni_number: body.cni_number,
        emailUser: body.emailUser,
        firstname: body.firstname,
        lastname: body.lastname,
        phone: body.phone,
        address: body.address,
      },
    });
    res.send('User created successfully...');
  } catch (e) {
    console.log(e);
  }
  
};

// delete user
const deleteUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    res.send('User deleted successfully...');
  } catch (e) {
    console.log(e); 
  }
  
};

// get user by id
const getUserByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    res.send(user);
  } catch (e) {
    console.log(e);
  }
  
};

// update user
const patchUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        city: body.city,
        cni_number: body.cni_number,
        emailUser: body.emailUser,
        firstname: body.firstname,
        lastname: body.lastname,
        phone: body.phone,
        address: body.address,
      },
    });
    res.send('User created successfully...');
  } catch (e) {
    console.log(e);
  }
  
};

module.exports = {
  getUserByIdController,
  getUserController,
  deleteUserController,
  patchUserController,
  postUserController,
};
