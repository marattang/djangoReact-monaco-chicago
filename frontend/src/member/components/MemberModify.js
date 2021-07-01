import React, {useState} from 'react'
// import './Signup.css'
import {memberModify} from 'api'

const MemberModify = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    name: '',
    email: ''
  })

  const {username, password, name, email} = userInfo

  const handleSubmit = e => {
    e.preventDefault()
    alert(`전송 클릭 ${JSON.stringify({...userInfo})}`)
    memberModify({...userInfo})
    .then(res => {
      alert(`수정 완료 : ${res.data.result}`)
      // history.push('login') // 회원가입 성공하면 로그인으로 넘어가라. 
    })
    .catch(err => {
      alert( `회원가입 실패 : ${err}`)
    })
    
  }

  const handleClick = e => {
    e.preventDefault()
    alert('취소 클릭')
  }

  const handleChange = e => {
    const { name, value } = e.target
    setUserInfo({
        ...userInfo,
        [name]: value
    })
  }


    return (<>
    <form onSubmit={handleSubmit} method="put" style={{border:"1px solid #ccc"}}>
  <div className="container">
    <h1>User Edit</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="username"><b>username</b></label>
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
      <button type="submit" className="signupbtn">save</button>
    </div>
  </div>
</form>
</>)
}

export default MemberModify