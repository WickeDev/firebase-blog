import * as React from 'react'
import {Button} from 'react-toolbox/lib/button'

import ReactMarkdown from 'react-markdown'
import Immutable from 'immutable'


import * as styles from './styles.css'
import CardSection from '../CardSection'


class Content extends React.Component {

    getNotUndefined = (post, key) => {
        return post !== undefined && post !== null ? post.get(key) : null
    };

    getNotUndefinedTitle = (post) => {
        const title = this.getNotUndefined(post, 'title');
        return post !== undefined ? title : 'X-D';
    };

    getNotUndefinedCreateTime = (post) => {
        const createTime = this.getNotUndefined(post, 'createTime');
        return post !== undefined ? createTime : new Date();
    };

    getNotUndefinedContent = (post) => {
        const content = this.getNotUndefined(post, 'content');
        return post !== undefined ? content : '게시물을 찾을 수 없습니다.';
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
                className={styles['button-container']}
            >
                삭제
            </Button>
        } else {
            return null;
        }
    }

    render() {

        const {auth, routing, posts} = this.props;

        const pathname = Immutable.fromJS(routing)
            .getIn(['locationBeforeTransitions', 'pathname']);
        const paths = pathname.slice(1).split('/');

        // content
        let post = posts.list.filter(value => {
            return value.get('key') === paths[1];
        });

        post = post.get(0);

        // key
        const key = this.getNotUndefined(post, 'key');

        //title
        const title = this.getNotUndefinedTitle(post);

        // createTime
        let createTime = this.getNotUndefinedCreateTime(post);
        createTime = this.getTimeString(createTime);

        const content = this.getNotUndefinedContent(post);

        return (
            <div className={styles['content']}>
                <div className={styles['button-container']}>
                    {auth.authenticated ? this.getDeleteButton(key) : null}
                </div>
                <div className={styles['content-box']}>
                    <CardSection >
                        <h1>
                            {title}
                        </h1>
                        <div>
                            {createTime}
                        </div>
                        <br/>
                        <ReactMarkdown source={content ? content : '' }/>
                    </CardSection>
                </div>

            </div>
        )
    }
}

export default Content;
