import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import '../Projects.css';
import Navbar from './Navbar.jsx';
import bg from '../assets/projects_bg.png';
import images from './Images';
import {motion, AnimatePresence, easeInOut} from "framer-motion";
import ProjectDisplay from "./ProjectDisplay";

export default function Projects(){
    const navigate = useNavigate();
    const params = useParams();

    console.log('p',(params.projectId)) 
    var projects = ['ACTIVITY TRACKER','CANON FORCES','LEADERBOARD PRO','KSP','HOMEWORK SCHEDULER','PHOTO SHARING','CGPA'];
    var projectRepo = ['Activity-Tracker','canonforces','Leaderboard-Pro','Knowledge-Sharing-Platform','Homework-Scheduler ','Photo-Sharing-App','iitbh-cgpa']
    const [project, setProject] = useState((params.projectId == null)?(projects[0]):(projects[projectRepo.findIndex((id)=>(id===params.projectId))]));
    const [cardGoLeft, setCardGoLeft] = useState(false);
    
    
    var cardVariants = {
        initial:(cardGoLeft)=>{
            console.log('init',cardGoLeft)
            return{
                x:cardGoLeft?200:-200,
                opacity: 0,
                transition:{
                    ease:'ease-in',
                    delay:1
                }
            }
        },
        animate:{
            x:0,
            opacity: 1,
        },
        exit:(cardGoLeft)=>{
            console.log('exit',cardGoLeft)
                return{
                    x:cardGoLeft?-200:200,
                    opacity:0,
                    transition:'ease-out'
                }
        },
    }
    
    const Card = ()=>{
        return(
            <div className="project-card" onClick={()=>{navigate(`/projects/${projectRepo[projects.findIndex((id)=>(id===project))]}/detailed`)}}>
            <AnimatePresence>
                <motion.div
                    key={project}
                    variants={cardVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    custom={cardGoLeft}>
                    <div key={project+' div'}>
                        <h3 className="project-card-title">{project}</h3>
                        <p className="project-card-para">{project} application aims to get the students acquainted with the courses, professors, evaluation schemes. The said things can be achieved via gathering course feedback, professor feedback, and previous year grading schemes. This can be done by making a portal (just like a blog site) where people can share their honest reviews without being scrutinized much.</p>
                        <button className='project-card-btn' key={project+' btn'} type="button"><a href="https://github.com/OpenLake/Knowledge-Sharing-Platform">VIEW SOURCE CODE</a></button>
                        <img className='project-card-img' key={project+' img'} alt={project} src={images[projects.findIndex((id)=>(id===project))][0]}></img>
                    </div>
                </motion.div>
            </AnimatePresence>
            </div>
        );
    };

    const LineMenu = ()=>{
        const Item = (props)=>{
            return(
            <div    className="line-item" 
                    onClick={()=>{
                        setCardGoLeft((projects.findIndex((id)=>(id===project))) > (projects.findIndex((id)=>(id===props.name))));
                        setProject(props.name);
                        navigate(`/projects/${projectRepo[projects.findIndex((id)=>(id===props.name))]}`)
                        }}>
                    <div className="circle">
                        <div className="inner-circle" style={{display: (props.name==project) ? "block" : "none"}}></div>
                    </div>
                    <a className="link" href="#">{props.name}</a>
                    {props.name === project && <motion.div 
                        className="menu-anim-base"
                        layoutId="rext"
                        style={{
                            position: 'absolute',
                            width: '250px',
                            height: '50px',
                            left: "-26px",
                            borderRadius: '15px',
                            backgroundColor: 'blue',
                            background: 'linear-gradient(0deg, rgba(21, 41, 81, 0.20) 0%, rgba(21, 41, 81, 0.20) 100%), linear-gradient(173deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.10) 100%)',
                            boxShadow: '0px 4px 50px 40px rgba(0, 0, 0, 0.23)',
                            backdropFilter: 'blur(25px)',
                            zIndex:-10,
                        }}
                        transition={{
                            duration:0.15,
                        }}
                    >
                    </motion.div>}
                </div>
            );
        };
        return(
            <div className="menu">
                <div className="line"></div>
                <div className="item-holder">
                    {projects.map((id)=>{return(<Item key={id} name={id} />);})}
                </div>
            </div>
        );
    };
    
    return(
        <div className="project-body">
                <Navbar />
                <h1 className="project-cmd">$ cd ~/ Projects/ KSP</h1>
                <Card />
                <LineMenu />
        </div>
    );
}