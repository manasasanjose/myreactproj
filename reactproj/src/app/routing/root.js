import React from "react";
import {Header1} from "./Header1";

export class Root extends React.Component
{
	render()
	{
		return(
		<div className="container">
		<div className="row">
		<div className="col-xs-10 col-xs-offset-1">
		<Header1/>
		</div>
		</div>
		<div className="row">
		<div className="col-xs-10 col-xs-offset-1">
		{this.props.children}
		</div>
		</div>
		</div>
		
		);
	}
}
