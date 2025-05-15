

// IMPORT HITS vào
'use client'
import { useState } from "react";
import { SubmitButton } from "@modules/checkout/components/submit-button";
import { Input } from "@medusajs/ui";
import Hits from "../hits";
import { debounce } from "lodash";


export default function SearchBar() {
    const [value, setValue] = useState("")

    return (
        <div className="m-2">
            {/* <Input lang="vi" type="search" name={""} label={"Nhập để tìm sản phẩm."}>
            </Input> */}
            {/* ⚠️ */}
            <div className="flex w-full h-fit gap-2 relative">
                <div className="w-full h-fit">
                    <Input
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        type="search"
                        className="w-full max-w-96 h-8"
                        placeholder="Nhập để tìm kiếm sản phẩm."
                    />
                    {value && (
                        <div className="p-2 animate-accordion-open duration-750">
                            <Hits />
                        </div>
                    )}
                </div>
                <div className="h-8 absolute right-0">
                    <SubmitButton variant={"primary"} className="h-8 text-nowrap">
                        Tìm kiếm
                    </SubmitButton>
                </div>

            </div>

            {/* một khung dài witdh = 100vw, radius = cthuc tính radius, gap khoảng 16-18px là đến icon user và icon shoping bag */}
        </div>
    );
}