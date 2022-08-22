import React from 'react'
import { Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types'

const Message = (props) => {
  const {
    defaultText,
    text,
    success,
    marginTop,
  } = props;

  return (
    <Flex justify={'center'} marginTop={marginTop} maxWidth='330px'>
      <Text color={success ? 'green.400' : 'red.400'}>{text || defaultText}</Text>
    </Flex>
  )
}

Message.propTypes = {
  defaultText: PropTypes.string,
  text: PropTypes.string,
  success: PropTypes.string,
  marginTop: PropTypes.string,
}

Message.defaultProps = {
  defaultText: '',
  text: '',
  success: false,
  marginTop: '20'
}

export default Message;