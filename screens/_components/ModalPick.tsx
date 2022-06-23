import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import { BottomSheet, Button, SelectButton } from '../../components'
import Layout from '../../constants/Layout'
import { Size } from '../../Themes'
import { Ionicons as Icon } from '@expo/vector-icons'
import { IItems, IState } from '../Shopping.type'
import {
  HEADER_TITLE,
  LIST_COLORS,
  LIST_SIZES
} from '../../constants/Common.constant'
import Footer from './Footer'

export interface IProps {
  visible: boolean
  toggleBottomNavigationView(): void
  state: IState
  setChooseColor(p: IItems): () => void
  setChooseSize(p: IItems): () => void
  addProduct(): void
  removeProduct(): void
  disableBtnAddToCart: boolean
  onLike(): void
}

const ModalPick = (props: IProps) => {
  const {
    visible,
    toggleBottomNavigationView,
    state,
    setChooseColor,
    setChooseSize,
    addProduct,
    removeProduct,
    disableBtnAddToCart,
    onLike
  } = props

  const _renderHeader = useCallback(
    (title: string) => <Text style={styles.headerTitle}>{title}</Text>,
    []
  )

  const _renderItemColors = useCallback(
    ({ item }: IItems | any) => {
      return (
        <SelectButton
          onPress={setChooseColor(item)}
          isChecked={state?.color === item.value}
          text={item.label}
          textSize={Size.font14}
          disable={item.value === '2'}
        />
      )
    },
    [state?.color]
  )

  const _renderItemSize = useCallback(
    ({ item }: IItems | any) => {
      return (
        <SelectButton
          onPress={setChooseSize(item)}
          isChecked={state?.size === item.value}
          text={item.label}
          textSize={Size.font14}
        />
      )
    },
    [state?.size]
  )

  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={toggleBottomNavigationView}
      onBackdropPress={toggleBottomNavigationView}
    >
      <View style={styles.bottomNavigationView}>
        <View style={styles.bottomContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Chọn phân loại</Text>
            <Icon
              onPress={toggleBottomNavigationView}
              name={'close'}
              size={Size.width20}
              color={'#6C728B'}
              style={styles.padding}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.flex}>
            {_renderHeader(HEADER_TITLE.COLORS)}
            <FlatList
              data={LIST_COLORS}
              keyExtractor={(item) => item.value}
              extraData={state?.color}
              horizontal
              renderItem={_renderItemColors}
              scrollEnabled={false}
            />
          </View>
          <View style={styles.flex}>
            {_renderHeader(HEADER_TITLE.COLORS)}
            <FlatList
              data={LIST_SIZES}
              keyExtractor={(item) => item.value}
              extraData={state?.size}
              horizontal
              renderItem={_renderItemSize}
              scrollEnabled={false}
            />
          </View>
          <View style={styles.flex}>
            <View style={styles.count}>
              <Text>SỐ LƯỢNG</Text>
              <View style={styles.row}>
                <Button style={styles.backgroundColor} onPress={removeProduct}>
                  <Text style={styles.padding}>-</Text>
                </Button>
                <Button style={styles.countDetail}>
                  <Text style={styles.padding}>{state?.count || 0}</Text>
                </Button>
                <Button style={styles.backgroundColor} onPress={addProduct}>
                  <Text style={styles.padding}>+</Text>
                </Button>
              </View>
            </View>
          </View>
          <Footer
            disabled={disableBtnAddToCart}
            onLike={onLike}
            like={state?.like}
          />
        </View>
      </View>
    </BottomSheet>
  )
}

export default memo(ModalPick)

const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: Layout.window.height / 2 - Size.width20
  },
  headerTitle: {
    fontSize: Size.font12,
    lineHeight: Size.width16,
    color: '#0F172A',
    marginBottom: Size.width5
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    paddingVertical: Size.width15,
    fontSize: Size.width20,
    paddingHorizontal: Size.width20
  },
  line: {
    borderWidth: 0.5,
    borderColor: '#EEEDF5',
    marginBottom: Size.width10
  },
  flex: { flex: 1, paddingHorizontal: Size.width20 },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  row: { flexDirection: 'row' },
  backgroundColor: { backgroundColor: '#F7F6FA' },
  countDetail: {
    borderWidth: 1,
    borderColor: '#D3D3E1',
    marginHorizontal: Size.width10
  },
  padding: { padding: Size.width15 }
})
