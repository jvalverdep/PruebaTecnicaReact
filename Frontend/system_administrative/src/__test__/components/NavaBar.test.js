import React from 'react';
import {mount } from 'enzyme';
import {Navarbar} from '../components/Navarbar';

describe('<Navarbar/>' ,() => {
    test('Render de componente Navarbar', () =>{
            const navBar = mount(<Navarbar/>);
            expect(navBar.length).toEqual(1);
    });
    //test()
});