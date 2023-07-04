const express = require('express')
const router = express.Router()
const {getConnection} = require("../models/connector")

router.get('/', async (req, res) => {
    const [results] = await getConnection().execute(`SELECT * FROM todo`);
    res.json(results);
});

router.post("/", async (req, res) => {
    const { todo, completed } = req.body;
    await getConnection().execute(`INSERT todo(todo, completed) VALUES(?, ?)`, [
        todo,
        completed,
    ]);
    return res.json("성공");
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    getConnection().execute(`DELETE FROM todo where id = ?`,
        [id])

    return res.json("glgl");
})

router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const {todo, completed} = req.body

    getConnection().execute(`UPDATE todo SET todo = ?, completed = ? WHERE id = ?`,
        [todo, completed, id])

    res.json("수정");
})

module.exports = router;
