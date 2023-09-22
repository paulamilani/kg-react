/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import { View, ScrollView } from 'react-native'
import _ from 'lodash'
import { Avatar } from 'react-native-elements'
import { Header } from '../../../componentes/header'

interface AvatarData {
  image_url: string
}

const dataList: AvatarData[] = [
  {
    image_url:
      'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'
  },
  {
    image_url:
      'https://randomuser.me/api/portraits/men/36.jpg'
  },
  {
    image_url:
      'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'
  },
  {
    image_url:
      'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg'
  },
  {
    image_url:
      'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg'
  },
  {
    image_url:
      'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg'
  }
]

interface AvatarComponentProps {}

const Avatars: React.FunctionComponent<AvatarComponentProps> = () => {
  return (
    <>
      <Header title="Avatar" view="avatar" />
      <ScrollView>
        {_.chunk(dataList, 3).map((chunk, chunkIndex) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 30
            }}
            key={chunkIndex}
          >
            {chunk.map((l, i) => (
              <Avatar
                size={64}
                rounded
                source={(l.image_url.length > 0) ? { uri: l.image_url } : {}}
                key={`${chunkIndex}-${i}`}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </>
  )
}

export default Avatars
