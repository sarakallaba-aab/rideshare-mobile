
import "server-only";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { getSql } from "./db";
import { profiliIm } from "./lejet";

export async function ruajFavorit(udhetimId: string) {
  const profili = await profiliIm();

  if (!profili) return "hyr";

  if (!udhetimId || udhetimId.length > 100) return "fushe";

  const sql = getSql();

  const ekziston = await sql`
    SELECT id FROM udhetimet WHERE id = ${udhetimId}
  `;

  if (ekziston.length === 0) return "nuk_gjendet";

  await sql`
    INSERT INTO favoritet (user_id, udhetim_id)
    VALUES (${profili.id}, ${udhetimId})
    ON CONFLICT (user_id, udhetim_id) DO NOTHING
  `;

  return "ruajtur";
}

export async function lexoFavoritet(udhetimId: string) {
  const profili = await profiliIm();

  if (!profili) return { ruajtur: false, numer: 0 };

  const sql = getSql();

  const rows = await sql`
    SELECT
      COUNT(*)::int AS numer,
      EXISTS (
        SELECT 1 FROM favoritet
        WHERE user_id = ${profili.id}
          AND udhetim_id = ${udhetimId}
      ) AS ruajtur
    FROM favoritet
    WHERE udhetim_id = ${udhetimId}
  `;

  return {
    ruajtur: Boolean(rows[0].ruajtur),
    numer: Number(rows[0].numer),
  };
}
