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
LocalCSS Components\TreeView\treertl
SharedCSS fa_animations

LocalJS Shared\JS\ElementBlocker,Shared\JS\Utility,Shared\JS\Menu
LocalJS Shared\JS\YQuery
LocalJS Shared\JS\Snackbar
LocalJS Shared\JS\Modal
LocalJS Components\TreeView\tree
LocalJS Components\TreeView\treeitem
LocalJS Components\TreeView\treeitemclick
LocalJS Components\TreeView\YTree

AppendLocalHTMLToRegion Index,Snackbar,Shared\HTML\Snackbar
AppendLocalHTMLToRegion Index,Modal,Shared\HTML\Modal
AppendLocalHTMLToRegion Index,Modal,Components\TreeView\tree

Html Index,Index

Render Index