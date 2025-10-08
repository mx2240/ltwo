function Box({ Data, MyFunct, MyFunct2 }) {

    MyFunct("Hello from Box Component........");

    MyFunct2("Hello from Box Component 22222........");

    return (


        <>
            {

                Data.map((eachData) => (
                    <main className="row">
                        <img src={eachData.image} alt="" />
                        <h1>{eachData.name}</h1>
                        <h1>{eachData.age}</h1>
                        <h1>{eachData.height}</h1>
                    </main>
                ))
            }





        </>
    )

}

export default Box