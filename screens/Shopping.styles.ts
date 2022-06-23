import { StyleSheet } from 'react-native'
import Layout from '../constants/Layout'
import { Size } from '../Themes'

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F6FA' },
  imageProd: {
    height: Layout.window.height / 2,
    width: Layout.window.width
  },
  viewIndex: {
    position: 'absolute',
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
    borderRadius: Size.width40,
    bottom: Size.width10,
    alignSelf: 'center'
  },
  textIndex: {
    textAlign: 'center',
    color: 'white',
    padding: 5
  },
  detailProduct: {
    paddingHorizontal: Size.width20,
    paddingVertical: Size.width20,
    backgroundColor: 'white'
  },
  viewDetailProduct: {
    backgroundColor: '#FF4141',
    borderTopLeftRadius: Size.width8,
    borderTopRightRadius: Size.width1,
    borderBottomRightRadius: Size.width8,
    borderBottomLeftRadius: Size.width1
  },
  textDiscount: {
    color: 'white',
    paddingHorizontal: Size.width8,
    paddingVertical: Size.width4,
    fontSize: Size.font12,
    lineHeight: Size.width16,
    fontWeight: '600'
  },
  viewPrice: { flexDirection: 'row', alignItems: 'center' },
  textPrice: {
    marginLeft: Size.width10,
    fontSize: Size.font16,
    lineHeight: Size.width24,
    fontWeight: '600',
    color: '#0F172A'
  },
  textPriceDiscount: {
    marginLeft: Size.width10,
    fontSize: Size.width12,
    lineHeight: Size.width20,
    fontWeight: '400',
    textDecorationLine: 'line-through',
    color: '#9CA1B8'
  },
  viewTitle: { paddingVertical: Size.width20 },
  textTitle: {
    fontSize: Size.width16,
    fontWeight: '400',
    lineHeight: Size.width24,
    color: '#3A3F55'
  },
  viewInfoProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  viewRanking: { flexDirection: 'row', alignItems: 'center' },
  textInfoBuy: {
    marginLeft: Size.width10,
    fontSize: Size.width12,
    fontWeight: '400',
    lineHeight: Size.width16,
    color: '#6C728B'
  },
  viewLike: {
    backgroundColor: '#FDCC0B',
    borderRadius: Size.width30 / 2,
    alignItems: 'center',
    width: Size.width30,
    height: Size.width30,
    justifyContent: 'center'
  },
  iconHeart: {
    padding: Size.width5
  },
  btnPickSize: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: Size.width16,
    paddingVertical: Size.width20,
    marginHorizontal: Size.width16,
    marginVertical: Size.width12,
    borderRadius: Size.width8
  },
  sizeColorsText: { color: '#0F172A', marginLeft: Size.width14 },
  imageIcon: { width: Size.width15, height: Size.width15 }
})
