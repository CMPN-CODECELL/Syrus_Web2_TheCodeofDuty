import React from "react";
import './CSS/CategoriesCard.css';
import {NavLink} from 'react-router-dom'

const Categories =(props)=>{


    return(

        <div className="CategoryDevider">


                <div className="Categories-main">
                
                <h3 className="Categories-heading"> Categories </h3>


            <div className="ListOfCourses">
                  <NavLink to='/home/all' activeClassName="active-category" >All Courses</NavLink>
                  <NavLink to='/home/Web Development' activeClassName="active-category">Web Development </NavLink>
                  <NavLink to='/home/Mathematics' activeClassName="active-category" >Mathematics </NavLink>
                  <NavLink to='/home/Science' activeClassName="active-category">Science </NavLink>
                  <NavLink to='/home/Photography' activeClassName="active-category">Photography</NavLink>
                  <NavLink to='/home/IOT' activeClassName="active-category">IOT </NavLink>
                  <NavLink to='/home/ML' activeClassName="active-category">Machine Learning</NavLink>
                   <NavLink to='/home/NodeJs' activeClassName="active-category">NodeJs</NavLink>
                  <NavLink to='/home/preferences' className="recommended" 
                  activeClassName="active-category">Recommended!</NavLink>
                
            </div>

       

                </div>

                <div className="Course-Devider">

                </div>

                <div className='CategoriesSlider'>
                 <NavLink to='/home/all' activeClassName="Sactive-category" >All Courses</NavLink>
                  <NavLink to='/home/Web Development' activeClassName="Sactive-category">Web Development </NavLink>
                  <NavLink to='/home/Web Designing' activeClassName="Sactive-category" >Web Designing </NavLink>
                  <NavLink to='/home/React' activeClassName="Sactive-category">React </NavLink>
                  <NavLink to='/home/Photography' activeClassName="Sactive-category">Photography</NavLink>
                  <NavLink to='/home/IOT' activeClassName="Sactive-category">IOT </NavLink>
                  <NavLink to='/home/ML' activeClassName="Sactive-category">Machine Learning</NavLink>
                   <NavLink to='/home/NodeJs' activeClassName="Sactive-category">NodeJs</NavLink>
                  <NavLink to='/home/preferences' className="recommended" 
                  activeClassName="active-category">Recommended!</NavLink>
            </div>


        </div>


     


    );

}

export default Categories;