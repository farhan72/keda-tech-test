import { X } from "lucide-react";
import { useEffect } from "react";
import Modal from "react-modal";
import styles from './LoginModal.module.scss';
import { ErrorMessage, Field, Form, Formik } from "formik";
import validationSchema from "./validationSchema";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    borderRadius: "12px",
    maxWidth: "450px",
    width: "95%",
  },
};

if (typeof document !== "undefined") {
  Modal.setAppElement("#root");
}

interface ILoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onLogin?: (values: { email: string; password: string }) => void;
}

const Index: React.FC<ILoginModalProps> = ({
  isOpen,
  onRequestClose,
  onLogin = (values) => console.log("Login attempt:", values),
}) => {
    useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onRequestClose();
        }
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }, [onRequestClose]);

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isOpen]);

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <div className={`${styles["modal-header"]} p-6 rounded-t-xl`}>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Login</h2>
            <button
              onClick={onRequestClose}
              className="text-white hover:text-neutral-300 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          <p className="text-white mt-1">Sign in to your account</p>
        </div>
        <div className={`${styles["modal-body"]} rounded-b-xl`}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              onLogin(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Email Address
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                      ${
                        touched.email && errors.email
                          ? "border-error focus:border-error focus:ring-error/30"
                          : "border-neutral-300 focus:border-primary-500 focus:ring-primary-500/30"
                      }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                      ${
                        touched.password && errors.password
                          ? "border-error focus:border-error focus:ring-error/30"
                          : "border-neutral-300 focus:border-primary-500 focus:ring-primary-500/30"
                      }`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-neutral-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      href="#"
                      className={`font-medium ${styles["text-blue"]} ${styles["text-hover-blue"]}`}
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    className={styles["btn-login"]}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </button>
                </div>

                <div className="text-center text-sm text-neutral-600 mt-4">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className={`font-medium ${styles["text-blue"]} ${styles["text-hover-blue"]}`}
                  >
                    Sign up
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    );
};

export default Index;
