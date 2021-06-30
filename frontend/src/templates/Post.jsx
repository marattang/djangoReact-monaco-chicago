import React from 'react'
import {PostMenu as Menu} from '../common/Menu'

const Post = ({children}) => (<>
    <h1>Post</h1>
    <Menu/>
    {children}
</>
)
export default Post