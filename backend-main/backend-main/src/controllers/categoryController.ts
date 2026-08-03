import { Request, Response } from "express";
import prisma from "../prisma/client";

export const getCategories = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await prisma.category.findMany();

    console.log("CATEGORY DATA:", data);

    res.json(data);
  } catch (error) {
    console.error("ERROR PRISMA CATEGORY:", error);

    res.status(500).json({
      message: "Gagal mengambil category",
      error: String(error),
    });
  }
};
export const createCategory = async (
  req: Request,
  res: Response
) => {
  console.log("POST /categories MASUK");
  console.log("BODY:", req.body);

  try {
    const data = await prisma.category.create({
      data: {
        name: req.body.name,
      },
    });

    console.log("CATEGORY BERHASIL:", data);

    res.json(data);
  } catch (error) {
    console.error("ERROR CREATE:", error);

    res.status(500).json({
      message: "Gagal tambah category",
    });
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const data = await prisma.category.update({
      where: { id },
      data: {
        name: req.body.name,
      },
    });

    res.json(data);
  } catch (error) {
    console.error("ERROR UPDATE:", error);

    res.status(500).json({
      message: "Gagal update category",
    });
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    await prisma.category.delete({
      where: { id },
    });

    res.json({
      message: "Category berhasil dihapus",
    });
  } catch (error) {
    console.error("ERROR DELETE:", error);

    res.status(500).json({
      message: "Gagal hapus category",
    });
  }
};