 
import { SVGProps, Ref, forwardRef } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgRouteLight(
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
        d="M6.576 20.951c1.07-1.24 3.759-4.877 3.767-7.122.006-1.204-.319-2.146-.959-2.792-.64-.646-1.576-.976-2.78-.979h-.02c-1.192 0-2.123.322-2.763.962-.643.64-.973 1.58-.976 2.786-.008 2.146 2.561 5.796 3.73 7.145Zm.03-11.735c2.875.009 4.588 1.736 4.58 4.619-.01 2.987-3.774 7.503-4.312 8.04a.422.422 0 0 1-.594.004l-.003-.003c-.87-.877-4.283-5.284-4.277-8.07.003-1.42.43-2.59 1.224-3.383.793-.791 1.954-1.21 3.36-1.21l.023.003Zm-.013 5.236c.603 0 .896-.296.896-.9 0-.605-.293-.898-.896-.898-.604 0-.897.296-.897.899s.293.899.897.899Zm0-2.643c1.072 0 1.738.668 1.738 1.744 0 1.075-.666 1.744-1.738 1.744-1.073 0-1.739-.669-1.739-1.744 0-1.076.666-1.745 1.739-1.745Zm12.204-2.09c.805-.958 2.353-3.195 2.359-4.512.003-1.54-.805-2.356-2.342-2.362H18.8c-.754 0-1.338.202-1.736.598-.401.4-.603.987-.606 1.75-.003 1.329 1.537 3.565 2.339 4.527ZM18.817 2c1.997.006 3.187 1.204 3.181 3.207-.006 2.037-2.544 5.08-2.902 5.44a.42.42 0 0 1-.595 0c-.358-.36-2.888-3.406-2.88-5.457.003-.982.3-1.793.854-2.348C17.025 2.293 17.832 2 18.8 2h.017Zm-.009 3.477c.322 0 .456-.13.456-.455 0-.324-.131-.455-.456-.455-.321 0-.455.13-.455.455 0 .324.131.455.455.455Zm0-1.755c.789 0 1.298.509 1.298 1.3s-.51 1.3-1.298 1.3-1.297-.509-1.297-1.3.51-1.3 1.297-1.3Zm-3.904 7.876a.425.425 0 0 1-.42-.424c0-.18.116-.339.287-.399.276-.093.549-.173.816-.244a.422.422 0 0 1 .216.817c-.247.065-.506.142-.765.23a.424.424 0 0 1-.134.02Zm.94 7.882a.423.423 0 0 1 .39.748l-.02.009a8.52 8.52 0 0 1-.797.339.422.422 0 0 1-.296-.791c.253-.092.495-.194.722-.305Zm1.641-2.325a.411.411 0 0 1-.287-.114 2.56 2.56 0 0 0-.586-.395.42.42 0 0 1-.18-.57.42.42 0 0 1 .57-.178c.321.167.574.34.774.529.17.16.176.427.017.597a.438.438 0 0 1-.308.131Zm-.17-6.123a.423.423 0 0 1-.057-.843c.168-.022.279-.037.31-.037.23-.014.43.16.444.39v.009a.421.421 0 0 1-.396.447c-.08.008-.162.02-.242.03-.02.004-.04.004-.06.004Zm.648 6.806a.42.42 0 0 1 .245.544c-.12.307-.299.589-.524.828a.423.423 0 0 1-.594.054.423.423 0 0 1-.054-.595c.008-.011.02-.023.031-.034.162-.177.282-.362.353-.55a.417.417 0 0 1 .543-.247Zm-2.686-1.773a.405.405 0 0 1-.142-.025c-.265-.097-.53-.19-.785-.293a.424.424 0 0 1 .307-.789c.25.1.506.194.765.285a.423.423 0 0 1 .009.845.311.311 0 0 1-.154-.023Zm-4.083 4.658a.414.414 0 0 1 .475.348v.008a.419.419 0 0 1-.353.478h-.003c-.284.043-.563.083-.83.114a.424.424 0 0 1-.47-.367.42.42 0 0 1 .361-.47h.003c.268-.034.538-.068.817-.11Zm2.393-.463a.423.423 0 0 1 .205.82c-.27.067-.547.13-.823.187a.42.42 0 0 1-.497-.327.42.42 0 0 1 .327-.498c.261-.057.526-.117.788-.182Zm-.803-7.433a.427.427 0 0 1-.324-.694c.182-.216.421-.424.717-.618a.424.424 0 0 1 .578.151.423.423 0 0 1-.117.555 2.4 2.4 0 0 0-.532.455.409.409 0 0 1-.322.151Zm-4.026 8.17a.42.42 0 0 1 .453.384v.003a.419.419 0 0 1-.385.452h-.002c-.257.02-.513.037-.769.051H8.03c-.22 0-.436-.168-.453-.387-.02-.23.111-.427.339-.452l.09-.006c.118-.003.382-.017.752-.045ZM13.052 15a.423.423 0 0 1-.268-.097c-.267-.21-.48-.48-.626-.788a.425.425 0 0 1 .228-.552.419.419 0 0 1 .538.202c.077.17.208.33.393.484a.42.42 0 0 1 .06.592.402.402 0 0 1-.325.16Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = forwardRef(SvgRouteLight);
export default ForwardRef;
