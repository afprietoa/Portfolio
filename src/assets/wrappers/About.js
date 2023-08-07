import styled from 'styled-components'

const Wrapper = styled.nav`
.single-page{
    background: var(--clr-primary-10);
    min-height: calc(100vh - 5rem);
}
.page-info{
    max-width: 700px;
    a{
        text-transform: uppercase;
        color: var(--clr-primary-5);
        transition: var(--transition);
        &:hover{
            color: var(--clr-primary-1);

        }
    }
}
`
export default Wrapper