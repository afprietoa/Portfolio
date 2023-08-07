import styled from 'styled-components'

const Wrapper = styled.nav`
.projects-hero{
    display: grid;
    place-items: center;
    height: 40vh;
    background: var(--clr-primary-10);
    .section-title{
        margin-bottom: 0;
    }
}
.single-project{
    background: var(--clr-grey-10);
    border-radius: var(--radius);
}
.project-container{
    position: relative;
    img{
        border-top-left-radius: var(--radius);
        border-top-right-radius: var(--radius);
    }
}
.project-icon{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    font-size: 1.75rem;
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
    border-radius: 50%;
    border: 0.375rem solid var(--clr-grey-10);
}
.project-details{
    padding: 2rem 1.5rem;
}
.project-footer{
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: var(--clr-primary-5);
    a{
        transition: var(--transition);
        justify-self: end;
        &:hover{
            color: var(--clr-primary-10);
        }
    }
}
.projects-page-center{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    grid-gap: 3rem 1rem;
}
`
export default Wrapper