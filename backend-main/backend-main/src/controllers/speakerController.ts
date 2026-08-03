import { Request, Response } from "express";

import prisma from "../prisma/client";

export const getSpeakers = async (
  req: Request,
  res: Response
) => {
  try {
    const data =
      await prisma.speaker.findMany();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message:
        "Gagal mengambil speaker",
    });
  }
};

export const createSpeaker = async (
  req: Request,
  res: Response
) => {
  try {
    const data =
      await prisma.speaker.create({
        data: req.body,
      });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message:
        "Gagal tambah speaker",
    });
  }
};

export const updateSpeaker = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const data =
      await prisma.speaker.update({
        where: { id },
        data: req.body,
      });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message:
        "Gagal update speaker",
    });
  }
};

export const deleteSpeaker = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    await prisma.speaker.delete({
      where: { id },
    });

    res.json({
      message:
        "Speaker berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Gagal hapus speaker",
    });
  }
};