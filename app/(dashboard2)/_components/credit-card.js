"use client";
const CreditCard = () => {
  return (
    <div className=" rounded-3xl w-[320px] flex flex-col justify-between h-[207px] bg-gradient-to-b from-[#197BBD] to-[#3391D0] p-5 relative">
      <div>
        <h1 className="text-white font-bold">cloudcash</h1>
        <h2 className="text-[8px] text-gray-300">PREMIUM ACCOUNT</h2>
      </div>

      <div className="flex font-medium text-white space-x-4">
        <h1 className="text-xl">5789</h1>
        <h1 className="text-xl">****</h1>
        <h1 className="text-xl">****</h1>
        <h1 className="text-xl">2847</h1>
      </div>
      <div className="flex space-x-12">
        <div className="text-white">
          <h3 className="text-[7px]">Card Holder</h3>
          <h2 className="text-[12px]">Mike Smith</h2>
        </div>
        <div className="text-white">
          <h3 className="text-[7px]">Expire Date</h3>
          <h2 className="text-[12px]">06/21</h2>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="213"
        height="142"
        viewBox="0 0 213 142"
        fill="none"
        className="rounded-br-3xl absolute right-0 bottom-0"
      >
        <path
          d="M105.475 114.781C105.475 143.638 82.0821 167.03 53.2257 167.03C24.3693 167.03 0.976562 143.638 0.976562 114.781C0.976562 99.5671 7.4792 85.8718 17.8568 76.3229C27.1623 67.7606 39.5834 62.5322 53.2257 62.5322C82.0821 62.5322 105.475 85.9249 105.475 114.781Z"
          fill="white"
          fill-opacity="0.12"
        />
        <path
          d="M105.475 114.781C105.475 143.638 82.0821 167.03 53.2257 167.03H204.02C175.164 167.03 151.771 143.638 151.771 114.781C151.771 111.095 152.153 107.498 152.879 104.028C150.418 104.383 147.902 104.567 145.343 104.567C119.982 104.567 98.8412 86.4986 94.0917 62.5322H60.0093H53.2257C82.0821 62.5322 105.475 85.9249 105.475 114.781Z"
          fill="white"
          fill-opacity="0.12"
        />
        <path
          d="M94.0917 62.5322C93.4371 59.229 93.0939 55.8137 93.0939 52.3183C93.0939 47.7277 93.6859 43.2753 94.7978 39.0334C90.4316 46.8663 77.3614 62.5322 60.0093 62.5322H94.0917Z"
          fill="white"
          fill-opacity="0.12"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M204.02 167.03C232.877 167.03 256.269 143.638 256.269 114.781C256.269 85.9249 232.877 62.5322 204.02 62.5322C201.461 62.5322 198.945 62.7161 196.484 63.0716C192.031 84.3599 174.62 100.887 152.879 104.028C152.153 107.498 151.771 111.095 151.771 114.781C151.771 143.638 175.164 167.03 204.02 167.03Z"
          fill="white"
          fill-opacity="0.12"
        />
        <path
          d="M196.484 63.0716C192.031 84.3599 174.62 100.887 152.879 104.028C157.332 82.7397 174.743 66.2123 196.484 63.0716Z"
          fill="white"
          fill-opacity="0.12"
        />
        <path
          d="M197.592 52.3183C197.592 23.4619 174.199 0.0692139 145.343 0.0692139C121.077 0.0692139 100.675 16.611 94.7978 39.0334C93.6859 43.2753 93.0939 47.7277 93.0939 52.3183C93.0939 55.8137 93.4371 59.229 94.0917 62.5322C98.8412 86.4986 119.982 104.567 145.343 104.567C147.902 104.567 150.418 104.383 152.879 104.028C157.332 82.7397 174.743 66.2123 196.484 63.0716C197.21 59.6012 197.592 56.0043 197.592 52.3183Z"
          fill="white"
          fill-opacity="0.12"
        />
      </svg>
    </div>
  );
};

export default CreditCard;
