const express = require('express')
const axios = require('axios').default

const app = express()
const port = 3000

app.get('/' , async (req,res) => {
    res.send(await axios.get(req.query.url).then((value) => JSON.stringify(value.data)))
})

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})
