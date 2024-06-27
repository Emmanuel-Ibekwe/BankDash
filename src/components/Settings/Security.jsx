import { useState } from "react";
import { isPasswordFalse } from "../../utils/validation";

export default function Security() {
  const [enable2FA, setEnable2FA] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (currentPassword.length < 8 || isPasswordFalse(newPassword)) {
      return;
    }

    const data = {
      enable2FA,
      currentPassword,
      newPassword
    };

    setEnable2FA(false);
    setCurrentPassword("");
    setNewPassword("");
    setIsSubmit(false);
  };

  return (
    <div className="pt-6 min-[600px]:pt-12 pb-3  text-[13px] xl:text-base">
      <form action="" className="w-full " onSubmit={handleSubmit}>
        <h2 className="text-[#333B69] font-medium text-sm xl:text-[17px]">
          Two Factor Authentication
        </h2>
        <div className="flex w-full items-start space-x-3 xl:space-x-4 pt-4">
          <div
            onClick={() => setEnable2FA(prev => !prev)}
            className={`rounded-full w-[16%] min-w-11 max-w-11 xl:max-w-[56px] xl:w-[56px] h-6 xl:h-[30.71px] flex items-center cursor-pointer p-0.5 ${
              enable2FA
                ? "justify-end bg-[#16DBCC]"
                : "justify-start bg-[#DFEAF2]"
            }`}
          >
            <div className="w-[21.21px] xl:w-[27px] h-[21.21px] xl:h-[27px] bg-white rounded-full"></div>
          </div>
          <p className="text-text_3 ">
            Enable or disable two factor authentication
          </p>
        </div>
        <div className="w-full min-[600px]:w-[80%] min-[750px]:w-[48.57%] pt-3">
          <h2 className="text-[#333B69] font-medium text-sm xl:text-[17px]">
            Change Password
          </h2>
          <div className="w-full pt-3">
            <label htmlFor="current-password" className="text-text_3">
              Current Password
            </label>
            <input
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)}
              id="current-password"
              type="password"
              placeholder="**********"
              className="mt-2 w-full border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
            {currentPassword.length < 8 && isSubmit && (
              <p className="text-red-400 text-xs min-[670px]:text-[11px] xl:text-xs pt-0.5">
                Current password is required!
              </p>
            )}
          </div>
          <div className="w-full pt-4">
            <label htmlFor="current-password" className="text-text_3">
              New Password
            </label>
            <input
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              id="new-password"
              type="password"
              placeholder="**********"
              className="mt-2 w-full border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
            {isPasswordFalse(newPassword) && isSubmit && (
              <p className="text-red-400 text-xs min-[670px]:text-[11px] xl:text-xs pt-0.5">
                password must be atleast 8 characters and contain atleast an
                uppercase, a lowercase, a number or a special character!
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex justify-end pt-12">
          <button
            onClick={() => setIsSubmit(true)}
            className="w-full min-[600px]:w-[130px] xl:w-[190px] h-10 xl:h-[50px] bg-blue_3 text-white rounded-[9px] xl:rounded-[10px] xl:rounded-[15px] text-[15px] xl:text-lg font-medium"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
