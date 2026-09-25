import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function BookingCalendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "agenda-tu-llamada-gratuita" });
      cal("ui", {
        cssVarsPerTheme: { dark: { "cal-brand": "#f97316" } },
        hideEventTypeDetails: false,
        layout: "month_view",
        hideBranding: true,
      });
    })();
  }, []);

  return (
    <div className="mx-auto mt-12 h-[600px] w-full max-w-[900px] overflow-hidden rounded-2xl bg-card border border-border shadow-2xl">
      <Cal
        namespace="agenda-tu-llamada-gratuita"
        calLink="ison-studio-gnlnl7/agenda-tu-llamada-gratuita"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
      />
    </div>
  );
}
