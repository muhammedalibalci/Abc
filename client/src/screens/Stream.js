import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { getPosts } from '../api/postApi'
import { Card } from 'react-native-elements'
import cardDefaultSrc from '../assets/Images/subject.jpg'
import { ScrollView } from 'react-native-gesture-handler'
export const Stream = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {

        getPosts().then(res => {
            let newArr = [...res.data];
            setPosts(newArr)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <ScrollView>
            {posts.map(post => {
                return <Card
                    image={cardDefaultSrc}
                >
                    <Text style={{ marginBottom: 5 }}>
                        {post.title}
                    </Text>
                    <Text style={{ marginBottom: 5 }}>
                        {post.content}
                    </Text>
                    <Button
                        icon={{ name: 'code' }}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Eşleştir' />
                </Card>
            })}
        </ScrollView>
    )
}
