const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// get all banks
const getBankController = async (req, res) => {
  const bank = await prisma.bank.findMany();
  res.send(bank);
};

// post bank
const postBankController = async (req, res) => {
  try {
    const body = req.body;
    const bank = await prisma.bank.create({
      data: {
        name: body.name,
        city: body.city,
        locality: body.locality,
        email: body.email,
        hash: hash,
      },
    });
    res.send('Bank created successfully...');
  } catch (e) {
    console.log(e);
  }
  
};

// delete bank
const deleteBankController = async (req, res) => {
  try {
    const id = req.params.id;
    const bank = await prisma.bank.delete({
      where: {
        id: id,
      },
    });
    res.send('Bank deleted successfully...');
  } catch (e) {
    console.log(e); 
  }
  
};

// get bank by id
const getBankByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const bank = await prisma.bank.findUnique({
      where: {
        id: id,
      },
    });
    res.send(bank);
  } catch (e) {
    console.log(e);
  }
  
};

// update bank
const patchBankController = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const bank = await prisma.bank.update({
      where: {
        id: id,
      },
      data: {
        city: body.city,
        cni_number: body.cni_number,
        emailBank: body.emailBank,
        firstname: body.firstname,
        lastname: body.lastname,
        phone: body.phone,
        address: body.address,
      },
    });
    res.send('Bank created successfully...');
  } catch (e) {
    console.log(e);
  }
  
};

module.exports = {
  getBankByIdController,
  getBankController,
  deleteBankController,
  patchBankController,
  postBankController,
};
