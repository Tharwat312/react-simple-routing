import { useState } from 'react'
import productsData from '../../../db.json'
import ProductCard from '../../Components/ProductCard/ProductCard';
export default function Home() {
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState(productsData.products);
    //mutation state 
    return (
        <>
            < h3 className="my-3 text-center text-2xl font-bold" > Hello From Route</h3 >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {products.map(product => <ProductCard key={product} productAttribute={product} />)}
            </div>
        </>
    )
}
