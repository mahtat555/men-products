import dotenv from 'dotenv'

import dbConnection from "../../core/db.js"
import Prodcut from "../models/product.js"
import Variant from "../models/variant.js"

/* Get the configuration from the .env file */
dotenv.config()


const seeder = async () => {
  /* Add the prodcuts to the database */
  // Product 1
  const product1 = await Prodcut.create({
    reference: "x-product-0002",
    name: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    image: "https://dummyjson.com/image/i/products/3/thumbnail.jpg"
  })

  // Product 2
  const product2 = await Prodcut.create({
    reference: "x-product-0003",
    name: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021",
    image: "https://dummyjson.com/image/i/products/4/thumbnail.jpg"
  })

  /* Add the variants to the database */
  // Variant 1
  const Variant1 = await Variant.create({
    product_id: product1._id,
    sku: "774D253653F64368",
    specification: "Specification 1",
    price: 99.10
  })

  // Variant 2
  const Variant2 = await Variant.create({
    product_id: product1._id,
    sku: "62DFADCAA208C805",
    specification: "Specification 2",
    price: 101.00
  })
  // Variant 3
  const Variant3 = await Variant.create({
    product_id: product2._id,
    sku: "B3FC9020425ACA2A",
    specification: "Specification 3",
    price: 300.99
  })

  // Variant 4
  const Variant4 = await Variant.create({
    product_id: product1._id,
    sku: "7E044DFA30572889",
    specification: "Specification 4",
    price: 210.33
  })

  console.log('The seeding was completed successfully')
}


dbConnection(process.env.MONGODB_URL, () => {})
