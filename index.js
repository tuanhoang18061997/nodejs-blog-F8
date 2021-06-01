const express = require('express')

const app = express()
const port = 4000

app.get('/tin-tuc', (req, res) => {
    let a = 1
    let b = 2
    let c = a + b
    return res.send("saddas")
})

app.listen(port, () => console.log(`App listening  at http://localhost:${port}`))