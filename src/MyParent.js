import React, {Component} from 'react'
import MyChild from './MyChild'

export default class MyParent extends Component{
    constructor(props){
        super(props)
        // Stateを初期化（初期値は空）
        this.state={
            data: "null"
        }
    }
    
    // 2.自身のStateを更新するupdateメソッド
    update(state){
        this.setState(state)
    }

    render(){
        return(
            <React.Fragment>
                <p>MyParent: {this.state.data}</p>
                {/* 1.updateメソッドを子コンポーネントに引き渡す */}
                <MyChild onUpdate= {this.update.bind(this)} />
            </React.Fragment>
        )
    }
}