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


/* small screen layout setup */
/* bg-grey in globals */

/*
=============== 
Projects
===============
*/
.projects-text{
  width: 85vw;
  max-width: 30rem;
  margin: 0 auto;
}
.project{
  position: relative;
  background: var(--clr-primary-5);
  border-radius: var(--radius);
  margin-bottom: 2rem;
  &:hover{
    .project-info{
        opacity: 1;
    }
    .project-img{
        opacity: 0.1;
    }
    &::after{
        opacity: 1;
        transform: scale(0.8);
    }
  }
  &::after{
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0.25rem solid var(--clr-white);
    border-radius: var(--radius);
    transition: var(--transition);
    opacity: 0;
  }
}
.project-info{
  text-align: center;
  color: var(--clr-white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: var(--transition);
  opacity: 0;
  p{
    text-transform: capitalize;
    color: var(--clr-white);
  }
}
.project-img{
    transition: var(--transition);
    border-radius: var(--radius);
    height: 15rem;
    object-fit: cover;
}
/*
=============== 
Connect
===============
*/
.connect {
  display: grid;
  place-items: center;
  min-height: 40vh;
  position: relative;
  padding: 10rem 0 5rem 0;
  margin: 5rem 0;
  /* -webkit-clip-path: polygon(10% 9%, 90% 9%, 90% 85%, 10% 85%);
  clip-path: polygon(10% 9%, 90% 9%, 90% 85%, 10% 85%); */
  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
     background: #2caeba; 
    opacity: 0.38;
    z-index: -1;
    &:hover{
      opacity: 0;
    }
  }
}
.video-container{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}
.video-banner{
  background: var(--clr-primary-10);
  padding: 3rem 5rem 12rem 5rem;
  text-align: center;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 75%, 50% 75%, 0% 75%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 75%, 50% 75%, 0% 75%);
  .section-title{
    margin-bottom: 2rem;
  }
}
.video-text{
  max-width: 30rem;
}
/*
=============== 
Skills
===============
*/
.skills{
  background: var(--clr-primary-9);
  h3{
    margin: 1.5rem 0;
  }
}
.skill{
  margin-bottom: 1.25rem;
  p{
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    color: var(--clr-primary-1);
  }
}
.skill-container{
  background:var(--clr-white);
  height: 1rem;
  width: 100%;
  border-radius: var(--radius);
  position: relative;
}
.skill-value{
  position: absolute;
  top: 0;
  left: 0;
  background: var(--clr-primary-5);
  height:100%;
  width: 50%;
  border-radius: var(--radius);
}
.value-70{
  width: 70%;
}
.value-80{
  width: 80%;
}
.skill-text{
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
}
.skill-text-70{
  left: 70%;
}
.skill-text-80{
  left: 80%;
}
/*
=============== 
Timeline
===============
*/
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
  background: var(--clr-green-10);
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
.card-front{
  background: var(--clr-white);
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