import { FiSearch } from "react-icons/fi";
import { FaList } from "react-icons/fa6";


export function SearchBar() {

    return (
        <div className="w-full border-gray-700 border-2 max-w-md mx-auto">
            <div className='bg-green grid grid-cols-4'>
                <div className='bg-slate-400 gap-0 grid grid-cols-2 justify-center items-center'>
                    <div className="pl-2 font-medium text-2xl">
                        <FiSearch />
                    </div>
                    <div className="text-xs text-">
                        Danh Mục
                    </div>
                </div>
                <div className='bg-slate-300 col-span-3'>Search box</div>
            </div>
        </div>
    )
}