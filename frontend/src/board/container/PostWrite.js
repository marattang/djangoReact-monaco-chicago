import React,{useState} from 'react'
// import './PostWrite.css'
import {boardSubmit} from 'api'
import {useHistory} from 'react-router'
import {Button} from '@material-ui/core'

const PostWrite = () => {
     const [post, setPost] = useState({
          title: '',
          content: ''
     })

     const {title, content} = post

     const handleSubmit = e => {
          e.preventDefault()
          alert(`전송 클릭 ${JSON.stringify({...post})}`)
          boardSubmit({...post})
          .then(res => {
               alert(`게시물 등록 완료 : ${res.data.result}`)
          })
          .catch(err => {
               alert(`게시물 등록 실패 : ${err}`)
          })
     }

     const handleChange = e => {
          const {name, value} = e.target
          setPost({
               ...post,
               [name]:value
          })
     }

     const handleClick = e => {
          e.preventDefault()
          alert('취소 클릭')
     }

    return (<>
    <form onSubmit={handleSubmit} method="post" style={{border:"1px solid #ccc"}}>
  <div className="container">
    <h1>게시글 쓰기</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="title"><b>title</b></label>
    <input type="text" placeholder="Enter title" name="title" onChange={handleChange} value={title}/>

    <label for="content"><b>content</b></label>
    <input type="text" placeholder="Enter content" name="content" required onChange={handleChange} value={content}/>


    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div class="clearfix">
      <Button type="button" className="cancelbtn" onClick={handleClick}>Cancel</Button>
      <Button type="submit" className="submitbtn">submit</Button>
    </div>
  </div>
</form>
</>)
}

export default PostWrite