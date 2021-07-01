import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"

const MemberDetail = () => {
    return (<>
        <nav>
          <Router>
            <Link to='/'>home</Link><br/>
            <Link to='/'>blog</Link><br/>
            <Link to='/'>about me</Link><br/>
          </Router>
        </nav>

        <h1>첫번째 크기 헤드라인</h1>
        <h2>두번째 크기 헤드라인</h2>
        <h3>세번째 크기 헤드라인</h3>
        <h4>네번째 크기 헤드라인</h4>
        <h5>다섯번째 크기 헤드라인</h5>
        <p>문단은 p로 쓰세요. p는 아마도 Paragraph의 앞글자를 따온 것이겠죠?</p>
        
        <hr/>
        <img sre="./images/stay_funky.jpg" width="600px"/>
        </>)
}
export default MemberDetail