import styled from 'styled-components'


const Wrapper = styled.nav`
/*
=============== 
Hero
===============
*/
/* underline added to globals */
.hero-img{
  display: none;
}

.hero{
  background: var(--clr-primary-10);
  .underline{
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
}
.hero-center{
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
}
.hero-title-mod{
  color: var(--clr-primary-5);
}
.hero-info h4{
  color: var(--clr-grey-5);
}
.hero-icons{
  justify-content: start;
}
.hero-btn{
  margin-top: 1.25rem;
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
    |color: var(--clr-primary-5);
  }
}

.hero-photo{
  max-width: 25rem;
  max-height: 30rem;
  object-fit: cover;
  border-radius: var(--radius);
  position: relative;
}
/*
=============== 
Skills
===============
*/
.clearfix::after,
.clearfix::before {
  content: "";
  clear: both;
  display: table;
}
.skills {
  background: var(--clr-primary-9);

}
.skill {
  padding: 2.5rem 0;
  text-align: center;
  transition: var(--transition);

  &:hover{
    background: var(--clr-white);
  box-shadow: 0 2px var(--clr-primary-5);
    .skill-icon{
      transform: translateY(-5px);
    }
  }

}
.skill-icon {
  font-size: 4.5rem;
  margin-bottom: 1.25rem;
  transition: var(--transition);
  display: inline-block;
  color: var(--clr-primary-5);
}
.sills .sill .skill-text{
  color: var(--clr-grey-12);
  max-width: 17rem;
  margin: 0 auto;
}
@media screen and (min-width: 576px) {
  .skill {
    float: left;
    width: 50%;
  }
}
@media screen and (min-width: 1200px) {
  .skill {
    width: 25%;
  }
}


/*
=============== 
About
===============
*/
/* section title added to globals */
.about-title{
  text-align: left;
  margin-bottom: 2rem;
  .underline{
    margin-left: 0;
  }
}
.about-center{
  display: grid;
  gap: 3rem 2rem;
}
.about-img{
  justify-self: center;
}

/*
=============== 
Products
===============
*/
.products {
  background: var(--clr-grey-10);
}
.products article {
  padding: 2rem 0;
}

.product-text {
  color: var(--clr-grey-5);
  max-width: 26rem;
}
.product {
  margin-bottom: 2rem;
}
.product-img {
  border-radius: var(--radius);
  margin-bottom: 2rem;
  height: 17rem;
  object-fit: cover;
}
.product-title {
  color: var(--clr-primary);
  margin-bottom: 2rem;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .product {
    float: left;
    width: 50%;
    padding-right: 2rem;
  }
}
@media screen and (min-width: 992px) {
  .product {
    width: 33.3%;
  }
}
@media screen and (min-width: 1200px) {
  .products-info {
    float: left;
    width: 30%;
  }
  .products-inventory {
    float: left;
    width: 70%;
  }
  .product {
    margin-bottom: 0;
    padding: 0 1rem;
  }
}


/*
=============== 
Services
===============
*/
.service{
  background: var(--clr-white);
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: var(--radius);
  text-align: center;
  transition: var(--transition);
  .underline{
    width: 3rem;
    height: 0.12rem;
    transition: var(--transition);
  }
  p{
    transition: var(--trnasition);
  }
  &:hover{
    background: var(--clr-primary-5);
    color: var(--clr-white);
    p{
        color: var(--clr-white);
    }
    .underline{
        background: var(--clr-white);
    }
  }
}
.service-icon{
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

/*
=============== 
Jobs
===============
*/

.jobs-center {
  width: 80vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
.btn-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
}
.job-btn {
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: var(--spacing);
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;
}
.job-btn:hover {
  color: var(--clr-primary-5);
  box-shadow: 0 2px var(--clr-primary-5);
}
.active-btn {
  color: var(--clr-primary-5);
  box-shadow: 0 2px var(--clr-primary-5);
}
.job-info {
  /* min-height: 420px; */
}
.job-info h3 {
  font-weight: 400;
}
.job-info h4 {
  text-transform: uppercase;
  color: var(--clr-grey-5);
  background: var(--clr-grey-9);
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius);
}
.job-date {
  letter-spacing: var(--spacing);
}
.job-desc {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;
}
.job-desc p {
  margin-bottom: 0;
  color: var(--clr-grey-3);
}
.job-icon {
  color: var(--clr-primary-5);
}
@media screen and (min-width: 992px) {
  .jobs-center {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
  .btn-container {
    flex-direction: column;
    justify-content: flex-start;
  }
  .job-btn {
    margin-bottom: 1rem;
  }
  .active-btn {
    box-shadow: -2px 0 var(--clr-primary-5);
  }
  .job-btn:hover {
    box-shadow: -2px 0 var(--clr-primary-5);
  }
}



/* small screen layout setup */
/* bg-grey in globals */


/*
=============== 
Projects
===============
*/
.projects {
  background: var(--clr-grey-10);
}
.project {
  display: grid;
  margin-bottom: 4rem;
}
.project-img-wrapper {
  position: relative;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 19rem;
  overflow: hidden; /* Importante para mantener el borde redondeado en el contenedor */
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Asegura que la imagen cubra completamente el contenedor */
}
.projects-text{
  width: 85vw;
  max-width: 30rem;
  margin: 0 auto;
}

.project-img-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
  opacity: 0.85;
  transition: var(--transition);
}

.project:hover .project-img-wrapper::after {
  opacity: 0;
}
.project-info {
  background: var(--clr-white);
  padding: 1rem 2rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
.project-number {
  display: inline-block;
  font-size: 1.25rem;
  color: var(--clr-primary-5);
  margin-bottom: 0.75rem;
}
.project-info h3 {
  font-weight: 500;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}
.project-desc {
  word-spacing: 15px;
  color: var(--clr-grey-3);
}
.project-stack {
  margin-bottom: 1rem;
}
.project-stack span,
.about-stack span {
  display: inline-block;
  background: var(--clr-grey-9);
  color: var(--clr-grey-5);
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.85rem;
}
.about-stack span {
  margin-top: 0.5rem;
}
.project-icon {
  color: var(--clr-primary-5);
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: var(--transition);
}
.project-icon:hover {
  color: var(--clr-primary-1);
}
@media screen and (min-width: 576px) {
  .project-img-wrapper,.project-img {
    height: 19rem;
  }
}
@media screen and (min-width: 768px) {
  .project-img-wrapper,.project-img {
    height: 22rem;
  }
}
@media screen and (min-width: 992px) {
  .project {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }
  .project-img-wrapper {
    grid-column: 1 / span 8;
    /* grid-column-end: 8; */
    grid-row: 1 / 1;
    height: 30rem;
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
  }
  .project-info {
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);

    z-index: 1;
    grid-column: 5 /12;
    grid-row: 1 / 1;
  }
  .project:nth-of-type(even) .project-img-wrapper {
    grid-column: 5 / -1;
    grid-row: 1 / 1;
  }
  .project:nth-of-type(even) .project-info {
    grid-column: 2 / span 7;
    grid-row: 1 / 1;
    text-align: left;
  }
}

/*
=============== 
Connect
===============
*/
.connects {
  background: var(--clr-primary-10);
}
.connect {
  text-align: center;
  margin-bottom: 3rem;
}
.connect-icon {
  background: var(--clr-primary-5);
  color: var(--clr-primary-1);
  padding: 0.5rem;
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.connect-text {
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (min-width: 576px) {
  .connects-center {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .connect {
    flex: 0 0 calc(50% - 1rem);
    margin-bottom: 1rem;
  }
}
@media screen and (min-width: 992px) {
  .connect {
    flex: 0 0 calc(33.333% - 1rem);
  }
}
@media screen and (min-width: 1170px) {
  .connect {
    display: flex;
    text-align: left;
  }
  .connect-icon {
    align-self: start;
  }
  .connect-info {
    padding-left: 1rem;
  }
  .connect-title {
    margin-bottom: 0.5rem;
  }
}
/*
=============== 
Question
===============
*/
.container {
  width: 90vw;
  margin: 5rem auto;
  border-radius: var(--radius);
  padding: 2.5rem;
  max-width: 800px;
  background: var(--clr-white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-3);

}

.container h1 {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--grey-700);
}

.question {
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
}

.question .underline{
  margin-left: 0;
  margin-right: 0;
}

.question p {
  color: var(--grey-500);
  line-height: 2;
  margin-top: 1rem;
}

.question header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.question h5 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--grey-700);
}

.question-btn {
  background: var(--clr-primary-5);
  border: none;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--white);
  cursor: pointer;
  align-self: flex-start;
  min-width: 2rem;
  font-size: 1.5rem;
}
.timeline-icon-btn{
  color: var(--clr-white);
}
/*
=============== 
Timeline
===============
*/
.timeline{
  background: var(--clr-grey-10);
}
.timeline-center{
  width: 80vw;
  max-width: 40rem;
}
.timeline-item{
  border-top: 2px dashed var(--clr-primary-5);
  margin:0;
  padding: 4rem 2rem;
  position: relative;
  &:nth-child(even){
    border-left: 2px dashed var(--clr-primary-5);
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    margin-right: 2rem;
    padding-right: 0;
    .number{
      left: 0;
    }
  }
  &:nth-child(odd){
    border-right: 2px dashed var(--clr-primary-5);
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    margin-left: 2rem;
    padding-left: 0;
    .number{
      right: 0;
      transform: translate(50%, -50%);
    }
  }
  &:first-child{
    border-top: 0;
    border-top-right-radius: 0;
  }
  &:last-child{
    border-bottom-left-radius: 0;
  }
}
.number{
  position:absolute;
  top:50%;
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  margin-bottom: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: var(--clr-primary-5);
  color: var(--clr-primary-1);
  font-weight: bold;
}
.timeline p{
  margin-bottom:0;
}


/*
=============== 
Blog
===============
*/
.blog{
  background: var(--clr-white);
}
.card{
  height: 27rem;
  position: relative;
  /* talk later */
  perspective: 1500px;
  &:hover{
    .card-front{
      transform: rotateY(-180deg);
    }
    .card-back{
      transform: rotateY(0);
    }
  }
}
.card-info{
  padding: 1.5rem 1rem;
}
.card-side{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height:100%;
  transition: all 2s linear;
  backface-visibility: hidden;
}
.blog-info{
  padding: 1.25rem 1.5rem;
}
.card-front{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: var(--clr-grey-10);
  img{
    height: 13rem;
    object-fit: cover;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }
}
.card-back{
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  transform: rotateY(180deg);
}
.card-footer{
  padding-top: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  img{
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 50%;
  }
  p{
    margin-bottom: 0;
    text-transform: uppercase;
    justify-self: end;
    color: var(--clr-primary-5);
    font-size: 0.85rem;
  }
}
.blog-center{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(330px, 1fr));
  grid-gap: 3rem 1rem;
}

@media (min-width:676px){
/*
=============== 
Services
===============
*/
  .services-center{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
  /*
=============== 
Projects
===============
*/
.projects-center{
    display: grid;
    grid-template-columns: 1fr, 1fr;
    column-gap: 2rem;
}
}
@media (min-width:768px){
  /*
=============== 
Skills
===============
*/
  .skills-center{
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
}
@media (min-width:992px){
    /*
=============== 
Hero
===============
*/
    .hero-img{
    display: block;
    position: relative;
  }
  .hero-center{
    grid-template-columns: 1fr 1fr;
  }
  /* .hero-photo{
    max-width: 25rem;
    max-height: 30rem;
    object-fit: cover;
    border-radius: var(--radius);
    position: relative;
  } */
  .hero-img::before,
  .about-img::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.25rem solid var(--clr-primary-5);
    top: 2rem;
    right: -2rem;
    border-radius: 50%;
  }
/*
=============== 
About
===============
*/
  .about-center{
    grid-template-columns: 1fr 1fr;
  }
  .about-img{
    position: relative;
    &::before{
        left: -2rem;
    }
  }
  .about-info{
    align-self: center;
  }
/*
=============== 
Services
===============
*/
  .services-center{
    grid-template-columns: 1fr 1fr 1fr;
  }
/*
=============== 
Projects
===============
*/
.projects-center{
    grid-template-columns: repeat(3, 1fr);
}
}
@media (min-width:1170px){
/*
=============== 
Projects
===============
*/
.projects-center{
    grid-template-rows: 200px 200px;
    gap: 1rem;
    grid-template-areas: 
    "a b b"
    "a c d";
}
.project-img{
  height: 100%;
}
.project{
  height: 100%;
}
.project-1{
  grid-area: a;
}
.project-2{
  grid-area: b;
}
.project-3{
  grid-area: c;
}
.project-4{
  grid-area: d;
}
}
`
export default Wrapper