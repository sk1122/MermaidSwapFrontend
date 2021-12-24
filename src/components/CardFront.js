import Progress from "./Progress";
const CardFront = ({progress}) => {
  
  return (
    <div class="flex flex-col mt-24 mx-auto lg:mt-16 max-w-min bg-gray-200 rounded-3xl">
      <div className="flex justify-between p-1 items-center text-xs">
        <div className="flex ml-2 card-status text-purple-900 font-bold items-center">
          <span>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </span>
          &nbsp;LIVE
        </div>
        <div className="card-number mr-2 text-purple-900 font-medium">
          #23456
        </div>
      </div>
      <div className="h-1">
        <Progress p={progress} />
      </div>
    {/* { console.log(progress)} */}
        <div className="flex flex-col justify-center overflow-hidden p-2">
          {/* polygon  */}
          <div className="upper-svg relative mx-auto">
            <svg
              height="65px"
              width="240px"
              viewBox="0 0 240 65"
              color="text"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bdnxRM kDWlca">
              <g filter="url(#filter0_i)">
                <path
                  d="M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z"
                  fill="#EFF4F5"></path>
              </g>
              <defs>
                <filter
                  id="filter0_i"
                  x="10.0001"
                  y="1.03125"
                  width="224"
                  height="62.9688"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"></feBlend>
                </filter>
              </defs>
            </svg>
            <div className="absolute top-4 inset-x-20">
              <div className="inner-data flex flex-col items-center">
                <span className="text-purple-500 text-sm font-extrabold">UP</span>
                <div className="inner2-data flex text-xs space-x-2">
                  <div className="font-bold text-gray-500">2.10x</div>
                  <div>Payout</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-purple-700 rounded-xl w-72 mx-auto">
              <div className="flex flex-col items-center">
                  <div className="flex w-full mr-auto ml-6 mt-2 text-xs font-med text-gray-400">Last Price</div>
                  <div className="flex space-x-24 w-full justify-center mt-2 mb-2">
                      <div>
                          <div className="text-purple-500 font-bold" style={{ textDecoration: "underline dotted rgb(122, 110, 170)", textUnderlineOffset: "0.1em" }}>$515.204</div>
                      </div>
                      <div className="flex space-x-1 bg-purple-500 px-1 text-xs items-center rounded-sm">
                        <svg viewBox="0 0 24 24" color="white" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM kYHDzn"><path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"></path></svg>
                        <div>$0.510</div>
                      </div>
                  </div> 
                  <div className="flex w-full justify-center space-x-24 text-xs text-gray-400">
                      <div>
                      Locked Price:
                      </div>
                    <div>$515.137</div>
                  </div>
                  <div className="flex w-full justify-center space-x-14 mb-2 text-sm font-bold text-gray-900">
                      <div>Prize pool:</div>
                      <div>23.191 BNB</div>
                  </div>
              </div>
          </div>
          {/* bottom svg  */}
          <div className="bottom-svg relative mx-auto">
            <svg
              height="65px"
              width="240px"
              viewBox="0 0 240 65"
              color="text"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bdnxRM kDWlca">
              <g filter="url(#filter0_i)">
                <path
                  d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z"
                  fill="#ED4B99"></path>
              </g>
              <defs>
                <filter
                  id="filter0_i"
                  x="10.0001"
                  y="1"
                  width="224"
                  height="62.9688"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"></feBlend>
                </filter>
              </defs>
            </svg>
            <div className="inner-data absolute inset-x-20 bottom-4">
              <div className="inner2-data flex flex-col items-center">
                <div className="flex text-xs space-x-2">
                  <div className="font-bold  text-gray-500">2.10x</div>
                  <div>Payout</div>
                </div>
                <div className="font-extrabold text-sm text-purple-500">Down</div>
              </div>
            </div>
          </div>
        </div>      
    </div>
  );
};

export default CardFront;
