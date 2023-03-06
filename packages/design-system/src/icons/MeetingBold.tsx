 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMeetingBold(
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
        d="M21.489 13.171c.34.335.511.827.511 1.457V18.6c0 .632-.17 1.127-.511 1.468-.351.354-.873.532-1.555.532l-8.72.006c-.68 0-1.201-.179-1.555-.533-.338-.34-.511-.832-.511-1.468v-3.971c0-.633.173-1.122.51-1.46.352-.346.874-.522 1.552-.522l8.722-.005c.684.002 1.208.178 1.557.524Zm-.168 7.983a.58.58 0 0 1 .59.574.582.582 0 0 1-.59.573H9.931a.58.58 0 0 1-.589-.573c0-.317.265-.574.59-.574h11.39ZM11.03 12.176c-1.357 0-2.43-.376-3.19-1.114-.79-.77-1.192-1.887-1.192-3.317 0-1.43.4-2.546 1.19-3.322.76-.744 1.832-1.122 3.19-1.122 1.357 0 2.433.376 3.195 1.119.795.776 1.198 1.892 1.198 3.323 0 1.43-.403 2.546-1.198 3.32-.76.737-1.835 1.113-3.193 1.113Zm-2.103.841c-.303.44-.46.992-.46 1.652v3.971c0 .603.133 1.117.384 1.544H4.044C3.468 20.184 3 19.73 3 19.173v-1.284c0-1.38.451-2.566 1.308-3.431.928-.94 2.288-1.435 3.931-1.435h.687v-.006Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMeetingBold);
export default ForwardRef;
