var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// app.get("/url", (req, res, next) => {
//     res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
// });

// const scrape = require('aliexpress-product-scraper');
// const product = scrape(req.prodid);


// app.get("/url/:prodid", (req, res, next) => {
//     const product = scrape(req.prodid);
//     product.then(res => {
//         console.log(res.json());
//     });
// });
const scrape = require('aliexpress-product-scraper');


app.get("/product/:id", function(req, res){
    const product = scrape(req.params.id);
    product.then(response => {
        // console.log(res);
        // return res.title;
        return res.json(response);
    }).catch(function(error){
        // return error.response.json(["hell"])
        return res.json({
            "message": "Oops! Something Went Wrong!!"
        });
    });
});

