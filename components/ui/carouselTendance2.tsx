import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const images = [
    {
        src: '/article/coton/coton6.jpg',
        alt: 'logoImages'
    },
    {
        src: '/article/coton/coton7.jpg',
        alt: 'logoImages'
    },
    {
        src: '/article/coton/coton8.jpg',
        alt: 'logoImages'
    },
    {
        src: '/article/coton/coton10.jpg',
        alt: 'logoImages'
    },
    {
        src: '/article/coton/coton2.jpg',
        alt: 'logoImages'
    }

]


export function CarouselTendance2() {
  return (
    <Carousel className="w-full max-w-xs"
    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}

    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image src={image.src} alt={image.alt} width={300} height={300}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
