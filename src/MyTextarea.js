import React, { Component } from "react";

export default class MyTextarea extends Component{
    constructor(props){
        super(props)
        // Stateを初期化
        this.state={
            memo: `Reactは人気のフレームワークです。`,
        }
        this.handleChange= this.handleChange.bind(this)
        this.show = this.show.bind(this)
    }
    // テキストエリアの反映時に入力値をStateに反映
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // [送信]ボタンクリック時に入力値をログ出力
    show(){
        console.log(`メモ：${this.state.memo}`)

    }
    render(){
        // テキストエリアを生成
        return(
            <form>
                <label htmlFor="memo">メモ：</label><br/>
                <textarea id="memo" name="memo"
                cols="30" rows="7" value={this.state.memo}
                onChange={this.handleChange}></textarea><br/>
                <button type="button" onClick={this.show}>送信</button>
            </form>
        )
    }
}