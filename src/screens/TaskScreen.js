import React from 'react';
import {View, StyleSheet, ScrollView, SectionList} from 'react-native';
import CurvedPanHeader from '../components/CurvedPanHeader';
import CurvedBodyPan from '../components/CurvedBodyPan';
import AppText from '../components/AppText';
import typography from '../config/typography';
import ProfileImageWithRightDescription from '../components/ProfileImageWithRightDescription';
import IconWithDescription from '../components/IconWithDescription';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppBadge from '../components/AppBadge';
import ProfileBar from '../components/project/ProfileBar';
import routes from '../navigation/routes';
import ImageInput from '../components/ImageInput';
import CommentsPan from '../components/CommentsPan';
import * as faker from 'faker';
import Comment from '../components/Comment';
const profiles = [
  {id: 1, image: 'https://picsum.photos/200'},
  {id: 2, image: 'https://picsum.photos/200'},
  {id: 3, image: 'https://picsum.photos/200'},
  {id: 4, image: 'https://picsum.photos/200'},
];

const gallery = [
  {id: 1, image: 'https://picsum.photos/200'},
  {id: 2, image: 'https://picsum.photos/200'},
  {id: 3, image: 'https://picsum.photos/200'},
  {id: 4, image: 'https://picsum.photos/200'},
];

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
export default function TaskScreen({navigation}) {
  return (
    <>
      <SectionList
        ListHeaderComponent={
          <>
            <CurvedPanHeader
              onBack={() => navigation.navigate(routes.PROJECT)}
            />
            <CurvedBodyPan>
              <AppText style={[typography.heading4, styles.title]}>
                Alo Pakory Banne hen, Workshop aur Hackathon
              </AppText>
              <ProfileImageWithRightDescription
                image="https://picsum.photos/200"
                role="Team Lead"
                name="Muhammad Yasir"
              />
              <AppText
                style={[typography.bodyLarge, {marginTop: 5, marginBottom: 5}]}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illowe3 inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </AppText>
              <View style={styles.statusBar}>
                <IconWithDescription
                  name="md-flag"
                  color="red"
                  description="03/12/2021"
                  component={Ionicons}
                  border={{}}
                />
                <AppBadge
                  information="High"
                  color="#fd9b35"
                  textColor="white"
                />
                <AppBadge
                  information="In-Progress"
                  color="#8869ff"
                  textColor="white"
                />
              </View>
              <AppText style={typography.heading4}>Assigned To</AppText>

              <ProfileBar profiles={profiles} />
              <AppText style={typography.heading4}>Gallery</AppText>

              <View style={styles.gallery}>
                <ScrollView horizontal>
                  {gallery.map(g => (
                    <ImageInput key={g.id} source={g.image} />
                  ))}
                </ScrollView>
              </View>
            </CurvedBodyPan>
          </>
        }
        sections={comments}
        renderSectionHeader={({section}) => (
          <Comment comment={item} />
        )}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) =>}
      />

      <CommentsPan />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#3e405c',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  gallery: {
    flexDirection: 'row',
    marginVertical: 15,
  },
});
