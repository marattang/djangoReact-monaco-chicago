import React from 'react'
import {BoardMenu as Menu} from '../common/Menu'

const Board = ({children}) => (<>
    <h1>Board</h1>
    <Menu/>
    {children}
</>
)
export default Board