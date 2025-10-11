import { useState } from "react";


function Form2() {
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const FormHandler = async () => {

        event.preventDefault();

        console.log("form submitted");




    }

    return (

        <>


            <h1>Form2</h1>
            <form onSubmit={FormHandler} method="POST">

                <input type="text" name="subject" id="subject" onChange={(subject => { setSubject(subject.target.value) })} value={subject} />

                <input type="email" name="email" id="email" onChange={(email => { setEmail(email.target.value) })} value={email} />

                <input type="message" name="message" id="message" onChange={(message => { setMessage(message.target.value) })} value={message} />
                <input type="submit" value=" submit" />


            </form>






        </>





    )








}

export default Form2