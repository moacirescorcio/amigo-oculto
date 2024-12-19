const express = require('express');
const { createGroup, addMember } = require('../controllers/groupController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createGroup);
router.post('/member', authMiddleware, addMember);

module.exports = router;
