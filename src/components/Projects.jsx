import React, { useState, useEffect } from 'react';
import AddProject from './AddProject'
import RemoveButton from './RemoveButton'
import { useAuth0 } from '@auth0/auth0-react';
import '../css/projects.css';


const Projects = ({projects}) => {
    const { isAuthenticated } = useAuth0();

    // const [projects, setProjects] = useState(() => {
    //     const localData =
    //       localStorage.getItem('projects');
    //     return localData ? JSON.parse(localData) : [];
    //   });

    // const uploadImage = async (image) => {
    //     const data = new FormData()
    //     data.append('file', image)
    //     data.append('upload_preset', 'gwetbrjg')
    //     const res = await fetch(
    //       'https://api.cloudinary.com/v1_1/dxiatpprs/image/upload',
    //       {
    //         method: 'POST',
    //         body: data
    //       }
    //     )
    //     const file = await res.json()
    //     return file.secure_url
    //   }

    // const addNewProject = async (e, image) => {
    //     e.preventDefault();

    //     const imageUrl = uploadImage(image);

    //     const newProject = {
    //         title: e.target.querySelector('#title').value,
    //         image: imageUrl,
    //         link: e.target.querySelector('#link').value,
    //         category: e.target.querySelector('#category').value
    //     }
    //     setProjects([...projects, newProject]);
    //     e.target.reset()
    // }

    // useEffect(() => {
    //     localStorage.setItem('projects', JSON.stringify(projects))
    // }, [projects])

    // const removeProject = (index) => {
    //    const newProjects = projects.filter(project => {
    //         return projects.indexOf(project) !== index
    //    })
    //    setProjects(newProjects)
    // };


    return (
        <div className="projects-section" id="projects">
            <div className="projects-info">
                <h2>PROJECTS</h2>
                <p>Although specializing in trailer music and advertisements Espen also releases ambient music under the moniker Akasaka, as well as piano improvisations under his own name.</p>
            </div>
            <div className="projects">
                {projects.map((project, index) => {
                    return (
                        <div className="project" key={index}>
                            <img src={project.image} alt={project.category}/>
                            {/*{isAuthenticated && <RemoveButton removeProject={removeProject} index={index} />}*/}
                            <a href={project.link} rel="noreferrer" traget="_blank" >
                                <h4>{project.title.toUpperCase()}</h4>
                            </a>
                            <p>{project.category}</p>
                        </div>
                    )
                })}
            </div>
            {/*{isAuthenticated && <AddProject addNewProject={addNewProject}/>}*/}
        </div>
    )
}

export default Projects
