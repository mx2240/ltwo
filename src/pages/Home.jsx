import Box from "../componets/Box";
import MainSI from "../componets/MainSI";
import ImageCardGrid from "../componets/ImageCardGrid";
import Form from "../componets/Form";
import Form2 from "../componets/Form2";
import { useContext } from "react";
import Themecontext from "../componets/ThemeContext";












function Home() {

    const student = [
        {
            name: "Michelle 1",
            age: 20,
            height: 5.7
        }, {
            name: "Michelle 2",
            age: 20,
            height: 5.7
        }, {
            name: "Michelle 3",
            age: 20,
            height: 5.7
        }, {
            name: "Michelle 4",
            age: 20,
            height: 5.7
        }, {
            name: "Michelle 5",
            age: 20,
            height: 5.7
        }
    ]


    let Boxer = (box) => {

        console.log(box);
    }

    let Boxers = (box) => {

        console.log(box);
    }



    return (
        <>

            <h1> Home</h1>

            <MainSI></MainSI>


            <Box Data={student} MyFunct={Boxer} MyFunct2={Boxers} ></Box>


            <ImageCardGrid />

            <Form2 />


        </>



    );

}

export default Home