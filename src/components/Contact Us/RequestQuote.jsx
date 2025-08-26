import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import { BeatLoader } from "react-spinners";
import ReCAPTCHA from "react-google-recaptcha";
import { getCategories } from "../../../services/categories";
import { useQuery } from "@tanstack/react-query";

const RequestQuote = () => {
  // Fetching Categories
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 1800000,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");

  // React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Contact Form Submission
  const handleContactForm = async (data, event) => {
    setLoading(true);
    try {
      recaptchaRef.current.execute();
      if (phone.length > 3) {
        const formData = new FormData(event.target);

        formData.append("access_key", "a67bb4a4-9923-4dc9-af1f-ea08c3db4acd");

        const object = Object.fromEntries(formData);
        const newData = { ...object, phone: `+${data.phone}` };
        const json = JSON.stringify(newData);

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }).then((res) => res.json());

        if (res.success) {
          console.log("Success", res);
          setLoading(false);
          setError(false);
          Swal.fire({
            icon: "success",
            title: "Successfully sent your form",
          });
        }
      } else
        Swal.fire({
          icon: "error",
          title: "Phone Number is required",
        });
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // // Fetching Categories
  // useEffect(() => {
  //     (async () => {
  //         const response = await fetch("https://skynetsilicon-website-backend.vercel.app/api/category");
  //         const data = await response.json();
  //         setCategories(data);
  //     })()
  // }, [])

  // ReCaptcha Change
  // ReCaptcha Change
  const handleCaptchaChange = async (value) => {
    // Step 1: Verify reCAPTCHA with the backend
    const recaptchaResponse = await fetch(
      `${import.meta.env.VITE_BASE_URL}/verify-recaptcha`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: value }),
      }
    );

    const recaptchaData = await recaptchaResponse.json();
    console.log("reCAPTCHA Response:", recaptchaData);

    setCaptchaValue(value);

    if (!recaptchaData.success) {
      Swal.fire({
        icon: "error",
        title: "reCAPTCHA verification failed! Try again.",
      });
      setLoading(false);
      return;
    }
  };

  return (
    <>
      <h3 className="text-[#1092fd] text-3xl font-bold">Request A Quote</h3>
      <h2 className="text-[#123c76] font-bold leading-snug text-3xl mt-6">
        Maximize Your Potential With Skynet Silicon
      </h2>
      <form action="" onSubmit={handleSubmit(handleContactForm)}>
        <input
          type="name"
          {...register("name", { required: "Name is required" })}
          name="name"
          placeholder="Name*"
          className="placeholder:text-lg py-3 focus:shadow-none focus:border-inherit form-control mt-6 rounded-none"
        />
        {errors.name && (
          <p role="alert" className="text-red-500 mb-3">
            **{errors.name.message}
          </p>
        )}

        <input
          type="name"
          name="Company Name"
          {...register("company_name", {
            required: "Organization Name is required",
          })}
          placeholder="Company Name*"
          className="placeholder:text-lg py-3 focus:shadow-none focus:border-inherit form-control mt-6 rounded-none"
        />
        {errors.company_name && (
          <p role="alert" className="text-red-500 mb-3">
            **{errors.company_name.message}
          </p>
        )}

        <input
          type="email"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Valid email format
              message: "Enter a valid email address",
            },
          })}
          placeholder="Email*"
          className="placeholder:text-lg py-3 focus:shadow-none focus:border-inherit form-control mt-6 rounded-none"
        />
        {errors.email && (
          <p role="alert" className="text-red-500 mb-3">
            **{errors.email.message}
          </p>
        )}

        <select
          name=""
          {...register("category", { required: "Category is required" })}
          className="form-select my-6 py-3 focus:shadow-none focus:border-inherit form-control rounded-none"
          id=""
        >
          <option hidden selected>
            Select Category
          </option>
          {categories?.map(({ name, _id, slug }) => {
            return (
              <option value={name} key={slug} className="">
                {name}
              </option>
            );
          })}
        </select>
        {errors.category && (
          <p role="alert" className="text-red-500 mb-3">
            **{errors.category.message}
          </p>
        )}

        {/* Phone Input with Country Code */}
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
          className="z-[999]"
          inputStyle={{
            width: "100%",
            padding: "20px",
            borderRadius: "0",
            paddingLeft: "50px",
            boxShadow: "none",
          }}
          countryCodeEditable={false} // Prevent users from manually editing the code
        />

        {/* Validation */}
        {errors.phone && (
          <p className="text-red-500 mt-2">{errors.phone.message}</p>
        )}

        <textarea
          name="message"
          placeholder="Message*"
          {...register("message", { required: "Message is required" })}
          className="rounded-none mb-6 placeholder:text-lg py-3 focus:shadow-none focus:border-inherit form-control mt-6"
        />
        {errors.message && (
          <p role="alert" className="text-red-500 mb-3">
            **{errors.message.message}
          </p>
        )}

        <ReCAPTCHA
          sitekey="6LeD79UqAAAAAEDdrrGoxrQy1pupDv7_xhyWOtgf"
          onChange={handleCaptchaChange}
        />

        <div className="text-start mt-3">
          <button
            className={`${
              captchaValue
                ? "opacity-100 pointer-events-auto"
                : "opacity-50 pointer-events-none"
            } primary-white-btn border-2 border-[#006cae] hover:text-white`}
          >
            {loading ? <BeatLoader size={12} color="#fff" /> : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default RequestQuote;
