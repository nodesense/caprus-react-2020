import React from 'react';
import renderer from 'react-test-renderer';

import Counter from './Counter';


test('Link changes the class when hovered', () => {
    const component = renderer.create(
      <Counter startValue={100} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component.getInstance().increment();
   // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot(); // 101
});

// npm test
