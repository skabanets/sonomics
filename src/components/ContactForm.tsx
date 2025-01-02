import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { Button } from "../components";

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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { firstName, lastName, message, email } = data;

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

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
        console.log("Message successfully sent!");
        onClose?.();
        reset();
      })
      .catch(() => {
        console.log("An error occurred, please try again later.");
      });
  };

  return (
    <div className="w-[527px]">
      <div className="mb-[30px]">
        <h2 className="mb-[20px]">Let&#8217;s talk</h2>
        <p className="big-text">Any question or remarks? Just write us a message!</p>
      </div>
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="fex-row flex gap-[30px]">
          <div className="relative flex w-1/2 flex-col gap-[10px]">
            <label
              className={`label ${errors.firstName ? "text-errorColor" : "text-secondaryTextColor"}`}
            >
              First name
            </label>
            <input
              type="text"
              className={`form-field rounded-[20px] ${errors.firstName ? "!border-errorColor placeholder:text-errorColor" : "border-fieldBorderColor placeholder:text-placeholderTextColor"}`}
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
              className={`label ${errors.lastName ? "text-errorColor" : "text-secondaryTextColor"}`}
            >
              Last name
            </label>
            <input
              type="text"
              className={`form-field rounded-[20px] ${errors.lastName ? "!border-errorColor placeholder:text-errorColor" : "border-fieldBorderColor placeholder:text-placeholderTextColor"}`}
              {...register("lastName", {
                required: "Last name is required",
              })}
              maxLength={50}
              placeholder="Enter last name"
            />
            {errors.lastName && <span className="error top-[72px]">{errors.lastName.message}</span>}
          </div>
        </div>
        <div className="relative flex flex-col gap-[10px]">
          <label
            className={`label ${errors.email ? "text-errorColor" : "text-secondaryTextColor"}`}
          >
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className={`form-field rounded-[20px] ${errors.email ? "!border-errorColor placeholder:text-errorColor" : "border-fieldBorderColor placeholder:text-placeholderTextColor"}`}
            placeholder="Enter email"
          />
          {errors.email && <span className="error top-[72px]">{errors.email.message}</span>}
        </div>
        <div className="relative mb-[10px] flex flex-col gap-[10px]">
          <label
            className={`label ${errors.message ? "text-errorColor" : "text-secondaryTextColor"}`}
          >
            Message
          </label>
          <textarea
            rows={5}
            {...register("message", { required: "Message is required" })}
            className={`form-field scrollbar resize-none rounded-[20px] ${errors.message ? "!border-errorColor placeholder:text-errorColor" : "border-fieldBorderColor placeholder:text-placeholderTextColor"}`}
            placeholder="Write your message"
          />
          {errors.message && <span className="error top-[152px]">{errors.message.message}</span>}
        </div>
        <Button label="Send request" width="w-fit" type="submit" />
      </form>
    </div>
  );
};
