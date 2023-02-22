import { Carousel } from "@mantine/carousel";

import { PinterestEmbed } from "react-social-media-embed";

export default function PinterestCarousel() {
  return (
    <Carousel
      controlSize={40}
      loop
      sx={{ maxWidth: 345 }}
      mx="auto"
      withIndicators
      height={467}
    >
      <Carousel.Slide>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PinterestEmbed
            url="https://www.pinterest.com/pin/75716837476909079/"
            width={345}
            height={467}
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PinterestEmbed
            url="https://www.pinterest.com/pin/75716837479216253/"
            width={345}
            height={467}
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PinterestEmbed
            url="https://www.pinterest.com/pin/75716837479297116/"
            width={345}
            height={467}
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PinterestEmbed
            url="https://www.pinterest.com/pin/75716837479253734/"
            width={345}
            height={467}
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PinterestEmbed
            url="https://www.pinterest.com/pin/75716837479307713/"
            width={345}
            height={467}
          />
        </div>
      </Carousel.Slide>
    </Carousel>
  );
}
