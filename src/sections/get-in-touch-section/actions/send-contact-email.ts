import { useMutation } from "@tanstack/react-query";

type SendContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

async function sendContactEmail(body: SendContactEmailPayload) {
  fetch("/api/send-contact-email", {
    method: "POST",
    body: JSON.stringify({
      name: body.name,
      email: body.email,
      message: body.message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function useSendContactEmailMutation() {
  return useMutation({
    mutationFn: sendContactEmail,
  });
}
