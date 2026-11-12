
import Link from "next/link";
import { notFound } from "next/navigation";
import { gjejUdhetimin } from "@/lib/udhetimet";
import { lexoFavoritet } from "@/lib/favoritet";
import Vendtakimi from "@/components/Vendtakimi";
import Favoriti from "@/components/Favoriti";

export default async function Detajet({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let udhetim;
  let favoritet;

  try {
    udhetim = await gjejUdhetimin(id);

  

    favoritet = await lexoFavoritet(id);
  } catch {
    return (
      <main>
        <h1>RideShare</h1>
        <p role="alert">Nuk u lidhëm me databazën. Provo përsëri.</p>
        <Link href="/">← Kthehu te lista</Link>
      </main>
    );
  }

  if (!udhetim) notFound();

  return (
    <main>
      <Link href="/">← Kthehu te lista</Link>

      <h1>{udhetim.nisja} – {udhetim.destinacioni}</h1>
      <p>Ora: {udhetim.ora}</p>
      <p>Vendtakimi: {udhetim.vendtakimi}</p>

      <Vendtakimi />

      <Favoriti
        udhetimId={udhetim.id}
        fillimishtRuajtur={favoritet.ruajtur}
        fillimishtNumer={favoritet.numer}
      />

      <p>Vende të lira: {udhetim.vende}</p>

      {udhetim.vende > 0 ? (
        <Link className="action" href={`/udhetimi/${id}/kerkesa`}>
          Kërko vend
        </Link>
      ) : (
        <button className="action" disabled>
          Nuk ka vende të lira
        </button>
      )}
    </main>
  );
}
