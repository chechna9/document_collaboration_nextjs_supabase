import { SignupForm } from "@/app/(authentication)/signup/components/signup_form";
import { Form } from "@/components/ui/form";
import React from "react";

const SignupPage = () => {
  return (
    <div className="bg-white h-fit p-5 rounded-md formSize">
      <SignupForm />   
    </div>
  );
};

export default SignupPage;
