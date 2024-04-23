import styled from 'styled-components'

const Wrapper = styled.nav`
.blogItem-wrap{
    background: var(--clr-grey-10);
 display: flex;
 flex-direction: column;
    
}
.blog-info{
  padding: 1.25rem 1.5rem;
}
.blogItem-cover{
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: 1rem;
}
.blogItem-wrap h3{
    margin: 0.5rem 0 1rem 0;
}
.blog-title {
  height: 2.5em; /* Set a fixed height */
  overflow: hidden; /* Hide overflow content */
  text-overflow: ellipsis; /* Add ellipsis for long text */
}
.blogItem-desc{
    position: relative;
    max-height: 50px;
    overflow: hidden;
    font-size: 0.8rem;
    padding-right: 0.6rem;
    color: #a9a9a9;
}
.blogItem-desc::before{
    position: absolute;
    content: "...";
    bottom: 0;
    right: 0;
}
.blogItem-wrap footer{
    display: flex;
    align-items: center;
    margin-top: 1rem ;
    justify-content: space-between;
}
.blogItem-link{
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
}
.blogItem-author{
    display: flex;
    align-items: center;
}
.blogItem-author img{
    width: 50px;
    height: 50px;
    border-radius:50%;
    object-fit: cover;
    margin-right: 0.5rem;
}
.blogItem-author p{
    font-size: 0.6rem;
    color: #a9a9a9;
    font-weight: 600;
}
`
export default Wrapper