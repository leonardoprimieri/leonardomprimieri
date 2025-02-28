export type Card = {
  description: string;
  title: string;
  src: string;
  content: () => React.ReactNode;
};
