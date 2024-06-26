import styled from 'styled-components'

const Wrapper = styled.nav`
.contact-hero{
    display: grid;
    place-items: center;
    height: 40vh;
    background: var(--clr-primary-10);
    .section-title{
        margin-bottom: 0;
    }
}
/*
=============== 
Contact
===============
*/
.contact {
    background: var(--clr-white);
}
.contact-icon{
  padding-right: 0.5rem;
  display: inline-block;
  
}
.contact-form,
.contact-info {
  margin: 1rem 0;
}
.contact-item {
  margin-bottom: 1.75rem;
}
.contact-title {
  font-size: 1.25rem;
  color: var(--clr-primary-5);
  font-weight: 400;
}
.contact-text {
  text-transform: uppercase;
}
.contact-form {
  
  background: var(--clr-grey-10);

  border-radius: var(--radius);
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  max-width: 35rem;
}
.contact-form:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.contact-form h3 {
  padding-top: 1.25rem;
  color: var(--clr-grey-5);
}
.form-group {
  padding: 1rem 1.5rem;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  margin-bottom: 1.25rem;
  background: var(--clr-white);
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: var(--spacing);
}
.form-control::placeholder {
  font-family: var(--ff-primary);
  color: var(--clr-grey-1);
  text-transform: uppercase;
  letter-spacing: var(--spacing);
}
.submit-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
@media screen and (min-width: 992px) {
  .contact-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

`
export default Wrapper