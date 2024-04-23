import React from 'react'
import { Link } from 'react-router-dom';
import Chip from './Chip.jsx'
import Wrapper from '../assets/wrappers/BlogItem'
const BlogItem = ({blog:{id, description, title, createdAt, shortDesc, authorName, authorAvatar, category, cover}}) => {
    return (
        <Wrapper>
                    <div className="blogItem-wrap">
            <img src={cover} alt="cover" className="blogItem-cover"/>
            
            <div className='blog-info'>
                <Chip label={category}/>
                <div className='blog-title'>
                <h3>{title}</h3>
                </div>
            <p className="blogItem-desc">{shortDesc}</p>
            <footer>
                <div className="blogItem-author">
                    <img src={authorAvatar} alt="avatar" />
                    <div>
                        <h6>{authorName}</h6>
                        <p>{createdAt}</p>
                    </div>
                </div>
                <Link className="blogItem-link" to={`/post/${id}`}>
                <i class="fas fa-chevron-circle-right"></i>
                </Link>
            </footer>
            </div>

        </div>
        </Wrapper>

    )
}
export default BlogItem