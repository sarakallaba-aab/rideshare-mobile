
"use server";

import { revalidatePath } from "next/cache";
import { ruajFavorit } from "@/lib/favoritet";

export async function ruajFavoritin(udhetimId: string) {
  try {
    const rezultati = await ruajFavorit(udhetimId);

    if (rezultati === "ruajtur") {
      revalidatePath(`/udhetimi/${udhetimId}`);
      return { sukses: true };
    }

    console.error("Ruajtja e preferimit u refuzua:", rezultati);
    return { sukses: false, mesazh: rezultati };
  } catch (error) {
    console.error("Gabim gjatë ruajtjes së preferimit:", error);
    return { sukses: false, mesazh: "databaza" };
  }
}
