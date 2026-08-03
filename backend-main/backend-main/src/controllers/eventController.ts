import { Request, Response } from "express";
import prisma from "../prisma/client";

/* ===================================================
   GET ALL EVENTS (WITH RELATION CATEGORY + SPEAKER)
=================================================== */
export const getEvents = async (req: Request, res: Response) => {
  try {
    const data = await prisma.event.findMany({
      include: {
        category: true,
        speaker: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Gagal mengambil event",
    });
  }
};

/* ===================================================
   CREATE EVENT
=================================================== */
export const createEvent = async (req: Request, res: Response) => {
  try {
    const {
      name,
      categoryId,
      speakerId,
      location,
      dateEvent,
      description,
    } = req.body;

    // VALIDASI SEDERHANA (WAJIB BIAR AMAN DEMO)
    if (!name || !categoryId || !speakerId) {
      return res.status(400).json({
        message: "Name, category, speaker wajib diisi",
      });
    }

    const data = await prisma.event.create({
      data: {
        name,
        categoryId: Number(categoryId),
        speakerId: Number(speakerId),
        location,
        dateEvent: new Date(dateEvent),
        description,
      },
    });

    res.json(data);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal tambah event",
      error,
    });
  }
};

/* ===================================================
   UPDATE EVENT (WAJIB CRUD LENGKAP)
=================================================== */
export const updateEvent = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const {
      name,
      categoryId,
      speakerId,
      location,
      dateEvent,
      description,
    } = req.body;

    const data = await prisma.event.update({
      where: { id },
      data: {
        name,
        categoryId: Number(categoryId),
        speakerId: Number(speakerId),
        location,
        dateEvent: new Date(dateEvent),
        description,
      },
    });

    res.json(data);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal update event",
      error,
    });
  }
};

/* ===================================================
   DELETE EVENT
=================================================== */
export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await prisma.event.delete({
      where: { id },
    });

    res.json({
      message: "Event berhasil dihapus",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal hapus event",
      error,
    });
  }
};