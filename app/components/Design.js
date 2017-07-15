// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from 'react-router-dom';


class Design extends Component {
        constructor(props) {
        super(props);
    }

    generateProject () {
        return this.props.data.map( (project) => {
            return (
               <div className="full-project col-sm-3" key={project.title}>
                    <div className="project-div">
                            <figure className="project-img img-art">
                                <a href={project.url} className="project-description">
                                    <img className="img-art" src={project.img} alt={project.description} title={project.description}/>
                                </a>
                            </figure>
                            <div className="project-body-text"> 
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-info">{project.category}</p>
                                <br />
                                <a href={project.url} className="project-description">{project.description}</a>

                            </div>
                    </div>
                </div>                 
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        { this.generateProject() }
                    </div>
                </div>
            </div>
        );
    }
};

export default Design;