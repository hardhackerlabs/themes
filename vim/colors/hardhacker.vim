" Hard hacker theme for Vim
"
scriptencoding utf8
highlight clear

if exists("syntax_on")
  syntax reset
endif

set background=dark
let g:colors_name = "hardhacker"

if !(has('termguicolors') && &termguicolors) && !has('gui_running') && &t_Co != 256
  finish
endif

" Palette
"
let g:bg            = "#282433"
let g:fg            = "#eee9fc"
let g:selection     = "#3f3951"
let g:comment       = "#777383"
let g:red           = "#e965a5"
let g:green         = "#b1f2a7"
let g:yellow        = "#ebde76"
let g:blue          = "#b1baf4"
let g:purple        = "#e192ef"
let g:cyan          = "#b3f4f3"
let g:bright_black  = "#b3f4f3"

let g:bg256         = "235"
let g:fg256         = "255"
let g:selection256  = "238"
let g:comment256    = "243"
let g:red256        = "205" "212
let g:green256      = "157"
let g:yellow256     = "227"
let g:blue256       = "153"
let g:purple256     = "219"
let g:cyan256       = "123"

" Set environment style
"
execute 'hi Cursor ctermfg='.g:fg256.' ctermbg='.g:red256.' cterm=NONE guifg='.g:fg.' guibg='.g:red.' gui=NONE'
execute 'hi CursorLine ctermfg='.g:red256.' ctermbg='.g:selection256.' cterm=NONE guifg='.g:red.' guibg='.g:selection.' gui=NONE'

execute 'hi CursorColumn ctermfg=NONE ctermbg='.g:bg256.' cterm=NONE guifg=NONE guibg='.g:bg.' gui=NONE'
hi! link ColorColumn CursorColumn

execute 'hi LineNr ctermfg=102 ctermbg='.g:bg256.' cterm=NONE guifg=#84898c guibg='.g:bg.' gui=NONE'
execute 'hi Visual ctermfg=NONE ctermbg='.g:purple256.' cterm=NONE guifg=NONE guibg='.g:purple.' gui=NONE'
execute 'hi Directory ctermfg='.g:blue256.' ctermbg=NONE cterm=NONE guifg='.g:blue.' guibg=NONE gui=NONE'
execute 'hi IncSearch ctermfg='.g:bg256.' ctermbg='.g:yellow256.' cterm=NONE guifg='.g:bg.' guibg='.g:yellow.' gui=NONE'
execute 'hi Search ctermfg='.g:bg256.' ctermbg='.g:yellow256.' cterm=underline guifg='.g:bg.' guibg='.g:yellow.' gui=underline'
execute 'hi VertSplit ctermfg='.g:selection256.' ctermbg='.g:bg256.' cterm=NONE guifg='.g:selection.' guibg='.g:bg.' gui=NONE'
execute 'hi MatchParen ctermfg=180 ctermbg=NONE cterm=underline guifg=#dda790 guibg=NONE gui=underline'
execute 'hi StatusLine ctermfg='.g:fg256.' ctermbg='.g:selection256.' cterm=bold guifg='.g:fg.' guibg='.g:selection.' gui=bold'
execute 'hi StatusLineNC ctermfg='.g:fg256.' ctermbg='.g:bg256.' cterm=NONE guifg='.g:fg.' guibg='.g:bg.' gui=NONE'
execute 'hi Pmenu ctermfg='.g:fg256.' ctermbg='.g:selection256.' cterm=NONE guifg='.g:fg.' guibg='.g:selection.' gui=NONE'
execute 'hi PmenuSel ctermfg='.g:fg256.' ctermbg='.g:purple256.' cterm=NONE guifg='.g:fg.' guibg='.g:purple.' gui=NONE'
execute 'hi Folded ctermfg='.g:fg256.' ctermbg='.g:bg256.' cterm=NONE guifg='.g:fg.' guibg='.g:bg.' gui=NONE'

execute 'hi Normal ctermfg='.g:fg256.' ctermbg='.g:bg256.' cterm=NONE guifg='.g:fg.' guibg='.g:bg.' gui=NONE'
execute 'hi EndOfBuffer ctermfg='.g:selection256.' ctermbg='.g:bg256.' cterm=NONE guifg='.g:selection.' guibg='.g:bg.' gui=NONE'

" Set text highlight
"
execute 'hi HH_Red ctermfg='.g:red256.' ctermbg=NONE cterm=NONE guifg='.g:red.' guibg=NONE gui=NONE'
execute 'hi HH_Purple ctermfg='.g:purple256.' ctermbg=NONE cterm=NONE guifg='.g:purple.' guibg=NONE gui=NONE'
execute 'hi HH_Blue ctermfg='.g:blue256.' ctermbg=NONE cterm=NONE guifg='.g:blue.' guibg=NONE gui=NONE'
execute 'hi HH_Yellow ctermfg='.g:yellow256.' ctermbg=NONE cterm=NONE guifg='.g:yellow.' guibg=NONE gui=NONE'
execute 'hi HH_Cyan ctermfg='.g:cyan256.' ctermbg=NONE cterm=NONE guifg='.g:cyan.' guibg=NONE gui=NONE'
execute 'hi HH_Green ctermfg='.g:green256.' ctermbg=NONE cterm=NONE guifg='.g:green.' guibg=NONE gui=NONE'
execute 'hi HH_FG ctermfg='.g:fg256.' ctermbg=NONE cterm=NONE guifg='.g:fg.' guibg=NONE gui=NONE'

