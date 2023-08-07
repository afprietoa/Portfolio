import styled from 'styled-components'

const Wrapper = styled.nav`
/*
=============== 
Sidebar
===============
*/
.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--clr-grey-10);
    z-index: 4;
    display: grid;
    /* align-items: center;
    justify-content: center; */
    place-items: center;
    transition: var(--transition);
    /* add later */
    transform: translateX(-100%);
}
.show-sidebar{
    transform: translateX(0);
}
.sidebar-links{
    text-align: center;
    a{
        font-size: 2rem;
        text-transform: capitalize;
        transition: var(--transition);
        color: var(--clr-grey-5);
        letter-spacing: var(--spacing);
        display: inline-block;
        margin-bottom: 1.5rem;

        &:hover{
            color: var(--clr-primary-5);
        }
    }
}
.social-icons{
    display: grid;
    margin-top: 3rem;
    width: 20rem;
    grid-template-columns: repeat(5, 1fr);
}
.social-icon{
    font-size:1.5rem;
    color: var(--clr-grey-1);
    transition: var(--transition);
    &:hover{
            color: var(--clr-primary-5);
    }
}
.close-btn{
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    background: transparent;
    border: transparent;
    transition: var(--transition);
    color: #bb2525;
    &:hover{
        color: #e66b6b;
    }
}

`
export default Wrapper