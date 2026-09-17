let express = require('express');
let app = express();

app.get("/getstudent",(req, res)=>{
  res.send("get student called");
})

app.listen(3000,()=>{
  console.log("server listening on port 3000");
})