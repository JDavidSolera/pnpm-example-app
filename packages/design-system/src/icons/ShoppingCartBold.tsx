 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgShoppingCartBold(
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M20.87 6.925a.566.566 0 0 0-.45-.22H6.137a74.752 74.752 0 0 1-.41-2.57C5.506 2.897 4.34 2 2.947 2H1.569A.571.571 0 0 0 1 2.57c0 .312.256.569.57.569h1.377c.826 0 1.537.515 1.66 1.195.233 1.307 1.531 8.85 1.662 9.69.165 1.042.552 1.859 1.156 2.428.575.544 1.332.828 2.183.828h6.106c.842 0 1.557-.287 2.126-.854.538-.538.9-1.315 1.202-2.345.133-.458 1.756-6.038 1.932-6.664a.556.556 0 0 0-.105-.492ZM9.607 22c-.51 0-.917-.145-1.213-.43-.31-.299-.466-.717-.466-1.25 0-.532.156-.95.466-1.25.296-.284.706-.429 1.213-.429.507 0 .917.145 1.213.43.31.299.466.717.466 1.25 0 .532-.156.95-.466 1.25-.296.284-.703.429-1.213.429Zm5.55 0c-.509 0-.916-.145-1.212-.43-.31-.299-.467-.717-.467-1.25 0-.532.157-.95.467-1.25.296-.284.706-.429 1.213-.429.506 0 .916.145 1.213.43.307.299.466.717.466 1.25 0 .532-.156.95-.466 1.25-.297.284-.704.429-1.213.429Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgShoppingCartBold);
export default ForwardRef;
