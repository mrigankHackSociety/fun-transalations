import React from 'react';
import './user-login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const UserLogin = () => {
  return (
    <div className="container">
    <div className="card">
      <div>
        <div className="align-center padding-bottom">Login</div>
        <div>
          <div className="padding-bottom">
        <TextField id="outlined-basic" label="User Name" className='full-width ' variant="outlined"/>
        </div>
        <div className="padding-bottom"> 
        <TextField id="outlined-basic" label="Password" className='full-width padding-bottom' variant="outlined" />
        </div>
        </div>
        <div>
             <Button variant="outlined" color="primary" className="full-width" >
  Login 
</Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserLogin;
