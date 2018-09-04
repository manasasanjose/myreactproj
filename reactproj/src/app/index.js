import React from "react";
import {render} from "react-dom";
import {User} from "./Components/user";
import {Admin} from "./Components/admin";
import axios from 'axios';

class Abacus extends React.Component
{
	constructor()
	{
		super()
		this.state={
		username:'',
		password1:'',
		isLoggedIn:'none',
		log:false,
		register:'',
		name:'',
		age:'',
		message:''
		}
		this.handleLogin=this.handleLogin.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleText=this.handleText.bind(this);
		this.handleDefault=this.handleDefault.bind(this);
		this.handleRegister=this.handleRegister.bind(this);
		this.handleLog=this.handleLog.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleRegage=this.handleRegage.bind(this);
		this.handleRegname=this.handleRegname.bind(this);
		//this.handleReset=this.handleReset.bind(this);
		this.handleBack=this.handleBack.bind(this);
	}
	handleLogin(event)
	{
		event.preventDefault();
		this.setState({message:''});
		var bodyFormData=	new FormData();
		bodyFormData.set('id',this.state.username);
		bodyFormData.set('password',this.state.password1);
		var options={
		  method:'POST',
		  url:'http://localhost/tutorials/PHPpractice/reactproj/src/app/Components/login.php',
		  data:bodyFormData,
		  headers:{'Content-Type': 'multipart/form-data'}
		};
		axios(options)
		.then(response=>{
			
				this.setState({message:response.data.message});
				if(response.data.type=='admin')
				{
						this.setState({isLoggedIn:'admin'});
				}
				if(response.data.type=='user')
				{
				this.setState({isLoggedIn:'user'}); }
								
			
			})
			.catch(function(response){console.log(response);});
			this.setState({username:'',age:'',id:'',password1:'',name:''});
			
		
	}
	/*handleReset()
	{
		this.setState({
		username:'',
		password1:'',
		name:'',
		age:'',
		message:''
		});
	}*/
	handleLog()
	{
		this.setState({log:true,message:''});
	}
	handleRegister()
	{
		this.setState({log:false,register:true,message:''});
	}
	
	handleRegage(event)
	{
		this.setState({age:event.target.value});
	}
	handleRegname(event)
	{
		this.setState({name:event.target.value});	
	}
	handleSubmit(event)
	{
		event.preventDefault();
		this.setState({message:''});
		var bodyFormData=	new FormData();
		bodyFormData.set('id',this.state.username);
		bodyFormData.set('password',this.state.password1);
		bodyFormData.set('name',this.state.name);
		bodyFormData.set('age',this.state.age);
		var options={
		  method:'POST',
		  url:'http://localhost/tutorials/PHPpractice/reactproj/src/app/Components/register.php',
		  data:bodyFormData,
		  headers:{'Content-Type': 'multipart/form-data'}
		};
		axios(options)
		.then(response=>{
			
				this.setState({message:response.data.message});
			
			})
			.catch(function(response){console.log(response);});
			this.setState({username:'',age:'',id:'',password1:'',name:''});
			
	}
	handleDefault()
	{
		this.setState({isLoggedIn:'none',log:false,register:false});
	}
	handleBack()
	{
		this.setState({isLoggedIn:'none',log:false,register:false});
	}
	handleChange(event)
	{
		this.setState({username:event.target.value});
	}
	handleText(event)
	{
		this.setState({password1:event.target.value});
	}
			render() {
			const isLoggedIn=this.state.isLoggedIn;
			const log=this.state.log;
			let button;
			const register=this.state.register;
			if(log)
			{
				if(isLoggedIn=='user' || isLoggedIn=='admin')
				{
					button=<div>
					<button type="button" className="btn btn-primary" onClick={this.handleDefault}>Back</button>
					</div>;
				}
				else
				{
					button=
					<div>
					<form onSubmit={this.handleLogin}>
						<label>
						Username </label>
						<input type="text" value={this.state.username} required onChange={this.handleChange}/>
						
						<br/>
						<label>
						Password </label>
						<input type="password" value={this.state.password1} required onChange={this.handleText}/>
						<br/>
						<br/>
						<button type="submit" className="btn btn-success">Login</button>
						</form>
						<p className="text-danger">{this.state.message}</p>
					</div>;
				}
			}
			else
			{
				button=
					<div>
						<h1> Welcome to Mypage </h1>
						<br/>
						<br/>
						<button type="button" className="btn btn-success" onClick={this.handleRegister}>New User registration</button>
						&nbsp;
						<button type="button" className="btn btn-danger" onClick={this.handleLog}>Login</button>
					</div>;	
					if(register)
					{
							
						button=
					<div>
					<form onSubmit={this.handleSubmit}>
						<label>
						Username </label>
						<input type="email" value={this.state.username} required onChange={this.handleChange}/>
						
						<br/>
						<label>
						Password </label>
						<input type="password" value={this.state.password1} required onChange={this.handleText}/>
						
						<br/>
						<label>
						Full Name </label>
						<input type="text" value={this.state.name} required onChange={this.handleRegname}/> 
						
						<br/>
						<label>
						Age
						<input type="text" value={this.state.age} required onChange={this.handleRegage}/> </label>
						
						<br/>
						<br/>
						<button type="submit" className="btn btn-success">Register</button>&nbsp;
						<button type="button" className="btn btn-warning" onClick={this.handleBack}>Back</button>
					</form>	
					<p className="text-danger">{this.state.message}</p>
					</div>;
					}
			}
			
        return (
		<div>
		
		
		<Greeting isLoggedIn={isLoggedIn} /><br/>
			{button}
			
			</div>
        );
    }
}
function Greeting(props)
	{
		const isLoggedIn=props.isLoggedIn;
		if(isLoggedIn=='admin')
		{
			return <Admin/>;
		}
		else if(isLoggedIn=='user')
		{
			return <User/>;
		}
		else
		{
			return(<div></div>);
		}
	}

render(<Abacus/>,window.document.getElementById("app"));

