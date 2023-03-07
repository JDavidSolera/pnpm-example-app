 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgExchangeLight(
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
        d="M9.926 17.864A7.925 7.925 0 0 1 4.32 4.335a7.924 7.924 0 0 1 11.234 11.178l-.028.028a7.861 7.861 0 0 1-5.6 2.323Zm0-15.28a7.356 7.356 0 1 0 5.2 2.155 7.303 7.303 0 0 0-5.2-2.155Z"
        fill="currentColor"
      />
      <path
        d="M21.7 22a.284.284 0 0 1-.201-.085l-6.374-6.37a.286.286 0 0 1 .006-.401.287.287 0 0 1 .395 0l6.374 6.37A.284.284 0 0 1 21.7 22ZM7.97 12.54c-.096-.068-.145-.145-.145-.265a.28.28 0 0 1 .284-.273.374.374 0 0 1 .205.069c.438.293 1.055.585 1.768.585 1.064 0 1.717-.546 1.717-1.353 0-.662-.37-1.128-1.592-1.285l-.312-.04c-1.3-.164-1.905-.79-1.905-1.754 0-1.148.819-1.859 2.078-1.859.702 0 1.3.185 1.709.438.128.077.184.176.184.273a.265.265 0 0 1-.261.264h-.003a.478.478 0 0 1-.196-.06 2.97 2.97 0 0 0-1.456-.389c-.966 0-1.503.535-1.503 1.285 0 .682.42 1.12 1.56 1.265l.302.04c1.319.165 1.941.79 1.941 1.782 0 1.12-.802 1.92-2.342 1.92a3.648 3.648 0 0 1-2.033-.643Z"
        fill="currentColor"
      />
      <path
        d="M10.008 13.324a3.786 3.786 0 0 1-2.12-.668.44.44 0 0 1-.208-.38.42.42 0 0 1 .426-.416.535.535 0 0 1 .285.091c.56.372 1.128.56 1.688.56.486 0 .89-.12 1.169-.341.267-.213.406-.515.406-.87 0-.472-.173-.98-1.467-1.146l-.312-.04c-.927-.116-2.027-.542-2.027-1.893 0-1.216.872-2.001 2.22-2.001.67 0 1.302.162 1.782.46.162.1.253.24.253.393a.408.408 0 0 1-.406.406.555.555 0 0 1-.259-.074l-.003-.002c-.469-.253-.91-.373-1.387-.373-.839 0-1.362.438-1.362 1.143 0 .438.165.96 1.439 1.126l.301.04c.68.085 1.197.292 1.544.616.346.325.523.765.523 1.305 0 1.274-.95 2.064-2.485 2.064Zm-1.959-.901c.268.185.99.617 1.96.617 1.378 0 2.2-.665 2.2-1.777 0-.46-.146-.83-.433-1.097-.301-.285-.767-.466-1.387-.543l-.304-.04c-.586-.074-1.006-.227-1.285-.466-.27-.233-.4-.54-.4-.941 0-.867.644-1.427 1.645-1.427.52 0 1.015.133 1.521.406.04.023.085.037.13.043.066 0 .12-.051.123-.12v-.002c0-.069-.074-.125-.117-.151-.434-.27-1.014-.418-1.634-.418-1.194 0-1.936.66-1.936 1.717 0 .918.6 1.461 1.78 1.612l.312.04c1.171.15 1.717.602 1.717 1.427 0 .443-.176.821-.514 1.091-.33.265-.796.404-1.348.404-.617 0-1.24-.204-1.845-.608a.277.277 0 0 0-.125-.046.14.14 0 0 0-.142.131c-.003.057.011.097.082.148Z"
        fill="currentColor"
      />
      <path
        d="M10.147 14.245a.285.285 0 0 1-.284-.284V5.854c0-.157.127-.285.284-.285.156 0 .284.128.284.285v8.107a.285.285 0 0 1-.284.284Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgExchangeLight);
export default ForwardRef;