import * as React from "react";

import {connect} from "react-redux"
import {withRouter} from 'react-router'
import {Panel, Button} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

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
                <article
                    style={{
                        textAlign: 'left',
                        margin: '10px',
                        padding: '10px',
                    }}>
                    <div>
                        title: {post.get('title')}<br/>
                        author: {post.get('author')}<br/>
                        createTime: {time}<br/>
                    </div>
                    <br/>
                    <Panel>
                        <ReactMarkdown source={post.get('content')}/>
                    </Panel>
                    <div
                        style={{
                            textAlign: 'right',
                            width: '100%',
                        }}>
                        <Button
                            bsStyle="danger"
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
            <div
                style={{
                    width: "80%",
                    left: 0,
                    right: 0,
                    marginLeft: "auto",
                    marginRight: "auto"
                }}
            >
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
