import React, {Component} from 'react'

export default class MyRadio extends Component{
    constructor(props){
        super(props)
        // Stateを初期化
        this.state={
            sex:'male',
        }
        this.handleChange= this.handleChange.bind(this)
        this.show=this.show.bind(this)
    }
    // ラジオボタン変更時に選択値をStateに反映
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // 送信ボタンクリック時に選択値をログ出力
    show(){
        console.log(`性別：${this.state.sex}`)
    }
    render(){
        // ラジオボタンリストを生成
        return(
            <form>
                <fieldset>
                    <legend>性別：</legend>
                    <label htmlFor="sex_male">男性</label>
                    <input id="sex_male" name="sex" type="radio" value="male" 
                    checked={this.state.sex==='male'}
                    onChange={this.handleChange} /><br />

                    <label htmlFor="sex_female">女性</label>
                    <input id="sex_female" name="sex"
                    type="radio"  value="female"
                    checked={this.state.sex==='female'}
                    onChange={this.handleChange} /><br />

                    <label htmlFor="sex_female">その他</label>
                    <input id="sex_other" name="sex"
                    type="radio" value="other"
                    checked={this.state.sex === 'other'}
                    onChange={this.handleChange} />
                </fieldset>
                <button type="button" onClick={this.show}>送信</button>
            </form>
        )
    }
}