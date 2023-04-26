const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// get all lands
const getLandController = async (req, res) => {
  try {
    const land = await prisma.landTitle.findMany();
    res.send(land);
  } catch (e) {
    console.log(e);
  }
  
};

// post land
const postLandController = async (req, res) => {
  try {
    const body = req.body;
    const land = await prisma.landTitle.create({
      data: {
        number: body.number,
        department: body.department,
        vol: body.vol,
        folio: body.folio,
        status: body.status
        // userId: user.id,
        // bankId: bank.id,
      },
    });
    res.send('LandTitle created successfully...');
  } catch (e) {
    console.log(e);
  }
  
};

// delete land
const deleteLandController = async (req, res) => {
  try {
    const id = req.params.id;
    const land = await prisma.landTitle.delete({
      where: {
        id: id,
      },
    });
    res.send('LandTitle deleted successfully...');
  } catch (e) {
    console.log(e); 
  }
  
};

// get land by id
const getLandByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const land = await prisma.landTitle.findUnique({
      where: {
        id: id,
      },
    });
    res.send(land);
  } catch (e) {
    console.log(e);
  }
  
};

// update land
const patchLandController = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const land = await prisma.landTitle.update({
      where: {
        id: id,
      },
      data: {
        number: body.number,
        department: body.department,
        vol: body.vol,
        folio: body.folio,
        status: body.status,
      },
    });
    res.send('LandTitle created successfully...');
  } catch (e) {
    console.log(e);
  }
  
};

module.exports = {
  deleteLandController,
  patchLandController,
  getLandController,
  getLandByIdController,
  postLandController,
};
