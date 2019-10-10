import { shallow, configure } from 'enzyme';
import React from 'react';

import {fakeOrders} from '../mock/fakeOrders';
import Order from './Order';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('Order component', () => {
    const wrapper1 = shallow(<Order order={fakeOrders[0]}/>);
    const wrapper2 = shallow(<Order order={fakeOrders[1]}/>);
    const wrapper3 = shallow(<Order order={fakeOrders[2]}/>);
    const wrapperNull = shallow(<Order order={{
		id: 123,
		date: 1544356800000,
		shop: 'Ali Express',
		items: []
    }}/>);
    
    it('render first', () => {
        expect(toJson(wrapper1)).toMatchSnapshot();
    })

    it('render second', () => {
        expect(toJson(wrapper2)).toMatchSnapshot();
    })

    it('render third', () => {
        expect(toJson(wrapper3)).toMatchSnapshot();
    })

    it('render none', () => {
        expect(toJson(wrapperNull)).not.toEqual(toJson(wrapper1));
    })
})