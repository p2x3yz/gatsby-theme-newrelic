import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Letter = styled.path`
  fill: var(--color-white);
`;

const NewRelicLogo = ({ className, size, omitText }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${omitText ? '18' : '79'} 15`}
    className={className}
    css={css`
      fill: none;
      width: ${size || (omitText ? '18px' : '79px')};
    `}
  >
    {!omitText && (
      <>
        <Letter d="M27.3532 11.5262L25.2123 7.0377C24.7012 5.97415 24.1763 4.77276 23.9971 4.20652L23.9558 4.24788C24.0247 5.04845 24.0385 6.05686 24.0523 6.89879L24.1074 11.5252H22.5466V1.97021H24.3418L26.6618 6.63794C27.104 7.52123 27.5176 8.6537 27.6427 9.09587L27.684 9.05451C27.6427 8.57099 27.5462 7.20418 27.5462 6.33362L27.5186 1.97021H29.0243V11.5262H27.3532Z" />
        <Letter d="M31.8682 8.44694V8.55722C31.8682 9.52427 32.2277 10.5454 33.5945 10.5454C34.2434 10.5454 34.8096 10.3111 35.3345 9.85511L35.9283 10.7808C35.1967 11.4022 34.3537 11.7065 33.4153 11.7065C31.4409 11.7065 30.1981 10.2846 30.1981 8.04718C30.1981 6.81822 30.46 6.0028 31.0687 5.3125C31.6349 4.66356 32.3252 4.37302 33.2096 4.37302C33.8999 4.37302 34.535 4.55222 35.1288 5.09088C35.7364 5.64333 36.0407 6.49905 36.0407 8.12883V8.44694H31.8682ZM33.2085 5.51927C32.3528 5.51927 31.883 6.19578 31.883 7.32825H34.465C34.465 6.19578 33.9677 5.51927 33.2085 5.51927Z" />
        <Letter d="M44.1176 11.5538H42.6946L41.8388 8.33667C41.6183 7.50853 41.3829 6.4312 41.3829 6.4312H41.3553C41.3553 6.4312 41.245 7.1215 40.8994 8.4056L40.0574 11.5538H38.6355L36.7289 4.636L38.2347 4.42923L38.9939 7.81285C39.1869 8.68235 39.3533 9.64941 39.3533 9.64941H39.3947C39.3947 9.64941 39.5325 8.73749 39.7955 7.7715L40.6936 4.54057H42.1856L42.9724 7.68879C43.2629 8.82126 43.4145 9.67698 43.4145 9.67698H43.4559C43.4559 9.67698 43.6213 8.61343 43.8016 7.79907L44.5194 4.53951H46.0941L44.1176 11.5538Z" />
        <Letter d="M54.9428 11.5262L54.1147 10.0481C53.4519 8.87425 53.0098 8.21152 52.4849 7.68664C52.3057 7.50744 52.1668 7.41095 51.8635 7.39716V11.5262H50.3037V1.97021H53.2176C55.3585 1.97021 56.3244 3.21296 56.3244 4.7049C56.3244 6.07171 55.4412 7.3293 53.9492 7.3293C54.2949 7.5085 54.9301 8.4342 55.4263 9.23478L56.8355 11.5262H54.9428ZM52.7341 3.25432H51.8635V6.27954H52.6779C53.506 6.27954 53.9482 6.16926 54.2387 5.87872C54.5006 5.61681 54.6671 5.21599 54.6671 4.71868C54.6671 3.75163 54.1422 3.25432 52.7341 3.25432Z" />
        <Letter d="M58.9203 8.44694V8.55722C58.9203 9.52427 59.2798 10.5454 60.6466 10.5454C61.2955 10.5454 61.8618 10.3111 62.3867 9.85511L62.9805 10.7808C62.2488 11.4022 61.4058 11.7065 60.4674 11.7065C58.493 11.7065 57.2502 10.2846 57.2502 8.04718C57.2502 6.81822 57.5122 6.0028 58.1208 5.3125C58.687 4.66356 59.3773 4.37302 60.2617 4.37302C60.952 4.37302 61.5871 4.55222 62.1809 5.09088C62.7885 5.64333 63.0929 6.49905 63.0929 8.12883V8.44694H58.9203ZM60.2596 5.51927C59.4038 5.51927 58.9341 6.19578 58.9341 7.32825H61.5161C61.5161 6.19578 61.0188 5.51927 60.2596 5.51927Z" />
        <Letter d="M65.9346 11.6789C64.4013 11.6789 64.4013 10.2983 64.4013 9.70453V3.75164C64.4013 2.79837 64.3599 2.28834 64.2634 1.70832L65.8243 1.36264C65.9346 1.79103 65.9483 2.37105 65.9483 3.2819V9.20616C65.9483 10.1456 65.9897 10.2973 66.1 10.4627C66.1827 10.5868 66.4181 10.6557 66.5973 10.573L66.8454 11.5125C66.5697 11.6238 66.2802 11.6789 65.9346 11.6789Z" />
        <Letter d="M68.5728 3.5035C68.0204 3.5035 67.592 3.04754 67.592 2.49509C67.592 1.92886 68.0341 1.4729 68.6004 1.4729C69.139 1.4729 69.595 1.91507 69.595 2.49509C69.5939 3.04754 69.138 3.5035 68.5728 3.5035ZM67.8125 11.5262V4.64975L69.3458 4.373V11.5262H67.8125Z" />
        <Letter d="M73.6954 11.7065C71.7899 11.7065 70.7264 10.3673 70.7264 8.1161C70.7264 5.57547 72.2459 4.36029 73.8057 4.36029C74.5649 4.36029 75.1173 4.53949 75.7387 5.11951L74.9795 6.12792C74.5649 5.75467 74.2065 5.58925 73.8057 5.58925C73.3221 5.58925 72.9213 5.83738 72.7008 6.29334C72.494 6.72172 72.4113 7.37067 72.4113 8.24017C72.4113 9.19343 72.5629 9.80102 72.881 10.1456C73.1016 10.3938 73.4335 10.5465 73.8067 10.5465C74.2903 10.5465 74.76 10.3121 75.2149 9.85616L75.9328 10.7819C75.2976 11.416 74.6349 11.7065 73.6954 11.7065Z" />
        <Letter d="M77.2286 11.68C76.6687 11.68 76.2085 11.2283 76.2085 10.6546C76.2085 10.0841 76.6687 9.62924 77.2286 9.62924C77.7884 9.62924 78.2486 10.0841 78.2486 10.6546C78.2486 11.2272 77.7874 11.68 77.2286 11.68ZM77.2286 9.83283C76.7928 9.83283 76.4428 10.1965 76.4428 10.6546C76.4428 11.1127 76.7928 11.4817 77.2286 11.4817C77.6644 11.4817 78.0175 11.1127 78.0175 10.6546C78.0164 10.1965 77.6633 9.83283 77.2286 9.83283ZM77.429 11.2219C77.3844 11.1445 77.3654 11.1148 77.3219 11.0321C77.2084 10.8253 77.1734 10.767 77.1321 10.7511C77.1215 10.7458 77.1098 10.7426 77.096 10.7426V11.223H76.8702V10.0725H77.2975C77.5011 10.0725 77.6368 10.2082 77.6368 10.4086C77.6368 10.5825 77.5212 10.7225 77.3802 10.7257C77.4025 10.7447 77.4131 10.7564 77.4269 10.7755C77.4926 10.8582 77.7025 11.2219 77.7025 11.2219H77.429ZM77.3081 10.2739C77.2837 10.2655 77.2339 10.257 77.1787 10.257H77.096V10.5687H77.1734C77.2731 10.5687 77.3166 10.5571 77.3473 10.5295C77.3749 10.5019 77.3919 10.4606 77.3919 10.4139C77.3908 10.3429 77.3632 10.2952 77.3081 10.2739Z" />
      </>
    )}
    <path
      d="M17.159 5.6486C16.3489 1.92142 11.8784 -0.271419 7.17568 0.751833C2.47296 1.77403 -0.682686 5.62527 0.127433 9.3514C0.937552 13.0786 5.40805 15.2714 10.1108 14.2482C14.8135 13.226 17.9691 9.37578 17.159 5.6486ZM8.64322 10.9356C6.74517 10.9356 5.20764 9.39699 5.20764 7.5C5.20764 5.603 6.74623 4.06441 8.64322 4.06441C10.5402 4.06441 12.0788 5.60194 12.0788 7.5C12.0788 9.39805 10.5402 10.9356 8.64322 10.9356Z"
      css={css`
        fill: #008c99;
      `}
    />
    <path
      d="M9.40328 2.69022C6.6792 2.69022 4.47046 4.89896 4.47046 7.62303C4.47046 10.3471 6.6792 12.5559 9.40328 12.5559C12.1284 12.5559 14.3372 10.3471 14.3372 7.62303C14.3361 4.89896 12.1274 2.69022 9.40328 2.69022ZM8.64299 10.5009C6.98564 10.5009 5.64216 9.15738 5.64216 7.50003C5.64216 5.84268 6.98564 4.4992 8.64299 4.4992C10.3003 4.4992 11.6438 5.84268 11.6438 7.50003C11.6438 9.15738 10.3003 10.5009 8.64299 10.5009Z"
      css={css`
        fill: #70ccd3;
      `}
    />
  </svg>
);

NewRelicLogo.propTypes = {
  className: PropTypes.string,
  omitText: PropTypes.bool,
  size: PropTypes.string,
};

NewRelicLogo.defaultProps = {
  omitText: false,
};

export default NewRelicLogo;
