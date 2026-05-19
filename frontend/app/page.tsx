import { redirect } from "next/navigation";
import { bp } from "@/app/lib/path";

export default function Home() {
  redirect(bp("/posts"));
}
