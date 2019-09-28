import React, {Component} from 'react'

export default class MyLife extends Component{
    constructor(props){
        super(props)
        // Stateの初期化
        this.state={
            current: new Date()
        }
    }
    // タイマーの初期化（1000ミリ秒で更新）
    componentDidMount(){
        this.timer = setInterval(()=> {
            this.setState({
                current: new Date()
            })
        }, 1000)
    }
    // タイマーの破棄
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    // Stateに基づいて、現在時刻を表示
    render(){
        return(
            <div>現在時刻は、{this.state.current.toLocaleString()}です。</div>
        )
    }
}