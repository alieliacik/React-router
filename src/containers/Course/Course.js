import React, { Component } from 'react';

class Course extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.match.params.courseTitle}</h1>
        <p> <h2>ID: {this.props.match.params.courseId}</h2> </p>
        <button
          style={{
            color: 'white',
            backgroundColor: 'green',
            padding: '9px 38px',
            outline: 'none',
            border: '1px solid green',
            borderRadius: '5px'
          }}
          onClick={() => this.props.history.push('/courses')}>Back</button >
      </div>
    );
  }
}

export default Course;