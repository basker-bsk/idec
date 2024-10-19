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
} from "@/components/ui/select"
import Link from "next/link";

const formSchema = z
  .object({
    username: z.string().min(5, {
      message: "Username must ne atleast 5 characters",
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
    selectbox: z
    .string()
    .min(1, { message: "Select option required" }), 
    mobile: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must be same",
    path: ["confirmPassword"],
  })
  .refine((data) => data.mobile === true, {
    message: "Accept is Required",
    path: ["mobile"],
  });

export default function FormWithZod() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
      selectbox:"",
      mobile: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values", values);
  }
  return (
    <>
      <div className="flex flex-col w-full">
        <a id="form"></a>
        <h1>Form</h1>
      </div>
      <Card className="w-full lg:w-1/2">
        <CardHeader>
          <CardTitle>Dont have an account?</CardTitle>
          <CardDescription>
            Register now and benefit from the following:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
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
                name="selectbox"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Box</FormLabel>
                    <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
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
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to APEMs Terms & Conditions and Privacy Policy
                        </FormLabel>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
