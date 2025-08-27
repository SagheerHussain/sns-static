import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { CiHome, CiUser, CiLinkedin } from "react-icons/ci";
import { MdAlternateEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import "./contact.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { BeatLoader } from "react-spinners";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { categories } from "../categories";

const Contact = () => {
  // Error Handling
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");

  // Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Contact Form
  const handleContactForm = async (data, event) => {
    setLoading(true);
    try {
      // Step 2: Proceed with form submission only if reCAPTCHA is verified
      const formData = new FormData(event.target);
      formData.append("access_key", "a67bb4a4-9923-4dc9-af1f-ea08c3db4acd");

      const object = Object.fromEntries(formData);
      const newData = { ...object, phone: `+${data.phone}` };

      // Remove g-recaptcha-response from newData before sending
      delete newData["g-recaptcha-response"];

      const json = JSON.stringify(newData);

      console.log("Submitting Form Data:", json, newData); // Debugging Log

      const formResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const formResult = await formResponse.json();
      console.log("Form Submission Response:", formResult);

      if (formResult.success) {
        Swal.fire({
          icon: "success",
          title: "Successfully sent your form",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Form submission failed. Please try again!",
        });
      }

      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "An error occurred. Please try again later.",
      });
    }
  };
  
  // ReCaptcha Change
  const handleCaptchaChange = async (value) => {
    setCaptchaValue(value);
  };
  
  return (
    <>
      <section id="contact" className="py-20 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mt-20">
              <h4 className="text-white uppercase text-2xl font-bold mb-3">
                Take The Silk Road To
              </h4>
              <h1 className="text-[#00adce] font-bold text-4xl sm:text-5xl">
                Digitizing Your Business <br /> Growth
              </h1>
              <div className="follow-us flex items-center mt-5">
                <h5 className="text-lg text-white font-semibold me-20">
                  Follow Us
                </h5>
                <div className="social-icons flex items-center">
                  <Link
                    to={`https://www.linkedin.com/company/skynetsilicon/?originalSubdomain=pk`}
                    target="_blank"
                  >
                    <CiLinkedin className="text-[#fff] text-4xl me-3 border-2 border-slate-500 rounded-full p-1 hover:bg-white hover:text-[#00042a] transition-all duration-300 cursor-pointer"></CiLinkedin>
                  </Link>
                  {/* <Link to={``}>
                    <FaFacebook className="text-[#fff] text-4xl hover:bg-white hover:text-[#00042a] border-2 border-slate-500 rounded-full p-1 transition-all duration-300 cursor-pointer"></FaFacebook>

                  </Link> */}
                </div>
              </div>
            </div>
            <div className="contact_form col-12 col-lg-6">
              <h3 className="text-white font-bold text-4xl text-center">
                Start A Conversation With Us
              </h3>
              <form
                action=""
                className="mt-5"
                onSubmit={handleSubmit(handleContactForm)}
              >
                <div className="input-group">
                  <span class="input-group-text">
                    <CiUser />
                  </span>
                  <input
                    name="name"
                    {...register("name", { required: "Name is required" })}
                    type="name"
                    className="placeholder:text-white placeholder:font-semibold placeholder:text-[1.1rem] focus:shadow-none form-control mb-4 bg-transparent rounded-none border-none py-[15px] inline-block text-white"
                    placeholder="Name*"
                  />
                </div>
                {errors.name && (
                  <p role="alert" className="text-red-500 mb-3">
                    **{errors.name.message}
                  </p>
                )}
                <div className="input-group">
                  <span class="input-group-text">
                    <CiHome />
                  </span>
                  <input
                    name="company_name"
                    type="name"
                    {...register("company_name", {
                      required: "Organization Name is required",
                    })}
                    className="placeholder:text-white placeholder:font-semibold placeholder:text-[1.1rem] focus:shadow-none form-control mb-4 bg-transparent rounded-none border-none py-[15px] inline-block text-white"
                    placeholder="Company Name*"
                  />
                </div>
                {errors.company_name && (
                  <p role="alert" className="text-red-500 mb-3">
                    **{errors.company_name.message}
                  </p>
                )}
                <div className="input-group">
                  <span class="input-group-text">
                    <MdAlternateEmail />
                  </span>
                  <input
                    name="email"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="placeholder:text-white placeholder:font-semibold placeholder:text-[1.1rem] focus:shadow-none form-control mb-4 bg-transparent rounded-none border-none py-[15px] inline-block text-white"
                    placeholder="Email*"
                  />
                </div>
                {errors.email && (
                  <p role="alert" className="text-red-500 mb-3">
                    **{errors.email.message}
                  </p>
                )}

                <div className="flag_dropdown_after mb-3">
                  <div className="flex">
                    <span className="ms-[.7rem]">
                      <MdOutlinePhoneInTalk className="text-2xl text-white mt-1 me-3" />
                    </span>
                    <PhoneInput
                      country={"us"} // Set Default Country (Change to 'pk', 'gb', etc.)
                      enableSearch={true} // Allows search in dropdown
                      disableDropdown={false} // Ensures dropdown remains enabled
                      international
                      withCountryCallingCode
                      value={phone}
                      onChange={(phone) => {
                        setPhone(phone);
                        setValue("phone", phone, { shouldValidate: true });
                      }}
                      className="z-[999] ms-3"
                      inputStyle={{
                        width: "100%",
                        padding: "20px",
                        borderRadius: "0",
                        marginLeft: "35px",
                        display: "inline-block",
                        background: "transparent",
                        color: "#fff",
                        boxShadow: "none",
                        border: "none",
                      }}
                      countryCodeEditable={false} // Prevent users from manually editing the code
                    />
                  </div>
                </div>

                <div className="flag_dropdown_after mb-4 mt-[2rem]">
                  <div className="flex">
                    <BiCategory className="text-white text-2xl mt-[6px] ms-[13px] me-[4px]" />
                    <select
                      name=""
                      id=""
                      className="focus:shadow-none form-select bg-transparent border-none text-white cursor-pointer"
                    >
                      <option hidden selected>
                        Select Category
                      </option>
                      {categories?.map(({ _id, name }) => (
                        <option
                          value={name}
                          className="bg-[#000] border-2 border-[#000]"
                          key={_id}
                        >
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Validation */}
                {errors.phone && (
                  <p className="text-red-500 mt-2">{errors.phone.message}</p>
                )}

                <div className="input-group input-group-textarea mb-5">
                  <span class="input-group-text input-group-textarea-text">
                    <RiMessage2Line />
                  </span>
                  <textarea
                    name="message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="placeholder:text-white placeholder:font-semibold placeholder:text-[1.1rem] focus:shadow-none form-control bg-transparent rounded-none border-none py-[15px] inline-block text-white"
                    placeholder="Your Message*"
                    id=""
                  ></textarea>
                </div>
                {errors.message && (
                  <p role="alert" className="text-red-500 mb-3">
                    **{errors.message.message}
                  </p>
                )}

                <ReCAPTCHA
                  sitekey="6LdK6LMrAAAAAIdZPKMK0iR-OC2zPxzp_5zEIVwF"
                  onChange={handleCaptchaChange}
                />

                <div className="text-start mt-2">
                  <button
                    className={`primary-white-btn hover:text-white ${
                      captchaValue
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-50 pointer-events-none"
                    }`}
                  >
                    {loading ? <BeatLoader size={12} color="#fff" /> : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
