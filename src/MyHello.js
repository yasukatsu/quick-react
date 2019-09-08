import React, { Component } from 'react';

export default class MyHello extends Component {
    // 2.プロパティ値を元に出力を生成
    render() {
        return <div>こんにちは、{this.props.children}さん！</div>;
    }
}