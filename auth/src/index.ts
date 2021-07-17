import express from 'express'

const app = express();
app.use(express.json());

app.get('/api/users/currentUser', (req,res) => {
    console.log('adsasd')
    res.send("HI there")
})

app.get('/', (req,res) =>{
    res.send("OK")
})

app.listen(3000, () => {
    console.log("////")
    console.log("Listening on port 3000")
})