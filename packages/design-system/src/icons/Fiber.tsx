 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgFiber(
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
        d="M12 22c-3.172 0-5.644-.83-7.343-2.467C2.893 17.833 2 15.297 2 12c0-3.297.893-5.832 2.657-7.533C6.356 2.83 8.827 2 12 2c3.172 0 5.644.83 7.343 2.467C21.107 6.165 22 8.7 22 12c0 3.3-.893 5.832-2.657 7.533C17.644 21.17 15.173 22 12 22Zm0-18.862c-2.868 0-5.073.723-6.552 2.148C3.915 6.762 3.138 9.02 3.138 12c0 2.979.777 5.235 2.31 6.714 1.48 1.425 3.684 2.148 6.552 2.148 2.868 0 5.073-.723 6.552-2.148 1.533-1.476 2.31-3.735 2.31-6.714 0-2.979-.777-5.235-2.31-6.714C17.072 3.86 14.868 3.138 12 3.138Z"
        fill="currentColor"
      />
      <path
        d="M5.966 20.472a.57.57 0 0 1-.402-.973l3.093-3.052-.612-.62-.614-.62-2.973 2.93a.57.57 0 0 1-.814-.797l.014-.014 3.377-3.332A.568.568 0 0 1 7.84 14l.197.2c.685-1.364 1.397-3.375 1.59-6.046a1.374 1.374 0 0 1-.464-.322c-.276-.287-.415-.665-.415-1.126 0-.461.14-.837.415-1.127a1.471 1.471 0 0 1 1.084-.444c.43 0 .805.154 1.084.444.279.29.415.669.415 1.127 0 .458-.139.836-.415 1.126-.156.165-.353.29-.569.362-.153 2.162-.626 3.928-1.17 5.297l4.937-4.876a1.375 1.375 0 0 1-.117-.604c.012-.398.182-.762.512-1.086.33-.325.694-.492 1.093-.501.404-.011.78.142 1.084.444.304.301.463.677.452 1.08-.011.4-.182.763-.512 1.088-.33.324-.694.489-1.093.5a1.428 1.428 0 0 1-.614-.12l-4.842 4.78c1.351-.517 3.07-.967 5.158-1.115.074-.216.196-.412.361-.569.288-.276.666-.415 1.127-.415.46 0 .839.142 1.126.418.288.276.444.654.444 1.084 0 .43-.153.805-.444 1.087-.29.281-.665.415-1.126.415-.461 0-.837-.142-1.127-.415a1.417 1.417 0 0 1-.321-.464c-2.68.194-4.694.91-6.06 1.599l.227.23a.567.567 0 0 1-.005.805L6.367 20.31a.57.57 0 0 1-.401.162Zm10.75-6.856c.003.145.049.208.095.25.025.026.105.1.338.1.233 0 .313-.074.339-.1.045-.045.093-.11.093-.264 0-.154-.048-.22-.093-.265-.026-.025-.106-.1-.339-.1-.233 0-.313.075-.338.1-.046.046-.094.111-.094.262v.011c-.003.003-.003.006 0 .006Zm-1.05-5.331c.112.108.191.122.257.12.037 0 .15-.004.321-.174.171-.171.171-.274.174-.308.003-.06-.011-.136-.114-.239-.102-.102-.188-.12-.253-.116-.037 0-.15.003-.321.173-.171.17-.171.273-.174.307-.003.057.009.134.11.237Zm-5.413-1.147c.15 0 .216-.048.262-.094.025-.025.1-.102.1-.338 0-.236-.075-.313-.1-.339-.046-.045-.111-.094-.265-.094-.153 0-.219.049-.264.094-.026.026-.1.103-.1.339 0 .236.074.313.1.338.042.046.105.091.25.094h.017Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgFiber);
export default ForwardRef;