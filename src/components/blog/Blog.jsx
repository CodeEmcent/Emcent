import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Blog1 from '../../assets/blog1.jpg'
import Blog2 from '../../assets/blog2.jpg'
import Blog3 from '../../assets/blog3.jpg'
import shapeOne from '../../assets/shape-1.png'
import './blog.css'

const Blog = () => {
  return (
    <section className='blog section' id='blog'>
      <h2 className='section__title text-cs'>Latest Blog</h2>
      <p className='section__subtitle'>
        My <span>Articles and Advice</span>
      </p>

      <div className='blog__container container grid'>
        <div className='blog__item card card-two'>
          <span className='blog__date text-cs'>OCTOBER 31, 2022</span>
          <h3 className='blog__title'>The Main Things For The Designers</h3>
          <p className='description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ut
            delectus ipsum minus, ratione nesciunt!
          </p>

          <a href='#' className='link'>
            Read more
            <FaArrowRight className='link__icon' />
          </a>

          <img src={Blog1} alt='' className='blog__img' />
        </div>

        <div className='blog__item card card-two'>
          <span className='blog__date text-cs'>OCTOBER 31, 2022</span>
          <h3 className='blog__title'>Follow Your Own Design Process</h3>
          <p className='description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ut
            delectus ipsum minus, ratione nesciunt!
          </p>

          <a href='#' className='link'>
            Read more
            <FaArrowRight className='link__icon' />
          </a>

          <img src={Blog2} alt='' className='blog__img' />
        </div>

        <div className='blog__item card card-two'>
          <span className='blog__date text-cs'>OCTOBER 31, 2022</span>
          <h3 className='blog__title'>
            Usability Secrets to Create Better Interfaces
          </h3>
          <p className='description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ut
            delectus ipsum minus, ratione nesciunt!
          </p>

          <a href='#' className='link'>
            Read more
            <FaArrowRight className='link__icon' />
          </a>

          <img src={Blog3} alt='' className='blog__img' />
        </div>
      </div>

      <div className='section__deco deco__right'>
        <img src={shapeOne} alt='' className='shape' />
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Blog</span>
      </div>
    </section>
  )
}

export default Blog
