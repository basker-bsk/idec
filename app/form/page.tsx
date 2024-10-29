"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { date, z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const formSchema = z
  .object({
    firstname: z.string().min(5, {
      message: "First Name must ne atleast 5 characters",
    }),
    emailAddress: z
      .string()
      .min(1, {
        message: "Email is required",
      })
      .email(),
    password: z
      .string()
      .min(5, { message: "Password must be atleaset 5 characters" }),
    confirmPassword: z.string(),
    country: z.string().min(1, { message: "Select option required" }),
    newsletter: z.boolean().default(false),
    terms: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must be same",
    path: ["confirmPassword"],
  })
  .refine((data) => data.newsletter === true, {
    message: "Accept is Required",
    path: ["newsletter"],
  })
  .refine((data) => data.terms === true, {
    message: "Terms is Required",
    path: ["terms"],
  });

export default function FormWithZod() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
      country: "",
      newsletter: false,
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}
  return (
    <>
      <div className="flex flex-col w-full">
        <a id="form"></a>
        <h4>Form</h4>
      </div>
      <Card className="w-full lg:w-1/2">
        <CardHeader>
          <p className="text-18 leading-18 md:text-24 md:leading-24 font-medium">
            Create an IDEC account
          </p>
          <span className="text-14 md:text-16 md:leading-16">
            Already have an account?{" "}
            <Link href="/" className="underline text-primary">
              Login
            </Link>
          </span>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="form-container"
            >
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter First Name here" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" type="email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Confirm Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="" {...field}>
                          <SelectValue placeholder="Select where you are from" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="apple">America</SelectItem>
                            <SelectItem value="banana">China</SelectItem>
                            <SelectItem value="blueberry">India</SelectItem>
                            <SelectItem value="grapes">Japan</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem>
                    <div className="checkbox-container">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Subscribe me to IDEC newsletter</FormLabel>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <div className="checkbox-container">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to IDEC’s Terms and Conditions & Privacy
                          Policy
                        </FormLabel>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-6 w-full" type="submit">
                Create Account
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
