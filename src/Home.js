import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <p>This is the homepage of the website</p>
        <button onClick={() => this.props.pager("blog")}>Go to Blog</button>
      </div>
    );
  }
}

export default Home;
