export const getServices = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/services`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export const getServiceByCategory = async (category) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/services/category/${category}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching services by category:", error);
    return [];
  }
};

export const getServiceById = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/services/id/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching service by ID:", error);
    return null;
  }
};

export const createService = async (serviceData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/services`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating service:", error);
    return null;
  }
};

export const updateService = async (id, serviceData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/services/update/${id}`, 
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating service:", error);
    return null;
  }
};


export const deleteService = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/services/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting service:", error);
    return null;
  }
};


export const deleteManyServices = async (ids) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/services/delete-multiple`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting multiple services:", error);
    return null;
  }
};