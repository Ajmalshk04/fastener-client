import { UserAuthForm } from "./components/user-auth-form";
import Cover from "@/assets/machine2.jpg";

export default function SignIn() {
  return (
    <>
      <div className="container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0 ">
        <div className=" hidden h-full flex-col p-10 text-white dark:border-r lg:flex bg-gradient-to-br from-blue-500 from-10% via-blue-300 via-30% to-gray-950 to-60%">
          <div className=" flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-layout-dashboard mr-2"
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            Logo
          </div>

          <div className="flex items-center justify-center mx-auto mt-auto w-2/3 h-2/3">
            <img
              src={Cover}
              className="w-full h-full object-cover rounded-lg "
              alt="Fasteners"
            />
          </div>

          <div className="relative mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;With an unbreakable supply chain and virtually unlimited
                manufacturing capacity, We are your solution for getting the
                components you need when you need them&rdquo;
              </p>
              <footer className="text-sm"></footer>
            </blockquote>
          </div>
        </div>
        <div className="p-8 lg:p-10 border mx-auto rounded-lg ">
          <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px]">
            <div className="flex flex-col space-y-4 text-left">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below <br />
                to log into your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking login, you agree to our{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
