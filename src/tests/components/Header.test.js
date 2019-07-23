import React from 'react'
import { shallow } from 'enzyme'
//import toJSON from 'enzyme-to-json'
//import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'

// react-test-renderer - two main ways of testing react components: 
// Shallow rendering (only renders the single component) and Full DOM rendering (renders child components)

test('should render Header correctly', () =>
{
    const wrapper = shallow(<Header />)

    //expect(toJSON(wrapper)).toMatchSnapshot()
    expect(wrapper).toMatchSnapshot()
    
    //expect(wrapper.find('h1').length).toBe(1)
    //expect(wrapper.find('h1').text()).toBe('Expensify')

    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)

    // expect(renderer.getRenderOutput()).toMatchSnapshot()
    // console.log(renderer.getRenderOutput())
})