import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import OtpForm from "@/components/auth/components/otp-form";
import { useSelector } from "react-redux";
import { selectEmail } from "@/store/features/auth/authSelectors";
import { useAuth } from "@/hooks/useAuth";

export default function Otp() {
  const email = useSelector(selectEmail);
  const { handleResendOTP } = useAuth();
  const handleResend = () => {
    handleResendOTP(email);
  };
  console.log("<<<<<<<<<<<<<<", email);
  return (
    <>
      <div className=" h-[80vh] flex items-center justify-center  text-gray-900 dark:text-white  dark:border-r lg:flex bg-gradient-to-br from-blue-500 from-10% via-blue-300 via-30% to-white dark:to-gray-950 to-60%">
        <div className="mx-10 lg:mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
          <div className="mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            <h1 className="text-xl font-medium">Verify OTP</h1>
          </div>
          <Card className="p-6 ">
            <div className="mb-2 flex flex-col space-y-2 text-left">
              <h1 className="text-md font-semibold tracking-tight">
                Two-factor Authentication
              </h1>
              <p className="text-sm text-muted-foreground">
                Please enter the authentication code. <br /> We have sent the
                authentication code to your email.
              </p>
            </div>
            <OtpForm />
            <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
              Haven't received it?{" "}
              <span
                onClick={handleResend}
                className="underline underline-offset-4 hover:text-primary cursor-pointer"
              >
                Resend a new code.
              </span>
              .
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
