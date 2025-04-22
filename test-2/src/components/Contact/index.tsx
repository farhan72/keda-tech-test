import { Mail, MapPin, Phone, Send } from "lucide-react";
import styles from "./Contact.module.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import validationSchema from "./validationSchema";

const Index = () => {

  const handleSubmit = (values: any, {resetForm}) => {
    console.log('Form submitted:', values);
    resetForm();
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800">
            Get in Touch
            <span className="block text-xl sm:text-2xl mt-2 text-neutral-600">
              We'd love to hear from you
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <p className="font-medium text-neutral-800">Email</p>
                    <a
                      href="mailto:support@yourstartup.com"
                      className="text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                      support@yourstartup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <p className="font-medium text-neutral-800">Phone</p>
                    <a
                      href="tel:+6281234567890"
                      className="text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                      +62 812 3456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <p className="font-medium text-neutral-800">Address</p>
                    <p className="text-neutral-600">
                      KEDA Tech HQ
                      <br />
                      Jl. Merdeka No. 123, Sleman, Yogyakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2">
                <p className="text-neutral-600">
                  <span className="font-medium text-neutral-800">
                    Monday - Friday:
                  </span>{" "}
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl ml-auto">
            <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
              Send us a Message
            </h3>
            <Formik
              className="space-y-6"
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="grid gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        First Name
                      </label>
                      <Field
                        type="text"
                        name="firstName"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors"
                        placeholder="John"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Last Name
                      </label>
                      <Field
                        type="text"
                        name="lastName"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors"
                        placeholder="Doe"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Email Address
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors"
                      placeholder="john@example.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Subject
                    </label>
                    <Field
                      type="text"
                      name="subject"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors"
                      placeholder="How can we help?"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Message
                    </label>
                    <Field
                      as="textarea"
                      rows={4}
                      name="message"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-colors"
                      placeholder="Your message here..."
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="error mb-4"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`flex items-center justify-center gap-2 md:w-max lg:w-max w-full font-medium rounded-md ${styles["btn-send"]}`}
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
