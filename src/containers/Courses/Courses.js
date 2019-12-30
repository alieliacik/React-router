import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Courses.css';

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: 'First Course ' },
      { id: 2, title: 'Second Course ' },
      { id: 3, title: 'Third Course ' }
    ]
  }

  render() {
    return (
      <div>
        <h1>React Router</h1>
        <section className="Courses">
          {this.state.courses.map(course => {
            return <Link key={course.id}
              to={`/courses/${course.id}/${course.title}`}>
              <article className="Course" >{course.title}</article>
            </Link>;
          })}
        </section>
      </div>
    );
  }
}

export default Courses;