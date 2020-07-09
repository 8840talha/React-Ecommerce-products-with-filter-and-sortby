import React, { useState } from 'react'
import { Grid, Paper, Checkbox } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { productss } from '../../data'
import './Products.css'

const ProductList = (props) => {

    const [products, setProducts] = useState(productss)
    //   Sorting by Lowest Price
    const sortByPriceLowest = () => {
        var sortedProductsAsc;
        sortedProductsAsc = [...products].sort((a, b) => {

            return parseInt(a.price) - parseInt(b.price);
        })
        console.log(sortedProductsAsc)
        return setProducts(sortedProductsAsc)

    }
    //   Sorting by Highest Price
    const sortByPriceHighest = (event) => {
        var sortedProductsDsc;
        sortedProductsDsc = [...products].sort((a, b) => {
            return parseInt(b.price) - parseInt(a.price);
        })
        console.log(sortedProductsDsc)
        return setProducts(sortedProductsDsc)
    }
    //   Sorting by Oldest Product
    const SortByOldestFirst = () => {
        var sortedProductsAsc;
        sortedProductsAsc = [...products].sort((a, b) => {

            return a.date - b.date;
        })
        console.log(sortedProductsAsc)
        return setProducts(sortedProductsAsc)
    }

    ////   Sorting by Newest First
    const SortByNewestFirst = () => {
        var sortedProductsAsc;
        sortedProductsAsc = [...products].sort((a, b) => {

            return b.date - a.date;
        })
        console.log(sortedProductsAsc)
        return setProducts(sortedProductsAsc)
    }

    const [searchterm, setSearch] = useState("")
    // Filtering products by search terms and maping into array and returning in ui
    let result = products.filter((product) => {
        if (searchterm == null) {
            return product
        }
        else if (product.title.toLowerCase().includes(searchterm.toLowerCase())
            || product.category.toLowerCase().includes(searchterm.toLowerCase())
        ) {
            return product
        }
    }).map(product => {
        return (
            <Grid item xs={12} sm={6} lg={4} >
                <Paper elevation={4} className="paper">
                    <h3 className="h3">{product.title}</h3>
                    <img className="img" src={product.imagePath} />
                    <p className="p">{product.description}</p>
                    <div className="priceContainer" >
                        $:{product.price}
                        <button className="Btn"
                        >Add</button>
                    </div>


                </Paper>
            </Grid>
        )
    })


    return (
        <div>
            <Grid container >
                <Grid style={{ textAlign: 'center' }} xs={4} sm={4} lg={4}>
                    <select onChange={(e) => setSearch(e.target.value)}>
                        <option  >Select Category</option>
                        <option value="Game">Game</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Hardware">Laptop/Mobile</option>
                        <option value="Supplements">Supplements</option>
                        <option value="">Reset</option >
                    </select>
                </Grid>
                <Grid xs={4} sm={4} lg={4}>
                    SortBy:
                    <button onClick={() => { sortByPriceLowest() }}>Lowest First</button>
                    <button onClick={() => { sortByPriceHighest() }}>Highest First</button>
                    <button onClick={() => { SortByOldestFirst() }}>Oldest First</button>
                    <button onClick={() => { SortByNewestFirst() }}>Newest First</button>
                </Grid>
                <Grid xs={4} sm={4} lg={4}>
                    <input
                        type="text"
                        placeholder="search"
                        value={searchterm}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container className="resultContainer">
                {result}
            </Grid>
        </div>
    )

}

export default ProductList