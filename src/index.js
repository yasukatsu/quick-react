// 1.React関連のライブラリをインポート
import React from 'react';
import ReactDOM from 'react-dom';

// 2.アプリ固有のファイルをインポート
import './index.css';
import App from './App';

// 3.キャッシュのためのサービスをインポート
import * as serviceWorker from './serviceWorker';

// 4.Appコンポーネントを実行
ReactDOM.render(<App />, document.getElementById('root'));

// 5.サービスを有効化
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
