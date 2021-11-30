import React from 'react'
import Lottie from 'react-lottie'

import animationCheck from '@assets/animate-check.json'

export const AnimateCheck: React.FC = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationCheck
  }
  return (
    <Lottie
      options={defaultOptions}
      width='2.8rem'
      height='2.8rem'
    />
  )
}