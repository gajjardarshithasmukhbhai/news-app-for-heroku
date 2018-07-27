import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
class Jumbotron extends React.Component{
	render()
	{
		return(
				<div>
					<div class="container">
							<h2 className="text color"><b>Newspaper App</b></h2>
							<br/>
							<br/>
							<ul class="qw">
								<li><b>Gujrati NewsPaper</b></li>
								<li><b>TOI NewsPaper</b></li>
								<li><b>Indian Express NewsPaper</b></li>
								<li><b>DNA NewsPaper</b></li>
								<li><b>India Today News paper</b></li>								
								<li><b>General News paper</b></li>																
							</ul>
						</div>
				</div>
		);
	}
}
export default Jumbotron;