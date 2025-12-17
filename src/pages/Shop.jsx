import ProductBox from '../components/ProductBox';
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

export default function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axiosInstance.get('/products');
            setProducts(res.data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Shop</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map(p => <ProductBox key={p._id} product={p} />)}
            </div>
        </div>
    );
}
