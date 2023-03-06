 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgRoute(
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
        d="M6.704 14.196c.478 0 .671-.196.671-.674 0-.481-.196-.675-.671-.675-.475 0-.672.197-.672.675 0 .478.194.674.672.674Zm0-2.592c1.16 0 1.91.751 1.91 1.915 0 1.164-.752 1.915-1.91 1.915-1.161 0-1.91-.751-1.91-1.915 0-1.164.752-1.915 1.91-1.915ZM18.66 9.438c.797-.993 2.097-2.933 2.1-4.089.006-1.394-.697-2.1-2.086-2.105h-.011c-.683 0-1.207.176-1.557.523-.352.35-.532.877-.532 1.568-.005 1.158 1.31 3.122 2.086 4.103ZM18.678 2c2.055.006 3.33 1.29 3.32 3.352-.005 2.089-2.523 5.09-2.904 5.472a.616.616 0 0 1-.871.003l-.003-.003a1.766 1.766 0 0 1-.137-.153.61.61 0 0 1-.569.555 5.305 5.305 0 0 0-.216.028.62.62 0 0 1-.176-1.226c.108-.018.213-.029.321-.04.034-.003.063.011.094.011-.868-1.13-2.202-3.156-2.2-4.67.003-1.016.313-1.86.9-2.444.58-.58 1.42-.885 2.43-.885h.011Zm-.011 3.614c.316 0 .446-.128.446-.447 0-.316-.128-.447-.446-.447-.316 0-.444.128-.444.447 0 .316.128.447.444.447Zm0-1.722c.77 0 1.272.501 1.272 1.272 0 .774-.498 1.272-1.272 1.272-.771 0-1.27-.5-1.27-1.272 0-.77.499-1.272 1.27-1.272Zm-.754 13.634c.321.122.48.478.361.8-.117.31-.304.605-.555.878a.616.616 0 0 1-.87.035l-.003-.003a.62.62 0 0 1-.032-.877c.142-.153.245-.313.305-.472a.617.617 0 0 1 .794-.361Zm-2.24 1.613a.619.619 0 1 1 .54 1.116 8.26 8.26 0 0 1-.799.338.612.612 0 0 1-.79-.355c0-.003-.004-.006-.004-.009a.618.618 0 0 1 .362-.797c.236-.085.466-.182.691-.293Zm-1.448-3.275a.622.622 0 0 1-.322-.817.622.622 0 0 1 .774-.338c.242.096.492.187.743.276a.62.62 0 0 1-.421 1.166c-.256-.094-.521-.188-.774-.287Zm.62-4.05a.622.622 0 0 1-.617-.623c0-.264.17-.498.42-.583.277-.091.55-.174.815-.242a.617.617 0 0 1 .757.441.617.617 0 0 1-.442.757c-.239.066-.489.137-.737.222a.742.742 0 0 1-.196.029Zm-2.074 1.204A.618.618 0 0 1 12.298 12c.19-.23.441-.446.746-.646a.62.62 0 1 1 .68 1.04c-.202.133-.364.27-.478.406a.626.626 0 0 1-.475.22Zm.261 2.129a.622.622 0 0 1-.392-.143 2.36 2.36 0 0 1-.669-.845.625.625 0 0 1 .307-.822c.313-.14.678 0 .82.31.063.14.17.27.33.401.265.22.302.612.082.877a.634.634 0 0 1-.478.222Zm3.39 1.585a.62.62 0 0 1 .572-1.101c.332.173.594.352.805.552a.62.62 0 0 1-.851.904 2.447 2.447 0 0 0-.526-.355ZM11.18 20.34c.356-.04.654.182.703.52a.62.62 0 0 1-.52.706c-.285.043-.559.08-.82.111a.616.616 0 0 1-.69-.535v-.005a.62.62 0 0 1 .539-.692c.253-.028.518-.065.788-.105Zm2.325-.453a.616.616 0 0 1 .748.447v.006a.62.62 0 0 1-.45.751c-.27.069-.54.131-.813.188a.62.62 0 0 1-.25-1.215c.255-.054.512-.114.765-.177Zm-6.815.564c1.186-1.414 3.474-4.718 3.48-6.659.003-1.124-.293-1.995-.882-2.59-.587-.591-1.452-.893-2.576-.896h-.017c-2.253 0-3.449 1.198-3.457 3.466-.006 1.958 2.268 5.265 3.452 6.679Zm2.12.154a.634.634 0 0 1 .665.572.619.619 0 0 1-.569.665c-.372.029-.637.043-.757.052-.011.003-.022.003-.037.003a.654.654 0 0 1-.626-.484c-.162.193-.29.335-.361.404a.616.616 0 0 1-.87.006l-.006-.006c-.53-.532-4.258-5.023-4.249-8.05.009-2.946 1.764-4.701 4.695-4.701h.023c1.443.002 2.635.44 3.449 1.263.817.822 1.243 2.02 1.24 3.466C11.4 16 9.383 19.003 8.102 20.653c.12-.006.367-.02.709-.048Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgRoute);
export default ForwardRef;
