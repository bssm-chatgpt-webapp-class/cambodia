const express = require('express')
const router = express.Router()

let database = [{id: 1, todo: "고양이 밥주기"}];
let currentValue = 1;

router.get('/', (req, res) => {
    res.json({database});
})

router.post('/', (req, res) => {
    const data = req.body
    database.push({id: ++currentValue, todo: data.todo})
    return res.json("success")
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    database = database.filter(todo => todo.id !== Number(id))

    return res.json("glgl");
})

router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const {todo} = req.body

    const index = database.findIndex(data => data.id === id);
    database[index].todo = todo;

    res.json(database);
})

module.exports = router;