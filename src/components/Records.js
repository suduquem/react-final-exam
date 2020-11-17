import React from 'react';

import './Records.css';

const Records = ({ records }) => {
  console.log('Lo que recibe Records', records);
    return records.map((item) => (
        <div className='item' key={item.id}>{item.title}</div>
    ));
};

export default Records;
