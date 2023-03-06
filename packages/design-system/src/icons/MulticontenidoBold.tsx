 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMulticontenidoBold(
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
        d="M20.525 8.746h-.964V8.74c0-1.174-.28-2.088-.83-2.72C18.14 5.343 17.255 5 16.095 5H5.466C4.31 5 3.422 5.345 2.83 6.02 2.277 6.65 2 7.564 2 8.738v5.201c0 1.174.277 2.088.829 2.72.593.678 1.478 1.02 2.637 1.02h9.758v.107c0 1.442.764 2.206 2.207 2.206h3.094c1.443 0 2.207-.764 2.207-2.206v-6.832c0-1.443-.764-2.207-2.207-2.207Zm1.027 9.042c0 .395-.074.67-.219.814-.144.141-.416.215-.81.215H17.43c-.396 0-.667-.07-.812-.215-.144-.142-.218-.416-.218-.814v-6.835c0-.767.26-1.027 1.027-1.027h3.097c.788 0 1.027.24 1.027 1.027v6.835Zm-8.328 1.032H8.047a.592.592 0 0 0-.59.59c0 .325.266.59.59.59h5.177c.325 0 .59-.265.59-.59a.592.592 0 0 0-.59-.59Zm4.964-1.51c0-.48.31-.79.788-.79.477 0 .787.31.787.79 0 .295-.115.472-.21.57-.097.1-.277.218-.577.218-.301 0-.481-.118-.579-.219-.097-.097-.209-.274-.209-.569Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgMulticontenidoBold);
export default ForwardRef;
