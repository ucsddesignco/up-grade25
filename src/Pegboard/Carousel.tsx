import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //CarouselNext,
  //CarouselPrevious,
} from "@/components/ui/carousel"
import "./pegboard.css"
import PegBoard from "./Pegboard"

export function CarouselDemo() {
  return (
    <Carousel className="w-screen ">
      <CarouselContent className="color-black">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
                <PegBoard></PegBoard>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/*<CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
