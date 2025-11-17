import { Metadata } from "next";
import WebDevelopmentClient from "./WebDevelopmentClient";

export const metadata: Metadata = {
  title: "Web Development Services | BrandBoosters",
  description: "Professional web development services to create fast, responsive, and engaging websites that drive results.",
};

export default function WebDevelopmentPage() {
  return <WebDevelopmentClient />;
}
