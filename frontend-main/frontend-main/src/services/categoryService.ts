const STORAGE_KEY = "categories";

type Category = {
  id: number;
  name: string;
};

export const getCategories = async (): Promise<Category[]> => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
};

export const createCategory = async (data: {
  name: string;
}) => {
  const categories = await getCategories();

  const newCategory: Category = {
    id: Date.now(),
    name: data.name,
  };

  const updatedCategories = [
    ...categories,
    newCategory,
  ];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedCategories)
  );

  return newCategory;
};

export const deleteCategory = async (id: number) => {
  const categories = await getCategories();

  const updatedCategories = categories.filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedCategories)
  );

  return {
    message: "Category berhasil dihapus",
  };
};