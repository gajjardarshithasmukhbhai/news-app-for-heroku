import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Jumbotron from './index1.js';
class Parent extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			data:" "
		}
	}
	render()
	{
		return(
				<div>
					<div className="jumbotron sk trf">
						<Jumbotron/>
					</div>
					<Child/>
				</div>
		);
	}
}
class Child  extends React.Component{
	render()
	{
		return(
			<div class="container">
				<div class="row">
  					<div class="col-sm-6 col-md-4">
    					<div class="thumbnail">
    						<div class="caption">
        						<h3>Gujrati NewsPaper</h3>
        							<p></p>
        								<p><a href="#" class="btn btn-primary" role="button">click</a></p>
      						</div>
    					</div>
    				</div>
					<div class="col-sm-6 col-md-4">
    					<div class="thumbnail">
    						<div class="caption">
        						<h3>TOI NewsPaper</h3>
        							<p></p>
        								<p><a href="#" class="btn btn-primary" role="button">Click</a></p>
      						</div>
    					</div>
    				</div>
    				<div class="col-sm-6 col-md-4">
    					<div class="thumbnail">
    						<div class="caption">
        						<h3>Indian Express NewsPaper</h3>
        							<p></p>
        								<p><a href="#" class="btn btn-primary" role="button">Click</a></p>
      						</div>
    					</div>
    				</div>
    				<br/>
    				<br/>
    				<br/>
    				<br/>
    				<br/>
    				<br/>
    				<br/>
    				<br/>
    				<br/>
					<div class="col-sm-6 col-md-4">
    					<div class="thumbnail">
    						<div class="caption">
        						<h3>DNA NewsPaper</h3>
        							<p></p>
        								<p><a href="#" class="btn btn-primary" role="button">Click</a></p>
      						</div>
    					</div>
    				</div>
					<div class="col-sm-6 col-md-4">
    					<div class="thumbnail">
    						<div class="caption">
        						<h3>India Today NewsPaper</h3>
        							<p></p>
        								<p><a href="#" class="btn btn-primary" role="button">Click</a></p>
      						</div>
    					</div>
    				</div>
    				<div class="col-sm-6 col-md-4">
    					<div class="thumbnail">
    						<div class="caption">
        						<h3>General NewsPaper</h3>
        							<p></p>
        								<p><a href="#" class="btn btn-primary" role="button">Click</a></p>
      						</div>
    					</div>
    				</div>
    			</div>
			</div>
		);
	}
}
ReactDOM.render(<Parent/>,document.getElementById("root"))  