"use client";
import { Card } from "~/components/expandable-cards/types/card";
import { HightLightText } from "../about-section/components/hightlight-text/hightlight-text";
import { ExpandableCards } from "~/components/expandable-cards/expandable-cards";

export function MyWorkExperienceSection() {
  return <ExpandableCards title="Work Experience" cards={cards} />;
}

const cards: Card[] = [
  {
    description: "Mar 2023 - Present · 2 yrs",
    title: "Wine Locals - React/Next Developer",
    src: "/companies-logos/wine-locals.jpg",
    content: () => {
      return (
        <section className="text-pretty text-sm text-muted-foreground">
          <div>
            <p>
              Responsible for maintaining and developing new features on{" "}
              <a
                href="https://www.wine-locals.com/"
                target="_blank"
                rel="noopener"
              >
                <HightLightText>Wine Locals</HightLightText>
              </a>{" "}
              and{" "}
              <a
                href="https://www.vivaors.com.br/"
                target="_blank"
                rel="noopener"
              >
                <HightLightText>Viva o RS</HightLightText>
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              Technical Accomplishments:
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Improved page SEO and performance</li>
              <li>
                Refactored HTTP calls to use react-query and implement caching
              </li>
              <li>
                Refactored forms using react-hook-form to simplify validation
                and field manipulation
              </li>
              <li>
                Created profile and authentication/authorization login using
                Next.JS middleware
              </li>
              <li>
                Contributed to creating, designing, and refactoring the purchase
                flow with integrated payment methods (Credit Card and Pix)
              </li>
              <li>Developed a React Native mobile application using Expo</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              Performance Improvements
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Led the initiative to migrate from Webpack to Vite across all
                projects
              </li>
              <li>Reduced build times, improving developer experience</li>
              <li>
                Decreased initial load time for end users by implementing better
                code splitting
              </li>
              <li>
                Optimized CI/CD pipeline execution time, resulting in faster
                deployments
              </li>
            </ul>
          </div>
        </section>
      );
    },
  },
  {
    description: "Nov 2021 - Apr 2023 · 1 yr 6 mos",
    title: "Softo - DevTeam as a Service - React/Next Developer",
    src: "/companies-logos/softodev_logo.jpeg",
    content: () => {
      return (
        <section className="text-pretty text-sm text-muted-foreground">
          <div>
            <p>I worked on a few systems within the company, listed below:</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              <a href="https://globalfy.com" target="_blank" rel="noopener">
                <HightLightText>Globalfy</HightLightText>
              </a>
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Virtual card creation</li>
              <li>Debit card creation</li>
              <li>Credit card creation</li>
              <li>Make Wire and ACH transfers</li>
              <li>
                Protect each user action with Authy and QR code through the
                front end
              </li>
              <li>
                List and view transfer receipts, as well as cancel and try to
                redo them
              </li>
              <li>Upload documents for validating the new user account</li>
              <li>
                Administrative panel for creating new members for the Bank
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              Payment Gateway and Platform
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Creation and listing of Coupons, Transfers, Products, Customers,
                Payment Links, Invoices and Subscriptions
              </li>
              <li>
                Maintenance of the Hosted Checkout system, handling credit card
                and information of customers
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">Design System</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Helped team in the creation of components using Bit.dev and
                ReactJS
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              <a href="https://sof.to/" target="_blank" rel="noopener">
                <HightLightText>Softo Institutional Website</HightLightText>
              </a>
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Blog creation integrated with Strapi</li>
              <li>Creation of screens for publicizing services</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">F5 Academy</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Led the creation and development of the project</li>
              <li>Implemented Tailwind, React Hook Form, and Zustand</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              Special Contributions
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Implemented Cypress into CI and CD pipelines</li>
              <li>
                Improved build and CI/CD time by replacing Webpack with Vite
                across all company projects
              </li>
            </ul>
          </div>
        </section>
      );
    },
  },
  {
    description: "Feb 2020 - Nov 2021 · 1 yr 10 mos",
    title: "Whydea - React/Next Developer",
    src: "/companies-logos/whydea_logo.jpeg",
    content: () => {
      return (
        <section className="text-pretty text-sm text-muted-foreground">
          <div>
            <p>Projects I worked on at the company:</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              Video Publishing Platform
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Creation of login and authentication system with Firebase</li>
              <li>Creating and modeling the database with Firebase</li>
              <li>
                Making the list of videos, marking them as completed and showing
                the percentage that the user completed
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              <a
                href="https://megaatacadopf.com.br"
                target="_blank"
                rel="noopener"
              >
                <HightLightText>Ecommerce - Mega Atacado PF</HightLightText>
              </a>
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Product listing</li>
              <li>Filtering by category, name, price, best sellers, etc.</li>
              <li>
                I helped build the backend with NodeJS and Express, creating a
                route for listing products, creating a favorites list, shipping
                calculations, etc.
              </li>
              <li>Helped on React Native app creation</li>
            </ul>
          </div>
        </section>
      );
    },
  },
];
