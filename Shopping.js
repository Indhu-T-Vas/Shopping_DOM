let data = [
  {
    id: "1",
    product_name: "Tasty Granite Towels",
    product_price: "143.00",
    product_description: "Pants",
    rating: 4,
    img: "http://placehold.it/700x400&text=product 1",
  },
  {
    id: "2",
    product_name: "Licensed Steel Chicken",
    product_price: "716.00",
    product_description: "Bacon",
    rating: 5,
    img: "http://placehold.it/700x400&text=product 2",
  },
  {
    id: "3",
    product_name: "Generic Steel Hat",
    product_price: "449.00",
    product_description: "Computer",
    rating: 3,
    img: "http://placehold.it/700x400&text=product 3",
  },
  {
    id: "4",
    product_name: "Handmade Fresh Mouse",
    product_price: "426.00",
    product_description: "Soap",
    rating: 2,
    img: "http://placehold.it/700x400&text=product 4",
  },
  {
    id: "5",
    product_name: "Licensed Granite Chips",
    product_price: "512.00",
    product_description: "Chair",
    rating: 4,
    img: "http://placehold.it/700x400&text=product 5",
  },
  {
    id: "6",
    product_name: "Intelligent Wooden Keyboard",
    product_price: "731.00",
    product_description: "Table",
    rating: 4,
    img: "http://placehold.it/700x400&text=product 6",
  },
  {
    id: "7",
    product_name: "Intelligent Hammer",
    product_price: "331.00",
    product_description: "Hammer",
    rating: 5,
    img: "http://placehold.it/700x400&text=product 7",
  },
];

let row = document.querySelector("#row");
data.forEach((obj) => {
  let col = cardCreation("div", "col-4 mb-4");
  let card = cardCreation("div", "card h-100");
  let cardBody = cardCreation("div", "card-body");
  let img = cardCreation("img", "card-img-top");
  img.setAttribute("src", obj.img);
  let a = cardCreation("a");
  a.append(img);
  let h4 = cardCreation("h4", "card-title");
  h4.innerHTML = obj.product_name;
  let h5 = cardCreation("h5");
  h5.innerHTML = obj.product_price;
  let p = cardCreation("p", "card-text");
  p.innerHTML = obj.product_description;
  cardBody.append(h4, h5, p);
  let cardFooter = cardCreation("div", "card-footer");
  cardFooter.innerHTML = obj.rating;
  card.append(a, cardBody, cardFooter);

  col.append(card);

  row.append(col);
});

function cardCreation(elem, elemclass = "", elemId = "") {
  let element = document.createElement(elem);
  element.setAttribute("class", elemclass);
  element.setAttribute("id", elemId);
  return element;
}
