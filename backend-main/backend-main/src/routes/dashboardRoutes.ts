import { Router } from "express";
import prisma from "../prisma/client";

const router = Router();

router.get("/", async (req, res) => {

  try {

    const categories =
      await prisma.category.count();

    const speakers =
      await prisma.speaker.count();

    const events =
      await prisma.event.count();

    res.json({
      categories,
      speakers,
      events,
    });

  } catch (error) {

    res.status(500).json({
      message: "Gagal ambil dashboard",
    });
  }
});

export default router;