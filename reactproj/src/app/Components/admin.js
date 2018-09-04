import React ,{Component} from "react";
//import {render} from "react-dom";
import axios from 'axios';
export class Admin extends React.Component {
	constructor()
	{
		super()
		this.state=
		{
			operation:'none',
			name:'',
			age:'',
			id:'',
			pwd:'',
			message:'',
			items:[],
			currentPage:1,
			itemsPerPage:3,
			selvalue:'',
			filterarray:[]
		}
		this.handleCreate=this.handleCreate.bind(this);
		this.handleRead=this.handleRead.bind(this);
		this.handleUpdate=this.handleUpdate.bind(this);
		this.handleDelete=this.handleDelete.bind(this);
		this.handleCreateSubmit=this.handleCreateSubmit.bind(this);
		this.handleUpdateSubmit=this.handleUpdateSubmit.bind(this);
		this.handleDeleteSubmit=this.handleDeleteSubmit.bind(this);
		this.handleAge=this.handleAge.bind(this);
		this.handleName=this.handleName.bind(this);
		this.handleID=this.handleID.bind(this);
		this.handlePassword=this.handlePassword.bind(this);
		this.handleClick=this.handleClick.bind(this);
		this.handleSelect=this.handleSelect.bind(this);
		this.handleFilter=this.handleFilter.bind(this);
	}
	
	handleClick(event)
	{
		this.setState({currentPage:Number(event.target.id)});
	}
	handleName(event)
	{
		this.setState({name:event.target.value});
	}
	handleID(event)
	{
		this.setState({id:event.target.value});
		console.log(this.state.id);
	}
	handleAge(event)
	{
		this.setState({age:event.target.value});
	}
	handlePassword(event)
	{
		this.setState({pwd:event.target.value});
	}
	handleFilter(event)
	{
			let fil=this.state.selvalue;
		console.log(this.state.selvalue);
		if(this.state.selvalue=='all')
		{
			console.log("gg");
			this.setState({currentPage:1,filterarray:this.state.items.slice()});
		}
		else
		{
			let filtered=this.state.items.filter(word=>{return eval(fil);})
			console.log("kk",filtered);
			this.setState({currentPage:1,filterarray:filtered.slice()});
		}
		console.log("it is ",this.state.filterarray);
		event.preventDefault();
	}
	handleCreateSubmit(event)
	{
			event.preventDefault();
		let bodyFormData=new FormData();
		bodyFormData.set('name',this.state.name);
		bodyFormData.set('age',this.state.age);
		bodyFormData.set('id',this.state.id);
		bodyFormData.set('password',this.state.pwd);
		let options = {
    method: 'POST',
    url: 'http://localhost/tutorials/PHPpractice/reactproj/src/app/Components/create.php',
	data:bodyFormData,
      headers:{'Content-Type': 'multipart/form-data'}
    
  };
	axios(options).then(response=>{

	this.setState({message:response.data.message});
console.log(response);
console.log(this.state.message);
	
	})	
	.catch(function(response)
	{
		console.log("error",response);
	});
	
		 
		this.setState({name:'',age:'',id:'',pwd:''});
	}
	handleUpdateSubmit(event)
	{
		event.preventDefault();
		let bodyFormData=new FormData();
		bodyFormData.set('name',this.state.name);
		bodyFormData.set('age',this.state.age);
		bodyFormData.set('id',this.state.id);
		
		let options = {
    method: 'POST',
    url: 'http://localhost/tutorials/PHPpractice/reactproj/src/app/Components/update.php',
	data:bodyFormData,
      headers:{'Content-Type': 'multipart/form-data'}
    
  };
	axios(options).then(response=>{

	this.setState({message:response.data.message}); 
	})	
	.catch(function(response)
	{
		console.log("error",response);
	});
	
	this.setState({name:'',age:'',id:'',pwd:''});	 
		
	}
	handleDeleteSubmit(event)
	{
		event.preventDefault();
		let bodyFormData=new FormData();
		
		bodyFormData.set('id',this.state.id);
		let options = {
    method: 'POST',
    url: 'http://localhost/tutorials/PHPpractice/reactproj/src/app/Components/delete.php',
	data:bodyFormData,
      headers:{'Content-Type': 'multipart/form-data'}
    
  };
	axios(options).then(response=>{

	this.setState({message:response.data.message}); 
	})	
	.catch(function(response)
	{
		console.log("error",response);
	});
	
		 
		
	}
	handleCreate()
	{
		this.setState({operation:'create',message:''});
	}
	handleRead()
	{
		this.setState({operation:'read',message:'',currentPage:1,itemsPerPage:3});
		var authOptions={
			method:'GET',
			url:'http://localhost/tutorials/PHPpractice/reactproj/src/app/Components/retreive.php',
			 headers:{"Content-Type":"application/json"}, 
    json: true
		};
		axios(authOptions)
		.then(response=>{
			this.setState({
				items:response.data
			});
			console.log(this.state.items);
		}
			)
			.catch(function(response){
				console.log("error",response);
			});
		
	}
		
