// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';

// ----------------------------
// Static Bars
// ----------------------------
import Header from './layout/Header';
import Footer from './layout/Footer';
import Links from './layout/Links';

class Connect extends Component {
	render() {

        return(
        	<div>
        		<Links />
	            
                <div className='row'>
                    <h3 className='text-center'>Let's Chat!</h3>
                </div>
                <div className='row'>
                    <p>Name</p>	
                    <p>Occupation</p> 
                    <p>Abilities</p> 
	            </div>
	        </div>
        )
    }
}

export default Connect;