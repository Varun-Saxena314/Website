import React, { useEffect } from 'react';
import Footer from './Footer';
import './name.css';
import Java from './images/java_logo.webp';
import Python from './images/python_logo.png';
import HTML from './images/HTML_logo.webp';
import CSS from './images/CSS_logo.png';
import JS from './images/JS_logo.webp';
import Reac from './images/React_logo.webp';
import C from './images/C_logo.png';
import SQL from './images/SQL_logo.webp';

const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const fades = document.querySelectorAll('.fade');
        fades.forEach((el) => observer.observe(el));

        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show2');
                } else {
                    entry.target.classList.remove('show2');
                }
            });
        });

        const fades = document.querySelectorAll('.fade2');
        fades.forEach((el) => observer.observe(el));

        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);
    return (
        <div className='container about-container'>
            <div className='text' style= {{marginLeft: '5%', marginTop: '3%'}}>
                <h1 className = 'fade' style = {{fontSize: '300%'}}>Who I Am</h1>
                <p className='fade'>Hi! My name is Varun Saxena and I will be a second year student 
                    pursuing a bachelor's degree in  computer science at the 
                    University of Virginia in the Fall. I was initially interested in STEM and computer science 
                    at the start of middle school, where I joined the 
                    Centreville Robotics organization. I was quickly shown the ropes
                     of the robotics organization, which included coding numerous robots to move 
                     autonomously and through user input. I gained six year  of 
                     experience through the organization, building and coding numerous robots for competitions, as well as teaching 
                     new members how to code. 
            </p>
            <p className='fade'>I continued to kindle and grow my interest in computer science when I arrived at UVA.
                I've taken many insightful computer science undergraduate classes, helping me learn more about the field, 
                such as data structures, 
                computer systems, and discrete mathematics. 
            </p>
            <p className='fade'>I want to continue expanding my knowledge on computer 
                science and one day contribute in the full-stack development of web applications
                 and apps, both used by numerous users and implementing new technolgoies like AI. 
                 If you’re looking for someone who is strong at problem 
                 solving, communicating, teaching, and learning, please reach out!
            </p>
            </div>
            <div className='altText' style= {{marginLeft: '5%', marginTop: '3%', color: 'white'}}>
                <h1 className = 'fade' style = {{fontSize: '300%'}}>Skills</h1>
                    <p className='fade'>Here are the skills I'm proficient at!</p>
                    <div className='skills'>
                        <div className='fade2'>
                            <div className='skillCard'>
                                <img src={Java} style={{width: '70%', height: '50%'}} alt='Java Logo'/> 
                               <p1 style={{marginTop: '20%'}}>Java</p1>  
                            </div>
                        </div>
                        <div className='fade2'>
                            <div className='skillCard'>
                            <img src={Python} style={{width: '70%', height: '50%'}} alt='Python Logo'/> 
                                <p1 style={{marginTop: '20%'}}>Python</p1>
                            </div>
                        </div>
                        <div className='fade2'>
                            <div className='skillCard'>
                            <img src={JS} style={{width: '70%', height: '50%'}} alt='JavaScript Logo'/> 
                                <p1 style={{marginTop: '20%'}}>JavaScript</p1>
                            </div>
                        </div>
                        <div className='fade2'>
                            <div className='skillCard'>
                            <img src={CSS} style={{width: '70%', height: '50%'}} alt='CSS Logo'/> 
                                <p1 style={{marginTop: '20%'}}>CSS</p1>
                            </div>
                        </div>
                        <div className='fade2'>
                            <div className='skillCard'>
                            <img src={HTML} style={{width: '70%', height: '50%'}} alt='HTML Logo'/> 
                                <p1 style={{marginTop: '20%'}}>HTML</p1>
                            </div>
                        </div>
                        <div className='fade2'>
                            <div className='skillCard'>
                            <img src={Reac} style={{width: '70%', height: '50%'}} alt='React Logo'/> 
                                <p1 style={{marginTop: '20%'}}>React.JS</p1>
                            </div>
                        </div>
                        <div className='fade2'>
                            <div className='skillCard'>
                            <img src={C} style={{width: '70%', height: '50%'}} alt='C Logo'/> 
                                <p1 style={{marginTop: '20%'}}>C</p1>
                            </div>
                        </div>
                        <div className='fade2'>
                            <div className='skillCard'>
                            <img src={SQL} style={{width: '70%', height: '50%'}} alt='SQL Logo'/> 
                                <p1 style={{marginTop: '20%'}}>SQL</p1>
                            </div>
                        </div>
                    </div>
              </div>
              <div className='text' style= {{marginLeft: '5%', marginTop: '3%', color: 'white'}}>
                <h1 className = 'fade' style = {{fontSize: '300%'}}>Hobbies</h1>
                    <p className='fade'> My favorite passtimes and hobbies include playing basketball,
                        playing volleyball, cooking delicious food, sketching and drawing,
                        and spending time with my friends and family. These interests 
                        help showcase my personal values
                        of teamwork, creativity, and appreciating and respecting others.
                    </p>
            </div>
        </div>
        
    )
}

export default About