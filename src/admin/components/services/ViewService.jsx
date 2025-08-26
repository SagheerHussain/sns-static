import React, {  useEffect, useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MoreVert } from '@mui/icons-material';
import GridTable from '../GridTable';

const ViewService = () => {

    const [rows, setRows] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/services`);
                const data = await response.json();
                const formattedRows = data.map((item, index) => ({
                    id: item._id || index + 1,
                    title: item.title || "N/A",
                    description: `${item.description.slice(0, 30)}...` || "N/A",
                    category: `${item.category.name}` || "N/A",
                }));
                setRows(formattedRows);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', flex: 1, minWidth: 150 },
        { field: 'title', headerName: 'Title', flex: 1, minWidth: 150, editable: true },
        { field: 'description', headerName: 'Description', flex: 1, minWidth: 150, editable: true },
        { field: 'category', headerName: 'Category', flex: 1, minWidth: 150, editable: true },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            minWidth: 150,
            sortable: false,
            renderCell: (params) => (
                <>
                    <IconButton onClick={(event) => handleMenuOpen(event, params.row.id)}>
                        <MoreVert className="text-white" />
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
        navigate(`/dashboard/edit-service/${selectedId}`);
        handleMenuClose();
    };

    // Handle Single Delete
    const handleDelete = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to delete this service? This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                await fetch(`${import.meta.env.VITE_BASE_URL}/api/services/delete/${selectedId}`, {
                    method: 'DELETE',
                });
                setRows(rows.filter(row => row.id !== selectedId));
                Swal.fire("Deleted!", "The service has been deleted.", "success");
                handleMenuClose();
            } catch (error) {
                console.error("Error deleting category:", error);
            }
        }
    };

    // Handle Bulk Delete
    const handleBulkDelete = async () => {
        if (selectedRows.length === 0) {
            Swal.fire("No Selection", "Please select at least one service to delete.", "warning");
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
                await fetch(`${import.meta.env.VITE_BASE_URL}/api/services/delete-multiple?ids=${selectedRows.join(',')}`, {
                    method: 'DELETE',
                });

                setRows(rows.filter(row => !selectedRows.includes(row.id)));
                setSelectedRows([]);
                Swal.fire("Deleted!", "The selected services have been deleted.", "success");
            } catch (error) {
                console.error("Error Deleting Services:", error);
            }
        }
    };

    return (
        <>
            <GridTable title={"View Services"} handleBulkDelete={handleBulkDelete} selectedRows={selectedRows} rows={rows} columns={columns} setSelectedRows={setSelectedRows} />
        </>
    )
}

export default ViewService
