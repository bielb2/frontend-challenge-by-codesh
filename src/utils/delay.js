// eslint-disable-next-line no-promise-executor-return
export const delay = (ms = 500) => new Promise((res) => setTimeout(res, ms));
