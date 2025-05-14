// IMPORT HITS vào
'use client'
import { useState } from "react"
import { Input } from "@medusajs/ui";
// import Input from "@modules/common/components/input";
import { RiSearchLine } from "react-icons/ri";
import { Button } from "@medusajs/icons";

export default function SearchBox() {
    const [value, setValue] = useState("")
    return (
        <div className="p-2 border rounded-md ">
            {/* <Input lang="vi" type="search" name={""} label={"Nhập để tìm sản phẩm."}>
            </Input> */}
            {/* ⚠️ */}
            <div className="grid grid-cols-5">
                <div className="col-span-4">
                    <Input
                        type="search"
                        value={value}
                        placeholder="Nhập để tìm sản phẩm trên cửa hàng."
                        onChange={e => setValue(e.target.value)}
                    >

                    </Input>
                </div>
                <div className="grid grid-rows-2">
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>


            {/* một khung dài witdh = 100vw, radius = cthuc tính radius, gap khoảng 16-18px là đến icon user và icon shoping bag */}
        </div>
    );
}