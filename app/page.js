import Link from "next/link";


export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <p className="space-y-2">
        <Link href="/week-2" className="text-pink-500 hover:underline"> Go to Week 2 Assignment</Link>
        <br /> 
        <Link href="/week-3" className="text-pink-500 hover:underline"> Go to Week 3 Assignment</Link>
      </p>
    </main>

  );
}
