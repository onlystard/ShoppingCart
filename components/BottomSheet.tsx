import React, { memo } from 'react'
import Modal from 'react-native-modal'

export type BottomSheetProps = {
  onBackButtonPress?: () => void
  onBackdropPress?: () => void
  visible?: boolean
}

type Props = {
  children: React.ReactChild | React.ReactChild[] | any
} & BottomSheetProps

const BottomSheet = (props: Props) => {
  const {
    children,
    visible = false,
    onBackButtonPress = () => {},
    onBackdropPress = () => {}
  } = props
  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackdropPress}
      style={{ justifyContent: 'flex-end', margin: 0 }}
    >
      {children}
    </Modal>
  )
}

export default memo(BottomSheet)
