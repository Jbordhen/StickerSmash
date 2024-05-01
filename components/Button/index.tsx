import {
  Pressable,
  View,
  Text,
  StyleSheet,
  ViewProps,
  PressableProps,
} from 'react-native'

export interface IButton {
  label: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  style?: ViewProps['style']
  onPress: PressableProps['onPress']
}

const Button = ({ label, startIcon, endIcon, style, onPress }: IButton) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable style={styles.button} onPress={onPress}>
        {startIcon}
        <Text style={styles.label}>{label}</Text>
        {endIcon}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: 'inherit',
  },
})

export default Button
