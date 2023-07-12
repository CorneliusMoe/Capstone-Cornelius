import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Homepage Placeholder</h1>
      <Link href="/goallist">my Goals</Link>
      <Link href="/formpage">Form</Link>
    </div>
  );
}
