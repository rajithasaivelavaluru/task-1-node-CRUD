const express = require("express");
const {
    getUsers,
    getUser,
    createUser,
    updatedUser,
    deleteUser
} = require('../controllers/users.controllers');

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updatedUser);
router.delete('/:id', deleteUser);

module.exports = router;
