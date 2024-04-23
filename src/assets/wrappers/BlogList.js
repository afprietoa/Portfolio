import styled from 'styled-components'

const Wrapper = styled.nav`
.blogList-wrap{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
}

@media (max-width: 768px){
    .blogList-wrap{
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px){
    .blogList-wrap{
        grid-template-columns: repeat(1, 1fr);
    }
}
`
export default Wrapper