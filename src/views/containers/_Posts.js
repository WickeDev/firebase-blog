import * as React from "react";

import * as styles from 'views/styles/_posts.css'

import {connect} from "react-redux"
import {withRouter} from 'react-router'
import {Panel} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import cx from 'classnames'

import {Button} from 'views/components'

import {postsActions} from "core/posts"

class Posts extends React.Component {
    componentWillMount() {
        const {loadPost} = this.props;
        loadPost();
    }

    createPost = () => {
        const {createPost} = this.props;
        const title = this.titleInput.value;
        const content = this.contentInput.value;

        if ((title === '') && (content === '')) {
            alert('제목과 내용을 입력하세요');
        } else if (title === '') {
            alert('제목을 입력하세요');
        } else if (content === '') {
            alert('내용을 입력하세요');
        } else {
            const post = {
                author: 'author',
                title: title,
                content: content,
                createTime: Date.now().toString(),
            };
            createPost(post);
        }
    };

    deletePost = (key) => {
        const {deletePost} = this.props;
        deletePost(key);
    };

    render() {
        const {posts} = this.props;

        const list = posts.get('list').map(post => {
            const date = new Date();
            const key = post.get('key');
            date.setSeconds(post.get('createTime'));
            const time = date.toString();

            return <Panel key={key}>
                <article className={cx(styles['article'], "card")}>
                    <div>
                        title: {post.get('title')}<br/>
                        author: {post.get('author')}<br/>
                        createTime: {time}<br/>
                    </div>
                    <br/>
                    <Panel>
                        <ReactMarkdown source={post.get('content')}/>
                    </Panel>
                    <div className={styles['bottom-container']}>
                        <Button
                            color="btn-danger"
                            onClick={() => {
                                this.deletePost(key);
                            }}
                        >
                            Delete Post
                        </Button>
                    </div>
                </article>
            </Panel>
        });

        return (
            <div className={styles['contents']}>
                {list}
            </div>
        );
    }
}

const mapStateToProps = ({posts}) => ({
    posts,
});

const mapDispatchToProps = Object.assign(
    {},
    postsActions,
);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Posts));
