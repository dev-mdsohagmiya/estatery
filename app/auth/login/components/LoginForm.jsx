"use client";
import { Input } from "@/components/ui/input";
import { CheckboxCard } from "./CheckboxCard";
import { Button } from "@/components/ui/button";
import google from "@/public/images/login/google.png";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, "password must be atleast 6 characters")
        .required(),
    }),
    onSubmit: (value) => {
      // details object
      console.log(value);
    },
  });

  console.log(formik.errors);
  return (
    <div className="gap-2 grid">
      <form>
        <div>
          <label className="text-[13px] md:text-[14px] text-primary font-medium ">
            Email
          </label>
          <input
            value={formik.values.email}
            onChange={(e) => {
              formik.handleChange(e);
              formik.setTouched({ email: true });
            }}
            className={`h-[38px] placeholder:text-[14px]  w-full rounded-[8px] mt-[5px] px-2 bg-[#f7f7fd]  placeholder:text-[#525356] placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0    ${
              formik.touched.email &&
              formik.errors?.email &&
              "border-warning border-1"
            }`}
            type="email"
            name="email"
            placeholder="hi@example.com"
          />

          <div>
            {formik.touched.email && (
              <small className="text-[12px] font-normal text-warning">
                {formik.errors.email}
              </small>
            )}
          </div>
        </div>
        <div>
          <label className="text-[13px] md:text-[14px] text-primary font-medium ">
            Password
          </label>
          <input
            name="password"
            value={formik.values.password}
            onChange={(e) => {
              formik.handleChange(e);
              formik.setTouched({ password: true });
            }}
            className={`h-[38px] w-full rounded-[8px] mt-[5px] px-2 bg-[#f7f7fd] placeholder:text-[14px] placeholder:text-[#525356] placeholder:font-normal border-[1px] shadow-none border-grayline focus:outline-none outline-none ring-0 focus:ring-0 ${
              formik.touched.password &&
              formik.errors?.password &&
              "border-warning border-1"
            } `}
            type="password"
            placeholder="Password"
          />
          <div className="">
            {formik.touched.password && (
              <small className="text-[12px] font-normal text-warning">
                {formik.errors.password}
              </small>
            )}
          </div>
        </div>
        <div className="flex justify-between pt-2">
          <div>
            <CheckboxCard />
          </div>
          <div>
            <Link href={"#"}>
              <h2 className="text-[13px] md:text-[14px] font-medium text-primary ">
                Forgot Password?
              </h2>
            </Link>
          </div>
        </div>
        <div>
          <Button
            type={"submit"}
            onClick={formik.handleSubmit}
            className="w-full bg-primary text-[14px] md:text-[16px] font-normal mt-2 h-[44px] rounded-[8px] "
          >
            Login
          </Button>
        </div>
      </form>
      <div>
        <Button
          variant="outline"
          className="w-full text-[14px] md:text-[16px] font-normal mt-2 h-[44px] rounded-[8px] "
        >
          <div className="flex gap-1 ">
            <div className="h-[24px] w-[24px]">
              <Image alt="" className="select-none" src={google} />
            </div>
            <div>
              <h3 className="text-[14px] md:text-[16px] text-[#838383]">
                Sign in with Google
              </h3>
            </div>
          </div>
        </Button>
      </div>
      <div>
        <div className="flex gap-1 justify-center mt-1">
          <h2 className="text-[13px] md:text-[14px] font-normal text-graylight">
            Don’t have an account ?
          </h2>
          <Link
            href={"/auth/register"}
            className="text-[13px] md:text-[14px] font-medium text-primary"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
