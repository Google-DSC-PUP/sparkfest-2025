import React from "react";
import SocMedIcon from "../ui/SocMedIcon";

const FooterPage = () => {
  return (
    <footer className="h-auto bg-[url('/images/footer-bg.png')] bg-cover bg-center w-full px-5 lg:px-20 flex flex-col">
      {/* See you there Content */}
      <div className="hidden lg:flex items-center justify-center my-[144px]">
        <h1 className="text-gray-100 text-center font-bold font-mono whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          SEE YOU THERE!
        </h1>
      </div>

      {/* Footer Linkd and Images */}
      <div className="flex flex-col-reverse lg:flex-row justify-start lg:justify-between mt-[127px] lg:mt-0">
        {/* Images */}
        <div className="flex items-start justify-start flex-col">
          <img
            src="https://s3-alpha-sig.figma.com/img/9a68/a928/2b2817543974e43f9c153b4b761bd5b1?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PNGlFvDQKPwZzaQxZSp6mAANopv85Pg1wQR44XmlJQcjFgH0VJkznTbGtGjAQjH5Kx0-J6-rs0cqKbPOXcKc59u6MGD9b3W2L5zCuJaDysrjlCf5xf1kNOjXqwc6KkzXI545ktl0I4-CQvcwA6gIv49EnSaLjr0dNwMxZ05kEziB1K2vRRj83N3fRcYivG9Xw45YYADYzX-BfyIT1q3CgFS7JHAAdsgFk5qV6ldD1nJYIPrUMLn6zzGTI1IBUXaNW7D05V0x37NoEUnMilxrmn30Fc7BxMnwPiFFh7HMexcO~58qaRk~J1WbH545EnqV5OY6F5w~-ofMnP9dDUJM4g__"
            alt="Sparkfest Logo"
            className="w-[260px] lg:[360px] mb-5 lg:mb-10"
          />

          <img
            src="https://s3-alpha-sig.figma.com/img/0aa6/6ad0/c2f1a50400dc518367bc1479cee187d9?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dzeofFozgFpwZ9~47NUveceG2AwmOCd5haXLbQeWE70umkngltTBOPH43Cm0~DqEJ9xvB0FHk9em6P~SmE8hfXRp2Y1P1KVxxFkQSDc1S3UyLYa-lNKxnLMo~ULoH9o4abviofOY1UJHRgUwAgvYePfU5quA0XnZWaogtc6HuSTBNrht0gqdv79t6-NaHMFowLC~knhoz08OX936CJtTC4OSR0YuJwHK1uIR7OME6rYbuP~tvgk5S8n0YpH7xQZ35kLO4vudSUFBI~5RdAUTxjtMh~gNNwI8zWOKF8vLmyyghLX5JLeM2d-PnGkA6A80AW1K7Jk8XkcMcLIyNs8FoQ__"
            alt="GDG Logo"
            className="w-[260px] lg:[360px] mb-2 lg:mb-7"
          />

          <small className="text-[0.5625rem] lg:text-[0.821rem] leading-[1.25rem] font-normal font-mono text-gray-100 mb-5 lg:mb-9 ">
            Bridging the gap between theory and practice.
          </small>

          {/* Logos */}
          <div className="flex gap-5 mb-10 lg:mb-[100px]">
            <SocMedIcon
              pathD="M16.7657 30H21.3828V21.5684H25.5429L26 17.3789H21.3828V15.2632C21.3828 14.984 21.5045 14.7162 21.7209 14.5188C21.9374 14.3214 22.231 14.2105 22.5371 14.2105H26V10H22.5371C21.0064 10 19.5385 10.5545 18.4561 11.5415C17.3737 12.5286 16.7657 13.8673 16.7657 15.2632V17.3789H14.4571L14 21.5684H16.7657V30Z"
              link=""
            />
            <SocMedIcon
              pathD="M14.1973 13.0009C14.197 13.5313 13.9756 14.0399 13.5819 14.4147C13.1881 14.7896 12.6542 15 12.0976 14.9998C11.541 14.9995 11.0073 14.7886 10.6139 14.4133C10.2206 14.0381 9.99972 13.5293 10 12.9989C10.0003 12.4685 10.2217 11.9599 10.6154 11.585C11.0092 11.2102 11.5431 10.9997 12.0997 11C12.6563 11.0003 13.19 11.2112 13.5833 11.5865C13.9767 11.9617 14.1976 12.4705 14.1973 13.0009ZM14.2602 16.4807H10.063V29H14.2602V16.4807ZM20.8919 16.4807H16.7156V29H20.8499V22.4304C20.8499 18.7706 25.8552 18.4306 25.8552 22.4304V29H30V21.0704C30 14.9008 22.5918 15.1308 20.8499 18.1606L20.8919 16.4807Z"
              link=""
            />
            <SocMedIcon
              pathD="M21.028 10C22.153 10.003 22.724 10.009 23.217 10.023L23.411 10.03C23.635 10.038 23.856 10.048 24.123 10.06C25.187 10.11 25.913 10.278 26.55 10.525C27.21 10.779 27.766 11.123 28.322 11.678C28.8307 12.1777 29.2242 12.7825 29.475 13.45C29.722 14.087 29.89 14.813 29.94 15.878C29.952 16.144 29.962 16.365 29.97 16.59L29.976 16.784C29.991 17.276 29.997 17.847 29.999 18.972L30 19.718V21.028C30.0025 21.7574 29.9948 22.4868 29.977 23.216L29.971 23.41C29.963 23.635 29.953 23.856 29.941 24.122C29.891 25.187 29.721 25.912 29.475 26.55C29.2242 27.2175 28.8307 27.8223 28.322 28.322C27.8223 28.8307 27.2175 29.2242 26.55 29.475C25.913 29.722 25.187 29.89 24.123 29.94L23.411 29.97L23.217 29.976C22.724 29.99 22.153 29.997 21.028 29.999L20.282 30H18.973C18.2433 30.0026 17.5135 29.9949 16.784 29.977L16.59 29.971C16.3526 29.962 16.1153 29.9517 15.878 29.94C14.814 29.89 14.088 29.722 13.45 29.475C12.7828 29.2241 12.1785 28.8306 11.679 28.322C11.17 27.8224 10.7761 27.2176 10.525 26.55C10.278 25.913 10.11 25.187 10.06 24.122L10.03 23.41L10.025 23.216C10.0066 22.4868 9.99825 21.7574 10 21.028V18.972C9.99725 18.2426 10.0046 17.5132 10.022 16.784L10.029 16.59C10.037 16.365 10.047 16.144 10.059 15.878C10.109 14.813 10.277 14.088 10.524 13.45C10.7757 12.7822 11.1702 12.1774 11.68 11.678C12.1792 11.1695 12.7832 10.7761 13.45 10.525C14.088 10.278 14.813 10.11 15.878 10.06C16.144 10.048 16.366 10.038 16.59 10.03L16.784 10.024C17.5132 10.0062 18.2426 9.99857 18.972 10.001L21.028 10ZM20 15C18.6739 15 17.4022 15.5268 16.4645 16.4645C15.5268 17.4021 15 18.6739 15 20C15 21.3261 15.5268 22.5979 16.4645 23.5355C17.4022 24.4732 18.6739 25 20 25C21.3261 25 22.5979 24.4732 23.5356 23.5355C24.4732 22.5979 25 21.3261 25 20C25 18.6739 24.4732 17.4021 23.5356 16.4645C22.5979 15.5268 21.3261 15 20 15ZM20 17C20.394 16.9999 20.7841 17.0775 21.1481 17.2282C21.5121 17.3789 21.8429 17.5998 22.1215 17.8783C22.4001 18.1569 22.6211 18.4875 22.772 18.8515C22.9228 19.2154 23.0005 19.6055 23.0005 19.9995C23.0006 20.3935 22.9231 20.7836 22.7723 21.1476C22.6216 21.5116 22.4007 21.8423 22.1222 22.121C21.8437 22.3996 21.513 22.6206 21.149 22.7714C20.7851 22.9223 20.395 22.9999 20.001 23C19.2054 23 18.4423 22.6839 17.8797 22.1213C17.3171 21.5587 17.001 20.7956 17.001 20C17.001 19.2044 17.3171 18.4413 17.8797 17.8787C18.4423 17.3161 19.2054 17 20.001 17M25.251 13.5C24.9195 13.5 24.6016 13.6317 24.3671 13.8661C24.1327 14.1005 24.001 14.4185 24.001 14.75C24.001 15.0815 24.1327 15.3995 24.3671 15.6339C24.6016 15.8683 24.9195 16 25.251 16C25.5825 16 25.9005 15.8683 26.1349 15.6339C26.3693 15.3995 26.501 15.0815 26.501 14.75C26.501 14.4185 26.3693 14.1005 26.1349 13.8661C25.9005 13.6317 25.5825 13.5 25.251 13.5Z"
              link=""
            />
            <SocMedIcon
              pathD="M24.9872 13.1333C24.2463 12.2661 23.8379 11.1527 23.838 10H20.4879V23.7778C20.4626 24.5235 20.1556 25.2301 19.6317 25.7483C19.1078 26.2666 18.408 26.556 17.6798 26.5556C16.1403 26.5556 14.861 25.2667 14.861 23.6667C14.861 21.7556 16.6607 20.3222 18.5147 20.9111V17.4C14.7742 16.8889 11.5 19.8667 11.5 23.6667C11.5 27.3667 14.4923 30 17.669 30C21.0733 30 23.838 27.1667 23.838 23.6667V16.6778C25.1965 17.6776 26.8275 18.2141 28.5 18.2111V14.7778C28.5 14.7778 26.4617 14.8778 24.9872 13.1333Z"
              link=""
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-start lg:justify-center mt-0 lg:mt-[63px] mr-[75px]">
          <div className="flex gap-20 lg:gap-32 mb-6 lg:mb-0 ">
            {/* About Us */}
            <div className="flex flex-col gap-5">
              <h1 className="body2 text-gray-100 whitespace-nowrap">
                About Us
              </h1>
              <div className="  text-gray-100 flex flex-col gap-5 small1">
                <a href="" className="text-grey-100 hover:text-[#ff7daf]  ">
                  Sparkfest
                </a>
                <a href="" className="text-grey-100 hover:text-halftone-red ">
                  Location
                </a>
                <a href="" className="text-grey-100 hover:text-halftone-red ">
                  Highlights
                </a>
                <a href="" className="text-grey-100 hover:text-halftone-red ">
                  Sponsors
                </a>
                <a href="" className="text-grey-100 hover:text-halftone-red ">
                  FAQs
                </a>
              </div>
            </div>

            {/*  GDG PUP */}

            <div className="flex flex-col items-start justify-start gap-5">
              <h1 className="body2 text-gray-100 ">GDG PUP</h1>
              <a
                href=""
                className="text-grey-100 hover:text-halftone-red small1"
              >
                Community
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-grey-100" />

      {/* Copy Right */}
      <div className="flex flex-col items-center justify-center mt-4 mb-4 lg:my-0 lg:mt-11 lg:mb-9">
        <small className="text-[0.5625rem] lg:text-[0.821rem] leading-[1.25rem] font-normal font-mono text-gray-100text-center text-gray-100 ">
          &copy; 2025 Sparkfest. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default FooterPage;
