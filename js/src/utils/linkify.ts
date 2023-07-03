const urlPattern =
  /(?:https?:)?\/\/(?:(?:[\w-]+\.)+[\w/#@~.-]*)(?:\?(?:[\w&=.!,;$#%-]+)?)?/gi;

export default (text: string) => text.replace(urlPattern, (url) => `<a href="${url}" title="LINK">${url}</a>`);
