import React,{useState} from "react";

function LoginForm({Login,error}) {
   
    const [details, setDetails] = useState({name:"",email:"",password:""});

    const submitHandler = e => {
        e.preventDefault();

      Login(details);
    }
 
  
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
     
        <div className ="form-group">
         
          <input type="text" name="name" id="name" placeholder="Username" onChange={e => setDetails({...details,name:e.target.value})} value={details.name}/>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password"onChange={e => setDetails({...details,password:e.target.value})} value={details.password} />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" onChange={e => setDetails({...details,email:e.target.value})} value={details.email}/>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
   
  );
}

export default LoginForm;


