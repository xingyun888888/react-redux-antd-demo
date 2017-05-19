import React, {Component, PropTypes} from 'react';
import {History, Link } from 'react-router';
import {connect} from 'react-redux';
import { is, fromJS} from 'immutable';
import template from './common/template'
/*=================
  BottonView.jsx 子组件
==================*/
class BottonView extends Component{
    constructor(){
        super();
        this.pClick =() =>{
         };
        this.state = {

        }
    }
    render(){
        return(
            <div id='BottonView'>
                <p className="lesson-3">botton component</p>
                <Link className='link_page2' to='/page2'>link to page2</Link>
                <Link className='link_page3' to='/page3'>link to page3</Link>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState){
      // let randerFlag = !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
       return  true;
    }
}
export default template({
  id:'',
  url:'',
  component:BottonView
})
