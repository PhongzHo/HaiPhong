'use client'
import React, { useState, useEffect } from 'react'
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import { InstantSearch, SearchBox } from 'react-instantsearch';
import { Search } from 'lucide-react';

export async function SearchBar() {

    const typesenseInstantsearchAdapter = new TypesenseInstantsearchAdapter({
        server: {
            apiKey: 'xyz', // Replace with your Typesense API key
            nodes: [{
                host: 'localhost',
                port: 8108,
                protocol: 'http'
            }]
        },
        additionalSearchParameters: {
            query_by: 'title,description'
        }
    })

    const searchClient = typesenseInstantsearchAdapter.searchClient

    return (
        <div className="w-full max-w-sm mx-auto">
            <InstantSearch searchClient={searchClient} indexName="products">
                <div className="relative">
                    <SearchBox
                        classNames={{
                            root: 'relative',
                            form: 'relative',
                            input: 'w-full px-4 py-2 pl-10 pr-4 text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D94B7A] focus:ring-1 focus:ring-[#D94B7A]',
                            submit: 'absolute left-3 top-1/2 -translate-y-1/2',
                            submitIcon: 'w-4 h-4 fill-current text-gray-400',
                            reset: 'absolute right-3 top-1/2 -translate-y-1/2',
                            resetIcon: 'w-4 h-4 fill-current text-gray-400',
                            loadingIndicator: 'absolute right-3 top-1/2 -translate-y-1/2'
                        }}
                        placeholder="Tìm kiếm sản phẩm..."
                    submitIconComponent={() => (
                        <Search className="w-4 h-4 text-gray-400" />
                    )}
                    />
                </div>
            </InstantSearch>
        </div>
    )
}