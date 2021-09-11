import MaskedInput from 'react-text-mask';
import React from 'react';

export default function TextMaskDate(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
      guide={false}
    />
  );
}