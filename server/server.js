const fs = require('fs');
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(cors())
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');


const con = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    database : conf.database,
    port :  conf.port

});

con.connect()
    

app.get('/score', (req,res) =>{
   
    con.query(
        "select * from game_score order by score desc",
        (err, rows, fields) => {
            if(err){
                console.log(err);
                res.status(500).send('Internal Server Error')
            }
              res.send(rows);
        }
    )
})



app.post('/score',(req,res)=> {
   
    let name = req.body.name;
    let score = req.body.score;
    let param = [name,score];

    con.query(
        "insert into game_score(name,score) values(?,?);",
        param,
        (err, rows, fields) => {
            if(err){
                console.log(err);
                res.status(500).send('Internal Server Error')
            }
            console.log("save")
        }
    )
})

app.listen(port ,  ()=> console.log(`Listening on port ${port}`));