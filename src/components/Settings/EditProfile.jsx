import { useRef, useState } from "react";
import moment from "moment";
import profilePic from "../../assets/profile-pic-big.png";
import PencilIcon from "./../../svg/PencilIcon";
import DropdownIcon from "./../../svg/DropdownIcon";
import { isValidEmail, isPasswordFalse } from "../../utils/validation";

export default function EditProfile() {
  const dobRef = useRef();
  const imgRef = useRef();
  const [date, setDate] = useState("");
  const [imgError, setImgError] = useState("");
  const [readablePicture, setReadablePicture] = useState("");
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleDate = e => {
    const d = new Date(e.target.value);
    setDate(moment(d).format("DD MMMM YYYY"));
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (
      name.trim().length === 0 ||
      userName.trim().length === 0 ||
      !isValidEmail(email) ||
      isPasswordFalse(password) ||
      date === "" ||
      presentAddress.trim().length === 0 ||
      permanentAddress.trim().length === 0 ||
      city.trim().length === 0 ||
      postalCode.trim().length === 0 ||
      country.trim().length === 0
    ) {
      return;
    }

    const data = {
      picture,
      name,
      userName,
      email,
      password,
      date,
      presentAddress,
      permanentAddress,
      city,
      postalCode,
      country
    };

    setPicture("");
    setName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setDate("");
    setPresentAddress("");
    setPermanentAddress("");
    setCity("");
    setPostalCode("");
    setCountry("");
    setIsSubmit(false);
  };

  const handleImg = e => {
    const pic = e.target.files[0];
    if (
      pic.type !== "image/jpeg" &&
      pic.type !== "image/png" &&
      pic.type !== "image/webp"
    ) {
      setImgError(`image format is not supported`);
      return;
    }

    if (pic.size > 1024 * 5) {
      setImgError(`image is too large. Maximum 5mb.`);
      return;
    }

    setImgError("");
    setPicture(pic);

    const reader = new FileReader();
    reader.onload = e => {
      setReadablePicture(e.target.result);
    };
    reader.readAsDataURL(pic);
  };

  return (
    <div className="w-full flex flex-col min-[670px]:flex-row space-y-6 min-[670px]:space-y-0 justify-between pt-6 min-[600px]:pt-12">
      <div className="w-full min-[670px]:w-[12.45%] h-fit flex items-center justify-center min-[670px]  ">
        <div>
          <div className="object-scale-down relative ">
            <img
              src={readablePicture ? readablePicture : profilePic}
              alt="profile pic "
              className="w-[170px] min-[670px]:w-[130px] h-[170px] min-[670px]:h-[130px] rounded-full"
            />
            <div
              onClick={() => imgRef.current.click()}
              className="cursor-pointer absolute right-0 bottom-[12.38%] bg-blue_3 rounded-full w-[38.64px] h-[38.64px] min-[670px]:clamp1  flex items-center justify-center"
            >
              <PencilIcon className="object-scale-down w-[18.55px] h-[18.55px] min-[670px]:clamp2" />
            </div>
            <input
              type="file"
              className="w-full absolute invisible h-[0.1px]"
              ref={imgRef}
              onChange={handleImg}
              accept="image/png,image/jpeg,image/webp"
            />
          </div>
          {imgError && isSubmit && (
            <p className="text-red-400 text-xs min-[670px]:text-[11px] xl:text-xs pt-0.5">
              {imgError}
            </p>
          )}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        action=""
        className="w-full min-[670px]:w-[81.23%] text-[13px] xl:text-base"
      >
        <div className="w-full flex flex-col min-[620px]:flex-row space-y-4 min-[620px]:space-y-0 justify-between items-center pb-5 ">
          <div className="w-full min-[620px]:w-[48.55%]">
            <label htmlFor="edit-profile-name">Your Name</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              id="edit-profile-name"
              type="text"
              placeholder="Your Name"
              className="mt-2 placeholder-text_2 w-full border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
            {name.trim().length === 0 && isSubmit && (
              <p className="text-red-400 text-xs min-[670px]:text-[11px] xl:text-xs pt-0.5">
                Name is required!
              </p>
            )}
          </div>
          <div className="w-full min-[620px]:w-[48.55%]">
            <label htmlFor="edit-profile-username">User Name</label>
            <input
              value={userName}
              onChange={e => setUserName(e.target.value)}
              type="text"
              id="edit-profile-username"
              placeholder="Your Username"
              className="mt-2 text-text_3 placeholder-text_2 w-full border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
            {userName.trim().length === 0 && isSubmit && (
              <p className="text-red-400 text-xs min-[670px]:text-[11px] xl:text-xs pt-0.5">
                Username is required!
              </p>
            )}
          </div>
        </div>
        {/* ******************** */}
        <div className="w-full flex flex-col min-[620px]:flex-row space-y-4 min-[620px]:space-y-0 justify-between items-center pb-5 ">
          <div className="w-full min-[620px]:w-[48.55%]">
            <label htmlFor="edit-profile-email">Email</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              id="edit-profile-email"
              type="text"
              placeholder="Your Email"
              className="mt-2 text-text_3 placeholder-text_2 w-full border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
            {(!isValidEmail(email) || email.trim().length === 0) &&
              isSubmit && (
                <p className="text-red-400 text-xs min-[670px]:text-[11px] xl:text-xs pt-0.5">
                  {email.length === 0
                    ? "email is required!"
                    : !isValidEmail(email)
                    ? "invalid email"
                    : ""}
                </p>
              )}
          </div>
          <div className="w-full min-[620px]:w-[48.55%]">
            <label htmlFor="edit-profile-password">Password</label>
            <input
              value={password}
              onChange={e => {
                setPassword(e.target.value);
                console.log("isPasswordFalse", isPasswordFalse(password));
                console.log("password", password);
              }}
              type="password"
              id="edit-profile-password"
              placeholder="Your Password"
              className="mt-2 text-text_3 placeholder-text_2 w-full border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
            {isPasswordFalse(password) && isSubmit && (
              <p className="text-red-400 text-xs min-[670px]:text-[11px] xl:text-xs pt-0.5">
                password must be atleast 8 characters and contain atleast an
                uppercase, a lowercase, a number or a special character!
              </p>
            )}
          </div>
        </div>
        {/* ************************ */}
        <div className="w-full flex flex-col min-[620px]:flex-row space-y-4 min-[620px]:space-y-0 justify-between items-center pb-5 ">
          <div className="w-full min-[620px]:w-[48.55%]">
            <label htmlFor="edit-profile-dob">Date of Birth</label>
            <div className="w-full relative">
              <div className="mt-2 w-full flex items-center justify-between border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]">
                <p className={`${date === "" ? "text-text_2" : "text-text_3"}`}>
                  {date === "" ? "25 January 1990" : date}
                </p>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    dobRef.current.showPicker();
                  }}
                >
                  <DropdownIcon />
                </p>
              </div>
              {date === "" && isSubmit && (
                <p className="text-red-400 text-xs min-[670px]:text-[11px] xl:text-xs pt-0.5">
                  Date of birth is required!
                </p>
              )}
              <input
                ref={dobRef}
                onChange={handleDate}
                id="edit-profile-dob"
                type="date"
                placeholder="DD/MM/YYYY"
                className="-m-8 invisible absolute  w-full border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-[0.1px] xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
              />
            </div>
          </div>
          <div className="w-full min-[620px]:w-[48.55%]">
            <label htmlFor="edit-profile-present-address">
              Present Address
            </label>
            <input
              value={presentAddress}
              onChange={e => setPresentAddress(e.target.value)}
              type="text"
              id="edit-profile-present-address"
              placeholder="San Jose, California, USA"
              className="mt-2 text-text_3 placeholder-text_2 w-full border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
            {presentAddress.trim().length === 0 && isSubmit && (
              <p className="text-red-400 text-xs min-[670px]:text-[11px] xl:text-xs pt-0.5">
                Present Address is required!
              </p>
            )}
          </div>
        </div>
        {/* ********************* */}
        <div className="w-full flex flex-col min-[620px]:flex-row space-y-4 min-[620px]:space-y-0 justify-between items-center pb-5 ">
          <div className="w-full min-[620px]:w-[48.55%]">
            <label htmlFor="edit-profile-permanent-address">
              Permanent Address
            </label>
            <input
              value={permanentAddress}
              onChange={e => setPermanentAddress(e.target.value)}
              id="edit-profile-permanent-address"
              type="text"
              placeholder="San Jose, California, USA"
              className="mt-2 text-text_3 placeholder-text_2 w-full border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
            {permanentAddress.trim().length === 0 && isSubmit && (
              <p className="text-red-400 text-xs min-[670px]:text-[11px] xl:text-xs pt-0.5">
                Permanent Address is required!
              </p>
            )}
          </div>
          <div className="w-full min-[620px]:w-[48.55%]">
            <label htmlFor="edit-profile-city">City</label>
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              type="text"
              id="edit-profile-city"
              placeholder="San Jose"
              className="mt-2 text-text_3 placeholder-text_2 w-full border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
            {city.trim().length === 0 && isSubmit && (
              <p className="text-red-400 text-xs min-[670px]:text-[11px] xl:text-xs pt-0.5">
                City is required!
              </p>
            )}
          </div>
        </div>
        {/* ********************** */}
        <div className="w-full flex flex-col min-[620px]:flex-row space-y-4 min-[620px]:space-y-0 justify-between items-center pb-5 ">
          <div className="w-full min-[620px]:w-[48.55%]">
            <label htmlFor="edit-profile-postal-code">Postal Code</label>
            <input
              value={postalCode}
              onChange={e => setPostalCode(e.target.value)}
              id="edit-profile-postal-code"
              type="number"
              placeholder="45962"
              className="mt-2 text-text_3 !placeholder-text_2 w-full border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
            {postalCode === "" && isSubmit && (
              <p className="text-red-400 text-xs min-[670px]:text-[11px] xl:text-xs pt-0.5">
                Postal code is required!
              </p>
            )}
          </div>
          <div className="w-full min-[620px]:w-[48.55%]">
            <label htmlFor="edit-profile-country">Country</label>
            <input
              value={country}
              onChange={e => setCountry(e.target.value)}
              type="text"
              id="edit-profile-country"
              placeholder="USA"
              className="mt-2 text-text_3 !placeholder-text_2 w-full border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
            {country.trim().length === 0 && isSubmit && (
              <p className="text-red-400 text-xs min-[670px]:text-[11px] xl:text-xs pt-0.5">
                Country is required!
              </p>
            )}
          </div>
        </div>
        {/* ************ */}
        <div className="flex justify-end items-center">
          <button
            onClick={() => setIsSubmit(true)}
            type="submit"
            className="w-full min-[475px]:w-[130px] xl:w-[190px] h-10 xl:h-[50px] bg-blue_3 rounded-[9px] xl:rounded-[10px] xl:rounded-[15px] text-white text-[15px] xl:text-lg"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
