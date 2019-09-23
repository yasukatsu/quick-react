import React, {Component} from 'react';

export default class MyList extends Component{
    constructor(props){
        super(props)
        // 2.Stateを初期化
        this.state = {
            fruit: ['apple', 'melon'],
        }
        this.handleChangeList = this.handleChangeList.bind(this)
        this.show = this.show.bind(this)
    }
    // 3.リストボックス変更時に選択値をStateに反映
    handleChangeList(e){
        // 選択値を格納するための配列
        const data = []
        // <option>要素を順に走査し、選択されたものを取得
        const opts = e.target.options
        for (let i = 0; i < opts.length; i++){
            if(opts[i].selected) {
                data.push(opts[i].value)
            }
        }
        this.setState({
            [e.target.name]: data
        })
    }
    // [送信]ボタンクリック時に選択値をログ出力
    show(){
        console.log(`好きな果物：${this.state.fruit}`)
    }
    
    render(){
        // 1.リストボックスを生成
        return(
            <form>
                <label htmlFor="fruit">好きな果物：</label><br />
                <select id="fruit" name="fruit" value={this.state.fruit}
                size="5" multiple={true}
                onChange={this.handleChangeList}>
                    <option value="apple">リンゴ</option>
                    <option value="orange">オレンジ</option>
                    <option value="melon">メロン</option>
                    <option value="grape">葡萄</option>
                    <option value="strawberry">苺</option>
                </select>
                <button type="button" onClick={this.show}>送信</button>
           </form>
        )
    }
}