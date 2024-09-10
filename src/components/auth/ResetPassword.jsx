import React from "react";
import { useSearchParams } from "react-router-dom";
import { ResetPasswordForm } from "./components/reset-form";
import { Card } from "@/components/ui/card"; // Import the Card component from your UI library

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    return <p>Invalid or missing token.</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="max-w-md w-full p-6">
        <h1 className="text-2xl font-semibold mb-4">Reset Password</h1>
        <ResetPasswordForm token={token} />
      </Card>
    </div>
  );
};

export default ResetPasswordPage;
