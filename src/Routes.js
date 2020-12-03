import React from 'react';
import Home from './Home';
import Blog from './Blog';

class Routes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    };
    this.change_page = this.change_page.bind(this)
  }

  componentDidMount() {
  }

  change_page(page_in) {
    this.setState({
      page: page_in,
    });
  }

  render() {
    switch(this.state.page){
      case "home":
        return <Home pager={this.change_page}/>
      case "blog":
        return <Blog pager={this.change_page}/>
      default:
        return <p>This page option is invalid</p>
    }
  }
}

export default Routes;
