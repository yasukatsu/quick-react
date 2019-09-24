import React, {Component} from 'react'

export default class MyCheck extends Component{
    constructor(props){
        super(props)
        // Stateを初期化
        this.state={
            send: true,
        }
        this.handleChangeCheck = this.handleChangeCheck.bind(this)
        this.show = this.show.bind(this)
    }

    // 3.チェックボックス変更時にチェック状態をStateに反映
    handleChangeCheck(e){
        this.setState({
            [e.target.name]: e.target.checked
        })
    }

    // [送信]ボタンクリック時にチェック状態をログ出力
    show(){
        console.log(`メール送付：${this.state.send?'有効':'無効'}`)
    }
    render(){
        return(
            // 1.単一のチェックボックスを生成
            <form>
                <input id="send" name="send" type="checkbox"
                checked={this.state.send}
                onChange={this.handleChangeCheck} />
                <label htmlFor="send">:メール送付</label><br />
                <button type="button" onClick={this.show}>送信</button>
            </form>


        )
    }
}