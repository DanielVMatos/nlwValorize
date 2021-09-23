import express from 'express';


const app = express();

app.get("/test", (req, res) => {
    return res.send("Get funcionando")
})

app.post("/test-post", (req, res) => {
    return res.send("Post funcionando")
})

app.listen(3000, () => { console.log('server is running') })