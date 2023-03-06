 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMessageLight(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.106 20.793c0 .375.348.707.748.707.176 0 .432-.063.636-.359.106-.155 1.853-2.745 2.258-3.348h10.755a2.562 2.562 0 0 0 2.557-2.557V6.056A2.56 2.56 0 0 0 19.505 3.5H5.56A2.562 2.562 0 0 0 3 6.057v9.178c0 .69.231 1.33.65 1.797.375.421.894.688 1.456.745v3.016ZM3.544 6.06A2.019 2.019 0 0 1 5.56 4.046l13.943-.002a2.016 2.016 0 0 1 2.013 2.013v9.178c0 1.112-.9 2.012-2.01 2.014H8.6a.271.271 0 0 0-.225.12c-.022.033-2.22 3.294-2.337 3.465-.074.109-.136.122-.188.122-.109 0-.204-.1-.204-.163v-3.272a.273.273 0 0 0-.272-.272c-1.062 0-1.831-.848-1.831-2.013V6.06ZM6.47 8.791h12.121c.15 0 .272-.122.272-.271a.273.273 0 0 0-.272-.272H6.471a.273.273 0 0 0-.272.272c0 .15.123.271.272.271Zm0 4.24h8.412c.15 0 .271-.122.271-.272a.273.273 0 0 0-.271-.271H6.47a.273.273 0 0 0-.272.271c0 .15.123.272.272.272Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMessageLight);
export default ForwardRef;
