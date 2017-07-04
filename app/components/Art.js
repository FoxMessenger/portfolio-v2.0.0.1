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

class Artist extends Component {
	render() {

        return(
        	<div>
                <Links />
	            
                <div className='row'>
                    <h3 className='text-center'>My Art</h3>
                </div>
                <div className='row'>
	                <div className='testing col-sm-4'></div>
	                <div className='testing col-sm-4'></div>	
	                <div className='testing col-sm-4'></div>	
	            </div>
	        </div>
        )
    }
}

export default Artist;