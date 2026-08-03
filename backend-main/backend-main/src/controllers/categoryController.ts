import { Request, Response } from "express";

import prisma from "../prisma/client";

export const getCategories = async (
  req: Request,
  res: Response
) => {
  try {
    const data =
      await prisma.category.findMany();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message:
        "Gagal mengambil category",
    });
  }
};

export const createCategory = async (
  req: Request,
  res: Response
) => {
  try {
    const data =
      await prisma.category.create({
        data: req.body,
      });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message:
        "Gagal tambah category",
    });
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const data =
      await prisma.category.update({
        where: { id },
        data: req.body,
      });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message:
        "Gagal update category",
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
      message:
        "Category berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Gagal hapus category",
    });
  }
};