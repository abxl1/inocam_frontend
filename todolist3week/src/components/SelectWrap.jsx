import React from 'react'
import Select from './Select';
import * as s from './style';

function SelectWrap() {
  return (
    <s.Wrap>
        <s.H1>Select</s.H1>
        <s.WrapSelecBtn>
          <Select position={'absolute'} />
          <Select position={'static'} />
        </s.WrapSelecBtn>
    </s.Wrap>
  )
}

export default SelectWrap