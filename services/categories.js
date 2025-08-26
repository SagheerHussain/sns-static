export const getCategories = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/category`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const getSpecificCategories = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/category/specific-categories`
    );
    const data = await response.json();
    console.log("specific categories", data);
    return data;
  } catch (error) {
    console.error("Error fetching specific categories:", error);
    return [];
  }
};
