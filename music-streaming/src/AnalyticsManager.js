import mixpanel from "mixpanel-browser";

// export const initMixpanel = () => {
// 	mixpanel.init("444f60d9d1f0da427830c41855802421");
// };

mixpanel.init("444f60d9d1f0da427830c41855802421");

export const urlChangeEvent = () => {
	mixpanel.track("urlChanged");
};
