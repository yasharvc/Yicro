Name Index

//For desktop & web
AppendToHead <style>@font-face {font-family: 'sans';src: url('@@fonts/sans.ttf');}</style>
AppendToHead <style>@font-face {font-family: 'FontAwesome';src: url('@@fonts/fontawesome.ttf');font-weight: normal;font-style: normal;}</style>

//For mobile
AppendToHead <style>@font-face {font-family: 'sans';src: url('file:///android_asset/fonts/sans.ttf');}</style>
AppendToHead <style>@font-face {font-family: 'FontAwesome';src: url('file:///android_asset/fonts/fontawesome.ttf');font-weight: normal;font-style: normal;}</style>

LocalCSSToEnd Shared\CSS\endStyle

LocalCSS Shared\CSS\fontawesome,Shared\CSS\w3,Shared\CSS\w3_metro,Shared\CSS\w3_win8,Shared\CSS\w3_rtl,Shared\CSS\style
LocalCSS Shared\CSS\Snackbar
LocalCSS Components\TreeView\treertl
LocalCSS Components\YSelect\Select
LocalCSS Components\Calendar\Calendar
SharedCSS fa_animations

LocalJS Shared\JS\ElementBlocker,Shared\JS\Utility,Shared\JS\Menu,Shared\JS\MiddleWareFunctions
LocalJS Shared\JS\YQuery
LocalJS Shared\JS\Snackbar
LocalJS Shared\JS\Modal
LocalJS Components\TreeView\tree
LocalJS Components\TreeView\treeitem
//LocalJS Components\TreeView\treeitemclick
LocalJS Components\TreeView\YTree
LocalJS Components\YSelect\YSelect
LocalJS Components\Calendar\BaseCalculator
LocalJS Components\Calendar\PersianCalendar
LocalJS Shared\JS\Controls\CreateControl
LocalJS Shared\JS\Controls\ControlFunctions

AppendLocalHTMLToRegion Index,Snackbar,Shared\HTML\Snackbar
//AppendLocalHTMLToRegion Index,Modal,Shared\HTML\Modal
AppendLocalHTMLToRegion Index,TreeView,Components\TreeView\tree
AppendLocalHTMLToRegion Index,Select,Components\YSelect\Select
AppendLocalHTMLToRegion Index,Calendar,Components\Calendar\Calendar
AppendLocalHTMLToRegion Index,RightMenu,Shared\HTML\RightMenu

LocalJS Shared\JS\TestData

Html Index,Index

Render Index