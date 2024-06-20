import profilePic from "../../assets/profile-pic-big.png";
import PencilIcon from "./../../svg/PencilIcon";

export default function EditProfile() {
  return (
    <div className="w-full flex flex-col min-[670px]:flex-row justify-between pt-14">
      <div className="w-full min-[670px]:w-[12.45%] h-fit flex items-start ">
        <div className="object-scale-down relative ">
          <img src={profilePic} alt="profile pic " className=" w-fit h-fit" />
          <div className=" absolute right-0 bottom-[12.38%] bg-blue_3 rounded-full clamp1  flex items-center justify-center">
            <PencilIcon className="object-scale-down clamp2" />
          </div>
        </div>
      </div>

      <form action="" className="w-[81.23%] text-[13px] xl:text-base">
        <div className="w-full flex justify-between items-center pb-5">
          <div className="w-[48.55%]">
            <label htmlFor="edit-profile-name">Your Name</label>
            <input
              id="edit-profile-name"
              type="text"
              placeholder="Your Name"
              className="mt-2 w-full border border-[#DFEAF2] rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
          </div>
          <div className="w-[48.55%]">
            <label htmlFor="edit-profile-username">User Name</label>
            <input
              type="text"
              id="edit-profile-username"
              type="text"
              placeholder="Your Username"
              className="mt-2 w-full border border-[#DFEAF2] rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
          </div>
        </div>
        {/* ******************** */}
        <div className="w-full flex justify-between items-center pb-5">
          <div className="w-[48.55%]">
            <label htmlFor="edit-profile-email">Email</label>
            <input
              id="edit-profile-email"
              type="text"
              placeholder="Your Email"
              className="mt-2 w-full border border-[#DFEAF2] rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
          </div>
          <div className="w-[48.55%]">
            <label htmlFor="edit-profile-password">Password</label>
            <input
              type="password"
              id="edit-profile-password"
              placeholder="Your Password"
              className="mt-2 w-full border border-[#DFEAF2] rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
          </div>
        </div>
        {/* ************************ */}
        <div className="w-full flex justify-between items-center pb-5">
          <div className="w-[48.55%]">
            <label htmlFor="edit-profile-dob">Date of Birth</label>
            <input
              id="edit-profile-dob"
              type="text"
              placeholder="DD/MM/YYYY"
              className="mt-2 w-full border border-[#DFEAF2] rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
          </div>
          <div className="w-[48.55%]">
            <label htmlFor="edit-profile-present-address">
              Present Address
            </label>
            <input
              type="text"
              id="edit-profile-present-address"
              placeholder="San Jose, California, USA"
              className="mt-2 w-full border border-[#DFEAF2] rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
          </div>
        </div>
        {/* ********************* */}
        <div className="w-full flex justify-between items-center pb-5">
          <div className="w-[48.55%]">
            <label htmlFor="edit-profile-permanent-address">
              Permanent Address
            </label>
            <input
              id="edit-profile-permanent-address"
              type="text"
              placeholder="San Jose, California, USA"
              className="mt-2 w-full border border-[#DFEAF2] rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
          </div>
          <div className="w-[48.55%]">
            <label htmlFor="edit-profile-city">City</label>
            <input
              type="text"
              id="edit-profile-city"
              placeholder="San Jose"
              className="mt-2 w-full border border-[#DFEAF2] rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
          </div>
        </div>
        {/* ********************** */}
        <div className="w-full flex justify-between items-center pb-5">
          <div className="w-[48.55%]">
            <label htmlFor="edit-profile-postal-code">Postal Code</label>
            <input
              id="edit-profile-postal-code"
              type="text"
              placeholder="45962"
              className="mt-2 w-full border border-[#DFEAF2] rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
          </div>
          <div className="w-[48.55%]">
            <label htmlFor="edit-profile-country">Country</label>
            <input
              type="text"
              id="edit-profile-country"
              placeholder="San Jose"
              className="mt-2 w-full border border-[#DFEAF2] rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
          </div>
        </div>
        {/* ************ */}
        <div className="flex justify-end items-center">
          <button className="w-[130px] xl:w-[190px] h-10 xl:h-[50px] bg-blue_3 rounded-[9px] xl:rounded-[15px] text-white text-[15px] xl:text-lg">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
