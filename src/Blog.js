import React from 'react';
// import text from './blog1.js';

class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  // showFile = async (e) => {
  //   e.preventDefault()
  //   const reader = new FileReader()
  //   reader.onload = async (e) => { 
  //     const text = (e.target.result)
  //     console.log(text)
  //     alert(text)
  //   };
  //   reader.readAsText(e.target.files[0])
  // }

  render() {
    // console.log(text);
    return (
      <div>
        <p>This is the blog page of the website</p>
        <button onClick={() => this.props.pager("home")}>Go to Home</button>
      </div>
    );
  }
}

export default Blog;
