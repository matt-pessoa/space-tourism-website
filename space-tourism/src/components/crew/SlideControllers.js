import React from 'react';

function SlideControllers(props) {
  return (
    <div className='slideshow'>
      <input
        type='radio'
        className='slide-controller'
        name='slide'
        title='Douglas Hurley'
        onClick={props.handleChange}
      />
      <input
        type='radio'
        className='slide-controller'
        name='slide'
        title='Mark Shuttleworth'
        onClick={props.handleChange}
        checked={props.isChecked}
      />
      <input
        type='radio'
        className='slide-controller'
        name='slide'
        title='Victor Glover'
        onClick={props.handleChange}
      />
      <input
        type='radio'
        className='slide-controller'
        name='slide'
        title='Anousheh Ansari'
        onClick={props.handleChange}
      />
    </div>
  );
}

export default SlideControllers;
