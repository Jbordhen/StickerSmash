import ImageViewer from 'components/ImageViewer'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Button from './components/Button'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import CircleButton from './components/Button/CircleButton'
import IconButton from './components/Button/IconButton'

const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {
  const [selectedImage, setSelectedImage] = useState<null | string>(null)
  const [showAppOptions, setShowAppOptions] = useState(false)

  const onReset = () => {
    setShowAppOptions(false)
  }

  const onAddSticker = () => {
    // we will implement this later
  }

  const onSaveImageAsync = async () => {
    // we will implement this later
  }

  const pickImageAsync = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      })
      if (result.canceled) return

      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } catch (error) {}
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          source={selectedImage ? { uri: selectedImage } : PlaceholderImage}
        />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon='refresh' label='Reset' onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon='save' label='Save' onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label='Choose a photo'
            style={{ backgroundColor: '#fff', borderRadius: 8 }}
            startIcon={<FontAwesome name='photo' size={16} color={'#25292e'} />}
            onPress={pickImageAsync}
          />
          <Button
            label='Use this photo'
            style={{ backgroundColor: '#fff', borderRadius: 8 }}
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    color: '#000',
    gap: 8,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})
