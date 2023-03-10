 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPostpagoLight(
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
        d="M13.773 15.894c-.387 0-.618-.234-.618-.624V5.946c0-.378.237-.615.618-.615h4.108c.077 0 .148.032.202.083L20.86 8.19a.282.282 0 0 1 .083.202v6.895c0 .373-.23.607-.604.607h-6.565Zm-.046-.573a.24.24 0 0 0 .046.003h6.562c.012 0 .023 0 .034-.003.003-.011.003-.022.003-.034V8.51L17.762 5.9h-3.989c-.014 0-.031 0-.046.003-.002.014-.002.028-.002.042v9.324c0 .017 0 .034.002.051Z"
        fill="currentColor"
      />
      <path
        d="M18.998 10.626h-3.886a.286.286 0 0 1-.284-.285c0-.156.128-.284.284-.284h3.886c.157 0 .285.128.285.284a.286.286 0 0 1-.285.285Zm0 1.665h-3.886a.286.286 0 0 1-.284-.284c0-.157.128-.285.284-.285h3.886c.157 0 .285.128.285.285a.286.286 0 0 1-.285.284Zm0 1.666h-3.886a.286.286 0 0 1-.284-.285c0-.156.128-.284.284-.284h3.886c.157 0 .285.128.285.284a.286.286 0 0 1-.285.285Z"
        fill="currentColor"
      />
      <path
        d="M14.278 22H7.06c-1.044 0-1.799-.242-2.303-.743C4.247 20.75 4 19.993 4 18.939V5.061c0-1.045.245-1.797.752-2.304C5.258 2.251 6.012 2 7.06 2h7.217c1.036 0 1.79.253 2.306.774.506.516.754 1.262.754 2.287v.555a.286.286 0 0 1-.285.284.286.286 0 0 1-.284-.284V5.06c0-.869-.194-1.487-.592-1.888-.405-.407-1.025-.604-1.902-.604H7.06c-.888 0-1.511.194-1.907.59-.396.395-.584 1.016-.584 1.902v13.878c0 1.771.72 2.492 2.492 2.492h7.217c1.768 0 2.49-.72 2.49-2.492v-3.33c0-.157.129-.285.285-.285.157 0 .285.128.285.284v3.331c0 1.054-.248 1.811-.757 2.318-.504.501-1.259.743-2.303.743Z"
        fill="currentColor"
      />
      <path
        d="M10.665 17.926c.512 0 .845.27.845.849 0 .279-.077.484-.213.623-.148.151-.365.225-.632.225-.268 0-.484-.074-.632-.225-.137-.14-.214-.347-.214-.623 0-.578.333-.849.846-.849Zm9.992-9.25h-1.11c-.632 0-1.119-.167-1.452-.5-.333-.334-.498-.82-.498-1.45v-1.11a.285.285 0 0 1 .57 0v1.11c0 .954.426 1.381 1.38 1.381h1.11a.285.285 0 0 1 0 .57Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgPostpagoLight);
export default ForwardRef;
