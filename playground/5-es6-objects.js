const fname = "Lika";
const userAge = 27;

const user = {
  fname,
  age: userAge,
  location: "Philadelphia",
};

//objrct destructuring
const product = {
  lable: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};
// const lable = product.lable
// const stock = product.stock

// const {lable, stock}= product
// console.log(lable)
// console.log(stock)

// const {lable:productLable, stock, rating=5}= product
// console.log(productLable)
// console.log(rating)

const transaction = (type, { lable, stock }) => {
  console.log(type, lable, stock);
};

transaction("order", product);
