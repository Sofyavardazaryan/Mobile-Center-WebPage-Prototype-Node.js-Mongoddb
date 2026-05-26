var express=require(
    "express"
);

var router=
express.Router();

const {
    getProducts
}=require(
 "../models/productModel"
);

router.get(
"/",
async(req,res)=>{

try{

const products=
await getProducts();

res.render(
"index",
{products}
);

}
catch(error){

console.log(error);

res.send(
error.message
);

}

});

module.exports=
router;