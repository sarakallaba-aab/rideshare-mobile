
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
  const [mesazhi, setMesazhi] = useState("");
  const [dukeRuajtur, startTransition] = useTransition();

  function ruaj() {
    if (ruajtur || dukeRuajtur) return;

    setRuajtur(true);
    setNumer((v) => v + 1);
    setMesazhi("Po ruhet…");

    startTransition(async () => {
      const rezultati = await ruajFavoritin(udhetimId);

      if (rezultati.sukses) {
        setMesazhi("I ruajtur");
      } else {
        setRuajtur(false);
        setNumer((v) => Math.max(0, v - 1));
        setMesazhi("Ruajtja dështoi. Provo përsëri.");
      }
    });
  }

  return (
    <section>
      <button
        type="button"
        onClick={ruaj}
        disabled={ruajtur || dukeRuajtur}
        aria-label={ruajtur ? "Udhëtimi i ruajtur" : "Ruaj në të preferuara"}
        aria-pressed={ruajtur}
      >
        {ruajtur ? "★" : "☆"} Ruaj në të preferuara
      </button>

      <p>Preferime: {numer}</p>
      <p role="status" aria-live="polite">{mesazhi}</p>
    </section>
  );
}
