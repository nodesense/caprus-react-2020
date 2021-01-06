import React, {forwardRef, useState} from 'react';

const TextinputFunc = React.forwardRef((props, ref) => (
    <div>
    <label>Enter data</label>
    <input {...props} ref={ref} />
    </div>
  ));

 

  export default TextinputFunc;