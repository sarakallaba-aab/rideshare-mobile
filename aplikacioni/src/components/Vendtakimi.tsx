
"use client";

import { useState } from "react";

type GjendjaGPS =
  | "idle"
  | "loading"
  | "success"
  | "denied"
  | "timeout"
  | "unavailable";

export default function Vendtakimi() {
  const [teksti, setTeksti] = useState("");
  const [vendtakimi, setVendtakimi] = useState("");
  const [gabimi, setGabimi] = useState("");
  const [gjendja, setGjendja] = useState<GjendjaGPS>("idle");
  const [saktesia, setSaktesia] = useState<number | null>(null);

  function konfirmoVendtakimin() {
    const tekstIPastruar = teksti.trim();

    if (!tekstIPastruar) {
      setGabimi("Ju lutem shkruani vendtakimin.");
      return;
    }

    setGabimi("");
    setVendtakimi(tekstIPastruar);
  }

  function merrVendndodhjen() {
    if (!navigator.geolocation) {
      setGjendja("unavailable");
      setSaktesia(null);
      return;
    }

    setGjendja("loading");
    setSaktesia(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setSaktesia(position.coords.accuracy);
        setGjendja("success");
      },
      (error) => {
        setSaktesia(null);

        if (error.code === 1) {
          setGjendja("denied");
        } else if (error.code === 2) {
          setGjendja("unavailable");
        } else if (error.code === 3) {
          setGjendja("timeout");
        } else {
          setGjendja("unavailable");
        }
      },
      { timeout: 10000 }
    );
  }

  const mesazhet: Record<GjendjaGPS, string> = {
    idle: "",
    loading: "Po kërkojmë vendndodhjen...",
    success: "Pozicioni u mor",
    denied: "Leja u refuzua. Shkruaj vendtakimin vetë.",
    timeout: "Koha mbaroi. Provo përsëri.",
    unavailable: "Pozicioni nuk është i disponueshëm. Shkruaj vendtakimin vetë."
  };

  return (
    <section>
      <h2>Vendtakimi i Artës</h2>

      <button
        type="button"
        data-testid="locate-me"
        onClick={merrVendndodhjen}
        disabled={gjendja === "loading"}
      >
        {gjendja === "loading"
          ? "Po kërkojmë vendndodhjen..."
          : "Përdor vendndodhjen time"}
      </button>

      <p
        role="status"
        data-testid="location-status"
        data-state={gjendja}
      >
        {mesazhet[gjendja]}
      </p>
      

      <p data-testid="location-accuracy">
        {saktesia !== null
          ? `Saktësia: ${Math.round(saktesia)} metra.`
          : ""}
      </p>
      

      <label htmlFor="vendtakimi">
        Shkruaj vendtakimin
      </label>

      <input
        id="vendtakimi"
        data-testid="meeting-input"
        type="text"
        value={teksti}
        onChange={(e) => {
          setTeksti(e.target.value);
          setGabimi("");
        }}
        placeholder="p.sh. Biblioteka"
      />

      <p role="alert" data-testid="meeting-error">
        {gabimi}
      </p>

      <button
        type="button"
        data-testid="confirm-meeting"
        onClick={konfirmoVendtakimin}
      >
        Konfirmo në telefon
      </button>

      <p data-testid="confirmed-meeting">
        Vendtakimi i konfirmuar:{" "}
        {vendtakimi || "Ende nuk është zgjedhur"}
      </p>
    </section>
  );
}
