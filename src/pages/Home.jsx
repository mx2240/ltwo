import Box from "../componets/Box";




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






    return (
        <>

            <h1> Home</h1>

            <Box Data={student} />



        </>



    );

}

export default Home