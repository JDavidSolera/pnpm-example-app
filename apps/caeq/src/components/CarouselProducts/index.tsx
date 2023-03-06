import { Slide, Slider } from "@phoenix/design-system";
import CardTerminal from "../CardTerminal";
import CardFindTerminal from "../CardFindTerminal";
import CardCallMe from "../CardCallMe";
import CardViewMoreOfferts from "../CardViewMoreOfferts";
import CardOutlet from "../CardOutlet";
import { carouselOptions } from "./carouselOptions";

function CarouselProducts({ products }: { products: any }) {
  const handleViewDetail = () => {};
  const handleOnViewMore = () => {};
  const handleOnCallMe = () => {};

  return (
    <Slider options={carouselOptions} pt={2} pb={6} px={3} className="designB">
      {products.slice(0,4).map((terminal: any) => (
        <Slide key={terminal.id}>
          <CardTerminal
            terminal={terminal}
            isUnbeatable={terminal.offer_terminal}
            handleViewDetail={handleViewDetail}
          />
        </Slide>
      ))}
      <Slide>
        <CardOutlet />
      </Slide>
      <Slide>
        <CardViewMoreOfferts handleOnViewMore={handleOnViewMore} />
      </Slide>
      <Slide>
        <CardFindTerminal />
      </Slide>
      <Slide>
        <CardCallMe handleOnCallMe={handleOnCallMe} />
      </Slide>
    </Slider>
  );
}

export default CarouselProducts;
