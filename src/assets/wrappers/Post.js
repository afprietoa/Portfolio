import styled from 'styled-components'

const Wrapper = styled.nav`
.blog-hero{
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
Blog
===============
*/
.blog-wrap{
    max-width: 64vw;
    margin: 0 auto;
}

.blog-goBack{
  margin: 2rem;
}
.blog-wrap header{
    text-align: center;
}
.blog-date{
    font-size: 0.8rem;
    color: #a9a9a9;
    font-weight: 500;
}

.blog-wrap img{
    width: 100%;
}
.blog-subCategory{
    display: flex;
    justify-content: center;
}
.blog-subCategory > div {
    margin: 1rem;
}
.blog-desc{
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
}

/*
=============== 
Contact
===============
*/
.contact {
  background: var(--clr-primary-5);
}
.contact-title {
  color: var(--clr-white);
}
.contact-title p {
  color: var(--clr-primary-8);
}
.contact-form {
  display: flex;
  max-width: 28rem;
}
.form-control {
  flex: 1 1 auto;
  color: var(--clr-grey-5);
}
.form-control,
.btn-submit {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 300;
  letter-spacing: var(--spacing);
  background: var(--clr-white);
  text-transform: capitalize;
  border: transparent;
}
.form-control::placeholder {
  color: inherit;
}
.btn-submit {
  font-family: var(--ff-primary);
  margin-left: 0.5rem;
  background: var(--clr-primary-8);
  color: var(--clr-primary-1);
  cursor: pointer;
  transition: var(--transition);
}
.btn-submit:hover {
  background: var(--clr-primary-1);
  color: var(--clr-primary-5);
}
@media screen and (min-width: 992px) {
  .contact-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .contact-form {
    align-self: flex-start;
    flex: 1 1 auto;
    max-width: 100%;
    padding-left: 2rem;
  }
}
.header-post{
  padding: 30px;
  text-align: center;
  background: #f1f5f8;
  margin: 0 auto;
  width: 100%;
  padding: 0.6em 0.6rem;
  margin-bottom: 2.5rem;  
}
.blog-title{
    font-size: 3.2rem;
}
.card-post{
  background: #f1f5f8;
  padding: 20px;
  margin-bottom: 1.5rem;
}
.card-post .underline {
    margin-left: 0;
    margin-right: 0;
}
p {
  margin: 0 auto;
  width: 92%;
}

.card-title-post{
    text-align: left;
    margin-bottom: 0;
}
.card-text-post{
 color: var(--clr-grey-5);
 font-size: 1.25rem;
 padding-top: 0;
 text-align: justify;
}
pre {
  background: var(--grey-200);
  color: white;
  overflow: auto;
}
.pre-code{
    padding: 1rem 3rem;
}
.code-post-container{
    padding: 1.5rem 2rem;
}


ul {
  margin: 0 auto;
  padding-top: 0.5em;
  width: 80%;
}

ul > li {
  padding-top: 0.5em;
 
}


`
export default Wrapper