import Script from "next/script";
import { CONSENT_STORAGE_KEY, getGtmId } from "@/lib/consent";

const DENIED = "ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'";
const GRANTED = "ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'";

// Consent Mode v2: everything is denied until the visitor accepts; a stored "granted" choice is
// re-applied before GTM loads so returning visitors are not asked again.
const consentDefaults = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('consent','default',{${DENIED},wait_for_update:500});
try{if(localStorage.getItem('${CONSENT_STORAGE_KEY}')==='granted'){gtag('consent','update',{${GRANTED}});}}catch(e){}
`;

export function GoogleTagManager() {
  const gtmId = getGtmId();
  if (!gtmId) return null;

  return (
    <>
      <Script id="consent-defaults" strategy="afterInteractive">
        {consentDefaults}
      </Script>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
    </>
  );
}
