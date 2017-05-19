import React, {Component, PropTypes} from 'react';
import {History, Link } from 'react-router';
import {connect} from 'react-redux';
import { is, fromJS} from 'immutable';
import template from '../common/template2'
import Loading from '../Loading'
import Menu from "../menu/menu.jsx"

/*=================
 Page2.jsx 子组件
 ==================*/
class Page3 extends Component{
    constructor(){
        super();
    }
    render(){
        const {fData,getdate,plus,add} = this.props.state;
        console.log(this.props);
        let items;
        if(getdate.data.data){
            console.log(getdate);
            items = (getdate.data.data.stories.map((item,index)=>{
                return <ListItem key={index} {...item} index = {item}/>
            }))
        }
        console.log(this.props.state);
        return(
            <div id='Page2'>
                <Menu></Menu>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState){
        return  true;
    }
}
class ListItem extends Component{
    constructor(){
        super();
    }
    render(){
        let {title ,images ,index} = this.props;
        var imgUrl = {background:'url('+images[0]+') no-repeat center'}
        return(
            <div id='ListItem'>
                <p>{title}</p>
                <div>{this.props}</div>
            </div>
        )
    }
}
export default template({
    id:'',
    url:'/getData',
    component:Page3
})
