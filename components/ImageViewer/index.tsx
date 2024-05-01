import { StyleSheet, Image, ImageProps } from 'react-native'

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: '100%',
    borderRadius: 18,
  },
})

const ImageViewer = (props: ImageProps) => {
  return <Image source={props.source} style={styles.image} {...props} />
}

export default ImageViewer
