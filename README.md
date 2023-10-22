# Site Summary
## Bella Bakes Bakery and Patisserie
Bella Bakes Bakery is a cozy neighborhood bakery known for its delectable pastries and fresh bread. Bella crafts treats that warm the heart and delight the taste buds.

## Products:
* __Cinnamon Swirl Delight:__ A flaky pastry twisted with layers of cinnamon and sugar, drizzled with vanilla glaze.
* __Raspberry Dream Tart:__ A buttery tart filled with sweet raspberry compote and topped with almond crumble.
* __Sourdough Miche:__ A rustic-styled sourdough loaf with a crispy crust and soft, airy interior. Made famous by Parisian baker Poilâne.
* __Chocolate Chunk Cookies:__ Large, gooey cookies packed with rich chocolate chunks and a hint of sea salt.
* __Lemon Zest Eclair:__ A light éclair filled with zesty lemon cream and finished with a glossy lemon glaze.

# Technical stuff

## Initial Setup
Site is built on ReactJS using Gatsby.
(from terminal within sites folder)
```
npx create-gatsby
```

## Node Packages
The following additional node packages have been included
* gatsby-transformer-json
* gatsby-plugin-image
* gatsby-plugin-google-fonts
* Font Awesome: (@fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons)
* react-day-picker - a nice single-month calendar style date picker
* date-fns - required by react-day-picker
* gh-pages ```npm install gh-pages --save-dev``` to allow automated publishing to GitHub pages.


## Things Learnt
* __Gatsby__ When generating the site template initially, certain optional files that would be empty are not generated. For example, to specify a global CSS file it needs to be imported via the gatsby-browser.js file in the site root, however this file isn't automatically generated and must be created manually.
* __Gatsby JSON transformer__ (gatsby-transformer-json) connects to server-side .json files for reading data with GraphQL
* __Gatsby Image Plugin__ (gatsby-plugin-image) allows you to pull in an image with only the filename specified, by searching from within the specified image folder in gatsby-config.js, and specify in GraphQL the image specs including placeholder effect and size to be provided without needing to specify in the source JSON or CSS. 
* __Gatsby Google Fonts plugin__ (gatsby-plugin-google-fonts) is a somewhat simple way to interface with the Google Fonts api. It just needs to be installed, and then included in the gatsby-config.js file.
* __Re-initialising__ If something happens (*cough OneDrive *cough) and your node_modules folder gets messed up, you can delete it and the package-logck.json file, then run "npm install" to re-initialise the site back to a working state.
* __Linebreaks in JSON__ If text in a JSON file needs a line break when rendered in HTML, use the '\n' in the JSON file, and then style the paragraph in CSS with the "white-space: pre-line;" selector.
* __Masonry Layouts__ Not yet fully implemented in most browsers, there are ways of doing it. Once is to use a javascript library (masonry-layout), another is to sort of fake it with CSS. Guide <a href="https://hackernoon.com/how-to-build-a-masonry-layout-using-css" target="_blank">here</a>
* __Gatsby Babel Warnings__ At time of writing (Oct 2023), Gatsby uses the babel-plugin-lodash plugin which by default uses an outdated version of @babel/types. This needs to be overwritten in the package.json file with the following:
```
{
   // [...]
  "overrides": {
    "babel-plugin-lodash": {
      "@babel/types": "~7.20.0"
    }
  }
}
```
NB: Only do this if you get a deprecation warning for the isModuleDeclatation => isImportOrExportDeclaration during develop/build compile.
* __Deploying a subfolder to GitHub Pages__ Follow instructions <a href="https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/" target="_blank">here</a>.

## Site Asset Credits:
Pie icon:
Pie by rendicon from <a href="https://thenounproject.com/browse/icons/term/pie/" target="_blank" title="Pie Icons">Noun Project</a> (CC BY 3.0)

Bread icon:
Bread by DPIcons from <a href="https://thenounproject.com/browse/icons/term/bread/" target="_blank" title="Bread Icons">Noun Project</a> (CC BY 3.0)

