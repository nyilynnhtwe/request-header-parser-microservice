let express = require('express');
let app     = express();
let cors = require('cors');
app.use(cors({
    optionsSuccessStatus: 200
})); // some legacy browsers choke on 204


app.get("/",(req,res)=>
{

});

app.get("/api/whoami",(req,res)=>
{
  let ip    = req.hostname;
  let lang  = req.headers["accept-language"];
  let user  = req.headers["user-agent"];
  res.json({ipaddress:ip,language:lang,software:user});
});



app.listen(process.env.PORT || 3000);
