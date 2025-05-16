'use client'
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";

import { debounce } from "lodash";

import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import { SearchBox, InstantSearch, Hits, useSearchBox, useHits } from "react-instantsearch";
import Hit from "../hit";
import { motion } from "framer-motion";

const typesenseInstantSearchAdapter = new TypesenseInstantsearchAdapter({
    server: {
        apiKey: 'xyz',
        nodes: [
            {
                host: 'localhost',
                port: 8108,
                protocol: 'http',
            },
        ],
    },
    additionalSearchParameters: {
        query_by: 'title', // các trường tìm kiếm
    },
});

const searchClient = typesenseInstantSearchAdapter.searchClient;

function CustomHits() {
    const { query } = useSearchBox();
    const { hits } = useHits();

    if (!query) {
        return null;
    }

    return (
        <motion.div
            key="hits"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mt-2 rounded-lg border border-gray-200 shadow-md bg-white p-4"
        >
            {hits.length === 0 ? (
                <div className="text-center text-gray-500 py-2">
                    Không tìm thấy sản phẩm ... 
                </div>
            ) : (
                <Hits hitComponent={Hit} />
            )}
        </motion.div>
    );
}

export default function SearchBar() {
    return (
        <div className="p-2">
            <InstantSearch searchClient={searchClient} indexName="products">
                <div className="p-2 w-full">
                    <SearchBox
                        placeholder="Tìm sản phẩm..."
                        classNames={{
                            root: 'w-full',
                            form: 'relative flex items-center shadow-sm',
                            input:
                                'w-full px-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ',
                            submit:
                                'absolute right-3 text-gray-500 hover:text-blue-500 text-lg transition-colors',
                            reset:
                                'absolute pr-1 border-red border-r-2 right-8 text-gray-400 hover:text-red-400 text-lg transition-colors',
                        }}
                        submitIconComponent={() => (
                            <IoIosSearch />
                        )}
                        resetIconComponent={() => (
                            <TiDeleteOutline />
                        )}
                    />
                    <CustomHits />
                </div>
            </InstantSearch>
        </div>
    );
}
