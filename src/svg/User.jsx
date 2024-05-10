import React from "react";

export default function User({ fillColor }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_203_72)">
        <path
          d="M9.85748 9.63406C11.181 9.63406 12.3271 9.15936 13.2635 8.22278C14.2 7.28635 14.6747 6.14057 14.6747 4.81688C14.6747 3.49364 14.2 2.34771 13.2634 1.41097C12.3268 0.474699 11.1809 0 9.85748 0C8.53378 0 7.388 0.474699 6.45157 1.41113C5.51514 2.34756 5.04028 3.49349 5.04028 4.81688C5.04028 6.14057 5.51514 7.2865 6.45172 8.22293C7.38831 9.1592 8.53424 9.63406 9.85748 9.63406Z"
          fill={fillColor}
        />
        <path
          d="M18.2863 15.3789C18.2593 14.9891 18.2047 14.564 18.1242 14.1151C18.0431 13.6629 17.9385 13.2353 17.8134 12.8445C17.6842 12.4406 17.5084 12.0418 17.2911 11.6595C17.0656 11.2628 16.8007 10.9174 16.5034 10.6331C16.1926 10.3357 15.8121 10.0966 15.372 9.92218C14.9335 9.74869 14.4475 9.6608 13.9276 9.6608C13.7234 9.6608 13.526 9.74457 13.1447 9.99283C12.91 10.1459 12.6355 10.3229 12.3291 10.5186C12.0671 10.6856 11.7122 10.842 11.2738 10.9836C10.8461 11.122 10.4118 11.1922 9.98322 11.1922C9.5546 11.1922 9.12048 11.122 8.69232 10.9836C8.25439 10.8421 7.89948 10.6857 7.63779 10.5188C7.33429 10.3249 7.05963 10.1479 6.82144 9.99267C6.44058 9.74441 6.24298 9.66064 6.03882 9.66064C5.5188 9.66064 5.03296 9.74869 4.59457 9.92233C4.15482 10.0964 3.77411 10.3355 3.46298 10.6332C3.16589 10.9177 2.90085 11.263 2.67563 11.6595C2.4585 12.0418 2.28271 12.4405 2.15332 12.8447C2.02835 13.2355 1.92383 13.6629 1.84265 14.1151C1.76224 14.5634 1.70761 14.9887 1.6806 15.3793C1.65405 15.762 1.64062 16.1592 1.64062 16.5603C1.64062 17.6043 1.9725 18.4495 2.62695 19.0728C3.27332 19.6879 4.12857 20 5.16861 20H14.7987C15.8388 20 16.6937 19.6881 17.3402 19.0728C17.9948 18.45 18.3267 17.6046 18.3267 16.5602C18.3266 16.1572 18.313 15.7597 18.2863 15.3789Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_203_72">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
