import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { fetchOne, removeProduct } from '../redux/actions/productAction';
import Loader from './loader/Loader';

const Product = () => {
    const { id } = useParams();
    const product = useSelector(state => state.singleProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOne(id));

        return () => {
            dispatch(removeProduct());
        }
    }, [id, dispatch])
    return (
        <div className="container">
            {product ?
                <div className="row  m-2" >
                    <img className="card-img-top m-auto " src={product.image} alt={product.description} style={{ width:"460px", height:"400px"}} />
                    <div className="card-body">
                        <h4 className="card-title">{product.title}</h4>
                        <p className="card-text">{product.description}</p>
                        <p className="badge bg-dark">$ {product.price}</p>
                    </div>
                </div> : <Loader/>}
        </div >
    )
}

export default Product
