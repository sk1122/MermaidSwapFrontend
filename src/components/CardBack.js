const CardBack = () => {
    return (
      <div className="w-80 mt-24 mx-auto lg:mt-16 rounded-xl">
        <div className="flex w-auto justify-between p-3 items-center bg-gray-200 text-xs rounded-t-xl">
          <div className="flex text-purple-900 font-bold text-lg items-center">
            <div className="flex space-x-1">
              <svg
                viewBox="0 0 24 24"
                width="24px"
                color="text"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-bdnxRM kDWlca">
                <path d="M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z"></path>
              </svg>
              <div>Set Position</div>
            </div>
          </div>
          <div className="flex card-number bg-purple-800 text-white font-medium items-center p-1 rounded space-x-1">
            <svg
              viewBox="0 0 24 24"
              fill="white"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bdnxRM kYHDzn">
              <path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"></path>
            </svg>
            <span>UP</span>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden bg-white rounded-b-xl pt-4">
          <div className="flex justify-between mb-2 justify-center mx-3">
            <div className="text-purple-700">Commit:</div>
            <div className="flex space-x-1 items-center font-bold text-purple-900">
              <span>
                <svg
                  viewBox="0 0 16 16"
                  color="text"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-bdnxRM kbYLnI">
                  <circle cx="8" cy="8" r="8" fill="#F0B90B"></circle>
                  <path
                    d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                    fill="#FFFDFA"></path>
                </svg>
              </span>
              <span>BNB</span>
            </div>
          </div>
          <div className="flex justify-center">
            <input
              type="number"
              pattern="^[0-9]*[.,]?[0-9]{0,18}$"
              inputmode="decimal"
              min="0"
              placeholder="0.0"
              disabled=""
              scale="md"
              className="p-2 rounded-xl w-11/12 bg-gray-300 border outline outline-purple-100 justify-end"
            />
          </div>
          <div className="mt-5 mb-2">
          <input
                name="balance"
                type="range"
                min="0"
                max="100"
                step="0.01"
                disabled=""
                value="0"
              />
          </div>
          <div className="flex space-x-2 justify-center">
              <div className="text-gray-400 bg-gray-200 text-xs rounded-xl px-3 py-1">10%</div>
              <div className="text-gray-400 bg-gray-200 text-xs rounded-xl px-3 py-1">25%</div>
              <div className="text-gray-400 bg-gray-200 text-xs rounded-xl px-3 py-1">50%</div>
              <div className="text-gray-400 bg-gray-200 text-xs rounded-xl px-3 py-1">75%</div>
              <div className="text-gray-400 bg-gray-200 text-xs rounded-xl px-3 py-1">Max</div>
          </div>
          <div>
              <button className="bg-blue-500 w-11/12 rounded-lg px-8 py-2 font-bold text-white mt-4 cursor-pointer hover:bg-blue-400">Connect Wallet</button>
          </div>
          <div className="text-xs text-purple-900 mt-1 mb-4 mx-3">
              <p>You won’t be able to remove or change your position once you enter it.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardBack;
  