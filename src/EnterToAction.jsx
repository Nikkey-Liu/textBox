import { Component, createElement } from "react";


import "./ui/EnterToAction.css";

export default class EnterToAction extends Component {
    constructor(props){//当你实现自定义组件，需要实现多个method的时候，首先你需要创建构造方法
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleKeyPress= this.handleKeyPress.bind(this);
    }
    handleChange(event){
        const{attribute}=this.props;
        attribute.setValue(event.target.value);//当自定义组件内地数据改变，实现数据回传到mendix提供的textbox中
    }
      //action 接口实现如下：
            
            // export interface ActionValue {
            //     readonly canExecute: boolean;
            //     readonly isExecuting: boolean;
            //     execute(): void;
            // }
    handleKeyPress(event){//实现按键Enter，执行action，action包括调用微流纳流等；
        const{action}=  this.props;
        if(event.which===13 && action.canExecute){
            action.execute();
          
        }

    }
    render() {
        const{attribute}= this.props;//获得数据从EnterToAction.xml的属性
      return(<input
        type="text"
        className={'form-control ${this.props.class}'}//设置UI style
        value={attribute.value}//显示从EnterToAction.xml的属性获得的数据。
        onChange={this.handleChange}//调用当value变化时的方法
        onKeyPress={this.handleKeyPress}//调用按Enter键时的方法。
       />) ;
 
    }
}
