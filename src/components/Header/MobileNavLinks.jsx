import React, { useEffect } from "react";
import NavLinks from "./NavLinks";
import { BurgerModal } from "./Header.styled";

const MobileNavLinks = ({ isOpenMenu, setIsOpenMenu }) => {
  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.key === "Escape") {
        setIsOpenMenu(false);
      }
    };

    document.body.style.overflow = isOpenMenu ? "hidden" : "auto";
    window.addEventListener("keydown", handleEscKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscKeyPress);
      document.body.style.overflow = "auto";
    };
  }, [isOpenMenu, setIsOpenMenu]);

  return (
    <BurgerModal>
      <NavLinks setIsOpenMenu={setIsOpenMenu} />
    </BurgerModal>
  );
};

export default MobileNavLinks;
