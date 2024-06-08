import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FooterComponent from './Footer';

const ContactUsContainer = styled.div`
  background: ${(props) =>
    props.theme === 'light'
      ? 'linear-gradient(90deg, rgba(55,0,255,1) 0%, rgba(183,0,255,1) 100%)'
      : 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(55,0,55,1) 100%)'};
  padding: 40px;
  border-radius: 8px;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FormGroup = styled.div`
  flex: 1 1 45%;
  margin-bottom: 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Textarea = styled(Field)`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.875em;
`;

const ContactInfo = styled.div`
  flex: 1 1 45%;
  margin-bottom: 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }

  & h2 {
    margin-bottom: 15px;
    font-size: 1.5rem;
  }

  & p {
    margin-bottom: 10px;
    font-size: 1rem;
  }

  & a {
    color: ${(props) => (props.theme === 'light' ? '#0000ee' : '#ffa500')};
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }

  & svg {
    margin-right: 10px;
  }
`;

const ContactUs = ({ theme }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const globalTheme = useSelector((state) => state.theme.theme);

  const initialValues = {
    name: '',
    email: '',
    address: '',
    dateOfBirth: '',
    bio: '',
    profileImage: null,
    bannerImage: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    address: Yup.string().required('Address is required'),
    dateOfBirth: Yup.date().required('Date of birth is required'),
    bio: Yup.string().required('Bio is required'),
    profileImage: Yup.mixed().required('Profile image is required'),
    bannerImage: Yup.mixed().required('Banner image is required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setFormData(values);
    setShowModal(true);
    setSubmitting(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <hr/>
      <ContactUsContainer theme={theme}>
        <h1>Contact Us</h1>
        <FormSection>
          <ContactInfo theme={theme}>
            <h2>We'd love to hear from you!</h2>
            <p>If you’d like more information on any of our solutions, just complete this brief form. We will respond promptly.</p>
            <p>If you need technical support, please click <a href="#">here</a> and complete the Support Request form.</p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M21 8V7l-3 2.29V8c0-1.11-.89-2-2-2h-5V3H5v15h2v-3h7v3h5v-5l3 2.29V14l-3-2.29V14h-5V8h5z"/>
              </svg>
              9026201633
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 2C8.1 2 5 5.1 5 9c0 4.1 7 13 7 13s7-8.9 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.3 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/>
              </svg>
              New Delhi, India
            </p>
          </ContactInfo>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" name="name" />
                  <ErrorMessage name="name" component={ErrorText} />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" name="email" />
                  <ErrorMessage name="email" component={ErrorText} />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="address">Address</Label>
                  <Input type="text" id="address" name="address" />
                  <ErrorMessage name="address" component={ErrorText} />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input type="date" id="dateOfBirth" name="dateOfBirth" />
                  <ErrorMessage name="dateOfBirth" component={ErrorText} />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    as="textarea"
                    id="bio"
                    name="bio"
                    onChange={(event) => setFieldValue('bio', event.target.value)}
                  />
                  <ErrorMessage name="bio" component={ErrorText} />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="profileImage">Profile Image</Label>
                  <input
                    type="file"
                    id="profileImage"
                    name="profileImage"
                    onChange={(event) => {
                      setFieldValue('profileImage', event.currentTarget.files[0]);
                    }}
                  />
                  <ErrorMessage name="profileImage" component={ErrorText} />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="bannerImage">Banner Image</Label>
                  <input
                    type="file"
                    id="bannerImage"
                    name="bannerImage"
                    onChange={(event) => {
                      setFieldValue('bannerImage', event.currentTarget.files[0]);
                    }}
                  />
                  <ErrorMessage name="bannerImage" component={ErrorText} />
                </FormGroup>

                <SubmitButton type="submit">Submit</SubmitButton>
              </Form>
            )}
          </Formik>
        </FormSection>

        <Modal show={showModal} onClose={closeModal} theme={globalTheme}>
          <h2>Form Data</h2>
          {formData && (
            <div className={`modal-content modal-content-${globalTheme}`}>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
              <p><strong>Bio:</strong> {formData.bio}</p>
              <p><strong>Profile Image:</strong> {formData.profileImage.name}</p>
              <p><strong>Banner Image:</strong> {formData.bannerImage.name}</p>
            </div>
          )}
        </Modal>
      </ContactUsContainer>
      <hr/>
      <FooterComponent theme={theme}/>
    </>
  );
};

export default ContactUs;
