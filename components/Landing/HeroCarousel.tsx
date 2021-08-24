import { useCallback, useEffect, useState } from 'react'
import NextImage from 'next/image'

import { styled } from '@config/stitches'

import Img1 from '@assets/carousel-image1.jpg'

import { View, Flex } from '@components'

const carouselImages = [Img1, Img1, Img1, Img1]
const getTranslateXValue = (carouselIdx: number) =>
  -(100 / carouselImages.length) * (carouselIdx - 1)

const MS_DURATION_FOR_EACH_PICTURE = 3000

export default function HeroCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(1)

  const handleNextImage = useCallback(() => {
    // cycle back to start on upperbound
    if (carouselIndex + 1 > carouselImages.length) setCarouselIndex(1)
    else setCarouselIndex((prev) => prev + 1)
  }, [carouselIndex])
  // const handlePrevImage = () => {
  //   // cycle to last image on lowerbound
  //   if (carouselIndex - 1 === 0) setCarouselIndex(carouselImages.length)
  //   else setCarouselIndex((prev) => prev - 1)
  // }

  useEffect(() => {
    const id = setInterval(() => {
      handleNextImage()
    }, MS_DURATION_FOR_EACH_PICTURE) //
    return () => clearInterval(id)
  }, [handleNextImage])

  return (
    <View
      css={{
        overflow: 'hidden',
        gridArea: 'carousel',

        // hardcoded container padding
        width: 'calc(100vw - 50px)',

        '@desktop': {
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '45vw',
        },
      }}
    >
      <View css={{ position: 'relative' }}>
        <CarouselDotContainer gapX="1">
          {carouselImages.map((_, index) => (
            <CarouselDot
              key={index}
              active={index + 1 === carouselIndex}
              onClick={() => setCarouselIndex(index + 1)}
            />
          ))}
        </CarouselDotContainer>
        <Flex
          css={{
            width: `${100 * carouselImages.length}%`,
            margin: 0,
            padding: 0,
            transform: `translateX(${getTranslateXValue(carouselIndex)}%)`,
            transition: 'all 300ms ease',
          }}
        >
          {carouselImages.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt="Image of a mango"
              css={{
                filter: index % 2 ? 'brightness(0.2)' : 'unset',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            />
          ))}
        </Flex>
      </View>
    </View>
  )
}

const CarouselDotContainer = styled(Flex, {
  position: 'absolute',
  bottom: '1rem',
  left: '1rem',
  zIndex: '$1',
})
const CarouselDot = styled('div', {
  height: '0.75rem',
  width: '0.75rem',
  borderRadius: '999px',
  cursor: 'pointer',

  variants: {
    active: {
      true: { backgroundColor: '$primary1' },
      false: { backgroundColor: '$gray4' },
    },
  },
  defaultVariants: { active: 'false' },
})
const Image = styled(NextImage, {})
