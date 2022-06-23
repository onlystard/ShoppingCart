import React, { memo, useCallback, useMemo, useRef, useState } from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import styles from './Shopping.styles'
import { FontAwesome } from '@expo/vector-icons'
import { Button } from '../components'
import { IItems, IState } from './Shopping.type'
import { Footer } from './_components'
import { useMergingState } from '../hooks/useMergingState.hook'
import { Size } from '../Themes'
import { IProps as IPropsPick } from './_components/ModalPick'

const ShoppingScreens = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [state, setState] = useMergingState<IState>({
    color: '1',
    size: '1',
    count: 0,
    like: false
  })

  const ModalPick = useRef<React.FunctionComponent<IPropsPick> | null>(null)

  const toggleBottomNavigationView = useCallback(() => {
    if (!ModalPick.current) {
      ModalPick.current = require('./_components/ModalPick').default
    }

    setVisible(!visible)
  }, [visible])

  const _setChooseColor = useCallback(
    (item: IItems) => () => {
      setState({ color: item.value })
    },
    [state]
  )

  const _setChooseSize = useCallback(
    (item: IItems) => () => {
      setState({ size: item.value })
    },
    [state]
  )

  const _addProduct = useCallback(() => {
    setState({ count: state?.count + 1 })
  }, [state?.count])

  const _removeProduct = useCallback(() => {
    if (!state?.count) return

    setState({ count: state?.count - 1 })
  }, [state?.count])

  const _onLike = useCallback(() => {
    setState({ like: !state?.like })
  }, [state?.like])

  const _disableButtonAddToCard = useMemo(() => !state?.count, [state?.count])

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/images/product.png')}
          style={styles.imageProd}
        />
        <View style={styles.viewIndex}>
          <Text style={styles.textIndex}>12/13</Text>
        </View>
      </View>
      <View style={styles.detailProduct}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.viewDetailProduct}>
            <Text style={styles.textDiscount}>10%</Text>
          </View>
          <View style={styles.viewPrice}>
            <Text style={styles.textPrice}>406.000đ</Text>
            <Text style={styles.textPriceDiscount}>406.000đ</Text>
          </View>
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>
            Solid Pocket Button Lapel Long Sleeve Blue Cotton 100%
          </Text>
        </View>
        <View style={styles.viewInfoProduct}>
          <View style={styles.viewRanking}>
            <FontAwesome name={'star'} color={'#FDCC0B'} size={Size.width14} />
            <FontAwesome name={'star'} color={'#FDCC0B'} size={Size.width14} />
            <FontAwesome name={'star'} color={'#FDCC0B'} size={Size.width14} />
            <FontAwesome name={'star'} color={'#FDCC0B'} size={Size.width14} />
            <FontAwesome name={'star'} color={'#FDCC0B'} size={Size.width14} />
            <Text style={styles.textInfoBuy}>996 • Đã bán 1201</Text>
          </View>

          <View style={styles.viewLike}>
            <FontAwesome
              name={'heart'}
              size={Size.width20}
              color={'white'}
              style={styles.iconHeart}
            />
          </View>
        </View>
      </View>
      <Button style={styles.btnPickSize} onPress={toggleBottomNavigationView}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/iconPick.png')}
            style={styles.imageIcon}
          />
          <Text style={styles.sizeColorsText}>Màu, Kích thước</Text>
        </View>
        <FontAwesome name={'chevron-right'} color={'#9CA1B8'} />
      </Button>
      <Footer
        disabled={_disableButtonAddToCard}
        onLike={_onLike}
        like={state?.like}
      />
      {ModalPick.current && (
        <ModalPick.current
          setChooseColor={_setChooseColor}
          setChooseSize={_setChooseSize}
          state={state}
          visible={visible}
          toggleBottomNavigationView={toggleBottomNavigationView}
          addProduct={_addProduct}
          removeProduct={_removeProduct}
          disableBtnAddToCart={_disableButtonAddToCard}
          onLike={_onLike}
        />
      )}
    </View>
  )
}

export default memo(ShoppingScreens)
