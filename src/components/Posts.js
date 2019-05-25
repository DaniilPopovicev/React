import React, {Component} from 'react';
import Post from './Post'
export default class Posts extends Component {
	render () {
		return (
			<div className="left">
				<Post alt="Nature" src="http://isha.sadhguru.org/blog/wp-content/uploads/2016/05/natures-temples.jpg" />
				<Post alt="Nature" src="http://isha.sadhguru.org/blog/wp-content/uploads/2016/05/natures-temples.jpg" />
			</div>
		)
	}
}