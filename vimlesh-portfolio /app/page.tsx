import { redirect } from "next/navigation";

// The homepage is served from public/home.html (see next.config.mjs).
// This redirect is a fallback in case the rewrite is ever removed.
export default function Home() {
  redirect("/home.html");
}
