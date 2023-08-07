import styled from 'styled-components'

const Wrapper = styled.nav`
/*
=============== 
Footer
===============
*/
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
    |color: var(--clr-primary-5);
  }
}

.footer{
    display: grid;
    place-items: center;
    padding-bottom: 2rem;
    background: #222;
    p{
        font-size: 1.25rem;
        text-transform: capitalize;
    }
    .social-icons{
        margin-bottom: 2rem;
    }
    .social-icon{
        color: var(--clr-primary-5);
        &:hover{
            color: var(--clr-primary-10);
        }
    }
}

`
export default Wrapper