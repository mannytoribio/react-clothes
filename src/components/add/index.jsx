// Create a form with controlled components that adds a clothing item to the the list

import { React, useState } from "react"
import { useHistory } from "react-router-dom"

export default function Add() {
  let history = useHistory()
  const [newClothes, setNewClothes] = useState({})
  const handleSubmit = (e) => {
    console.log(newClothes)
    e.preventDefault()
    console.log('Stuff lol')
    fetch("https://bc-clothes.web.app/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClothes),
    })
      .then((res) => res.json())
      .then(() => history.push("/clothes"))
      .catch((err) => alert(err))
  }
  return (
    <>
      <h1>Add Clothes</h1>
      <form style={{ display: "flex", flexWrap: "wrap" }} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="brand">
          Brand
          <input
            name="brand"
            type="text"
            value={newClothes.brand}
            onChange={(e) => {
              setNewClothes({ ...newClothes, brand: e.target.value })
            }}
          />
        </label>
        <label htmlFor="type">
          Type
          <input
            name="type"
            type="text"
            value={newClothes.type}
            onChange={(e) => {
              setNewClothes({ ...newClothes, type: e.target.value })
            }}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            name="price"
            type="text"
            value={newClothes.price}
            onChange={(e) => {
              setNewClothes({ ...newClothes, price: e.target.value })
            }}
          />
        </label>
        <label htmlFor="color">
          Color
          <input
            name="color"
            type="text"
            value={newClothes.color}
            onChange={(e) => {
              setNewClothes({ ...newClothes, color: e.target.value })
            }}
          />
        </label>
        <label htmlFor="style">
          Style
          <input
            name="style"
            type="text"
            value={newClothes.style}
            onChange={(e) => {
              setNewClothes({ ...newClothes, style: e.target.value })
            }}
          />
        </label>
        <label htmlFor="type">
          SKU
          <input
            name="sku"
            type="text"
            value={newClothes.sku}
            onChange={(e) => {
              setNewClothes({ ...newClothes, sku: e.target.value })
            }}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

