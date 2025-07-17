import Link from "next/link";


export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <p className="space-y-2">
        <Link href="/week-2" className="text-pink-500 hover:underline"> Go to Week 2 Assignment</Link>
        <br /> 
        <Link href="/week-3" className="text-pink-500 hover:underline"> Go to Week 3 Assignment</Link>
        <br /> 
        <Link href="/week-4" className="text-pink-500 hover:underline">Go to Week 4 Assignment</Link>
        <br />
        <Link href="/week-5" className="text-pink-500 hover:underline">Go to Week 5 Assignment</Link>
        <br /> 
        <Link href="/week-6" className="text-pink-500 hover:underline">Go to Week 6 Assignment</Link>
        <br /> 
        <Link href="/week-7" className="text-pink-500 hover:underline">Go to Week 7 Assignment</Link>
        <br /> 
        <Link href="/week-8" className="text-pink-500 hover:underline">Go to Week 8 Assignment</Link>

      </p>
    </main>

  );
}
