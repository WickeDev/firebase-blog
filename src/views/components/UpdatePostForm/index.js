import * as React from 'react'
import Input from 'react-toolbox/lib/input'

import * as styles from './styles.css'
import CardSection from '../CardSection'
import {Button} from 'react-toolbox/lib/button'


class PostForm extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.state = {title: '', content: ''}
    }

    handleChange = (name, value) => {
        this.setState({...this.state, [name]: value})
    }

    updatePost = () => {
        const {params: {key}, updatePost, router} = this.props
        const title = this.state.title
        const content = this.state.content

        if ((title === '') && (content === '')) {
            alert('제목과 내용을 입력하세요')
        } else if (title === '') {
            alert('제목을 입력하세요')
        } else if (content === '') {
            alert('내용을 입력하세요')
        } else {
            const post = this.getPost(this.props)

            const newPost = {
                ...post.toJS(),
                title: title,
                content: content,
                updateTime: new Date().toISOString(),
            }

            updatePost(key, newPost)
                .then(() => {
                    router.push('/')
                })
                .catch(err => {
                    alert(err)
                })
        }
    }

    getPost(props) {
        const {params: {key}, posts} = props

        const list = posts.get('list')
        return list.filter(post => {
            return post.get('key') === key
        }).get(0)
    }

    componentWillReceiveProps(nextProps) {
        const post = this.getPost(nextProps)

        if (post !== undefined) {
            this.setState({title: post.get('title'), content: post.get('content')})
        }
    }

    render() {
        return (
            <section>
                <div className={styles['content-container']}>
                    <CardSection>
                        <Input
                            type='text'
                            value={this.state.title}
                            onChange={this.handleChange.bind(this, 'title')}
                            label='제목을 여기에 입력하세요'/>
                        <Input
                            type='text'
                            value={this.state.content}
                            onChange={this.handleChange.bind(this, 'content')}
                            label='컨텐츠를 작성하세요'
                            name='content'
                            multiline={true} rows={25}
                        />
                    </CardSection>
                </div>
                <div className={styles['button-container']}>
                    <CardSection>
                        <Button
                            raised
                            primary
                            onClick={::this.updatePost}
                        >
                            업데이트
                        </Button>
                    </CardSection>
                </div>
            </section>
        )
    }
}

export default PostForm