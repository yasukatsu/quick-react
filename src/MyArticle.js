import React, {Component} from 'react';
import MyNew from './MyNew';

export default class MyArticle extends Component {
    render() {
        return(
            // 2. dt, dd要素を括るダミーの要素
            <React.Fragment>
                <dt>
                    <a className="App-link" href= {this.props.url}>{this.props.title}</a>
                    {this.props.isNew ? <MyNew /> :null}
                </dt>
                <dd>
                    {this.props.description}
                </dd>
            </React.Fragment>
        );
    }
}