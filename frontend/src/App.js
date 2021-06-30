import React from 'react'
import { Redirect, Route, Link, BrowserRouter as Router } from "react-router-dom"
import { Login, Signup, UserDetail, UserEdit,UserList  } from 'user'
import { PostWrite } from 'board'
import { Home, User , Item, Stock, Post} from 'templates'
import { Nav } from 'common'
import { todoReducer } from 'store'
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({todoReducer})

const App = () => {
  return (<div>
    <Router>
    <nav style={{width: '500px', margin:'0 auto'}}>
            <ol>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/user'>User</Link></li>
                <li><Link to='/item'>Item</Link></li>
                <li><Link to='/stock'>Stock</Link></li>
                <li><Link to='/post'>Post</Link></li>
            </ol>
    </nav>
      <Provider store = {createStore(rootReducer)}>
        <Nav/>
        <Route exact path='/home' component={Home}/>
        <Redirect exact from={'/'} to={'/home'}/>
        <Route exact path='/user' component={User}/>
        <Route exact path='/login-form' component={Login}/>
        <Route exact path='/signup-form' component={Signup}/>
        <Route exact path='/user-detail' component={UserDetail}/>
        <Route exact path='/user-edit' component={UserEdit}/>
        <Route exact path='/user-list' component={UserList}/>
        <Route exact path='/item' component={Item}/>
        <Route exact path='/stock' component={Stock}/>
        <Route exact path='/post' component={Post}/>
        <Route exact path='/post-write' component={PostWrite}/>
      </Provider>
    </Router>
  </div>)
}

export default App
