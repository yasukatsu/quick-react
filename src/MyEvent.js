import React, {Component} from 'react';

export default class MyEvent extends Component {
    // 入力ボックス変更時にメッセージを出力
    show(suffix, e) {
        // 3.greetプロパティ、入力値に基づいて、メッセージを生成
        console.log(`${this.props.greet}, ${e.target.value}${suffix}!!`);
    }
    constructor(props) {
        super(props)
        this.show = this.show.bind(this);
    }
    render() {
        return (
            <form>
                <label htmlFor="txtName">名前：</label>
                {/* 第二引数以降で、任意の引数を指定 */}
                <input id="txtName" type="text" onChange={this.show.bind(this, 'さん')} />
            </form>
        )
    }
}