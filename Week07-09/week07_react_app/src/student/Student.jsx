import React from 'react';

function Student(props) {
  return (
    <div>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <h4>George Brown College, Toronto</h4>
    </div>
  );
}

export default Student;
