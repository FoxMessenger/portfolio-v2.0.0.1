// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';

class Connect extends Component {
	render() {

        return(
        	<div >
	            
                <form>
                    <div className='form-group'>
                        <input type='text' className='form-control' id='name' aria-describedby='user-name' placeholder='name' />
                    </div>
                    
                    <div className='form-group'>
                        <input type='email' className='form-control' id='email' aria-describedby='user-email' placeholder='email' />
                        <br/>
                        <small id='email-text' className='form-text text-muted'>Don't worry, I'm too broke to ever share your email with anyone else.</small>
                    </div>
                    <div className='form-group'>
                        <input type='subject' className='form-control' id='email' aria-describedby='user-email' placeholder='subject' />
                    </div>
                    
                    <div className='form-group'>
                           <textarea className='form-control' id='exampleTextarea' rows='3' placeholder='tell me your life story...'></textarea>
                    </div>

                </form>
                <button type='submit' className='btn btn-primary lets-chat-button'>Let's Chat!</button>
                
	        </div>
        )
    }
}

export default Connect;