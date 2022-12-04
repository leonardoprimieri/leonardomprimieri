import { ReactNode } from "react";
import "./style.css";

type Props = {
  children: ReactNode;
};

const SectionTitle = ({ children }: Props) => {
  return (
    <div className='section-name'>
      <span>{children}</span>
      <hr />
    </div>
  );
};

export default SectionTitle;
