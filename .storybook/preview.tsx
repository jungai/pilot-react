import React from 'react';
import {
  ChakraProvider,
} from "@chakra-ui/react"


const WithChakra = (Story: Function) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
)

export const decorators = [WithChakra]