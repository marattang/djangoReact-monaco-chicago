import React from 'react'
import {ArticleMenu as Menu} from '../common/Menu'

const Article = ({children}) => (<>
    <h1>Article</h1>
    <Menu/>
    {children}
</>
)
export default Article