import React, { useEffect, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GridTable from "../GridTable";
import { MoreVert } from "@mui/icons-material";

const ViewPortfolio = () => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/portfolio`
        );
        const { portfolios } = await response.json();
        console.log("portfolios", portfolios);
        const formattedRows = portfolios?.map((item, index) => ({
          id: item._id || index + 1,
          image: item.src || "N/A",
          title: item.title || "N/A",
          categories: item.categories.map((category) => category.name).join(", ") || "N/A",
          link: item.link || "N/A",
        }));
        setRows(formattedRows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 1, minWidth: 150 },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "categories",
      headerName: "Categories",
      flex: 1,
      minWidth: 250,
      editable: true,
    },
    {
      field: "link",
      headerName: "Link",
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
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
            <MenuItem onClick={handleDelete} className="text-red-500">
              Delete
            </MenuItem>
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
    navigate(`/dashboard/edit-portfolio/${selectedId}`);
    handleMenuClose();
  };

  // Handle Single Delete
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this portfolio? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await fetch(
          `https://skynetsilicon-website-backend.vercel.app/api/portfolio/delete/${selectedId}`,
          {
            method: "DELETE",
          }
        );
        setRows(rows.filter((row) => row.id !== selectedId));
        Swal.fire("Deleted!", "The portfolio has been deleted.", "success");
        handleMenuClose();
      } catch (error) {
        console.error("Error deleting portfolio:", error);
      }
    }
  };

  // Handle Bulk Delete
  const handleBulkDelete = async () => {
    if (selectedRows.length === 0) {
      Swal.fire(
        "No Selection",
        "Please select at least one category to delete.",
        "warning"
      );
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
        await fetch(
          `https://skynetsilicon-website-backend.vercel.app/api/portfolio/delete-multiple?ids=${selectedRows.join(
            ","
          )}`,
          {
            method: "DELETE",
          }
        );

        setRows(rows.filter((row) => !selectedRows.includes(row.id)));
        setSelectedRows([]);
        Swal.fire(
          "Deleted!",
          "The selected portfolios have been deleted.",
          "success"
        );
      } catch (error) {
        console.error("Error deleting portfolios:", error);
      }
    }
  };

  return (
    <>
      <GridTable
        title={"View Portfolio"}
        handleBulkDelete={handleBulkDelete}
        selectedRows={selectedRows}
        rows={rows}
        columns={columns}
        setSelectedRows={setSelectedRows}
      />
    </>
  );
};

export default ViewPortfolio;
