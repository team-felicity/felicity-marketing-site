import { useCallback, useEffect, useState } from 'react'
import NextImage from 'next/image'

import { styled } from '@config/stitches'
import { useIsomorphicLayoutEffect } from 'utils/useIsomorphicLayoutEffect'

import Image1 from '@assets/carousel-img1.jpg'
import Image2 from '@assets/carousel-img2.jpg'
import Image3 from '@assets/carousel-img3.jpg'
import Image4 from '@assets/carousel-img4.jpg'
import DesktopVector from '@assets/carousel-vector-desktop.png'
import PhoneVector from '@assets/carousel-vector-phone.png'

import View from '@components/View'
import Flex from '@components/Flex'

const carouselImages = [Image1, Image2, Image3, Image4]
const getTranslateXValue = (carouselIdx: number) =>
  -(100 / carouselImages.length) * (carouselIdx - 1)

const MS_DURATION_FOR_EACH_PICTURE = 3000

export default function HeroCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(1)
  const [loaded, setLoaded] = useState(false)

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

        '@tablet': {
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '55vw',
        },
      }}
    >
      <View css={{ position: 'relative' }}>
        <CarouselDotContainer gapX="1" css={{ opacity: loaded ? 1 : 0 }}>
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
            padding: '1px 0',
            transform: `translateX(${getTranslateXValue(carouselIndex)}%)`,
            transition: 'all 300ms ease',
            opacity: loaded ? 1 : 0,
          }}
        >
          {carouselImages.map((item, index) => (
            <Image
              priority
              key={index}
              src={item}
              width={1100}
              height={900}
              objectFit="cover"
              alt="Image of a mango"
              quality={70}
              // placeholder="empty"
              // css={{
              //   filter: index % 2 ? 'brightness(0.2)' : 'unset',
              //   pointerEvents: 'none',
              //   userSelect: 'none',
              // }}
            />
          ))}
        </Flex>
        <Wavez
          onLoadingComplete={() => {
            setLoaded(true)
          }}
        />
      </View>
    </View>
  )
}

function Wavez({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [loaded, setLoaded] = useState(false)

  useIsomorphicLayoutEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) return null

  return (
    <Flex
      align="end"
      css={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '101%', // removes 1 pixel of carousel that shows idk why
        height: '100%',
        pointerEvents: 'none',

        '@tablet': {
          bottom: 'unset',
          top: 0,
        },
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {typeof window === 'object' && window.innerWidth > 900 ? (
          <Image
            src={DesktopVector}
            alt="vector"
            layout="fill"
            // placeholder="blur"
            quality={10}
            priority
            onLoadingComplete={onLoadingComplete}
          />
        ) : (
          <Image
            src={PhoneVector}
            alt="vector"
            layout="fill"
            // placeholder="blur"
            quality={10}
            onLoadingComplete={onLoadingComplete}
          />
        )}
      </div>
    </Flex>
  )
}

const CarouselDotContainer = styled(Flex, {
  position: 'absolute',
  bottom: '22%',
  left: '14%',
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
