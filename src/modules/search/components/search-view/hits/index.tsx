import Hit from "../hit"

export default function Hits({ hit }: { hit: any }) {
    return (
        <div className="bg-slate-300">
            <div>{hit.title}</div>
            <div>{hit.price}</div>
        </div>
    )
}