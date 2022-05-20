export const getId = (url = "") => {
    const params = new URL(url)?.pathname.split("/").filter((e) => !!e);
  
    return params[params.length - 1];
  };