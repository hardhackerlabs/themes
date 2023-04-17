function getTheme(name, colorConfig) {
  const { originColors, colors } = colorConfig;

  return {
    name,
    semanticHighlighting: true,
    colors: {
      "focusBorder": colors.transparent,
      "progressBar.background": colors.themePrimary,

      "titleBar.activeBackground": colors.background,
      "titleBar.activeForeground": colors.text,
      "titleBar.inactiveBackground": colors.background,
      "titleBar.inactiveForeground": colors.text,

      "editor.background": colors.background,
      "editor.foreground": colors.text,
      "editorInlayHint.foreground": colors.secondaryText,
      "editorInlayHint.background": "#FFFFFF0F",

      "activityBarBadge.background": colors.themePrimary,
      "activityBarBadge.foreground": colors.black,
      "activityBar.background": colors.background,
      "activityBar.foreground": colors.themePrimary,
      "activityBar.activeBorder": colors.themePrimary,
      "activityBar.inactiveForeground": colors.secondaryText,

      "sideBarTitle.foreground": colors.text,
      "sideBar.background": colors.background,
      "sideBar.foreground": colors.text,
      "sideBarSectionHeader.background": colors.transparent,
      // "list.activeSelectionForeground": colors.themePrimary,
      "list.activeSelectionBackground": colors.highlightBackground,
      "list.hoverBackground": colors.highlightBackground,
      "list.highlightForeground": colors.themePrimary,
      "list.inactiveSelectionForeground": colors.themePrimary,
      "list.inactiveSelectionBackground": colors.highlightBackground,
      "listFilterWidget.shadow": colors.themePrimary,
      // "list.hoverForeground": colors.themePrimary,

      "tab.activeBackground": colors.background,
      "tab.inactiveBackground": colors.background,
      "tab.activeBorder": colors.themePrimary,
      "editorGroupHeader.tabsBackground": colors.background,

      "statusBar.background": colors.background,
      "statusBar.foreground": colors.text,
      "statusBar.debuggingBackground": colors.yellow,
      "statusBar.debuggingForeground": colors.black,
      "statusBar.noFolderBackground": colors.black,
      "statusBar.noFolderForeground": colors.white,
      "statusBarItem.remoteBackground": colors.themePrimary,
      "statusBarItem.activeBackground": colors.highlightBackground,
      "statusBarItem.hoverBackground": colors.highlightBackground,
      "statusBarItem.prominentBackground": colors.black,
      "statusBarItem.prominentHoverBackground": colors.black,
      // "statusBarItem.remoteForeground": colors.black,

      "editor.selectionBackground": colors.highlightBackground,
      "editor.wordHighlightBackground": "#FFFFFF1F",
      "editor.lineHighlightBackground": "#FFFFFF0F",
      "editor.lineHighlightBorder": colors.transparent,
      "editor.hoverHighlightBackground": originColors.blue.setAlpha(0.3).toHex8String(),
      "editor.findMatchBackground": originColors.cyan.setAlpha(0.3).toHex8String(),
      "editor.findMatchBorder": originColors.cyan.setAlpha(0.8).toHex8String(),
      "editor.findMatchHighlightBackground": originColors.cyan.setAlpha(0.3).toHex8String(),
      "editor.findRangeHighlightBackground": originColors.cyan.setAlpha(0.3).toHex8String(),

      "terminal.ansiBrightBlack": colors.brightBlack,
      "terminal.ansiBrightBlue": colors.blue,
      "terminal.ansiBrightCyan": colors.cyan,
      "terminal.ansiBrightGreen": colors.green,
      "terminal.ansiBrightMagenta": colors.purple,
      "terminal.ansiBrightRed": colors.red,
      "terminal.ansiBrightWhite": colors.white,
      "terminal.ansiBrightYellow": colors.yellow,
      "terminal.ansiBlack": colors.black,
      "terminal.ansiBlue": colors.blue,
      "terminal.ansiCyan": colors.cyan,
      "terminal.ansiGreen": colors.green,
      "terminal.ansiMagenta": colors.purple,
      "terminal.ansiRed": colors.red,
      "terminal.ansiWhite": colors.white,
      "terminal.ansiYellow": colors.yellow,

      "notificationCenter.border": colors.transparent,
      "notificationCenterHeader.foreground": colors.white,
      "notificationCenterHeader.background": colors.themePrimary,
      "notificationToast.border": colors.background,
      "notifications.foreground": colors.text,
      "notifications.background": colors.background,
      "notifications.border": colors.highlightBackground,
      "notificationLink.foreground": colors.text,

      "panel.background": colors.background,
      "panel.border": colors.themePrimary,
      "panelTitle.activeBorder": colors.themePrimary,
      "panelTitle.activeForeground": colors.themePrimary,
      "panelTitle.inactiveForeground": colors.text,

      "button.background": colors.themePrimary,
      "button.foreground": colors.text,
      "button.hoverBackground": colors.themePrimary,
      "button.secondaryBackground": colors.brightBlack,
      "button.secondaryForeground": colors.themePrimary,
      "button.secondaryHoverBackground": colors.brightBlack,
      "checkbox.background": colors.background,
      "checkbox.foreground": colors.text,
      "checkbox.border": colors.themePrimary,
      "checkbox.selectBackground": colors.themePrimary,

      "dropdown.background": colors.highlightBackground,
      "dropdown.listBackground": colors.highlightBackground,
      "dropdown.border": colors.themePrimary,
      "dropdown.foreground": colors.text,

      "keybindingLabel.bottomBorder": colors.themePrimary,

      "scrollbar.shadow": colors.brightBlack,
      "scrollbarSlider.background": colors.highlightBackground,
      "scrollbarSlider.hoverBackground": colors.brightBlack,
      "scrollbarSlider.activeBackground": colors.themePrimary,

      // "widget.shadow": colors.themePrimary,
      "editorWidget.background": colors.background,
      "editorWidget.border": colors.themePrimary,
      "editorHoverWidget.background": colors.background,
      "editorHoverWidget.foreground": colors.text,
      "editorHoverWidget.border": colors.themePrimary,
      "editorSuggestWidget.background": colors.background,
      "editorSuggestWidget.border": colors.themePrimary,
      "editorSuggestWidget.foreground": colors.text,
      "editorSuggestWidget.highlightForeground": colors.themePrimary,
      "editorSuggestWidget.focusHighlightForeground": colors.themePrimary,
      "editorSuggestWidget.selectedBackground": colors.brightBlack,
      "editorSuggestWidget.selectedForeground": colors.text,
      "editorLink.activeForeground": colors.purple,
      "editorCodeLens.foreground": originColors.purple.setAlpha(0.3).toHex8String(),

      "pickerGroup.border": colors.themePrimary,
		  "pickerGroup.foreground": colors.themePrimary,

      "input.background": colors.background,
      "input.border": colors.themePrimary,
      "input.foreground": colors.text,
      "input.placeholderForeground": colors.secondaryText,
      "inputOption.activeBorder": colors.themePrimary,
      "inputValidation.errorBackground": colors.background,
      "inputValidation.errorBorder": colors.purple,
      "inputValidation.infoBackground": colors.background,
      "inputValidation.infoBorder": colors.background,
      "inputValidation.warningBackground": colors.background,
      "inputValidation.warningBorder": colors.purple,
      "inputOption.activeBorder": colors.transparent,
      "inputOption.activeBackground": colors.themePrimary,
      "inputOption.activeForeground": colors.black,

      "peekView.border": colors.themePrimary,
      "peekViewEditor.background": colors.background,
      "peekViewEditor.matchHighlightBackground": colors.transparent,
      "peekViewEditorGutter.background": colors.highlightBackground,
      "peekViewResult.background": colors.highlightBackground,
      "peekViewResult.fileForeground": colors.text,
      "peekViewResult.lineForeground": colors.text,
      "peekViewResult.matchHighlightBackground": colors.transparent,
      "peekViewResult.selectionBackground": colors.background,
      "peekViewResult.selectionForeground": colors.themePrimary,
      "peekViewTitle.background": colors.highlightBackground,
      "peekViewTitleDescription.foreground": colors.secondaryText,
      "peekViewTitleLabel.foreground": colors.themePrimary,

      "debugIcon.breakpointForeground": colors.red,
      "debugIcon.breakpointDisabledForeground": colors.comment,
      "debugIcon.breakpointUnverifiedForeground": colors.yellow,
      "debugIcon.breakpointCurrentStackframeForeground": colors.yellow,
      "debugIcon.breakpointStackframeForeground": colors.comment,

      "debugIcon.startForeground": colors.green,
      "debugIcon.continueForeground": colors.yellow,
      "debugIcon.disconnectForeground": colors.yellow,
      "debugIcon.pauseForeground": colors.yellow,
      "debugIcon.restartForeground": colors.green,
      "debugIcon.stepBackForeground": colors.yellow,
      "debugIcon.stepIntoForeground": colors.yellow,
      "debugIcon.stepOutForeground": colors.yellow,
      "debugIcon.stepOverForeground": colors.yellow,
      "debugIcon.stopForeground": colors.red,
      "debugToolBar.background": colors.background,
      // https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors
      "debugExceptionWidget.background": colors.background,
      "debugExceptionWidget.border": colors.themePrimary,
      "debugConsole.infoForeground": colors.text,
      "debugConsole.warningForeground": colors.yellow,
      "debugConsole.errorForeground": colors.red,
      "debugConsole.sourceForeground": colors.themePrimary,
      "debugConsoleInputIcon.foreground": colors.cyan,

      "gitDecoration.modifiedResourceForeground": colors.yellow, // Color for modified git resources.
      "gitDecoration.deletedResourceForeground": colors.red, // Color for deleted git resources.
      "gitDecoration.untrackedResourceForeground": colors.green, // Color for untracked git resources.
      "gitDecoration.ignoredResourceForeground": colors.secondaryText, // Color for ignored git resources.
      "gitDecoration.conflictingResourceForeground": colors.orange, // Color for conflicting git resources.

      "textLink.activeForeground": colors.purple,
      "textLink.foreground": colors.purple,
      "textPreformat.foreground": colors.themePrimary,

      "merge.border": colors.transparent,
      "merge.commonContentBackground": originColors.brightBlack.setAlpha(0.2).toHex8String(),
      "merge.commonHeaderBackground": originColors.brightBlack.toHex8String(),
      "merge.currentContentBackground": originColors.green.setAlpha(0.2).toHex8String(),
      "merge.currentHeaderBackground": originColors.green.toHex8String(),
      "merge.incomingContentBackground": originColors.blue.setAlpha(0.2).toHex8String(),
      "merge.incomingHeaderBackground": originColors.blue.toHex8String(),

      "diffEditor.insertedTextBackground": originColors.green.setAlpha(0.2).toHex8String(),
      "diffEditor.removedTextBackground": originColors.red.setAlpha(0.2).toHex8String(),
      "diffEditor.border": colors.highlightBackground,
      "diffEditorOverview.insertedForeground": originColors.green.setAlpha(0.5).toHex8String(),
      "diffEditorOverview.removedForeground": originColors.red.setAlpha(0.5).toHex8String(),

      "settings.modifiedItemIndicator": colors.themePrimary,

      "editorBracketHighlight.foreground1": colors.text,
      "editorBracketHighlight.foreground2": colors.yellow,
      "editorBracketHighlight.foreground3": colors.red,
      "editorBracketHighlight.foreground4": colors.text,
      "editorBracketHighlight.foreground5": colors.yellow,
      "editorBracketHighlight.foreground5": colors.red,
      
    },
    tokenColors: [
      {
        name: "Comment",
        scope: [
          "comment",
          "punctuation.definition.comment"
        ],
        settings: {
          fontStyle: "italic",
          foreground: colors.comment,
        }
      },
      {
        name: "Variables",
        scope: [
          "variable",
          "string constant.other.placeholder"
        ],
        settings: {
          foreground: colors.variable,
        }
      },
      {
        name: "Colors",
        scope: [
          "constant.other.color"
        ],
        settings: {
          foreground: colors.text,
        }
      },
      {
        name: "Invalid",
        scope: [
          "invalid",
          "invalid.illegal"
        ],
        settings: {
          foreground: colors.highlight,
        }
      },
      {
        name: "Keyword",
        scope: [
          "keyword",
          "keyword.control",
          "keyword.other",
        ],
        settings: {
          foreground: colors.keyword,
        }
      },
      {
        name: "Storage",
        scope: [
          "storage.type",
          "storage.modifier",
          "storage.control",
        ],
        settings: {
          foreground: colors.purple,
        }
      },
      {
        name: "Operator, Misc",
        scope: [
          "constant.other.color",
          "punctuation",
          "meta.tag",
          "punctuation.definition.tag",
          "punctuation.separator.inheritance.php",
          "punctuation.definition.tag.html",
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
          "punctuation.section.embedded",
          "keyword.other.template",
          "keyword.other.substitution"
        ],
        settings: {
          foreground: colors.operator,
        }
      },
      {
        name: "Tag",
        scope: [
          "entity.name.tag",
          "meta.tag.sgml",
          "markup.deleted.git_gutter"
        ],
        settings: {
          foreground: colors.class,
        }
      },
      {
        name: "Function, Special Method",
        scope: [
          "entity.name.function",
          "meta.function-call",
          "variable.function",
          "support.function",
          "keyword.other.special-method"
        ],
        settings: {
          foreground: colors.method,
        }
      },
      {
        name: "Block Level Variables",
        scope: [
          "meta.block variable.other"
        ],
        settings: {
          foreground: colors.class,
        }
      },
      {
        name: "Other Variable, String Link",
        scope: [
          "support.other.variable",
          "string.other.link"
        ],
        settings: {
          foreground: colors.class,
        }
      },
      {
        name: "Number, Constant, Function Argument, Tag Attribute, Embedded",
        scope: [
          "constant.numeric",
          "constant.language",
          "support.constant",
          "constant.character",
          "constant.escape",
          "variable.parameter",
          "keyword.other.unit"
        ],
        settings: {
          foreground: colors.number,
        }
      },
      {
        name: "String, Symbols, Inherited Class, Markup Heading",
        scope: [
          "string",
          "constant.other.symbol",
          "constant.other.key",
          "entity.other.inherited-class",
          "markup.heading",
          "markup.inserted.git_gutter",
          "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
        ],
        settings: {
          foreground: colors.string,
        }
      },
      {
        name: "Class, Support",
        scope: [
          "entity.name",
          "support.type",
          "support.class",
          "support.other.namespace.use.php",
          "meta.use.php",
          "support.other.namespace.php",
          "markup.changed.git_gutter",
          "support.type.sys-types"
        ],
        settings: {
          foreground: colors.class,
        }
      },
      {
        name: "Entity Types",
        scope: [
          "support.type"
        ],
        settings: {
          foreground: colors.class,
        }
      },
      {
        name: "CSS Class and Support",
        scope: [
          "source.css support.type.property-name",
          "source.sass support.type.property-name",
          "source.scss support.type.property-name",
          "source.less support.type.property-name",
          "source.stylus support.type.property-name",
          "source.postcss support.type.property-name"
        ],
        settings: {
          foreground: colors.class,
        }
      },
      {
        name: "Sub-methods",
        scope: [
          "entity.name.module.js",
          "variable.import.parameter.js",
          "variable.other.class.js"
        ],
        settings: {
          foreground: colors.highlight,
        }
      },
      {
        name: "Language methods",
        scope: [
          "variable.language"
        ],
        settings: {
          fontStyle: "italic",
          foreground: colors.highlight,
        }
      },
      {
        name: "entity.name.method.js",
        scope: [
          "entity.name.method.js"
        ],
        settings: {
          fontStyle: "italic",
          foreground: colors.method,
        }
      },
      {
        name: "meta.method.js",
        scope: [
          "meta.class-method.js entity.name.function.js",
          "variable.function.constructor"
        ],
        settings: {
          foreground: colors.method,
        }
      },
      {
        name: "Attributes",
        scope: [
          "entity.other.attribute-name"
        ],
        settings: {
          foreground: colors.keyword,
        }
      },
      {
        name: "HTML Attributes",
        scope: [
          "text.html.basic entity.other.attribute-name.html",
          "text.html.basic entity.other.attribute-name"
        ],
        settings: {
          fontStyle: "italic",
          foreground: colors.class,
        }
      },
      {
        name: "CSS Classes",
        scope: [
          "entity.other.attribute-name.class"
        ],
        settings: {
          foreground: colors.class,
        }
      },
      {
        name: "CSS ID's",
        scope: [
          "source.sass keyword.control"
        ],
        settings: {
          foreground: colors.method,
        }
      },
      {
        name: "Inserted",
        scope: [
          "markup.inserted"
        ],
        settings: {
          foreground: colors.text,
        }
      },
      {
        name: "Deleted",
        scope: [
          "markup.deleted"
        ],
        settings: {
          foreground: colors.highlight,
        }
      },
      {
        name: "Changed",
        scope: [
          "markup.changed"
        ],
        settings: {
          foreground: colors.keyword,
        }
      },
      {
        name: "Regular Expressions",
        scope: [
          "string.regexp"
        ],
        settings: {
          foreground: colors.class,
        }
      },
      {
        name: "Escape Characters",
        scope: [
          "constant.character.escape"
        ],
        settings: {
          foreground: colors.class,
        }
      },
      {
        name: "URL",
        scope: [
          "*url*",
          "*link*",
          "*uri*"
        ],
        settings: {
          fontStyle: "underline"
        }
      },
      {
        name: "Decorators",
        scope: [
          "tag.decorator.js entity.name.tag.js",
          "tag.decorator.js punctuation.definition.tag.js"
        ],
        settings: {
          fontStyle: "italic",
          foreground: colors.method,
        }
      },
      {
        name: "ES7 Bind Operator",
        scope: [
          "source.js constant.other.object.key.js string.unquoted.label.js"
        ],
        settings: {
          fontStyle: "italic",
          foreground: colors.highlight,
        }
      },
      {
        name: "JSON Key - Level 0",
        scope: [
          "source.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
          foreground: colors.purple,
        }
      },
      {
        name: "JSON Key - Level 1",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
          foreground: colors.cyan,
        }
      },
      {
        name: "JSON Key - Level 2",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
          foreground: colors.yellow,
        }
      },
      {
        name: "JSON Key - Level 3",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
          foreground: colors.blue,
        }
      },
      {
        name: "JSON Key - Level 4",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
          foreground: colors.red,
        }
      },
      {
        name: "JSON Key - Level 5",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
          foreground: colors.method,
        }
      },
      {
        name: "JSON Key - Level 6",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
          foreground: colors.class,
        }
      },
      {
        name: "JSON Key - Level 7",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
          foreground: colors.keyword,
        }
      },
      {
        name: "JSON Key - Level 8",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        settings: {
          foreground: colors.text,
        }
      },
      {
        name: "Markdown - Plain",
        scope: [
          "text.html.markdown",
          "punctuation.definition.list_item.markdown"
        ],
        settings: {
          foreground: colors.text,
        }
      },
      {
        name: "Markdown - Markup Raw Inline",
        scope: [
          "text.html.markdown markup.inline.raw.markdown"
        ],
        settings: {
          foreground: colors.keyword,
        }
      },
      {
        name: "Markdown - Markup Raw Inline Punctuation",
        scope: [
          "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
        ],
        settings: {
          foreground: "#65737E"
        }
      },
      {
        name: "Markdown - Heading",
        scope: [
          "markdown.heading",
          "markup.heading | markup.heading entity.name",
          "markup.heading.markdown punctuation.definition.heading.markdown"
        ],
        settings: {
          foreground: colors.themePrimary,
        }
      },
      {
        name: "Markup - Italic",
        scope: [
          "markup.italic"
        ],
        settings: {
          fontStyle: "italic",
          foreground: colors.class,
        }
      },
      {
        name: "Markup - Bold",
        scope: [
          "markup.bold",
          "markup.bold string"
        ],
        settings: {
          fontStyle: "bold",
          foreground: colors.class,
        }
      },
      {
        name: "Markup - Bold-Italic",
        scope: [
          "markup.bold markup.italic",
          "markup.italic markup.bold",
          "markup.quote markup.bold",
          "markup.bold markup.italic string",
          "markup.italic markup.bold string",
          "markup.quote markup.bold string"
        ],
        settings: {
          fontStyle: "bold",
          foreground: colors.class,
        }
      },
      {
        name: "Markup - Underline",
        scope: [
          "markup.underline"
        ],
        settings: {
          fontStyle: "underline",
        }
      },
      {
        name: "Markdown - Blockquote",
        scope: [
          "markup.quote punctuation.definition.blockquote.markdown"
        ],
        settings: {
          foreground: colors.purple,
        }
      },
      {
        name: "Markup - Quote",
        scope: [
          "markup.quote"
        ],
        settings: {
          fontStyle: "italic",
          foreground: colors.purple,
        }
      },
      {
        name: "Markdown - Link",
        scope: [
          "string.other.link.title.markdown"
        ],
        settings: {
          foreground: colors.method,
        }
      },
      {
        name: "Markdown - Link Description",
        scope: [
          "string.other.link.description.title.markdown"
        ],
        settings: {
          foreground: colors.keyword,
        }
      },
      {
        name: "Markdown - Link Anchor",
        scope: [
          "constant.other.reference.link.markdown"
        ],
        settings: {
          foreground: colors.class,
        }
      },
      {
        name: "Markup - Raw Block",
        scope: [
          "markup.raw.block"
        ],
        settings: {
          foreground: colors.keyword,
        }
      },
      {
        name: "Markdown - Raw Block Fenced",
        scope: [
          "markup.raw.block.fenced.markdown"
        ],
        settings: {
          foreground: "#00000050"
        }
      },
      {
        name: "Markdown - Fenced Bode Block",
        scope: [
          "punctuation.definition.fenced.markdown"
        ],
        settings: {
          foreground: "#00000050"
        }
      },
      {
        name: "Markdown - Fenced Bode Block Variable",
        scope: [
          "markup.raw.block.fenced.markdown",
          "variable.language.fenced.markdown",
          "punctuation.section.class.end"
        ],
        settings: {
          foreground: colors.text,
        }
      },
      {
        name: "Markdown - Fenced Language",
        scope: [
          "variable.language.fenced.markdown"
        ],
        settings: {
          foreground: "#65737E"
        }
      },
      {
        name: "Markdown - Separator",
        scope: [
          "meta.separator"
        ],
        settings: {
          fontStyle: "bold",
          foreground: colors.secondaryText,
        }
      },
      {
        "name": "[MARKDOWN] - Color for Text inside inline code block `code`",
        "scope": "markup.inline.raw.string.markdown",
        "settings": {
          "foreground": colors.green,
        }
      },
      {
        "name": "[MARKDOWN] - Color for Quote Punctuation",
        "scope": "punctuation.definition.quote.begin.markdown",
        "settings": {
          "foreground": colors.yellow,
        }
      },
      {
        "name": "[MARKDOWN] - Color for Lists",
        "scope": [
          "beginning.punctuation.definition.list.markdown",
          "punctuation.definition.list.begin.markdown",
        ],
        "settings": {
          "foreground": colors.themePrimary,
        }
      },
      {
        "name": "[MARKDOWN] - Color for code block language",
        "scope": "fenced_code.block.language.markdown",
        "settings": {
          "foreground": colors.secondaryText,
        }
      },
      {
        "name": "[MARKDOWN] - Color for code block punctuation",
        "scope": "punctuation.definition.markdown",
        "settings": {
          "foreground": colors.green,
        }
      },
      {
        name: "Markup - Table",
        scope: [
          "markup.table"
        ],
        settings: {
          foreground: colors.text,
        }
      },
      {
        name: "[CSS] - Punctuation",
        scope: [
          "meta.selector.css punctuation",
          "keyword.control.at-rule.media.css punctuation",
          "meta.at-rule.media.header.css keyword.control",
        ],
        settings: {
          foreground: colors.red,
        }
      },
      {
        name: "[JS, TS] - Storage.type",
        scope: [
          "source.js storage.type",
          "source.ts storage.type",
          "source.js storage.modifier",
          "source.ts storage.modifier",
        ],
        settings: {
          foreground: colors.keyword,
        }
      }
    ]
  };
}

module.exports = getTheme;
