import React, {Component} from 'react';

export default class MyPool extends Component {
    // ボタンクリック時にログ出力
    show(e) {
        const t = e.type
        e.persist()
        console.log(t) // 結果：１、click
        setTimeout(() => {
            console.log(t) // 結果：２、null
        }, 1000)
    }
    render() {
        return (
            <button type="button" onClick={this.show.bind(this)}>イベント情報</button>
        )
    }
}
