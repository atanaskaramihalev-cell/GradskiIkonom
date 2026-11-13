import { legalDefaults } from "@/lib/constants";
import type { SiteSettings } from "@/sanity/lib/types";

export function getLegalDetails(settings?: SiteSettings | null) {
  return {
    legalName: settings?.legalName?.trim() || legalDefaults.legalName,
    eik: settings?.eik?.trim() || legalDefaults.eik,
    registeredAddress:
      settings?.registeredAddress?.trim() || legalDefaults.registeredAddress,
    manager: settings?.manager?.trim() || legalDefaults.manager,
    vatRegistered: settings?.vatRegistered ?? legalDefaults.vatRegistered,
  };
}

export function publicRegisteredAddress(address: string) {
  return address.replace(/,\s*(?:ет\.?|етаж|ап\.?|апартамент)\s*.*$/i, "");
}
