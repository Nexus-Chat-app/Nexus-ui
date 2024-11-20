import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/authSlice";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import apiClient from "@/services/api/apiClient";

const loginSchema = z.object({
  identifier: z.string().min(8, { message: "Invalid identifier address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean(),
});

const otpSchema = z.object({
  identifier: z.string().min(8, { message: "Invalid identifier address" }),
  otp: z
    .array(z.string().length(1, "Each OTP digit must be 1 character"))
    .length(6, "OTP must be 6 digits"),
  rememberDevice: z.boolean(),
});

export default function LoginForm() {
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const otpInputs = useRef<(HTMLInputElement | null)[]>([]);
  const dispatch = useDispatch();

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
      rememberMe: false,
    },
  });

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: Array(6).fill(""),
      rememberDevice: false,
    },
  });

  const handleSuccessfulLogin = (
    user: { identifier: string; username: string },
    token: string
  ) => {
    dispatch(login({ user, accessToken: token }));
    console.log("User authenticated successfully!", user);
  };

  async function onLoginSubmit(values: z.infer<typeof loginSchema>) {
    try {
      setLoading(true);      
      const response = await apiClient.loginUser(values);
      console.log(response);
      
      if (response.data ) {
        localStorage.setItem("identifier", values.identifier);
        setIsOtpStep(true);
      } else if (response.success) {
        handleSuccessfulLogin(response.user, response.accessToken);
      } else {
        console.error("Login failed:", response.message);
      }
      setLoading(false);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      console.error("Error during login:", errorMessage);
      // Display to the user:
      setError(errorMessage);
    }
  }

  async function onOtpSubmit(values: z.infer<typeof otpSchema>) {
    try {
      const otp = values.otp.join("");
      const identifier = localStorage.getItem("identifier");
      if (!identifier) {
        console.error("identifier is missing. Please try logging in again.");
        return;
      }
      const response = await apiClient.verifyOtp({
        identifier: identifier,
        otp: otp,
        rememberDevice: values.rememberDevice,
      });
      if (response.success) {
        handleSuccessfulLogin(response.user, response.token);
      } else {
        console.error("OTP verification failed:", response.message);
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
    }
  }

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d$/.test(value) && value !== "") return;
    const newOtp = [...otpForm.getValues("otp")];
    newOtp[index] = value;
    otpForm.setValue("otp", newOtp, { shouldValidate: true });

    if (value && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
      otpInputs.current[index - 1]?.focus();
    }
  };
  

  return (
    <div className="space-y-6">
      {error && (<div className="text-white bg-red-600 border border-black rounded-xl py-1 px-2 w-fit">{error}</div>)}
      {!isOtpStep ? (
        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(onLoginSubmit)}
            className="space-y-4"
          >
            <FormField
              control={loginForm.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>identifier</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your identifier"
                      {...field}
                      className="bg-white/50 dark:bg-gray-800/40 text-black dark:text-white border-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        {...field}
                        className="bg-white/50 dark:bg-gray-800/40 text-black dark:text-white border-0"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 dark:text-white right-0 pr-3 flex items-center"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 opacity-70" />
                        ) : (
                          <Eye className="h-4 w-4 opacity-70" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full text-white border border-white bg-blue-500/80 dark:bg-red-500/80 rounded-xl"
            >
              Log in
            </Button>
          </form>
        </Form>
      ) : (
        <Form {...otpForm}>
          <form
            onSubmit={otpForm.handleSubmit(onOtpSubmit)}
            className="space-y-4 flex-col flex items-center"
          >
            <FormField
              control={otpForm.control}
              name="otp"
              render={() => (
                <FormItem>
                  <FormLabel>Enter OTP</FormLabel>
                  <FormControl>
                    <div className="flex justify-center gap-2">
                      {[...Array(6)].map((_, index) => (
                        <Input
                          key={index}
                          type="text"
                          maxLength={1}
                          className="w-12 h-12 text-center text-2xl font-bold rounded-md bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
                          ref={(el) => (otpInputs.current[index] = el)}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          inputMode="numeric"
                          pattern="\d*"
                          value={otpForm.getValues("otp")[index]}
                        />
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-600 font-bold drop-shadow-xl">
                    {" "}
                    {otpForm.formState.errors.otp?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full text-white border border-white bg-blue-500/80 dark:bg-red-500/80 rounded-xl"
            >
              Verify OTP
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
