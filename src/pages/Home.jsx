// import Box from "../componets/Box";
// import MainSI from "../componets/MainSI";
// import ImageCardGrid from "../componets/ImageCardGrid";
// import Form from "../componets/Form";
// import Form2 from "../componets/Form2";
// import { useContext } from "react";
// import Themecontext from "../componets/ThemeContext";












// function Home() {

//     const student = [
//         {
//             name: "Michelle 1",
//             age: 20,
//             height: 5.7
//         }, {
//             name: "Michelle 2",
//             age: 20,
//             height: 5.7
//         }, {
//             name: "Michelle 3",
//             age: 20,
//             height: 5.7
//         }, {
//             name: "Michelle 4",
//             age: 20,
//             height: 5.7
//         }, {
//             name: "Michelle 5",
//             age: 20,
//             height: 5.7
//         }
//     ]


//     let Boxer = (box) => {

//         console.log(box);
//     }

//     let Boxers = (box) => {

//         console.log(box);
//     }



//     return (
//         <>

//             <h1> Home</h1>

//             <MainSI></MainSI>


//             <Box Data={student} MyFunct={Boxer} MyFunct2={Boxers} ></Box>


//             <ImageCardGrid />

//             <Form2 />


//         </>



//     );

// }

// export default Home




import Cover from '../components/Cover';
import ProductBox from '../components/ProductBox';
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

export default function Home() {
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
            <Cover title="Welcome to Our Store" subtitle="Best Products Online" />
            <h2>All Products</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map(p => <ProductBox key={p._id} product={p} />)}
            </div>
        </div>
    );
}
