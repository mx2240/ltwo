import React from 'react'
import Nav2 from '../componets/Nav2'
import drone from "../Images/drone.jpeg"
import Drsun from "../Images/Drsun.jpeg"
import Footer2 from '../componets/Footer2'



function Test() {

    return (

        <>

            <Nav2 />

            <div className='container2'>

                <div className="first">

                    <img src={drone} alt="" />



                </div>



                <div className="second">

                    <img src={Drsun} alt="" />

                </div>


            </div>


            <div className="container2" style={{ overflow: "hidden" }}>

                <div className="first">

                    <aside>
                        <div className="innerbox">
                            <h1>Archive</h1>
                            <li>List 1</li>
                            <li>List 1</li>
                            <li>List 1</li>
                            <li>List 1</li>



                        </div>

                    </aside>






                </div>




                <div className="second">

                    <div className="container2">
                        <div className="innerbox">

                            <img src={drone} alt="" />
                            <h2>Beaches word</h2>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        </div>

                        <div className="innerbox">
                            <img src={drone} alt="" />
                            <h2>Beaches word</h2>
                            <p> Lorem ipsum dolor sit amet consectetur .</p> </div>


                    </div>




                    <div className="row">
                        <div className="innerbox">

                            <img src={drone} alt="" />
                            <h2>Beaches word</h2>
                            <p> Lorem ipsum dolor sit amet consectetur t..</p>
                        </div>

                        <div className="innerbox">
                            <img src={drone} alt="" />
                            <h2>Beaches word</h2>
                            <p> Lorem ipsum dolor sit amet consectetur ..</p>



                        </div>


                    </div>



                </div>










            </div>

            <Footer2 />


        </>



    )

}



export default Test


