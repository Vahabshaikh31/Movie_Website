import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    return null; // Return a response if needed
  } catch (error) {
    console.log("Error handling form data:", error);
    return { error: "There was a problem submitting the form." };
  }
};

export const Contact = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <Form method="POST" action="/contact">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="msg">Message:</label>
          <textarea name="msg" id="msg" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
