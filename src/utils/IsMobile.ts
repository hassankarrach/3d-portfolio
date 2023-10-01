export function isMobile(): boolean {
  const userAgent = navigator.userAgent;
  const mobileKeywords = ["Mobile", "Android", "iPhone", "iPad", "Tablet"];

  if (mobileKeywords.some((keyword) => userAgent.includes(keyword))) {
    return true;
  }

  const mobileThreshold = 768;
  if (window.innerWidth < mobileThreshold) {
    return true;
  }

  return false;
}
