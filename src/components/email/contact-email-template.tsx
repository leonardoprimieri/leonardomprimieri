interface Props {
  message: string;
  email: string;
  name: string;
}

export function ContactEmailTemplate({ name, email, message }: Props) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Portfolio Contact Form</h1>
      <p className="text-lg">Name: {name}</p>
      <p className="text-lg">Email: {email}</p>
      <p className="text-lg">Message: {message}</p>
    </div>
  );
}
