import * as React from 'react'
import {Button} from 'react-toolbox/lib/button'

import ReactMarkdown from 'react-markdown'


import * as styles from './styles.css'
import CardSection from '../CardSection'


class Content extends React.Component {

    getNotUndefined = (post, key) => {
        return post !== undefined ? post.get(key) : null
    };

    getTimeString = (time) => {
        if (time === null) return;
        const date = new Date();
        date.setSeconds(time);
        return date.toString();
    };

    deletePost = (key) => {
        const {deletePost, router} = this.props;
        deletePost(key).then(() => {
            router.push('/');
        });
    };

    getDeleteButton(key) {
        if (key !== null) {
            return <Button
                onClick={() => this.deletePost(key)}
                raised
                accent
                className={styles['button-container']}
            >
                삭제
            </Button>
        } else {
            return null;
        }
    }

    render() {

        const {routing, posts} = this.props;
        const {locationBeforeTransitions} = routing;
        const {pathname} = locationBeforeTransitions;
        const paths = pathname.split('/');

        // content
        let post = posts.list.filter(value => {
            return value.get('key') === paths[2];
        });

        post = post.get(0);

        // key
        const key = this.getNotUndefined(post, 'key');

        //title
        const title = this.getNotUndefined(post, 'title');

        // createTime
        let createTime = this.getNotUndefined(post, 'createTime');
        createTime = this.getTimeString(createTime);

        const content = this.getNotUndefined(post, 'content');

        return (
            <div className={styles['content']}>
                <CardSection>
                    <h1>
                        {title}
                    </h1>
                    <div>
                        {createTime}
                    </div>
                    <br/>
                    <ReactMarkdown source={content}/>
                    {this.getDeleteButton(key)}
                </CardSection>
            </div>
        )
    }
}

export default Content;
