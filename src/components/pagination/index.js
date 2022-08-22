import React, { useMemo, useState } from 'react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Pagination = ({
  onBack,
  onFoward,
  count,
}) => {
  const [page, setPage] = useState(0);

  const LIMIT = 20;

  const leftArrow = useMemo(() => (page > 0), [page]);
  const rightArrow = useMemo(() => (page + LIMIT <= count), [count, page]);

  const handleBack = () => {
    const newPage = page - LIMIT;
    if (newPage >= 0) {
      setPage(newPage)
      onBack(null, newPage);
    }
  }

  const handleFoward = () => {
    const newPage = page + LIMIT;
    if (newPage <= count) {
      setPage(newPage)
      onFoward(null, newPage);
    }
  }

  console.log(page, count)

  return (
    <Flex justify={'center'}>
      <Box onClick={handleBack} width='40px' padding={2} _hover={{ cursor: leftArrow ? 'pointer': 'auto' }} marginRight='5'>
        {leftArrow && <ArrowBackIcon boxSize='1.5em' />}
      </Box>
      <Box onClick={handleFoward} width='40px' padding={2} _hover={{ cursor: rightArrow ? 'pointer': 'auto' }}>
        {rightArrow && <ArrowForwardIcon boxSize='1.5em' />}
      </Box>
    </Flex>
  )
}

Pagination.propTypes = {
  onBack: PropTypes.func.isRequired,
  onFoward: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

export default Pagination;