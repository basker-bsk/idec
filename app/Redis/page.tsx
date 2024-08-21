import Link from "next/link";

export default function Redis() {
  return (
    <main>
      <nav className="flex justify-between">
        <h1 className="font-bold">Redis!</h1>
      </nav>

      <div className="flex justify-between">
        <p>List of books here.</p>
        <Link href="/create" className="btn">
          Add a new book
        </Link>
      </div>
    </main>
  );
}
