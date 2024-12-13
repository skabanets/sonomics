import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "../components";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-[527px]">
      <div className="mb-[30px]">
        <h2 className="mb-[20px]">Let’s talk</h2>
        <p className="big-text">Any question or remarks? Just write us a message!</p>
      </div>
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="fex-row flex gap-[30px]">
          <div className="relative flex w-1/2 flex-col gap-[10px]">
            <label className="label">First name</label>
            <input
              type="text"
              className={`form-field rounded-[20px] ${errors.firstName ? "border-red-500" : "border-fieldBorderColor"}`}
              {...register("firstName", {
                required: "Name is required",
              })}
              placeholder="Enter first name"
              maxLength={50}
            />
            {errors.firstName && (
              <span className="error top-[72px]">{errors.firstName.message}</span>
            )}
          </div>
          <div className="relative flex w-1/2 flex-col gap-[10px]">
            <label className="label">Last name</label>
            <input
              type="text"
              className={`form-field rounded-[20px] ${errors.lastName ? "border-red-500" : "border-fieldBorderColor"}`}
              {...register("lastName", {
                required: "Name is required",
              })}
              maxLength={50}
              placeholder="Enter last name"
            />
            {errors.lastName && <span className="error top-[72px]">{errors.lastName.message}</span>}
          </div>
        </div>
        <div className="relative flex flex-col gap-[10px]">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className={`form-field rounded-[20px] ${errors.email ? "border-red-500" : "border-fieldBorderColor"}`}
            placeholder="Enter email"
          />
          {errors.email && <span className="error top-[72px]">{errors.email.message}</span>}
        </div>
        <div className="relative mb-[10px] flex flex-col gap-[10px]">
          <label className="label">Message</label>
          <textarea
            rows={5}
            {...register("message", { required: "Message is required" })}
            className={`form-field resize-none rounded-[20px] ${errors.message ? "border-red-500" : "border-fieldBorderColor"}`}
            placeholder="Write your message"
          />
          {errors.message && <span className="error top-[152px]">{errors.message.message}</span>}
        </div>
        <Button label="Send request" width="w-fit" type="submit" />
      </form>
    </div>
  );
};
