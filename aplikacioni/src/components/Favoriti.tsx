
"use client";

import { useState, useTransition } from "react";
import { ruajFavoritin } from "@/app/udhetimi/actions";

type Props = {
  udhetimId: string;
  fillimishtRuajtur: boolean;
  fillimishtNumer: number;
};

export default function Favoriti({
  udhetimId,
  fillimishtRuajtur,
  fillimishtNumer,
}: Props) {
  const [ruajtur, setRuajtur] = useState(fillimishtRuajtur);
  const [numer, setNumer] = useState(fillimishtNumer);
  const [mesazhi, setMesazhi] = useState(
    fillimishtRuajtur ? "I ruajtur" : ""
  );
  const [dukeRuajtur, startTransition] = useTransition();

  function ruaj() {
    if (ruajtur || dukeRuajtur) return;

    setRuajtur(true);
    setNumer((v) => v + 1);
    setMesazhi("Po ruhet…");

    startTransition(async () => {
      try {
        // Testi 3 – simulimi i kërkesave të përsëritura
        const [rezultati, rezultatiDyte] = await Promise.all([
          ruajFavoritin(udhetimId),
          ruajFavoritin(udhetimId),
        ]);

        console.log("Kërkesa 1:", rezultati);
        console.log("Kërkesa 2:", rezultatiDyte);

        if (rezultati.sukses || rezultatiDyte.sukses) {
          setMesazhi("I ruajtur");
        } else {
          setRuajtur(false);
          setNumer((v) => Math.max(0, v - 1));

          const gabimet: Record<string, string> = {
            hyr: "Nuk u identifikua përdoruesi. Kyçu përsëri.",
            fushe: "ID-ja e udhëtimit nuk është valide.",
            nuk_gjendet: "Udhëtimi nuk u gjet në databazë.",
            databaza: "Ruajtja dështoi. Provo përsëri.",
          };

          setMesazhi(
            gabimet[rezultati.mesazh ?? ""] ??
              "Ruajtja dështoi. Provo përsëri."
          );
        }
      } catch (error) {
        setRuajtur(false);
        setNumer((v) => Math.max(0, v - 1));
        setMesazhi(
          "Komunikimi me serverin dështoi. Provo përsëri."
        );

        console.error(
          "Gabim gjatë komunikimit me serverin:",
          error
        );
      }
    });
  }

  return (
    <section>
      <button
        type="button"
        onClick={ruaj}
        disabled={ruajtur || dukeRuajtur}
        aria-label={
          ruajtur
            ? "Udhëtimi i ruajtur"
            : "Ruaj në të preferuara"
        }
        aria-pressed={ruajtur}
      >
        {dukeRuajtur
          ? "★ Po ruhet…"
          : ruajtur
          ? "★ I ruajtur"
          : "☆ Ruaj në të preferuara"}
      </button>

      <p>Preferime: {numer}</p>

      <p role="status" aria-live="polite">
        {mesazhi}
      </p>
    </section>
  );
}
