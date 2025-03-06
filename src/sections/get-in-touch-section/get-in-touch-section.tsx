"use client";

import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { useSendContactEmailMutation } from "./actions/send-contact-email";
import { Textarea } from "~/components/ui/textarea";
import { BlurFade } from "~/components/magicui/blur-fade";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  GetInTouchFormValues,
  GetInTouchSchema,
} from "./validation/get-in-touch-form-validation";
import { toast } from "sonner";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import { InfoIcon } from "lucide-react";

export function GetInTouchSection() {
  const form = useForm({
    resolver: zodResolver(GetInTouchSchema),
    mode: "onBlur",
  });

  const sendContactEmailMutation = useSendContactEmailMutation();

  function onSubmit(values: GetInTouchFormValues) {
    sendContactEmailMutation.mutateAsync(
      {
        email: values.email,
        message: values.message,
        name: `${values.firstName} ${values.lastName}`,
      },
      {
        onSuccess: () => {
          form.reset();
          toast.success(
            "Message sent successfully. I'll get back to you soon."
          );
        },
      }
    );
  }

  return (
    <BlurFade inView>
      <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Get in Touch
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Fill out the form below and I&apos;ll get back to you as soon as
          possible.
        </p>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="my-8">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  placeholder="Jhon"
                  type="text"
                  {...form.register("firstName")}
                />
                {form?.formState.errors?.firstName && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.firstName.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  type="text"
                  {...form.register("lastName")}
                />
                {form?.formState.errors?.lastName && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.lastName.message}
                  </p>
                )}
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="jhon@doe.com"
                type="email"
                {...form.register("email")}
              />
              {form?.formState.errors?.email && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.email.message}
                </p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <div className="flex gap-2 items-center">
                <Label htmlFor="email">Message</Label>
                <HoverCard openDelay={100}>
                  <HoverCardTrigger>
                    <InfoIcon size={16} />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    Your message should be at least 10 characters long.
                  </HoverCardContent>
                </HoverCard>
              </div>

              <Textarea
                id="message"
                placeholder="Hi, I would like to talk about..."
                {...form.register("message")}
              />
              {form?.formState.errors?.message && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.message.message}
                </p>
              )}
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br relative group/btn from-primary to-primary/25 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={form.formState.isSubmitting || !form.formState.isValid}
            >
              Get in Touch
              <BottomGradient />
            </button>
          </form>
        </FormProvider>
      </div>
    </BlurFade>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