execute 'hi Comment ctermfg='.g:comment256.' ctermbg=NONE cterm=NONE guifg='.g:comment.' guibg=NONE gui=italic'
execute 'hi Underlined ctermfg=NONE ctermbg=NONE cterm=underline guifg=NONE guibg=NONE gui=underline'
execute 'hi Todo ctermfg='.g:yellow256.' ctermbg=NONE cterm=inverse,bold guifg='.g:yellow.' guibg=NONE gui=inverse,bold,italic'

execute 'hi ErrorMsg ctermfg=NONE ctermbg=NONE cterm=NONE guifg=NONE guibg=NONE gui=NONE'
execute 'hi Error ctermfg='.g:fg256.' ctermbg='.g:red256.' cterm=NONE guifg='.g:fg.' guibg='.g:red.' gui=NONE'

hi! link String     HH_Green
hi! link Constant   HH_Purple
hi! link Character  HH_Yellow
hi! link Number     HH_Yellow
hi! link Boolean    HH_Yellow
hi! link Float      HH_Yellow

hi! link Function   HH_Blue
hi! link Identifier HH_Blue

hi! link Exception    HH_Red
hi! link Repeat       HH_Red
hi! link Statement    HH_Red
hi! link Conditional  HH_Red
hi! link Label        HH_Red
hi! link Operator     HH_FG  
hi! link Keyword      HH_Red

hi! link Type       HH_Cyan
hi! link Delimiter  HH_FG

hi! link Tag            HH_Cyan
hi! link Define         HH_Purple
hi! link Special        HH_Purple
hi! link SpecialKey     HH_Purple
hi! link SpecialComment HH_Cyan
hi! link StorageClass   HH_Purple
hi! link Structure      HH_Purple
hi! link Macro          HH_Purple
hi! link PreCondit      HH_Purple
hi! link Include        HH_Red
hi! link Typedef        HH_Purple

hi! link DiffAdd        HH_Green
hi! link DiffDelete     HH_Red
hi! link DiffText       HH_FG
hi! link DiffChange     HH_Yellow
hi! link WarningMsg     HH_Yellow
hi! link PreProc        HH_Purple
hi! link PreCondit      HH_Purple
hi! link Title          HH_FG

" GO
"
hi! link goType                   HH_Purple
hi! link goBuiltins               HH_Red
hi! link goLabel                  HH_Red
hi! link goPredefinedIdentifiers  HH_Yellow
hi! link goImportString           HH_Red

" HTML
"
hi! link htmlTag          HH_Red
hi! link htmlEndTag       HH_Red
hi! link htmlTagName      HH_Red
hi! link htmlArg          HH_Blue
hi! link htmlSpecialChar  HH_Green

" JAVASCRIPT
"
hi! link javaScriptBraces   HH_FG
hi! link javaScriptNumber   Constant
hi! link javaScriptNull     Constant
hi! link javaScriptFunction Keyword

""" 'pangloss/vim-javascript'
hi! link jsArrowFunction           Operator
hi! link jsBuiltins                HH_Cyan
hi! link jsClassDefinition         HH_Cyan
hi! link jsClassMethodType         Keyword
hi! link jsDestructuringAssignment HH_Yellow
hi! link jsDocParam                HH_Yellow
hi! link jsDocTags                 Keyword
hi! link jsDocType                 Type
hi! link jsDocTypeBrackets         HH_Cyan
hi! link jsFuncArgOperator         Operator
hi! link jsFuncArgs                HH_Yellow
hi! link jsFunction                Keyword
hi! link jsNull                    Constant
hi! link jsObjectColon             HH_Red
hi! link jsSuper                   HH_Purple
hi! link jsTemplateBraces          Special
hi! link jsThis                    HH_Purple
hi! link jsUndefined               Constant

""" 'maxmellon/vim-jsx-pretty'
hi! link jsxTag             Keyword
hi! link jsxTagName         Keyword
hi! link jsxComponentName   Type
hi! link jsxCloseTag        Type
hi! link jsxAttrib          HH_Green
hi! link jsxCloseString     Identifier
hi! link jsxOpenPunct       Identifier

" YAML
"
hi! link yamlAnchor          HH_Purple
hi! link yamlPlainScalar     HH_Yellow
hi! link yamlAlias           HH_Green
hi! link yamlFlowCollection  HH_Purple
hi! link yamlNodeTag         HH_Purple
hi! link yamlBlockMappingKey HH_Cyan
hi! link yamlFlowIndicator   Delimiter

" CSS
"
hi! link cssNoise             HH_Blue
hi! link cssPseudoClassId     HH_Blue
hi! link cssAttrComma         Delimiter
hi! link cssAttrRegion        HH_Cyan
hi! link cssFunctionComma     Delimiter
hi! link cssProp              HH_Purple
hi! link cssUnitDecorators    HH_Blue
hi! link cssBraces            Delimiter
hi! link cssAttributeSelector HH_Green   
hi! link cssPseudoClass       HH_Blue
hi! link cssVendor            HH_Green

" Rust
"
hi! link rustCommentLineDoc Comment

" Vim
"
hi! link vimEnvVar             Constant
hi! link vimAutoEventList      Type
hi! link vimUserAttrbCmpltFunc Function
hi! link vimFunction           Function
hi! link vimOption             Type
hi! link vimSetMod             Keyword
hi! link vimAutoCmdSfxList     Type
hi! link vimSetSep             Delimiter
hi! link vimUserFunc           Function
hi! link vimHiBang             Keyword

" JSON
"
hi! link jsonKeywordMatch HH_Purple
hi! link jsonKeyword      HH_Purple

" Shell
"
hi! link shEscape     HH_Red
