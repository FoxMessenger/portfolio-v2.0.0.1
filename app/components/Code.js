// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';

class Code extends Component {
        constructor(props) {
        super(props);
    }

    generateProject () {
        return this.props.data.map( (code) => {
            return (
               <div className="full-project col-sm-12" key={code.title}>
                    <div className="code-div">
                            <figure className="code-img img-code">
                                <a href={code.url} className="code-description">
                                    <img className="img-code" src={code.img} alt={code.description} title={code.description}/>
                                </a>
                            </figure>
                            <div className="code-body-text"> 
                                <h3 className="code-title">{code.title}</h3>
                                <p className="code-info">{code.category}</p>
                                <br />
                                <a href={code.url} className="code-description">{code.description}</a>

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

export default Code;