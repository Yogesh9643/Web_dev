
const express=require('express');
cons bodyParser= require('body-parser');

const app= express();
app.use(bodyParser);

app.use('/add-product',(req, res, next)=>{
app.send('<form action = "/product"  method ="POST"><input type="text" name= "title"><button type="submit"> Add Product</button> </form');
});

app.use('/product' , (req, res, next)=> {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from express js</h1>');
})


app.listen(3000);  