	handleSelect(event)
	{
		this.setState({selvalue:event.target.value});
		console.log(this.state.selvalue);
		
	}	
	
	handleUpdate()
	{
		this.setState({operation:'update',message:''});
	}
	handleDelete()
	{
		this.setState({operation:'delete',message:''});
	}
    render() {
		const operation=this.state.operation;
		let action;
		
		switch(operation)
		{
			case 'create':
			{
			action=<div>
			<form onSubmit={this.handleCreateSubmit}>
			<label>
			Email id </label>
			<input type="text" value={this.state.id} required onChange={this.handleID}/> 
			<br/>
			<label>
			Name </label>
			<input type="text" value={this.state.name} required onChange={this.handleName}/> 
			<br/>
			<label>
			Age </label>
			<input type="text" value={this.state.age} required onChange={this.handleAge}/> 
			<br/>
			<label>
			Password </label>
			<input type="password" value={this.state.pwd} required onChange={this.handlePassword}/> 
			<br/>
			<button type="submit" className="btn btn-primary">Submit </button>
			</form>
			<div className="text-danger">{this.state.message}</div>
			</div>;
			break;
			}
			case 'read':
			{
				console.log("hi");
				let value=this.state.selvalue;
				let result=[];
				if(this.state.filterarray.length>0)
				{
					result=this.state.filterarray.slice();
				}
				else
				{
					result=this.state.items.slice();
				}
				let currentPage=this.state.currentPage;
				let itemsPerPage=this.state.itemsPerPage;
				const lastIndex=currentPage*itemsPerPage;
				const firstIndex=lastIndex-itemsPerPage;
				const temparray=result.slice(firstIndex,lastIndex);
				console.log(temparray);
				const pagenumber=[];
				for(let i=1;i<=Math.ceil(result.length/itemsPerPage);i++)
				{
					pagenumber.push(i);
				}
				console.log(pagenumber);
				action=
				<div>
				<br/>
				<br/>
				<label>
				Filter by age
				<select value={this.state.selvalue} onChange={this.handleSelect}>
				<option  value="all">All</option>
				<option value="word.age &gt; 20 &amp;&amp; word.age &lt; 30">age between 20 and 30 </option>
				<option value="word.age &gt; 50">Age greater than 50 </option>
				</select>
				</label>
				<button  type="button" className="btn-primary" onClick={this.handleFilter}>Apply </button>
				<br/>
				<br/>
				<table className="table table-bordered">
				<thead>
				<tr className="danger">
				<th className="text-primary">Name</th>
				<th className="text-primary">Age</th>
				<th className="text-primary">Email</th>
				</tr>
				</thead>
				<tbody>
				{
					temparray.map((item,index)=>(
			<tr key={index} className="warning">
			<td>{item.name}</td>
			<td>{item.age}</td>
			<td>{item.id}</td>
			
				
			
			</tr>
			))}
				</tbody>
				</table>
				<br/>
				<ul className="text-primary pagination">
				{
				pagenumber.map(page=>(
					<li className="text-primary page-item" key={page} ><a className="page-link"  id={page} onClick={this.handleClick}>{page}</a>
					</li>
				))
				}
				</ul>
				</div>;
			
			break;
		}
		case 'update':
		{
				action=<div>
			<form onSubmit={this.handleUpdateSubmit}>
			<label>
			Email id </label>
			<input type="text" value={this.state.id} required onChange={this.handleID}/> 
			<br/>
			<label>
			Name </label>
			<input type="text" value={this.state.name} required onChange={this.handleName}/> 
			<br/>
			<label>
			Age </label>
			<input type="text" value={this.state.age} required onChange={this.handleAge}/> 
			<br/>
			<button type="submit" className="btn btn-primary">Submit </button>
			</form>
			<div className="text-danger">{this.state.message}</div>
			</div>;
			break;
		}
		case 'delete':
		{
			action=
			<div>
			<form onSubmit={this.handleDeleteSubmit}>
			<label>
			Email id </label>
			<input type="text" value={this.state.id} required onChange={this.handleID}/> 
			
			<button type="submit" className="btn btn-danger">Delete</button>
			</form>
			<div className="text-danger">{this.state.message}</div>
			</div>
			;
			break;
		}
		default:
		action=<div></div>;
		}
        return (
           
		   <div>
		   <p> Hello Admin </p>
		   <br/>
		   <br/>
		   <button type="button" className="btn btn-success" onClick={this.handleCreate}>Create</button>&nbsp;
		   <button type="button" className="btn btn-primary" onClick={this.handleRead}>Retrieve</button>&nbsp;
		   <button type="button" className="btn btn-warning" onClick={this.handleUpdate}>Update</button>&nbsp;
		   <button type="button" className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
		   <br/>
			   {action}
		   </div>
        );
    }
}