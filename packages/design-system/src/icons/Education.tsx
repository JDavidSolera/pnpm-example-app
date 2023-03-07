 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgEducation(
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
        d="M20.773 18.52h-.53c.088-.266.176-.529.267-.617.175.088.263.35.263.617.087 0 .087 0 0 0Zm-3.442-2.738c0 .175-.175.354-.353.441-1.502.266-3.62.883-5.297 2.119a.806.806 0 0 1-.882 0c-1.59-1.324-3.708-1.856-5.297-2.119-.175 0-.354-.175-.354-.44v-3.355l5.297 2.384c.175.088.441.176.62.176.265 0 .44-.088.619-.176l5.599-2.54.048 3.51ZM2.323 9.516c0-.088.06-.2.176-.266l8.563-3.883h.175L19.093 8.9h-8.034a.605.605 0 0 0-.62.617c0 .35.266.616.62.616h7.855l-7.593 3.442h-.265L2.492 9.69c-.103-.057-.17-.088-.17-.175Zm18.978 7.24v-6.8c-.012-.576-.027-1.576-.882-1.942l-8.563-3.883a1.731 1.731 0 0 0-1.323 0L1.97 8.014C1.35 8.28 1 8.809 1 9.516c0 .616.354 1.236.97 1.501l1.943.883v3.882c0 .883.62 1.59 1.41 1.765 1.324.266 3.267.794 4.678 1.943.354.266.795.44 1.236.44.44 0 .882-.174 1.236-.44 1.41-1.148 3.353-1.677 4.677-1.943a1.8 1.8 0 0 0 1.41-1.765V11.81l1.324-.616v5.562c-.707.354-1.06 1.411-1.06 2.03 0 .354.087.617.266.795.353.354.794.354 1.148.354h.526c.353 0 .619 0 .882-.266.574-.484.444-2.48-.345-2.913Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgEducation);
export default ForwardRef;
