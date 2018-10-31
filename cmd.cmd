Name Index

//For desktop & web
AppendToHead <style>@font-face {font-family: 'sans';src: url('fonts/sans.ttf');}</style>
AppendToHead <style>@font-face {font-family: 'FontAwesome';src: url('fonts/fontawesome.ttf');font-weight: normal;font-style: normal;}</style>

//For mobile
AppendToHead <style>@font-face {font-family: 'sans';src: url('file:///android_asset/fonts/sans.ttf');}</style>
AppendToHead <style>@font-face {font-family: 'FontAwesome';src: url('file:///android_asset/fonts/fontawesome.ttf');font-weight: normal;font-style: normal;}</style>

LocalCSSToEnd Shared\CSS\endStyle

LocalCSS Shared\CSS\fontawesome,Shared\CSS\w3,Shared\CSS\w3_rtl,Shared\CSS\style
LocalCSS Shared\CSS\Snackbar
SharedCSS fa_animations

LocalJS Shared\JS\ElementBlocker,Shared\JS\Utility,Shared\JS\Menu
LocalJS Shared\JS\YQuery
LocalJS Shared\JS\Snackbar
LocalJS Shared\JS\Modal

AppendLocalHTMLToRegion Index,Snackbar,Shared\HTML\Snackbar
AppendLocalHTMLToRegion Index,Modal,Shared\HTML\Modal

Html Index,Index

Render Index