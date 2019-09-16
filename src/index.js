// 1.React関連のライブラリをインポート
import React from 'react';
import ReactDOM from 'react-dom';

// 2.アプリ固有のファイルをインポート
import './index.css';
import App from './App';

// 3.キャッシュのためのサービスをインポート
import * as serviceWorker from './serviceWorker';

// 4.Appコンポーネントを実行
    ReactDOM.render(
        <React.Fragment>
            <App />
        </React.Fragment>,
        document.getElementById('root')
    );

// 5.サービスを有効化
serviceWorker.unregister();
