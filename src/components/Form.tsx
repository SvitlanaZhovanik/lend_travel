'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import toast, { Toaster } from 'react-hot-toast';

type FormValues = {
  fullName: string;
  message: string;
  email: string;
};

export default function Form() {
  const isBrowser = typeof window !== 'undefined';
  const SESSION_KEY = 'form';
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
    toast.success('Successfully sent!');
    reset();
  };

  useFormPersist(SESSION_KEY, {
    watch,
    setValue,
    storage: isBrowser ? sessionStorage : undefined,
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mdOnly:flex-row w-full mdOnly:gap-5 xl:max-w-[608px]"
      >
        <div className="mdOnly:w-[221px] xl:flex  xl:gap-5 w-full">
          <label className="font-extralight w-full block min-h-[80px] text-[12px] leading-loose tracking-[2.4px]">
            Full Name
            <input
              {...register('fullName', {
                required: "This field can't be empty",
                pattern: {
                  value: /^.[a-zA-Zа-я 'ʼ`-]{1,}$/gm,
                  message: 'Invalid Full Name',
                },
                minLength: {
                  value: 2,
                  message: 'not enough characters (min 2)',
                },
                maxLength: {
                  value: 40,
                  message: 'Too many characters (max. 40)',
                },
              })}
              placeholder="John Smith"
              className="block pl-2 py-1 w-full placeholder:opacity-20 bg-white/10 text-[13px] font-extralight leading-[1.8]"
            />
            <span className=" block text-[12px] leading-loose text-red-500 text-end traking-[2.4px]">
              {errors['fullName'] && errors['fullName']?.message}
            </span>
          </label>
          <label className="font-extralight w-full block min-h-[80px] text-[12px] leading-loose tracking-[2.4px]">
            E-mail
            <input
              type="email"
              placeholder="johnsmith@email.com
"
              className="block pl-2 py-1 w-full placeholder:opacity-20 bg-white/10 text-[13px] font-extralight leading-[1.8]"
              {...register('email', {
                required: "This field can't be empty",
                pattern: {
                  value:
                    /^(?=^.{3,63}$)(^[A-Za-z0-9_]+(([_\.\-](?=[A-Za-z0-9_]))[a-zA-Z0-9_]+([\-\.](?=[A-Za-z0-9_]))*?)*@(\w+([\.\-](?=(\w|\d))))+[a-zA-Z]{2,6})$/,
                  message: 'Invalid E-mail',
                },
                minLength: {
                  value: 7,
                  message: 'not enough characters (min 7)',
                },
                maxLength: {
                  value: 20,
                  message: 'Too many characters (max. 20)',
                },
              })}
            />
            <span className="text-[12px] leading-loose text-red-500 text-end block traking-[2.4px]">
              {errors['email'] && errors['email']?.message}
            </span>
          </label>
        </div>
        <div className="mdOnly:w-[463px] flex flex-col">
          <label className="font-extralight min-h-[150px] text-[12px] leading-loose tracking-[2.4px] md:min-h-[200px]">
            Message
            <textarea
              className="block pl-2 py-1 w-full bg-white/10 text-[13px] font-extralight leading-[1.8]"
              maxLength={100}
              cols={7}
              rows={6}
              {...register('message', {
                required: "This field can't be empty",
                minLength: {
                  value: 7,
                  message: 'not enough characters (min 7)',
                },
                maxLength: {
                  value: 100,
                  message: 'Too many characters (max. 100)',
                },
              })}
            />
            <span className="text-[12px] leading-loose text-red-500 text-end block traking-[2.4px]">
              {errors['message'] && errors['message']?.message}
            </span>
          </label>
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-end inline-block duration-300 hover:opacity-40 focus:opacity-40 text-[30px] font-medium"
            >
              SEND
            </button>
          </div>
        </div>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
