// Optional SPA route restoration helper. Import this before BrowserRouter if
// deploying with GitHub Pages path-based routing. Custom domains use root paths.
const redirect = sessionStorage.getItem("spa-redirect");
if (redirect) {
  sessionStorage.removeItem("spa-redirect");
  history.replaceState(null, "", redirect);
}