import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import { Button, Loader } from "../components";

import { useTheme } from "../hooks";
import { ThemeMode } from "../constants";

interface ContactFormProps {
  onClose?: () => void;
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const ContactForm = ({ onClose }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID as string;
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID as string;
  const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY as string;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { firstName, lastName, message, email } = data;
    setIsLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: `${firstName} ${lastName}`,
          message: message,
          from_email: email,
        },
        publicKey
      )
      .then(() => {
        toast.success("Message successfully sent!");
        onClose?.();
        reset();
      })
      .catch(() => {
        toast.error("Error! Please try again.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className="w-[527px]">
        <div className={`mb-[30px] ${onClose ? "text-center" : "text-start"}`}>
          <h2 className="mb-[20px]">Let&#8217;s talk</h2>
          <p className="big-text">Any question or remarks? Just write us a message!</p>
        </div>
        <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="fex-row flex gap-[30px]">
            <div className="relative flex w-1/2 flex-col gap-[10px]">
              <label
                htmlFor={`${onClose ? "modal-first-name" : "first-name"}`}
                className={`label ${errors.firstName ? "text-errorColor" : "text-mainTextColor"}`}
              >
                First name
              </label>
              <input
                id={`${onClose ? "modal-first-name" : "first-name"}`}
                type="text"
                className={`form-field rounded-[20px] ${errors.firstName ? "!border-errorColor placeholder:text-errorColor" : "border-fieldBorderColor placeholder:text-placeholderTextColor"} focus-visible:border-inverseColor ${theme === ThemeMode.LIGHT ? "hover:border-secondaryLightTextColor" : "hover:shadow-custom-inset"}`}
                {...register("firstName", {
                  required: "First name is required",
                })}
                placeholder="Enter first name"
                maxLength={50}
              />
              {errors.firstName && (
                <span className="error top-[72px]">{errors.firstName.message}</span>
              )}
            </div>
            <div className="relative flex w-1/2 flex-col gap-[10px]">
              <label
                htmlFor={`${onClose ? "modal-last-name" : "last-name"}`}
                className={`label ${errors.lastName ? "text-errorColor" : "text-mainTextColor"}`}
              >
                Last name
              </label>
              <input
                id={`${onClose ? "modal-last-name" : "last-name"}`}
                type="text"
                className={`form-field rounded-[20px] ${errors.lastName ? "!border-errorColor placeholder:text-errorColor" : "border-fieldBorderColor placeholder:text-placeholderTextColor"} focus-visible:border-inverseColor ${theme === ThemeMode.LIGHT ? "hover:border-secondaryLightTextColor" : "hover:shadow-custom-inset"}`}
                {...register("lastName", {
                  required: "Last name is required",
                })}
                maxLength={50}
                placeholder="Enter last name"
              />
              {errors.lastName && (
                <span className="error top-[72px]">{errors.lastName.message}</span>
              )}
            </div>
          </div>
          <div className="relative flex flex-col gap-[10px]">
            <label
              htmlFor={`${onClose ? "modal-email" : "email"}`}
              className={`label ${errors.email ? "text-errorColor" : "text-mainTextColor"}`}
            >
              Email
            </label>
            <input
              id={`${onClose ? "modal-email" : "email"}`}
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className={`form-field rounded-[20px] ${errors.email ? "!border-errorColor placeholder:text-errorColor" : "border-fieldBorderColor placeholder:text-placeholderTextColor"} focus-visible:border-inverseColor ${theme === ThemeMode.LIGHT ? "hover:border-secondaryLightTextColor" : "hover:shadow-custom-inset"}`}
              placeholder="Enter email"
            />
            {errors.email && <span className="error top-[72px]">{errors.email.message}</span>}
          </div>
          <div className="relative mb-[10px] flex flex-col gap-[10px]">
            <label
              htmlFor={`${onClose ? "modal-message" : "message"}`}
              className={`label ${errors.message ? "text-errorColor" : "text-mainTextColor"}`}
            >
              Message
            </label>
            <textarea
              id={`${onClose ? "modal-message" : "message"}`}
              rows={5}
              {...register("message", { required: "Message is required" })}
              className={`form-field scrollbar resize-none rounded-[20px] ${errors.message ? "!border-errorColor placeholder:text-errorColor" : "border-fieldBorderColor placeholder:text-placeholderTextColor"} focus-visible:border-inverseColor ${theme === ThemeMode.LIGHT ? "hover:border-secondaryLightTextColor" : "hover:shadow-custom-inset"}`}
              placeholder="Write your message"
            />
            {errors.message && <span className="error top-[152px]">{errors.message.message}</span>}
          </div>
          <Button label="Send request" width="w-fit" type="submit" />
        </form>
      </div>
      {isLoading && <Loader />}
    </>
  );
};
