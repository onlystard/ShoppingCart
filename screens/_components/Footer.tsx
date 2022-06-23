import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { Button } from '../../components'
import { Ionicons as Icon } from '@expo/vector-icons'
import { Size } from '../../Themes'

interface IProps {
  disabled: boolean
  onLike(): void
  like: boolean
}
const Footer = (props: IProps) => {
  const { onLike, like, disabled } = props
  return (
    <View style={styles.viewBottom}>
      <View style={styles.viewFooter}>
        <View style={styles.viewAddToCart}>
          <Button style={styles.viewHeartBottom} onPress={onLike}>
            <View style={like && styles.like}>
              <Icon
                name={like ? 'heart' : 'heart-outline'}
                size={like ? Size.width15 : Size.width20}
                color={like ? 'white' : '#6C728B'}
                style={styles.iconHeart}
              />
            </View>
          </Button>
          <Button style={styles.btnAddToCart} disabled={disabled}>
            <ImageBackground
              source={require('../../assets/images/imageBtn.png')}
              style={[styles.flex, disabled && styles.disableBtn]}
            >
              <Text style={styles.textAddToCart}>THÊM VÀO GIỎ HÀNG</Text>
            </ImageBackground>
          </Button>
        </View>
      </View>
    </View>
  )
}

export default memo(Footer)

const styles = StyleSheet.create({
  viewBottom: { flex: 1, justifyContent: 'center', backgroundColor: 'white' },
  viewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: Size.width16,
    marginVertical: Size.width12,
    borderRadius: Size.width8
  },
  viewAddToCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  viewHeartBottom: {
    backgroundColor: '#EEEDF5',
    width: Size.width35,
    height: Size.width35,
    borderRadius: Size.width35 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnAddToCart: {
    flex: 1,
    marginLeft: Size.width10
  },
  flex: {
    flex: 1
  },
  textAddToCart: {
    color: 'white',
    flex: 1,
    margin: Size.width10,
    textAlign: 'center'
  },
  iconHeart: {
    padding: Size.width5
  },
  disableBtn: {
    opacity: 0.2
  },
  like: {
    backgroundColor: '#FDCC0B',
    borderRadius: Size.width20
  }
})
