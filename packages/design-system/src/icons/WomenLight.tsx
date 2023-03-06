 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgWomenLight(
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
        d="M11.278 3.198c-.256.248-.387.64-.387 1.167 0 1.039.487 1.526 1.531 1.526 1.05 0 1.54-.484 1.54-1.526 0-.524-.131-.92-.39-1.167-.25-.242-.637-.361-1.15-.361-.51 0-.896.12-1.144.361Zm1.144 3.527c-1.508 0-2.373-.86-2.373-2.36 0-.76.216-1.355.643-1.767.412-.399.993-.598 1.73-.598s1.32.202 1.733.595c.43.413.647 1.007.647 1.77 0 1.5-.868 2.36-2.38 2.36Zm4.523 7.86a.532.532 0 0 0 .028-.406l-1.608-4.551a1.951 1.951 0 0 0-1.833-1.287h-2.214c-.774 0-1.477.461-1.785 1.176-.017.034-.031.068-.045.102l-1.611 4.563a.526.526 0 0 0 .324.666.516.516 0 0 0 .402-.018.533.533 0 0 0 .276-.301l.836-2.485a.42.42 0 0 1 .544-.239c.2.077.307.29.256.498l-.381 1.184-.766 2.84h.498c.23 0 .419.188.422.416l.02 3.894a.527.527 0 1 0 1.053 0l-.02-3.891c0-.23.185-.418.415-.421h1.335c.23 0 .418.188.421.418l-.017 3.894a.53.53 0 0 0 .527.532.528.528 0 0 0 .526-.532l.02-3.894a.42.42 0 0 1 .421-.415h.501l-.777-2.858-.378-1.17a.415.415 0 0 1 .27-.523.422.422 0 0 1 .53.267l.84 2.488c.099.27.395.41.668.316a.516.516 0 0 0 .302-.262Zm.822-.682c.12.353.094.723-.07 1.053a1.343 1.343 0 0 1-.78.68 1.302 1.302 0 0 1-.738.046l.256.95a.418.418 0 0 1-.407.527h-.632l-.017 3.475A1.37 1.37 0 0 1 14.01 22a1.371 1.371 0 0 1-1.369-1.369l.017-3.475h-.486l.017 3.472A1.37 1.37 0 0 1 10.823 22a1.369 1.369 0 0 1-1.367-1.369l-.017-3.475h-.631a.42.42 0 0 1-.405-.527l.257-.95a1.349 1.349 0 0 1-.743-.049 1.333 1.333 0 0 1-.772-.677 1.348 1.348 0 0 1-.07-1.05l1.61-4.557c.02-.06.043-.117.077-.185a2.774 2.774 0 0 1 2.547-1.66h2.215c1.113 0 2.117.658 2.556 1.68a.985.985 0 0 1 .07.176l1.617 4.546Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgWomenLight);
export default ForwardRef;
