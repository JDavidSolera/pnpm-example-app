 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgWomenBold(
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
        d="M12.417 7.038c-1.557 0-2.488-.94-2.488-2.514 0-.802.228-1.434.68-1.878.439-.43 1.045-.646 1.808-.646.763 0 1.369.216 1.807.64.456.442.686 1.076.686 1.882 0 1.576-.933 2.516-2.493 2.516Zm5.336 6.756c.134.399.106.82-.074 1.19a1.49 1.49 0 0 1-.868.768c-.159.066-.33.097-.5.089l.17.64a.614.614 0 0 1-.586.771h-.407l-.017 3.202c0 .484-.148.888-.424 1.164-.177.174-.49.382-1 .382h-.036c-.783-.017-1.352-.666-1.352-1.549l.014-3.199h-.478l.017 3.197c0 .478-.156.893-.444 1.178-.25.247-.59.381-.942.373h-.037c-.811-.02-1.42-.686-1.42-1.549l-.017-3.196h-.407a.614.614 0 0 1-.586-.771l.17-.64h-.003c-.173 0-.344-.032-.512-.092a1.497 1.497 0 0 1-.854-.762 1.542 1.542 0 0 1-.077-1.184l1.551-4.463c.02-.066.046-.128.083-.208a2.871 2.871 0 0 1 2.635-1.739h2.132c1.153 0 2.192.695 2.647 1.768.023.045.051.114.077.196.003-.006 1.545 4.434 1.545 4.434Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgWomenBold);
export default ForwardRef;
