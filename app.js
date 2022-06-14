const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("여기는 루트입니다.");
});

app.listen(3000, function(){
    console.log("서버 기동");
})