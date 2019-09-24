import React, {Component} from 'react'

export default class MyCheckMulti extends Component{
    constructor(props){
        super(props)
        // 1.Stateを初期化
        this.state={
            fruit:['apple', 'melon']
        }
        this.handleChangeMulti=this.handleChangeMulti.bind(this)
        this.show = this.show.bind(this)
    }
    // 2.チェックボックス変更時にチェック項目をStateに反映
    handleChangeMulti(e){
        const fs = this.state.fruit
        // チェック時は追加、非チェック時は削除
        if (e.target.checked){
            fs.push(e.target.value)
        } else {
            fs.splice(fs.indexOf(e.target.value), 1)
        }
        this.setState({
            [e.target.name]: fs
        })
    }

    // [送信]ボタンクリック時にチェック状態をログ出力
    show(){
        console.log(`好きな食べ物：${this.state.fruit}`)
    }
    render(){
        // チェックボックスのリストを生成
        return(
            <form>
                <fieldset>
                    <legend>好きな果物：</legend>
                    {/* 3. チェック状態を反映 */}

                    <label htmlFor="fruit apple">リンゴ</label>
                    <input id="fruit_apple" name="fruit"
                    type="checkbox" value="apple"
                    checked={this.state.fruit.includes('apple')}

                    onChange={this.handleChangeMulti} /><br />
                    <label htmlFor="fruit melon">メロン</label>
                    <input id="fruit_melon" name="fruit"
                    type="checkbox" value="melon"
                    checked={this.state.fruit.includes('melon')}
                    
                    onChange={this.handleChangeMulti} /><br />
                </fieldset>
                <button type="button" onClick={this.show}>送信</button>
            </form>
        )
    }
}