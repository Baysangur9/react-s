
import React from 'react';
import Card from './Card'

const propsObject = [
  {
    name: "Nike Sneaker",
    price: 120,
    descripiton: "Идельные кроссы",
    details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas et qui dicta laudantium vitae facere iste?",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=en tropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE4MjMwfQ"
  },
  {
    name: "Puma Sneaker",
    price: 150,
    descripiton: "Неидеальные кроссы",
    details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas et qui dicta laudantium vitae facere iste?",
    imageUrl:"https://img.brandshop.ru/cache/products/3/307137-01-0_1104x1104.jpg"
  },
  {
    name: "Adidas Sneaker",
    price: 160,
    descripiton: "Кроссы",
    details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas et qui dicta laudantium vitae facere iste?",
    imageUrl:"https://img.brandshop.ru/cache/products/g/gy6317-1_1104x1104.jpg"
  },
  {
    name: "Fila Sneaker",
    price: 110,
    descripiton: "Матроссы",
    details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas et qui dicta laudantium vitae facere iste?",
    imageUrl:"https://cdn.sptmr.ru/upload/resize_cache/iblock/ddc/800_800_1/67268470299.jpg"
  },
  {
    name: "Reebok Sneaker",
    price: 170,
    descripiton: "Супер фирма",
    details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas et qui dicta laudantium vitae facere iste?",
    imageUrl:"https://img.brandshop.ru/cache/products/g/gy3558-0_1104x1104.jpg"
  },
  {
    name: "New Balance Sneaker",
    price: 80,
    descripiton: "На худой конец",
    details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas et qui dicta laudantium vitae facere iste?",
    imageUrl:"https://newbalance.ru/upload/resize_cache/iblock/80a/992_992_2/mh574xb1_nb_05_i.jpg"
  },
]







function App () {
  return(
    <Card propsObject={propsObject} />
  )
}

export default App