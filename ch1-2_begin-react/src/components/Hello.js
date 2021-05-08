import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial && <b>*** </b> }
      안녕 {name}!
    </div>
  );
}

Hello.defaultProps = {
  name: '어디갔지'
}

export default Hello;