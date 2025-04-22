import * as Yup from 'yup';

const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(50, 'Max 50 characters')
      .required('First name is required'),
    lastName: Yup.string()
      .max(50, 'Max 50 characters')
      .required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    subject: Yup.string()
      .max(100, 'Max 100 characters')
      .required('Subject is required'),
    message: Yup.string()
      .min(10, 'Message should be at least 10 characters')
      .required('Message is required'),
  });

export default validationSchema;