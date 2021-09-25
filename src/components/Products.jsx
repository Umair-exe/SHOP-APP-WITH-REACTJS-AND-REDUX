import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { fetchCategories, fetchProducts } from '../redux/actions/productAction';
import { Link } from 'react-router-dom';
import Loader from './loader/Loader';


const Products = () => {
    const [cat, setcat] = useState('');
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(fetchProducts(cat));
        dispatch(fetchCategories());

    }, [cat, dispatch])

    const products = useSelector(state => state.allProducts.products);
    const category = useSelector(state => state.categories.category);


    return (
        <div className="container row ">

            {category ? <div>
                <select defaultValue={'default'} onChange={e => {
                    setcat(e.target.value)
                }} >
                    <option value="default" disabled>Select Category</option>
                    {category.map((r, i) => (
                        <option key={i} value={r} >{r}</option>
                    ))}
                </select>
            </div> : <Loader />}




            {products.length === 0 ? <Loader /> :
                products.map((product) => (
                    <div key={product.id} className="card col-lg-3 m-2" style={{ width: "400px" }}>
                        <Link to={`/product/${product.id}`}>
                            <img className="card-img-top" src={product.image} alt={product.description} style={{ width: "100%" }} />
                            <div className="card-body">
                                <h4 className="card-title">{product.title}</h4>
                                <p className="card-text">{product.description}</p>
                                <p className="badge bg-dark">$ {product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))

            }




        </div>
    )
}

export default Products
