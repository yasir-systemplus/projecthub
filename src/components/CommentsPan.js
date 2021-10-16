import React from 'react';
import {View, Text, FlatList} from 'react-native';
import faker from 'faker';
import Comment from './Comment';

export default function CommentsPan(props) {
  const comments = [
    {
      id: 1,
      message:
        'We would need to revamp colors. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      commentor: 'Bilal Shahzad',
      profile: faker.internet.avatar(),
    },
    {
      id: 2,
      message:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.Yes, I am making a new theme. Lor ',
      commentor: 'Asif Khan',
      profile: faker.internet.avatar(),
    },
    {
      id: 3,
      message:
        'We need permission. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. From our boss to implement changes.',
      commentor: 'Ali Azmat',
      profile: faker.internet.avatar(),
    },
  ];
  return (
    <View
      style={{backgroundColor: '#f2f3f9', paddingHorizontal: 16}}
      {...props}>
      <FlatList
        nestedScrollEnabled={true}
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({item, index, separators}) => <Comment comment={item} />}
      />
    </View>
  );
}
