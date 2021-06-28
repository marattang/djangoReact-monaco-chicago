import React,{useState} from 'react'
// import './Signup.css'

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    name: '',
    email: ''
  })

  const {username, password, name, email} = userInfo

  const handleChange = e => {
    const { name, value } = e.target
    setUserInfo({
        ...userInfo,
        [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(`전송 클릭 ${JSON.stringify({...userInfo})}`)
  }

  
  const handleClick = e => {
    e.preventDefault()
    alert('취소 클릭')
  }


    return (<>
    <form onSubmit={handleSubmit} method="post" style={{border:"1px solid #ccc"}}>
  <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="username"><b>Email</b></label>
    <input type="text" placeholder="Enter ID" name="username" onChange={handleChange} value={username}/>

    <label for="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange} value={password}/>

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Your Name" name="name" required onChange={handleChange} value={name}/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required onChange={handleChange} value={email}/>

    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" className="cancelbtn" onClick={handleClick}>Cancel</button>
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
</>)
}

export default SignUp