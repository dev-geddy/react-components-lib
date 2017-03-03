export const cleanReactAttributes = (htmlAsString) => {
  // Replace unnecessary React markup from DOM
  // data-react...="..."
  // <!-- /react-text -->

  htmlAsString = htmlAsString.replace(/\sdata\-react[^=]+="[^"]*"/gi,'')
  return htmlAsString.replace(/<!\-\-[^>]+>/gi,'')
}

const previewHelper = {
  cleanReactAttributes
}

export default previewHelper