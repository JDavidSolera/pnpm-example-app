 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgDniLight(
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
        d="M20.885 18.752V7.248a.421.421 0 0 0-.412-.43H4.19a.42.42 0 0 0-.412.43v11.504c0 .239.186.43.412.43h16.283a.423.423 0 0 0 .412-.43ZM20.473 6c.656 0 1.19.56 1.19 1.248v11.504c0 .688-.534 1.248-1.19 1.248H4.193C3.532 20 3 19.44 3 18.752V7.248C3 6.56 3.534 6 4.19 6h16.283Zm-9.092 8.32c.215 0 .388.183.388.409a.398.398 0 0 1-.388.409H5.063a.4.4 0 0 1-.39-.41c0-.225.173-.408.388-.408h6.32Zm-6.318-2.451a.398.398 0 0 1-.387-.41.4.4 0 0 1 .387-.408H9.35c.215 0 .388.183.388.409a.398.398 0 0 1-.388.409H5.063Zm10.944-1.352c-.149.154-.18.44-.18.656 0 .212.031.5.18.65.146.147.411.178.61.178.2 0 .468-.031.614-.177.12-.123.183-.34.183-.651 0-.31-.06-.531-.183-.653-.149-.152-.414-.184-.613-.184-.2 0-.465.032-.611.181Zm.608 2.3c-.497 0-.884-.138-1.15-.41-.279-.278-.42-.695-.42-1.237 0-.541.141-.961.42-1.242.266-.271.656-.41 1.15-.41.497 0 .884.139 1.152.41.28.281.423.7.423 1.242s-.141.959-.423 1.238c-.268.273-.655.409-1.152.409Zm-2.008 2.475h4.02c-.01-.207-.06-.462-.233-.648-.218-.237-.566-.284-.82-.284h-1.918c-.255 0-.605.05-.818.284-.167.183-.22.44-.23.648Zm2.967-1.753c.581 0 1.06.186 1.38.537.298.323.455.77.455 1.295v.547a.184.184 0 0 1-.178.189h-5.226a.184.184 0 0 1-.178-.189v-.547c0-.525.156-.972.451-1.296.321-.353.8-.536 1.381-.536h1.915Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgDniLight);
export default ForwardRef;
