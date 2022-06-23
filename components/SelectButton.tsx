import React, { memo } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Size } from '../Themes'

interface IProps {
  text: string
  textSize: number
  isChecked: boolean
  onPress(): void
  disable: boolean
}

const SelectButton = ({
  text,
  textSize,
  isChecked,
  onPress,
  disable = false
}: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ marginRight: Size.width10 }}
      disabled={disable}
    >
      <View
        style={{
          flexDirection: 'row',
          overflow: 'hidden',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: isChecked === true ? '#0F172A' : '#D3D3E1',
          opacity: disable ? 0.4 : 1
        }}
      >
        <Text
          style={[
            styles.button_item,
            {
              fontSize: textSize,
              color: isChecked === true ? '#0F172A' : '#4E5369',
              opacity: disable ? 0.4 : 1
            }
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button_item: {
    padding: Size.width8,
    marginVertical: Size.width5,
    borderRadius: Size.width5,
    textAlign: 'center'
  }
})

export default memo(SelectButton)
