import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Jumbotron from './index1.js';
import Footer from './index2.js';
class Parent extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			data:" ",
            width:  800,
            height: 182
		}
	}
    updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ width: update_width, height: update_height });
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

	render()
	{
		return(
				<div>
					<div className="jumbotron sk trf">
						<Jumbotron/>
					</div>
					<Child/>
					<Footer/>
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
        								<p><a href="#" class="btn btn-primary jh" role="button">click</a></p>
      						</div>
    					</div>
    				</div>
					<div class="col-sm-6 col-md-4">
    					<div class="thumbnail">
    						<div class="caption">
        						<h3>TOI NewsPaper</h3>
        							<p></p>
        								<p><a href="#" class="btn btn-primary jh" role="button">Click</a></p>
      						</div>
    					</div>
    				</div>
    				<div class="col-sm-6 col-md-4">
    					<div class="thumbnail">
    						<div class="caption">
        						<h3>Indian Express NewsPaper</h3>
        							<p></p>
        								<p><a href="#" class="btn btn-primary jh" role="button">Click</a></p>
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
        								<p><a href="#" class="btn btn-primary jh" role="button">Click</a></p>
      						</div>
    					</div>
    				</div>
					<div class="col-sm-6 col-md-4">
    					<div class="thumbnail">
    						<div class="caption">
        						<h3>India Today NewsPaper</h3>
        							<p></p>
        								<p><a href="#" class="btn btn-primary jh" role="button">Click</a></p>
      						</div>
    					</div>
    				</div>
    				<div class="col-sm-6 col-md-4">
    					<div class="thumbnail">
    						<div class="caption">
        						<h3>General NewsPaper</h3>
        							<p></p>
        								<p><a href="#" class="btn btn-primary jh" role="button">Click</a></p>
      						</div>
    					</div>
    				</div>
    			</div>
			</div>
		);
	}
}
ReactDOM.render(<Parent/>,document.getElementById("root"))  