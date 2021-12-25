var express = require('express');
var fetchProductsRouter = express.Router();

fetchProductsRouter.get("/getFurnitures", (req, res, next) => {
    res.json([{"productId":"100001",
               "productName":"IKEA Micke Study Desk",
               "price":"7690",
               "imageUrl":"https://www.ikea.com/in/en/images/products/micke-desk-white__0851508_pe565256_s5.jpg?f=xxs"},
               {"productId":"100002",
               "productName":"IKEA Malm Study Desk",
               "price":"10990",
               "imageUrl":"https://www.ikea.com/in/en/images/products/malm-desk-white__0735975_pe740309_s5.jpg?f=xxs"},
               {"productId":"100003",
               "productName":"IKEA LINNMON Study Desk",
               "price":"10990",
               "imageUrl":"https://www.ikea.com/in/en/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xxs"},
               {"productId":"100003",
               "productName":"IKEA SMASTAD Study Desk",
               "price":"3600",
               "imageUrl":"https://www.ikea.com/in/en/images/products/smastad-bench-white__0848801_pe779149_s5.jpg?f=xxs"},
               {"productId":"100003",
               "productName":"IKEA SMASTAD Study Desk",
               "price":"9900",
               "imageUrl":"https://www.ikea.com/in/en/images/products/alex-desk-white__0977658_pe813725_s5.jpg?f=xxs"},
               {"productId":"100003",
               "productName":"IKEA Tarno Table",
               "price":"1900",
               "imageUrl":"https://www.ikea.com/in/en/images/products/taernoe-table-outdoor-red-light-brown-stained__0917464_ph168428_s5.jpg?f=xxxs"},
              ]);
   });

   fetchProductsRouter.get("/getFurnituresByName", (req, res, next) => {
    console.log('Searching via '+req.query.name);
    res.json([{"productId":"100003",
               "productName":"IKEA Tarno Table",
               "price":"1900",
               "imageUrl":"https://www.ikea.com/in/en/images/products/taernoe-table-outdoor-red-light-brown-stained__0917464_ph168428_s5.jpg?f=xxxs"},
              ]);
   });

  

module.exports = fetchProductsRouter;