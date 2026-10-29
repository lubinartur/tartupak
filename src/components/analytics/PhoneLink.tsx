"use client";

import type { ComponentProps } from "react";
import { trackEvent } from "@/lib/consent";

type Props = Omit<ComponentProps<"a">, "href" | "onClick"> & {
  href: string;
  /** Where on the site the link sits (e.g. "footer", "contact"); sent with the event. */
  placement: string;
};

/** A tel: link that reports a `phone_click` event to the dataLayer (no phone number, no personal data). */
export function PhoneLink({ placement, ...props }: Props) {
  return <a {...props} onClick={() => trackEvent("phone_click", { placement })} />;
}
