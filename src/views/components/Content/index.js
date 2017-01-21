// @flow

import * as React from 'react'
import {Button} from 'react-toolbox/lib/button'

import ReactMarkdown from 'react-markdown'
import moment from 'moment'

import * as styles from './styles.css'
import CardSection from '../CardSection'


class Content extends React.Component {

    props: {
        auth:any,
        post:any,
    }

    getNotUndefined = (post, key) => {
        return post !== undefined && post !== null ? post.get(key) : null
    }

    getNotUndefinedTitle = (post) => {
        const title = this.getNotUndefined(post, 'title')
        return post !== undefined ? title : 'X-D'
    }

    getTime = (post, key) => {
        if (post === undefined) return null
        const time = post.get(key)
        if ((time === null) || (time === undefined)) {
            return null
        }
        return moment(time).format('ll')
    }

    getNotUndefinedContent = (post) => {
        const content = this.getNotUndefined(post, 'content')
        return post !== undefined ? content : '게시물을 찾을 수 없습니다.'
    }


    getTimeString = (time) => {
        if (time === null) return
        const date = new Date()
        date.setSeconds(time)
        return date.toString()
    }

    deletePost = (key) => {
        const {deletePost, router} = this.props
        deletePost(key).then(() => {
            router.push('/')
        })
    }

    updatePost = (key) => {
        const {router} = this.props
        router.push(`/update-post/${key}`)
    }

    getDeleteButton = (key) => {
        if (key !== null) {
            return <Button
                onClick={() => this.deletePost(key)}
                raised
                className={styles['button']}
            >
                삭제
            </Button>
        } else {
            return null
        }
    }

    getModifyButton = (key) => {
        if (key !== null) {
            return <Button
                onClick={() => this.updatePost(key)}
                raised
                className={styles['button']}
            >
                수정
            </Button>
        } else {
            return null
        }
    }

    render() {
        const {auth:{authenticated}, posts, params: {key}} = this.props
        const list = posts.get('list')

        const post = list.filter(post => {
            return post.get('key') === key
        }).get(0)


        //title
        const title = this.getNotUndefinedTitle(post)

        // createTime
        let createTime = this.getTime(post, 'createTime')

        // updateTime
        let updateTime = this.getTime(post, 'updateTime')

        const content = this.getNotUndefinedContent(post)

        return (
            <div className={styles['content-container']}>
                <div className={styles['content']}>

                    <CardSection >
                        <h1>
                            {title}
                        </h1>
                        {authenticated ?
                            <div className={styles['button-container']}>
                                {this.getDeleteButton(key)}
                                {this.getModifyButton(key)}
                            </div>
                            : null}
                        <div>
                            <div>작성일: {createTime}</div>
                            <div>업데이트: {updateTime}</div>
                        </div>
                        <br/>
                        <ReactMarkdown source={content ? content : '' }/>
                    </CardSection>
                </div>

            </div>
        )
    }
}

export default Content
