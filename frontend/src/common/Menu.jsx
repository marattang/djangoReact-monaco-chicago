import React from 'react'
import {Link} from 'react-router-dom'

export const UserMenu = () => (<nav>
    <ol>
        <li><Link to="/signup-form">회원가입</Link></li>
        <li><Link to="/login-form">로그인</Link></li>
        <li><Link to="/user-detail">회원정보상세</Link></li>
        <li><Link to="/user-Edit">회원정보수정</Link></li>
        <li><Link to="/user-remove">회원정보삭제</Link></li>
    </ol>
</nav>

)

export const ItemMenu = () => (<nav>
    <ol>
        <li><Link to="/item-list">아이템 목록</Link></li>
        <li><Link to="/item-register">아이템 등록</Link></li>
        <li><Link to="/item-detail">아이템 상세</Link></li>
        <li><Link to="/item-modify">아이템 삭제</Link></li>
    </ol>
</nav>

)

export const ArticleMenu = () => (<nav>
    <ol>
        <li><Link to="/article-from">게시글 목록</Link></li>
        <li><Link to="/article-write">게시글 쓰기</Link></li>
        <li><Link to="/article-detail">게시글 읽기</Link></li>
        <li><Link to="/article-modify">회원정보쓰기</Link></li>
    </ol>
</nav>

)

export const TodoMenu = () => (
    <ol>
        {/* <li><Link to="/todo_work">할일 목록 & 입력</Link></li> */}
        <li><Link to="/todo_list">할일 목록</Link></li> 
        <li><Link to="/todo_input">할일 입력</Link></li>
    </ol>
)
