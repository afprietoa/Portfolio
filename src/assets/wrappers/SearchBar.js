import styled from 'styled-components'

const Wrapper = styled.nav`
.searchBar-wrap{
    background-color: #f0f0f0;
    width: fit-content;
    margin: 2.5rem auto 4rem auto;
    padding: 0.5rem;
    border-radius: 5px;
}

.searchBar-wrap form{
    display: flex;
    align-items: center;
}

.searchBar-wrap input{
    background-color: #f0f0f0;
    outline: none;
    border: none;
}

.searchBar-wrap span{
    padding-right: 0.5rem;
    cursor: pointer;
}

.searchBar-wrap button{
    outline: none;
    border: none;
    padding: 0.3rem 1rem;
    border-radius: 5px;
    background: var(--clr-primary-5);
    color: #fff;
}
`
export default Wrapper