const express = require('express')
const router = express.Router()
const {getConnection} = require("../models/connector")
const jwt = require('jsonwebtoken');
const authMiddleWare = require("../middleware/authMiddleWare")

router.get('/', async (req, res) => {
    const [results] = await getConnection().execute(`SELECT * FROM todo`);
    res.json(results);
});

router.post("/", authMiddleWare,
    async (req, res) => {
        const {todo, completed} = req.body;

        await getConnection().execute(`INSERT todo(todo, completed, user_id) VALUES(?, ?, ?)`, [
            todo,
            completed,
            req.user.id
        ]);

        return res.json("성공");
    }
)
;

router.delete('/:id', authMiddleWare,
    (req, res) => {
        const id = req.params.id;

        const result = getConnection().execute(`DELETE FROM todo where id = ? and user_id = ?`,
            [id, req.user.id]);

        if (result === 0) {
            res.status(400).json("no todo changed");
        }

        return res.json("glgl");
    })

router.put('/:id', authMiddleWare, (req, res) => {
    const id = Number(req.params.id);
    const {todo, completed} = req.body

    const result = getConnection().execute(`UPDATE todo SET todo = ?, completed = ? WHERE id = ? and user_id = ?`,
        [todo, completed, id, req.user.id])

    if (result === 0) {
        res.status(400).json("no todo changed");
    }

    res.json("수정");
})

module.exports = router;
