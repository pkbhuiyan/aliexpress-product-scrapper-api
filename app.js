var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

const scrape = require('aliexpress-product-scraper');
const { response } = require("express");


app.get("/product/:id", function(req, res){
    const product = scrape(req.params.id);
    
    product.then(response => {
        console.log(res);
        // return res.title;
        return res.json(response);
    }).catch(function(error){
        // return error.response.json(["hell"])
        console.log(error);
        return res.json({
            "message": "Oops! Something Went Wrong!!"
        });
    });
});


// const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
// aliexpress-product-scrapper/src/aliexpressProductScrapper.js