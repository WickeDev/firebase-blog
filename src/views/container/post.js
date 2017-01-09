import * as React from "react";
import {postsActions} from "core/posts";
import {connect} from "react-redux";
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
import {browserHistory} from 'react-router'

class Post extends React.Component {

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

            createPost(post)
                .then(() => {
                    browserHistory.push('/');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    deletePost = (key) => {
        const {deletePost} = this.props;
        deletePost(key);
    };

    render() {
        return (
            <div>
                <FormGroup
                    controlId="formControlsText"
                    style={{
                        width: "80%",
                        left: 0,
                        right: 0,
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <ControlLabel>
                        Write your new post
                    </ControlLabel>
                    <FormControl
                        inputRef={(ref) => (this.titleInput = ref)}
                        type="text"
                        label="Text"
                        placeholder="Title"
                    />
                    <br/>
                    <FormControl
                        style={{
                            height: '300px',
                        }}
                        inputRef={(ref) => (this.contentInput = ref)}
                        componentClass="textarea"
                        placeholder="Content"
                        cols="40"
                    />
                    <br/>
                    <Button onClick={this.createPost}>
                        Create Post
                    </Button>
                </FormGroup>
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

export default connect(mapStateToProps, mapDispatchToProps)(Post);
