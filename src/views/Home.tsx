import React from 'react'
// import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
import Logo from '../images/Logo/LoggaNetOnNet2.png'
// import { UserActions } from '../state'

const Home = () => {
  // const dispatch = useDispatch()
  // const IsAdmin = useSelector((state:State) => state.UserReducer.Admin)
  
  // const { CheckIfLoggedIn } = bindActionCreators(UserActions, dispatch)

  // const test = () => {
  //   CheckIfLoggedIn()
  // }
 

  return (
    <div className="Home ">
          {/* <button onClick={test}>gasgasdg</button> */}
      <div className="container fullpage d-flex align-items-center justify-content-center">
        <div className="text-center mt-5"> 
          <h1>Välkommen till</h1>
          <img src={Logo} alt="" />
        </div>
          {/* <button className="btn btn-dark" onClick={test} >Gå till webbShoppen</button> */}
      </div>  
    </div>
  )
}

export default Home
