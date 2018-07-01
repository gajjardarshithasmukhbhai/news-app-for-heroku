import React, { Component } from 'react';


class Header extends Component{
	render(){
		<Head/>
		return(
				<div className="Header">
					<Head/>
					<h1 className="gfr">Gajjar Darshit</h1>
				</div>
			);
	}
}
class Head extends Component{
	render(){
		return(
				<h1 className="fr">Gajjar Darshit</h1>
			);
	}
}
export default Header;