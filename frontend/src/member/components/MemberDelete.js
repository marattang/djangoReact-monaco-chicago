import { memberDelete } from 'api'
import {React, useState} from 'react'
// import './style/MemberLogin'

const MemberDelete = () => {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    })

    const {username, password} = `loginInfo`

    const handleSubmit = e => {
        e.preventDefault()
        alert(`전송 클릭 ${JSON.stringify({...loginInfo})}`)
        memberDelete({...loginInfo})
        .then(res => {
            alert(`삭제 성공 : ${res.data.result}`)
        })
        .catch(err => {
            alert(`삭제 실패 : ${err}`)
        })
    }

    const handleClick = e=> {
        e.preventDefault()
        alert('취소 클릭')
    }

    const handleChange = e=> {
        const {name, value} = e.target
        setLoginInfo({
            ...loginInfo,
            [name]: value
        })
    }

    return (<>
    <h2>Login Form</h2>
    <form onSubmit={handleSubmit} method="GET">
    <div className="imgcontainer">
        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar"/>
    </div>
    <div className="container">
        <label labelFor="username"><b>username</b></label>
        <input type="text" placeholder="Enter Username" name="username" value={username} required onChange={handleChange}/>

        <label labelFor="psw"><b>password</b></label>
        <input type="password" placeholder="Enter Password" name="password" value={password} required onChange={handleChange}/>
            
        <button type="submit" className="loginbtn">Login</button>
        <label>
        <input type="checkbox" checked="checked" name="remember"/> Remember me
        </label>
    </div>
    <div className="container" style={{backgroundColor:"#f1f1f1"}}>
        <button type="button" className="cancelbtn" onClick={handleClick}>Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
    </form>
    </>
    )
}
export default MemberDelete