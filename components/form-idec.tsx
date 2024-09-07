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

const formSchema = z
  .object({
    name: z.string().min(5, {
      message: "Name must ne atleast 5 characters",
    }),
    industry: z.string().min(5, {
      message: "Industry is required",
    }),
    emailAddress: z
      .string()
      .min(1, {
        message: "Email is required",
      })
      .email(),

    mobile: z.boolean().default(false),
  })

  .refine((data) => data.mobile === true, {
    message: "Accept is Required",
    path: ["mobile"],
  });

export default function IdecForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      industry: "",
      emailAddress: "",
      mobile: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values", values);
  }
  return (
    <>
      <div className="flex flex-col w-full p-8 border border-gray-300 bg-white">
        <h2 className="idec-title uppercase text-[32px] lg:text-[50px] font-extrabold mb-6">
          LET'S TALK ABOUT YOU
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 flex flex-wrap items-center"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/2 px-6">
                  <FormLabel>I am a</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/2 px-6">
                  <FormLabel>I WORK IN THE FOLLOWING INDUSTRY</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/2 px-6">
                  <FormLabel>MY EMAIL IS</FormLabel>
                  <FormControl>
                    <Input placeholder="" type="email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/2 p-6">
                  <div className="flex flex-row items-start space-x-3 space-y-0 ">
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
            <div className="w-full lg:w-1/2 px-6 py-3">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
