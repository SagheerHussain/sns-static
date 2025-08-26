import React from 'react';
import { Layout } from './index';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const GridTable = ({ title, handleBulkDelete, selectedRows, rows, columns, setSelectedRows }) => {
    return (
        <>
            <Layout>
                <section id="table" className='h-full min-h-[88vh]'>
                    <Box className="lg:w-[75vw] xl:w-[80vw] 2xl:w-[85vw] p-4">
                        {/* Bulk Delete Button */}
                        {selectedRows.length > 0 && (
                            <div className="flex justify-end mb-2">
                                <button className='bg-zinc-800 text-white py-2 px-3 text-sm hover:bg-zinc-950' onClick={handleBulkDelete}>
                                    Delete Selected Rows ({selectedRows.length})
                                </button>
                            </div>
                        )}

                        <h1 className="text-white mb-5 text-4xl font-bold">{title}</h1>

                        <DataGrid
                            rows={rows}
                            className="text-white bg-zinc-900 shadow-lg rounded-lg"
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 10,
                                    },
                                },
                            }}
                            pageSizeOptions={[10]}
                            checkboxSelection
                            onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
                            disableRowSelectionOnClick
                        />
                    </Box>
                </section>
            </Layout>
        </>
    )
}

export default GridTable
