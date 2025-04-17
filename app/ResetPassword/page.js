"use client";
import React, { useState, useEffect } from "react";
import Input from "../_components/Input";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPassword } from "../servicesApi/resetPasswordApi";

function ResetPassword() {
  const [email, setEmail] = useState(""); // ✅ إضافة حقل البريد الإلكتروني
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // 🔹 جلب التوكن من رابط الـ URL
  const token = searchParams.get("token");
  const userEmail = searchParams.get("email"); // ⬅️ جلب البريد الإلكتروني من الرابط

  useEffect(() => {
    if (!token || !userEmail) {
      setError("Invalid or missing token/email. Please request a new reset link.");
    }
    setEmail(userEmail || ""); // تعيين الإيميل المُرسل في الرابط
  }, [token, userEmail]);

  const handleSubmit = async () => {
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (!token) {
      setError("Invalid token. Please request a new reset link.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await resetPassword({ email, token, newPassword: password });
      setSuccess("Password reset successful! Redirecting to login...");
      setTimeout(() => router.push("/login"), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <p className="text-gray-600 mb-4">Enter your new password.</p>

        <Input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          icon="/email.png"
          title="Email"
        />

        <Input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
          icon="/eye.png"
          title="New Password"
        />
        <Input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm New Password"
          icon="/eye.png"
          title="Confirm Password"
        />

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 text-white w-full py-2 rounded-md mt-3"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </div>
    </section>
  );
}

export default ResetPassword;
