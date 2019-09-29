import React, {Component} from 'react'

export default class MyPage extends Component{
    render(){
        const id = this.props.match.params.page
        return(
            <div>現在{id}ページです。</div>
        )
    }
}