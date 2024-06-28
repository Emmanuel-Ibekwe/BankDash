import React from "react";

export default function Home({ fillColor, className }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_203_85)">
        <path
          d="M19.4603 8.69904C19.4598 8.69858 19.4593 8.69812 19.4589 8.69766L11.3005 0.539551C10.9527 0.19165 10.4904 0 9.99858 0C9.50679 0 9.04445 0.191498 8.69655 0.539398L0.542409 8.69339C0.539663 8.69614 0.536916 8.69904 0.53417 8.70178C-0.179942 9.42001 -0.178721 10.5853 0.537679 11.3017C0.86498 11.6292 1.29726 11.8188 1.75945 11.8387C1.77822 11.8405 1.79714 11.8414 1.81621 11.8414H2.14138V17.8453C2.14138 19.0334 3.10802 20 4.29638 20H7.48821C7.81169 20 8.07415 19.7377 8.07415 19.4141V14.707C8.07415 14.1649 8.51513 13.7239 9.05727 13.7239H10.9399C11.482 13.7239 11.923 14.1649 11.923 14.707V19.4141C11.923 19.7377 12.1853 20 12.509 20H15.7008C16.8891 20 17.8558 19.0334 17.8558 17.8453V11.8414H18.1573C18.6489 11.8414 19.1113 11.6499 19.4593 11.302C20.1765 10.5844 20.1768 9.41711 19.4603 8.69904Z"
          fill={fillColor}
          className={className}
        />
      </g>
      <defs>
        <clipPath id="clip0_203_85">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
