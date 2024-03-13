import React from 'react'

const Cards = (props) => {
  return (
    <>
    <div class="card" style={{width: "18rem"}}>
  <img src={props.image} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <p class="card-price">${props.price}</p>
    <a href="#" class="btn btn-danger px-5">add to cart</a>
  </div>
</div>
    </>
  )
}

export default Cards