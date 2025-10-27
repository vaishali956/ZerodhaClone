import React, { PureComponent } from 'react';

function NotFound() {
    return ( 
       <div className='container p-5 mb-5'>
          <div className='row text-center'>
            <h1 className='mt-2 opacity-10'>
                 404 Not Found
            </h1>
            <p className='text-muted fs-5 mt-4' > 
                Sorry, the page you're  looking for does not exist.
             </p>
       </div>
    </div>  
     );
}

export default NotFound;