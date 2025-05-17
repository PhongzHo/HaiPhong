'use client'
import { Carousel, CarouselContent, CarouselItem } from '@lib/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function ImageCarousel() {
    return (
        <Carousel className='bg-slate-200'
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}>
            <CarouselContent className='h-40'>
                <CarouselItem className='basis-full'>1</CarouselItem>
                <CarouselItem className='basis-full'>2</CarouselItem>
                <CarouselItem className='basis-full'>3</CarouselItem>
                <CarouselItem className='basis-full'>4</CarouselItem>
                <CarouselItem className='basis-full'>5</CarouselItem>
                <CarouselItem className='basis-full'>6</CarouselItem>
            </CarouselContent>
        </Carousel>
    );
}