import Link from "next/link"

export default function Hit({ hit }: { hit: any }) {
    return (
        <Link href={""} className="grid grid-cols-3 gap-2 rounded-lg pt-2">
            <div className="text-center h-full p-2">
                <div className="border rounded-lg bg-pink-200 aspect-square">{hit.thumbnail}</div>
            </div>
            <div className="border gap-1 col-span-2 grid grid-rows-3 bg-slate-200">
                <div className="bg-green-200">{hit.title}</div>
                <div className="bg-red-200">{hit.description}</div>
                <div className="bg-yellow-200">{hit.price}</div>
            </div>
        </Link>
    )
}