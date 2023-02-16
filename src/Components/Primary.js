import React, { useState } from 'react'
import { FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa';
// import Confetti from './Confetti';


// import f from './f';
const Primary = () => {

    const [name, setName] = useState("");
    // const [fullName, setFullName] = useState();

    const handleEvent = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        document.getElementById('change').innerHTML = `<div class='innerHTML'>Wish you a very Happy New Year ${name} </div>`;
        document.getElementById('form').style.display = "none";
        // sharingContent = sharingContent + `${name},You can view from http://localhost:3000?un=${name}`;
        // <h1 className='Aftersubmit'>Hello {fullName}</h1>
        // alert(`The name you entered was successfully:${fullName}`)
        // setFullName(name);
        // const url = window.location.href
        // const param = url.split('/')[1]
        // const query = new URLSearchParams(param)
        // const value = query.get(name)
        // if (value != undefined) {
        //     document.getElementById('change').innerHTML = `<div class='h1'> 2023 Wish you a very Happy New Year ${value} </div>`;
        // }
        // else {
        //     // document.getElementById('change').innerHTML = `<div class='h1'> 2023 Wish you a very Happy New Year ${value} </div>`;
        // }
        const address = document.location.href + document.location.pathname
        console.log(window.location.replace(address));
    }




    // const sharingContent = '2023 Wish you a very Happy New Year '

    // const f = document.getElementById('foo');
    // document.addEventListener('onClick', (ev) => {
    //     f.style.transform = `translateY(${ev.clientY - 25}px)`;
    //     f.style.transform += `translateX(${ev.clientX - 25}px)`;
    // }, false);





    return (
        // <div>
        <>
            <div className='nav'>
                {/* <img className='gif' src='./.'></img> */}
                {/* <img src={require("../Material/kelly-sikkema-PXl_S152jNM-unsplash.jpg")} alt="" /> */}

                <form id='change' onSubmit={handleSubmit}>

                    {/* <div id="foo" className="ball"> */}

                    <h1 className='h1'>Happy New Year</h1>
                    <div id='form'>
                        <label htmlFor="">
                            <input type="text" placeholder='Enter Your Name' onChange={handleEvent} />
                        </label>
                        <input type="submit" />
                    </div>

                    {/* </div> */}
                    {/* <button onClick={handleSubmit} >Submit</button> */}
                    {/* </div> */}

                </form >

                <div className='icons'>
                    <a id='whatsapp' href="https://wa.me/?link=" target="_blank"><FaWhatsapp /></a>
                    {/* <a href="https://web.whatsapp.com/send?text=www.google.com" data-action="share/whatsapp/share">Share via Whatsapp web</a> */}
                    <a id='facebook' href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com" target="_blank"><FaFacebook /></a>
                    <a id='telegram' href="https://telegram.me/share/url?url=<URL>&text=Hi%20Anurag" target="_blank"><FaTelegram /></a>
                </div >
                <h1 id='year'>2<span className='span'>0</span>2<span className='span'>3</span></h1>



                {/* </div> */}
                {/* <f /> */}

            </div >

            {/* <Confetti /> */}

        </>
    );
}



export default Primary;
