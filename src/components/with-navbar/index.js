import { Box } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../nav-bar';

function WithNavBar(WrappedComponent) {
  return class extends React.Component {

    render() {
      return <>
        <NavBar />
        <Box padding={10}>
          <WrappedComponent {...this.props} />
        </Box>
      </>
    }
  }
}

export default WithNavBar;