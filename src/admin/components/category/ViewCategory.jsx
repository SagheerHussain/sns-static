import React, { useEffect, useState } from 'react';

import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom'; // For navigation
import Swal from 'sweetalert2';
import GridTable from '../GridTable';
import { DataArray } from '@mui/icons-material';

const ViewCategory = () => {
    const [rows, setRows] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const navigate = useNavigate();

    // Handle Actions Menu
    const handleMenuOpen = (event, id) => {
        setAnchorEl(event.currentTarget);
        setSelectedId(id);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedId(null);
    };

    // Handle Single Edit
    const handleEdit = () => {
        navigate(`/dashboard/edit-category/${selectedId}`);
        handleMenuClose();
    };

    // Handle Single Delete
    const handleDelete = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to delete this category? This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                await fetch(`${import.meta.env.VITE_BASE_URL}/api/category/delete/${selectedId}`, {
                    method: 'DELETE',
                });
                setRows(rows.filter(row => row.id !== selectedId));
                Swal.fire("Deleted!", "The category has been deleted.", "success");
                handleMenuClose();
            } catch (error) {
                console.error("Error deleting category:", error);
            }
        }
    };

    // Handle Bulk Delete
    const handleBulkDelete = async () => {
        if (selectedRows.length === 0) {
            Swal.fire("No Selection", "Please select at least one category to delete.", "warning");
            return;
        }

        const result = await Swal.fire({
            title: "Are you sure?",
            text: `Do you really want to delete ${selectedRows.length} categories? This action cannot be undone.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete them!",
        });

        if (result.isConfirmed) {
            try {
                await fetch(`${import.meta.env.VITE_BASE_URL}/api/category/delete-multiple?ids=${selectedRows.join(',')}`, {
                    method: 'DELETE',
                });

                setRows(rows.filter(row => !selectedRows.includes(row.id)));
                setSelectedRows([]);
                Swal.fire("Deleted!", "The selected categories have been deleted.", "success");
            } catch (error) {
                console.error("Error deleting categories:", error);
            }
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', flex: 1, minWidth: 150 },
        { field: 'category', headerName: 'Category', flex: 1, minWidth: 150, editable: true },
        { field: 'slug', headerName: 'Slug', flex: 1, minWidth: 150, editable: true },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            minWidth: 150,
            sortable: false,
            renderCell: (params) => (
                <>
                    <IconButton onClick={(event) => handleMenuOpen(event, params.row.id)}>
                        <MoreVertIcon className="text-white" />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl) && selectedId === params.row.id}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleEdit}>Edit</MenuItem>
                        <MenuItem onClick={handleDelete} className="text-red-500">Delete</MenuItem>
                    </Menu>
                </>
            ),
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category`);
                const data = await response.json();
                console.log("specific categories", data);
                const formattedRows = data.map((item, index) => ({
                    id: item._id || index + 1,
                    category: item.name || "N/A",
                    slug: item.slug || "N/A",
                }));
                setRows(formattedRows);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <GridTable title={"View Categories"} handleBulkDelete={handleBulkDelete} selectedRows={selectedRows} rows={rows} columns={columns} setSelectedRows={setSelectedRows} />
        </>
    );
};

export default ViewCategory;

