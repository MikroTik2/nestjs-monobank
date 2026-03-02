import { redirect } from "next/navigation";

export default function NotFoundPage() {
       redirect(`${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started/installation`)
}