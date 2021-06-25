import React from 'react'
import {TodoMenu as Menu} from '../common'

const Todo = ({children}) => (<>
    <h1>Todo</h1>
    <Menu/>
    {children}
    </>
)
export default Todo