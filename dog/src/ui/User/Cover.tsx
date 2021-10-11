import React from "react";
import { safeUserAvatar, safeUserCover } from "utils/safe";
import { DEFAULT } from "configs";
import { Avatar, IconButton } from "components";
import { meltSocialLinks } from "utils/melter";
import { handleIcon } from "utils/handlers";

interface Props {
  className?: string;
}

const UserCover: React.FC<Props> = ({ className = "" }): React.ReactElement => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col items-center">
        <img
          src={safeUserCover(DEFAULT.user)}
          className="object-cover w-full h-48"
        />
        <Avatar
          src={safeUserAvatar(DEFAULT.user)}
          className="bg-blue-200 -mt-24 border-8 border-primary-light"
          size="176"
        />
      </div>
      <div className="w-full grid grid-cols-2 gap-44 -mt-20 py-2">
        <div className="flex col-span-1 justify-end gap-4">
          {meltSocialLinks(DEFAULT.user.socialLinks!).map((link, index) => (
            <IconButton
              variant="outlined"
              icon={handleIcon(link.icon, 24, "white")}
              size="small"
              className="border-2 border-primary-purple"
            />
          ))}
        </div>
        <div className="flex col-span-1">B</div>
      </div>
    </div>
  );
};

export default UserCover;
