 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBlogLight(
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
        d="M15.687 21.701H5.637c-1.19 0-2.11-.337-2.74-1.002C2.303 20.071 2 19.186 2 18.067V5.336c.003-1.117.305-2.002.9-2.633.627-.665 1.55-1.002 2.74-1.002h10.05c1.19 0 2.11.337 2.741 1.002.594.628.897 1.514.897 2.633v5.23a.286.286 0 0 1-.286.286.286.286 0 0 1-.285-.286v-5.23c0-1.4-.531-3.064-3.064-3.064H5.643c-2.532 0-3.063 1.668-3.063 3.064v12.73c0 1.4.53 3.064 3.063 3.064h10.05c2.533 0 3.064-1.667 3.064-3.063v-3.52c0-.158.128-.286.285-.286.157 0 .286.128.286.285v3.52c0 1.12-.3 2.005-.897 2.633-.63.665-1.553 1.002-2.744 1.002Z"
        fill="currentColor"
      />
      <path
        d="M15.688 6.625H5.637a.286.286 0 0 1-.286-.285c0-.157.129-.286.286-.286h10.05a.286.286 0 0 1 0 .571Zm0 3.575H5.637a.286.286 0 0 1-.286-.286c0-.157.129-.285.286-.285h10.05c.157 0 .285.128.285.285a.286.286 0 0 1-.286.286Zm.05 3.572h-10.1a.286.286 0 0 1-.286-.286c0-.157.129-.286.286-.286h10.1a.286.286 0 0 1 0 .571Zm-2.926 3.574H5.638a.286.286 0 0 1-.286-.285c0-.157.129-.286.286-.286h7.172c.157 0 .285.129.285.286a.284.284 0 0 1-.283.285Z"
        fill="currentColor"
      />
      <path
        d="M12.338 19.022a.286.286 0 0 1-.271-.377l1.01-3.012a.261.261 0 0 1 .084-.122c1.967-1.736 5.755-5.085 6.015-5.348.463-.463.965-.531 1.308-.505a1.74 1.74 0 0 1 1.616 1.735c0 .443-.18.851-.514 1.182-.343.337-5.81 5.174-6.041 5.38a.268.268 0 0 1-.1.057l-3.015.993a.342.342 0 0 1-.092.017Zm1.257-3.135-.806 2.399 2.419-.8c1.978-1.75 5.71-5.059 5.975-5.319.229-.225.346-.485.346-.776a1.192 1.192 0 0 0-.343-.826 1.202 1.202 0 0 0-.745-.34c-.223-.016-.551.03-.862.34-.326.329-5.35 4.766-5.985 5.322Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgBlogLight);
export default ForwardRef;
