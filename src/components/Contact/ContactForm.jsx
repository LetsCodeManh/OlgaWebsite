import { useState } from "react";
import styles, { heading } from "../../styles";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xpzenlwr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to send form");
      }
      setFormData({ name: "", email: "", tel: "", message: "" });
      alert("I will get in touch with you soon!");
    } catch (error) {
      console.error(error);
      alert("Failed to send form. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col gap-3 m-6 p-6 shadow-md lg:w-[1000px] lg:mx-auto rounded-[1rem]">
      <h3 className={`${heading.levelFour} headingLevelFour`}>
        {t("Contact.title1")}
      </h3>
      <h2 className={`${heading.levelOne} headingOne`}>
        {t("Contact.title2")}
      </h2>
      <div className="flex justify-between font-poppins headingLevelFive mb-3">
        <p>{t("Contact.paragraph1")}</p>
        <p>
          <span className={styles.formLabelImportant}>*</span>{" "}
          {t("Contact.paragraph2")}
        </p>
      </div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <input
            type="text"
            id="name"
            placeholder=" "
            className={styles.formInput}
            onChange={handleChange}
            value={formData.name}
            name="name"
            required
          />
          <label for="name" className={styles.formLabel}>
            {t("Contact.name")}{" "}
            <span className={styles.formLabelImportant}>*</span>
          </label>
        </div>

        <div className={styles.formContainer}>
          <input
            type="text"
            id="email"
            placeholder=" "
            className={styles.formInput}
            onChange={handleChange}
            value={formData.email}
            name="email"
            required
          />
          <label for="email" className={styles.formLabel}>
            {t("Contact.email")}{" "}
            <span className={styles.formLabelImportant}>*</span>
          </label>
        </div>

        <div className={styles.formContainer}>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder=" "
            className={styles.formInput}
            onChange={handleChange}
            value={formData.tel}
            required
          />
          <label for="tel" className={styles.formLabel}>
            {t("Contact.phone")}{" "}
            <span className={styles.formLabelImportant}>*</span>
          </label>
        </div>

        <div className={styles.formContainer}>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder=" "
            className={styles.formInput}
            onChange={handleChange}
            value={formData.message}
            required
          />
          <label for="message" className={styles.formLabel}>
            {t("Contact.statement")}{" "}
            <span className={styles.formLabelImportant}>*</span>
          </label>
        </div>

        <button type="submit" className={styles.formButton}>
          {t("Contact.sent")}
        </button>
        <p className={`headingLevelFive`}>
          {t("Contact.declaration")}
          <span className={styles.formLabelImportant}>*</span>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