Croissant icon:
Croissant by James Smith from <a href="https://thenounproject.com/browse/icons/term/croissant/" target="_blank" title="Croissant Icons">Noun Project</a> (CC BY 3.0)

Bread:
Photo by <a href="https://unsplash.com/@moniqa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Monika Grabkowska</a> on <a href="https://unsplash.com/photos/nVoDL1YDWRE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Macarons:
Photo by <a href="https://unsplash.com/@serioja?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Serghei Savchiuc</a> on <a href="https://unsplash.com/photos/Qaruw62_kmM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Barrista: 
Photo by <a href="https://unsplash.com/@ekashoot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ekaterina Tyapkina</a> on <a href="https://unsplash.com/photos/b5kN9ClBRNU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Café Bakery:
Photo by <a href="https://unsplash.com/@jonathanborba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonathan Borba</a> on <a href="https://unsplash.com/photos/_Gd1biLbIU0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Busy Café:
Photo by <a href="https://unsplash.com/@dearjamie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jamie Hagan</a> on <a href="https://unsplash.com/photos/e7mg1NUk4FI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Croissants:
Photo by <a href="https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mae Mu</a> on <a href="https://unsplash.com/photos/m9pzwmxm2rk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Tray of croissants:
Photo by <a href="https://unsplash.com/@sergich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sergio Arze</a> on <a href="https://unsplash.com/photos/eH9_kZ92LWQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  
  
Bakery Window:
Photo by <a href="https://unsplash.com/@blsnki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yeh Xintong</a> on <a href="https://unsplash.com/photos/go3DT3PpIw4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Kneading Dough:
Photo by <a href="https://unsplash.com/@kiboka?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadya Spetnitskaya</a> on <a href="https://unsplash.com/photos/tOYiQxF9-Ys?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Bread border:
Photo by <a href="https://unsplash.com/@mitifotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Miti</a> on <a href="https://unsplash.com/photos/qYreP9QOdrk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Cinnamon Scrolls:
Photo by <a href="https://unsplash.com/@benostein?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Stein</a> on <a href="https://unsplash.com/photos/r41HIB6Rrpk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Raspberry Crumble:
Photo by <a href="https://unsplash.com/@we_the_royal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Duncan Kidd</a> on <a href="https://unsplash.com/photos/oAr1OeL14zs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Choc Chip Cookies:
Photo by <a href="https://unsplash.com/@foodess?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Food Photographer | Jennifer Pallian</a> on <a href="https://unsplash.com/photos/OfdDiqx8Cz8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Antipasto Platter:
Photo by <a href="https://unsplash.com/@dbtownsend?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David B Townsend</a> on <a href="https://unsplash.com/photos/VT9uj4FbQSE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Eclairs with Raspberries: 
Photo by <a href="https://unsplash.com/@dilja96?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Diliara Garifullina</a> on <a href="https://unsplash.com/photos/1oH1Xhtfxos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Antipasto spread:
Photo by <a href="https://unsplash.com/@dilja96?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Diliara Garifullina</a> on <a href="https://unsplash.com/photos/1oH1Xhtfxos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Fruit Platter:
Photo by <a href="https://unsplash.com/@naveed28?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Naveed Pervaiz</a> on <a href="https://unsplash.com/photos/IlnF2g_3tpY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Microphone in club:
Photo by <a href="https://unsplash.com/@brunocervera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">BRUNO CERVERA</a> on <a href="https://unsplash.com/photos/Gi6-m_t_W-E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Girl at beach:
Photo by <a href="https://unsplash.com/@fuuj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fuu J</a> on <a href="https://unsplash.com/photos/r2nJPbEYuSQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Apple Pie:
Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/photos/Q-ZdlPqWUjU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
High Tea:
Photo by <a href="https://unsplash.com/@ilumire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jelleke Vanooteghem</a> on <a href="https://unsplash.com/photos/qfRsevOtQXE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Coffee:
Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/photos/6VhPY27jdps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Book Signing:
Photo by <a href="https://unsplash.com/@diskander?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Iskander</a> on <a href="https://unsplash.com/photos/8hFiT80X-6o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

