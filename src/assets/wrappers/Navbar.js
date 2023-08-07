import styled from 'styled-components'

const Wrapper = styled.nav`
/*
=============== 
Navbar
===============
*/
.nav-links{
    display: none;
}
.nav{
    height: 5rem;
    padding: 1rem;
    display: grid;
    align-items: center;
    transition: var(--transition);
}
.nav-center{
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
}
.nav-header{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}
.nav-btn{
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    font-size: 2rem;
    cursor: pointer;
    /* justify-content: space-between*/
    justify-self: end;
}
.navbar-fixed{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--crl-white);
    z-index: 2;
    box-shadow: var(--light-shadow);
}
@media (min-width: 768px) {
    .nav{
        background: var(--clr-primary-10);
    }
    .nav-btn{
        display: none;
    }
    .nav-links{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        column-gap: 2rem;

        a{
            text-transform: capitalize;
            color: var(--clr-grey-1);
            font-weight: bold;
            letter-spacing: var(--spacing);
            transition: var(--transition);

            &:hover{
                color: var(--clr-primary-5);
            }
        }
    }
    .nav-center{
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
    }

}
`
export default Wrapper