import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { State, UserActions } from '../state';

const Register = () => {
  const dispatch = useDispatch();
  const { registerUser } = bindActionCreators(UserActions, dispatch)

  const RegisterErrorMessage = useSelector((state:State) => state.UserReducer.RegisterError)

  let [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  let [adress, setAdress] = useState({
    adress: "",
    zip: "",
    city: "",
  })
  let [errorMsg, setErrorMsg] = useState("")

  const handleFirstName = (e:any) => {
    setUser({
      ...user,
      firstName: e.target.value
    })
  }
  const handleLastName = (e:any) => {
    setUser({
      ...user,
      lastName: e.target.value
    })
  }
  const handleEmail = (e:any) => {
    setUser({
      ...user,
      email: e.target.value
    })
  }
  const handlePassword = (e:any) => {
    setUser({
      ...user,
      password: e.target.value
    })
  }
  const handleAdress = (e:any) => {
    setAdress({
      ...adress,
      adress: e.target.value
    })
  }
  const handleZip = (e:any) => {
    setAdress({
      ...adress,
      zip: e.target.value
    })
  }
  const handleCity = (e:any) => {
    setAdress({
      ...adress,
      city: e.target.value
    })
  }


  const submit = (e:any) => {
    e.preventDefault();
    let newAdress = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      address: adress.adress,
      zip: adress.zip,
      city: adress.city,
    }
      /* eslint-disable */
    let validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      /* eslint-disable */
    let validatePassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";


    if(newAdress.firstName !== "" && newAdress.lastName !== "" && newAdress.address !== "" &&  newAdress.zip !== "" &&  newAdress.city !== "" ) {
      if(newAdress.email.match(validateEmail)) {
        // console.log("Eposten är okej")
        if(newAdress.password.match(validatePassword)){
          registerUser(newAdress);
          setErrorMsg("");
        } else {
          // console.log("Du måste ha ett giltigt lösenord vänligen ändra det")
          setErrorMsg("Du måste ha ett giltigt lösenord vänligen ändra det")
        }
      } else {
        setErrorMsg("Ogiltig Epostadress")
      }
    } else {
      setErrorMsg("Alla fälten måste vara ifylda")
    }
  }




  return (
    <div className="Register container fullpage">
      <div className="formHolder border">
        <h1>Registrear dig här!</h1>
      <form onSubmit={submit}>
        <div className="row">          
          <div className="col-6">
            <label htmlFor="firstName" className="form-label col-6">Förnamn</label>
            <input type="text" className="form-control" id="firstName" value={user.firstName} onChange={handleFirstName} />
          </div>
          <div className="col-6">
            <label htmlFor="lastName" className="form-label">Efternamn</label>
            <input type="text" className="form-control" id="lastName" value={user.lastName} onChange={handleLastName}/>
          </div>
        </div>

          <div>
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" value={user.email} onChange={handleEmail}/>
          </div>
          <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={user.password} onChange={handlePassword}/>
          </div>



          <div className="row">
            <div className="col-4">
              <label htmlFor="adress" className="form-label">Address</label>
              <input type="text" className="form-control" id="adress" value={adress.adress} onChange={handleAdress}/>
            </div>
            <div className="col-3">
              <label htmlFor="zip" className="form-label">Post Nr</label>
              <input type="number" className="form-control" id="zip" value={adress.zip} onChange={handleZip}/>
            </div>
            <div className="col-5">
              <label htmlFor="city" className="form-label">Stad</label>
              <input type="text" className="form-control" id="city" value={adress.city} onChange={handleCity}/>
            </div>
          </div>

          <div className="d-flex button-holder">
            <button type="submit" className="btn btn-primary">Registrera dig</button>
            <p className="mt-2">Har du redan ett konto Klicka <NavLink to="/Login">  här! </NavLink> </p>
          </div>
          <span className="ErrorMsg"> { errorMsg } { RegisterErrorMessage } </span>

        </form>

      </div>
    </div>
  )
}

export default Register
