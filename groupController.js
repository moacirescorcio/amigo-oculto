const prisma = require('../config/database');

const createGroup = async (req, res) => {
  try {
    const { name } = req.body;
    const { id: ownerId } = req.user;

    const group = await prisma.group.create({
      data: { name, ownerId },
    });

    res.status(201).json({ message: 'Grupo criado', group });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addMember = async (req, res) => {
  try {
    const { groupId, userId } = req.body;

    const member = await prisma.groupMember.create({
      data: { groupId, userId },
    });

    res.status(201).json({ message: 'Membro adicionado', member });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createGroup, addMember };
