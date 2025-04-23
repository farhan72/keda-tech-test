import React from "react";
import Modal from "react-modal";
import NavLinks from "./NavLinks";
import styles from './Navbar.module.scss';
import { X } from "lucide-react";

Modal.setAppElement("#root");

interface IMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  openLoginModal: () => void;
}

const customStyles = {
  content: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "white",
    padding: "2rem",
    zIndex: 10000,
    border: "none",
    borderRadius: "0",
    overflowY: "auto"
  },
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 99999,
  },
};



const MobileMenu: React.FC<IMobileMenuProps> = ({isOpen, openLoginModal, onClose}) => {
    const handleOpenLoginModal = () => {
        onClose();
        openLoginModal?.();
    }
    return (
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={onClose}>
        <div className={styles["mobile-menu"]}>
          <div className={styles["modal-header"]}>
            <button
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          <div className={styles["modal-body"]}>
            <NavLinks openLoginModal={handleOpenLoginModal} onClickMenuItem={onClose}/>
          </div>
        </div>
      </Modal>
    );
};

export default MobileMenu;