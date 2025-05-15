'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Hit() {
    const [sale0ff, setSale0ff] = useState(true);

    return (
        <Link href={"/"} className="grid grid-cols-3 gap-2 rounded-lg">
            <div className="text-center h-full p-2">
                <div className="border rounded-lg bg-pink-200 aspect-square">thumbnail square</div>
            </div>
            <div className="border gap-1 col-span-2 grid grid-rows-3 bg-slate-200">
                <div className="bg-green-200">Ten San Pham</div>
                <div className="bg-red-200">Mô tả ngắn</div>
                <div className="bg-yellow-200">Gia</div>
            </div>
        </Link>
    )
}