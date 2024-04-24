
import React, { useState } from 'react'

function Login() {

    const [myStyle, setmyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })

    const [btncolor, setBtnColor] = useState({
        color: "black",
        backgroundColor: "white"
    })

    const [BtnText, setBtnText] = useState(" Dark Theme")

    const toggleStyle = () => {

        if (myStyle.color === 'black') {

            setmyStyle({
                color: "white",
                backgroundColor: "black"
            })
            setBtnColor({
                color: "white",
                backgroundColor: "black",
                border: "2px solid white"
            })

            setBtnText(" Light Theme")

        }
        else {
            setmyStyle({
                color: "black",
                backgroundColor: "white"

            })
            setBtnColor({
                color: "black",
                backgroundColor: "white"
            })
            setBtnText(" Dark Theme")
        }

    }

    return (
        <>
            <div className='login my-5' >
                <section className="my_shadow container text-center" style={myStyle}>
                    <h1 className='fw-bolder display-5 pt-4 my-4'>Binayr Art By Ahrar </h1>
                    <h3 className='fw-bolder display-5 pt-4 my-4 fst-italic' >LOGIN </h3>
                    <h5>or</h5>
                    <div className="icons d-flex justify-content-center my-4">
                        <i className="fa fa-brands fa-facebook px-3"></i>
                        <i className="fa fa-brands fa-instagram px-3"></i>
                        <i className="fa fa-brands fa-linkedin px-3"></i>
                        <i className="fa fa-brands fa-twitter px-3"></i>

                    </div>

                    <form>
                        <div className="mb-4">
                            <label for="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-4">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <button type="submit" style={btncolor} className="btn btn-outline-primary px-3 mb-3 rounded-pill">Login <i className="fa fa-sign-in " ></i> </button>
                    </form>
                    <hr className='w-75 mx-auto ' />
                    <button type='button' className="btn btn-primary mb-3" onClick={toggleStyle}> {BtnText} </button>
                </section>
            </div>
        </>
    )
}

export default Login