import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../components";

interface FormValues {
  name: string;
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
    <form className="flex w-full flex-col pt-[24px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="fex-row flex gap-[40px]">
        <div className="relative flex w-1/2 flex-col">
          <label className="label">First and last name</label>
          <input
            type="text"
            className={`input ${errors.name ? "border-red-500" : "border-mainTextColor"}`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span className="error top-[56px]">{errors.name.message}</span>}
        </div>
        <div className="relative flex w-1/2 flex-col">
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
            className={`input ${errors.email ? "border-red-500" : "border-mainTextColor"}`}
          />
          {errors.email && <span className="error top-[56px]">{errors.email.message}</span>}
        </div>
      </div>
      <div className="relative mb-[40px] mt-[30px] flex flex-col">
        <label className="label">Message</label>
        <textarea
          rows={3}
          {...register("message", { required: "Message is required" })}
          className={`input resize-none ${errors.message ? "border-red-500" : "border-mainTextColor"}`}
          placeholder="Write your message..."
        />
        {errors.message && <span className="error top-[105px]">{errors.message.message}</span>}
      </div>
      <Button label="Send request" width="w-fit" type="submit" />
    </form>
  );
};
