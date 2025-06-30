const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Career Code Cooking')
})

app.listen(port, () => {
  console.log(`Career code server is running port ${port}`);
});