import { Button } from "@/components/ui/Button";
import { finalPricesNote, promotionMinimumNote } from "@/data/current-offers";

export function StartOffer() {
  return (
    <aside className="rounded-2xl border border-accent/25 bg-accent/[0.05] p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">Стартова оферта</p>
      <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
        Стартова оферта за първите 10 входа
      </h2>
      <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-6 text-foreground/75 sm:text-base">
        <li>Първите 3 месеца: 3,50 € на апартамент за пакет „Основен“.</li>
        <li>След това: 5,00 € на апартамент.</li>
        <li>Безплатно: оглед, въвеждане на собствениците в приложението и първото общо събрание.</li>
        <li>Без неустойка — прекратявате по всяко време и получавате обратно всички средства и документи.</li>
        <li>{promotionMinimumNote}</li>
        <li>Офертата не важи за пакет „Плюс“.</li>
      </ul>
      <p className="mt-5 text-sm text-foreground/70">{finalPricesNote}</p>
      <div className="mt-8">
        <Button href="/kontakti">Заявете безплатен оглед</Button>
      </div>
    </aside>
  );
}
