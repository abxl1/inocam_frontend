import React from 'react'
import Modal from './Modal';
import * as s from '../style'

function ModalWrap() {
  return (
    <>
      <s.H1>Modal</s.H1>
      <s.StBox>
        <s.StConModal>
          <Modal modalType={"modal_1"}/>
          <Modal modalType={"modal_2"}/>
        </s.StConModal>
      </s.StBox>
    </>
  )
}

export default ModalWrap;