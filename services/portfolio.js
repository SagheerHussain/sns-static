export const getPortfolios = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/portfolio`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return [];
  }
};

export const getPortfolioById = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/portfolio/id/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching portfolio by ID:", error);
    return null;
  }
};

export const addPortfolio = async (portfolioData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/portfolio`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(portfolioData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding portfolio:", error);
    return null;
  }
};

export const getPortfolioByCategory = async (category) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/portfolio/category/${category}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching portfolio by category:", error);
    return [];
  }
};

export const updatePortfolio = async (id, portfolioData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/portfolio/update/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(portfolioData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating portfolio:", error);
    return null;
  }
};

export const deletePortfolio = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/portfolio/delete/${id}`,
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
    console.error("Error deleting portfolio:", error);
    return null;
  }
};

export const deleteManyPortfolio = async (ids) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/portfolio/delete-multiple`,
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
    console.error("Error deleting portfolios:", error);
    return null;
  }
};
