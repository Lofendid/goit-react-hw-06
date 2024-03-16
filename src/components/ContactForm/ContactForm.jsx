import css from './ContactForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import * as Yup from 'yup';

export default function ContactForm({ addContactFunction }) {
  const contactSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    userNumber: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = { username: '', userNumber: '' };

  function handleSubmit(values, actions) {
    const { username: name, userNumber: number } = values;
    const id = nanoid();
    const newContact = { name, number, id };
    addContactFunction(newContact);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form>
        <div className={css.innerWrapper}>
          <label className={css.label} htmlFor={nameFieldId}>
            Username
          </label>
          <Field
            className={css.formInput}
            type="text"
            name="username"
            id={nameFieldId}
          ></Field>

          <div className={css.errMsg}>
            <ErrorMessage name="username" as="span" />
          </div>

          <label className={css.label} htmlFor={numberFieldId}>
            Phone Number
          </label>
          <Field
            className={css.formInput}
            type="tel"
            name="userNumber"
            id={numberFieldId}
          ></Field>

          <div className={css.errMsg}>
            <ErrorMessage className={css.red} name="userNumber" as="span" />
          </div>

          <button type="submit">Add Contact</button>
        </div>
      </Form>
    </Formik>
  );
}
