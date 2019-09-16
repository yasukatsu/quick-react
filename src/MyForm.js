import React, { Component } from "react";

export default class MyForm extends Component{
    constructor(props){
        super(props)
        // 1.Stateを初期化
        this.state={
            name: '山田',
            email: 'yamada@example.com'
        }
        // thisを固定
        this.handleChange = this.handleChange.bind(this)
        this.show = this.show.bind(this)
    }

    // 3.入力ボックスの変更をStateに反映
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // 4.[送信]ボタンで入力値をログに出力
    show(){
        console.log(`name: ${this.state.name}`)
        console.log(`email: ${this.state.email}`)
    }

    // フォームを描画
    render(){
        return(
            <form>
                {/* 2.State値を個々のフォーム要素に反映 */}
                <div>
                    <label htmlFor="name">名前：</label>
                    <input id="name" name="name" type="text"
                    onChange={this.handleChange}
                    value={this.state.name} />
                </div>
                <div>
                    <label htmlFor="email">メールアドレス：</label>
                    <input id="email" name="email" type="mail"
                    onChange={this.handleChange}
                    value={this.state.email} />
                </div>
                <div>
                    <button type="button" onClick={this.show}>送信</button>
                </div>
            </form>
        )
    }
}