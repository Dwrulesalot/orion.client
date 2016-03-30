/*******************************************************************************
 * @license
 * Copyright (c) 2014, 2016 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License v1.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 ******************************************************************************/
/* eslint-env amd */
define({
    'pluginName': 'Orion JavaScript Tool Support',
    'pluginDescription': 'This plug-in provides JavaScript tools support for Orion, like editing, search, navigation, validation, and code completion.',
	'error': 'Error',
	'warning' : 'Warning',
	'ignore' : 'Ignore',
	'ternContentAssist' : 'Tern JavaScript content assist',
	'ternProjectAssist': 'Tern project file content assist',
	'emptyFileTemplateDoc': 'Create new default contents for the .tern-project file',
	'prefCodeStyle':'Code Style',
	'prefBestPractices':'Best Practices',
	'prefPotentialProblems':'Potential Programming Problems',
	'sourceOutline' : 'Source Outline',
	'sourceOutlineTitle': 'JavaScript source outline',
	'contentAssist' : 'JavaScript content assist',
	'eslintValidator' : 'JavaScript Validator',
	'missingCurly' : 'Statements not enclosed in braces:',
	'curlyFixName': 'Enclose statement in braces',
	'noCaller' : 'Discouraged \'arguments.caller\' or \'arguments.callee\' use:',
	'noCommaDangle' : 'Trailing commas in object expressions:',
    'noCondAssign' : 'Assignments in conditional expressions:',
    'noConsole' : 'Discouraged console use in browser code:',
    'noConstantCondition' : 'Constant as conditional expression:',
    'noRegexSpaces' : 'Multiple spaces in regular expressions:',
    'noReservedKeys' : 'Reserved words used as property keys:',
    'noReservedKeysFixName': 'Surround key with quotes',
	'noEqeqeq' : 'Discouraged \'==\' use:',
	'noDebugger' : 'Discouraged \'debugger\' statement use:',
	'noDebuggerFixName': 'Remove statement',
	'noWith': 'Discouraged \'with\' statement use:',
	'noEval' : 'Discouraged \'eval()\' use:',
	'noImpliedEval' : 'Discouraged implied \'eval()\' use:',
	'noDupeKeys' : 'Duplicate object keys:',
	'noDupeKeysFixName': 'Rename key',
	'noDuplicateCaseFixName' : 'Rename case',
	'noIterator': 'Discouraged __iterator__ property use:',
	'noProto': 'Discouraged __proto__ property use:',
	'noUndefInit': 'Explicitly initializing variables to undefined:',
	'noundefinitFixName': 'Remove assignment',
	'useIsNaN' : 'NaN not compared with isNaN():',
	'useIsNanFixName': 'Use isNaN()',
	'missingDoc' : 'Missing JSDoc:',
	'missingDocFixName': 'Generate element JSDoc',
	'noUnreachable' : 'Unreachable code:',
	'noFallthrough' : 'Switch case fall-through:',
	'useBeforeDefine' : 'Member used before definition:',
	'noEmptyBlock' : 'Undocumented empty block:',
	'newParens' : 'Missing parentheses in constructor call:',
	'newparensFixName': 'Add parentheses',
	'noNewArray': 'Discouraged \'new Array()\':',
	'noNewArrayFixName': 'Convert to array literal',
	'noNewFunc': 'Discouraged \'new Function()\':',
	'noNewObject': 'Discouraged \'new Object()\':',
	'noNewWrappers': 'Discouraged wrapper objects:',
	'noNewWrappersLiteralFixName': 'Convert to literal',
	'noNewWrappersFixName': 'Remove \'new\' keyword',
	'noMixedSpacesAndTabs' : 'Mixed spaces and tabs:',
	'missingSemi' : 'Missing semicolons:',
	'unusedVars' : 'Unused variables:',
	'varRedecl' : 'Variable re-declarations:',
	'varShadow': 'Variable shadowing:',
	'undefMember' : 'Undeclared global reference:',
	'undefExpression' : 'Undeclared member expression reference:',
	'unnecessarySemis' : 'Unnecessary semicolons:',
	'unusedParams' : 'Unused parameters:',
	'unsupportedJSLint' : 'Unsupported environment directive:',
	'noThrowLiteral': 'Literal used in \'throw\':',
	'noselfassignFixName': 'Remove assignment',
	'noselfassignRenameFixName': 'Rename right hand variable',
	'missingNls': 'Non-externalized string literals (missing $NON-NLS$ tag):',
	'unnecessaryNls': 'Unnecessary $NON-NLS$ tags:',
	'generateDocName' : 'Generate Element Comment',
	'generateDocTooltip' : 'Generate a JSDoc-like comment for the selected JavaScript element',
	'renameElement' : 'Rename Element',
	'renameElementTooltip' : 'Rename the selected JavaScript element',
	'renameFailedTimedOut': 'Could not rename element - operation timed out',
	'openDeclName' : 'Open Declaration',
	'openDeclTooltip' : 'Open the declaration of the selected element',
	'openImplName' : 'Open Implementation',
	'openImplTooltip' : 'Open the implementation of the selected element',
	'noImplFound': 'No implementation was found',
	'implTimedOut': 'Could not compute implementation, the operation timed out',
	'workspaceRefsName': 'Workspace',
	'workspaceRefsTooltip': 'Show all references to the selection in the workspace',
	'projectRefsName': 'Project',
	'projectRefsTooltip': 'Show all references to the selection in the current project',
	'referencesMenuName': 'References',
	'referencesMenuTooltip': 'Show different kinds of references',
	'noDeclTimedOut': 'No declaration was found - operation timed out',
	'validTypeof': 'Invalid \'typeof\' comparison:',
	'noSparseArrays': 'Sparse array declarations:',
	'javascriptValidation': 'Javascript Validation',
	'jsHover': 'JavaScript Hover Provider',
	'removeExtraParensFixName': 'Remove gratuitous parentheses',
	'removeExtraSemiFixName': 'Remove extra semicolon',
	'addFallthroughCommentFixName': 'Add $FALLTHROUGH$ comment',
	'addEmptyCommentFixName': 'Comment empty block',
	'addESLintEnvFixName': 'Add to eslint-env directive',
	'addESLintGlobalFixName': 'Add to globals directive',
	'removeUnusedParamsFixName': 'Remove parameter',
	'commentCallbackFixName': 'Add @callback to function',
	'eqeqeqFixName': 'Update operator',
	'unreachableFixName': 'Remove unreachable code',
	'sparseArrayFixName': 'Convert to normal array',
	'semiFixName': 'Add missing \';\'',
	'radix': 'Missing radix parameter to parseInt():',
	'radixFixName': 'Add default radix',
	'unusedVarsUnusedFixName': 'Remove unused variable',
	'unreadVarsFixName': 'Remove unread variable',
	'unusedFuncDeclFixName': 'Remove unused function',
	'noCommaDangleFixName': 'Remove extra \',\'',
	'addBBreakFixName': 'Add break statement',
	'noShadowGlobals': 'Global shadowing:',
	'noThrowLiteralFixName': 'Change to Error' ,
	'missingNlsFixName': 'Add missing $NON-NLS$ tag',
	'unnecessaryNlsFixName': 'Remove unnecessary $NON-NLS$ tag',
	'funcProposalDescription': ' - The name of the function',
	'funcParamProposalDescription': ' - Function parameter',
	'eslintRuleProposalDescripton': ' - ESLint rule',
	'eslintEnvProposalDescription': ' - ESLint environment name',
	'onlineDocumentationProposalEntry': '\n\n[Online documentation](${0})',
	'keywordProposalDescription': ' - Keyword',
	'keywordHoverProposal': 'ECMAScript reserved keyword',
	'reloadPluginCmd': 'Reload',
	'reloadPluginCmdTooltip': 'Reload plug-in',
	'reloadAllPluginsCmd': 'Reload All',
	'reloadAllPluginsCmdTooltip': 'Reload all plug-ins',
	'templateHoverHeader': 'Template source code:\n\n',
	'templateAssistHeader': 'Templates',
	'keywordAssistHeader': 'Keywords',
	'ternPlugins': 'Tern Plug-ins',
	'noTernPluginsAvailable': 'No Tern plug-ins are currently loaded. This may be because you have not yet activated content assist in a JavaScript file. Tern plug-ins provide type information and code templates for JavaScript.',
	'noDeclFound': 'Could not find declaration',
	'declFoundInIndex': 'Declaration is not in your workspace. Found in \'${0}\' index.',
	'implFoundInIndex': 'Implementation is not in your workspace. Found in \'${0}\' index.',
	'deprecatedHoverTitle': 'Deprecated.', // the in-line title for deprecated memebers. The word is used alone in a sentence with no further punctuation
	'parametersHoverTitle': 'Parameters:', // the in-line title for the parameters section. The word is used alone in a sentence with no further punctuation
	'returnsHoverTitle': 'Returns:', // the in-line title for the returns section. The word is used alone in a sentence with no further punctuation
	'throwsHoverTitle': 'Throws:', // the in-line title for the throws section. The word is used alone in a sentence with no further punctuation
	'callbackHoverTitle': 'Callback:', // the in-line title for the callback section. The word is used alone in a sentence with no further punctuation
	'callbackText': 'This function is used as a callback',
	'sinceHoverTitle': 'Since:', // the in-line title for the since section. The word is used alone in a sentence with no further punctuation
	'seeAlsoHoverTitle': 'See Also:', // the in-line title for the since section. The word is used alone in a sentence with no further punctuation
	'openFileForTitle': 'Open file for', // the in-line title for the 'open file hover'. The sentence is used as-is and is followed only by a OS file path
	'failedToReadFile': 'Failed to read file: ${0}',
	'badInlineRename': 'In-line rename is only available for local variables and declarations.',
	'failedRename': 'In-line rename failed: ${0}',
	'declDisplayName': '${0} (start: ${1}, end: ${2})', // ${0} is the fully qualified file path of the decl, ${1} and ${2} are the numerical start and end offsets of the decl, respectively
	'declPotentialHeader': '**Potential matches:**\n',
	'typeofOptions': 'Typeof Options',
	
	//All refs
	'functionDecls': 'Function Declarations',
	'functionCalls': 'Function Calls',
	'propAccess': 'Property Access',
	'propWrite': 'Property Write',
	'varAccess': 'Variable Access',
	'varWrite': 'Variable Write',
	'varDecls': 'Variable Declarations',
	'regex': 'Regular Expressions',
	'strings': 'Strings',
	'blockComments': 'Block Comments',
	'lineComments': 'Line Comments',
	'partial': 'Partial Matches',
	'uncategorized': 'Uncategorized',
	'parseErrors': 'Parse Errors',
	'noFileContents': 'Could not compute references: failed to compute file text content',
	'noFileMeta': 'Could not compute references: failed to compute file metadata',
	'cannotComputeRefs': 'Cannot compute references: ${0}',
	'notAnIdentifier': 'Cannot compute references at the selected location: Location is not an identifier',
	'notHtmlOffset': 'Not a valid offset in HTML',
	'allProjectRefs': 'Finding all project references...',
	'allWorkspaceRefs': 'Finding all workspace references...',
	'refsFoundIn': 'References found in file: \'${0}\' (${1}/${2})',
	'addToTernCommand': 'Add to .tern-project',
	'addToTernCommandTooltip': 'The JavaScript tooling will always load the contents of this file to Tern',
	'accessor-pairs' : 'Getter and setter accessors not in pairs:',
	'no-control-regex' : 'Disallow control characters in regular expressions:',
	'no-duplicate-case' : 'Duplicate case:',
	'no-empty-character-class' : 'Disallow empty character classes:',
	'no-extra-boolean-cast' : 'Discourage redundant double negation:',
	'no-extra-parens' : 'Discourage redundant parentheses:',
	'no-invalid-regexp' : 'Invalid regular expressions:',
	'no-negated-in-lhs' : 'Disallow negated left operand of in operator:',
	'no-obj-calls' : 'Disallow global object as function calls:',
	'no-eq-null' : 'Disallow null comparisons:',
	'noeqnullFixName': 'Update operator',
	'no-else-return' : 'Unnecessary else after return:',
	'no-empty-label' : 'No empty labels:',
	'no-self-compare' : 'Disallow self compare:',
	'no-irregular-whitespace' : 'Disallow irregular whitespace:',
	'no-self-assign' : 'Disallow self assignment:',
	'noShadowFixName' : 'Rename in scope',
	'type-checked-consistent-return' : 'Discouraged inconsistent returns:',
	'check-tern-plugin' : 'Missing .tern-project plugins entry for environment directive:',
	'check-tern-project' : 'File should be added to .tern-project',
	'checkTernProjectFixName' : 'Add to .tern-project file',
	
	//Tern Plugins
	'ternDocPluginName': 'Doc Comments',
	'ternDocPluginDescription': 'Tern plug-in to parse and use JSDoc-like comments for inferencing',
	'orionAMQPPluginName': 'Orion AMQP',
	'orionAMQPPluginDescription': 'Plug-in that contributes type information and code templates for AMQP.',
	'orionAngularPluginName': 'AngularJS',
	'orionAngularPluginDescription': 'Plug-in that contributes type information and code templates for AngularJS.',
	'orionComponentPluginName': 'ComponentJS',
	'orionComponentPluginDescription': 'Plug-in that contributes type information and code templates for ComponentJS.',
	'orionExpressPluginName': 'Orion ExpressJS',
	'orionExpressPluginDescription': 'Plug-in that contributes type information and code templates for ExpressJS.',
	'orionMongoDBPluginName': 'Orion MongoDB',
	'orionMongoDBPluginDescription': 'Plug-in that contributes type information and code templates for MongoDB.',
	'orionMySQLPluginName': 'Orion MySQL',
	'orionMySQLPluginDescription': 'Plug-in that contributes type information and code templates for MySQL.',
	'orionNodePluginName': 'Orion Node.js',
	'orionNodePluginDescription': 'Plug-in that contributes type information and code templates for Node.js.',
	'orionPostgresPluginName': 'Orion PostgreSQL',
	'orionPostgresPluginDescription': 'Plug-in that contributes type information and code templates for PostgreSQL.',
	'orionRequirePluginName': 'Orion RequireJS',
	'orionRequirePluginDescription': 'Plug-in that contributes type information and code templates for RequireJS.',
	'orionRedisPluginName': 'Orion Redis',
	'orionRedisPluginDescription': 'Plug-in that contributes type information and code templates for Redis.',
	'ternPluginsPluginName': 'Orion Tern Plug-in Support',
	'ternPluginsPluginDescription': 'Plug-in that allows Orion to inspect and modify plug-ins running in Tern.',
	'openImplPluginName': 'Orion Open Implementation Support',
	'openImplPluginDescription': 'Plug-in that allows Orion to try to find implementation locations of elements rather than simple declarations',
	'htmlDepPluginName': 'Orion HTML Dependency Analysis',
	'htmlDepPluginDescription': 'Resolves script block and script tag dependencies',
	'findTypesName': 'Orion References Support',
	'findTypesDescription': 'Plug-in that provides expanded type-finding support in Orion',
	'eslintPluginName': 'ESLint plugin for Tern',
	'eslintPluginDescription': 'Provides ESLint linting for Tern',
	'jsdocPluginName': 'JSDoc types and completion support',
	'jsdocPluginDescription': 'Provides auto-complete and type information for JSDoc',
	'outlinerPluginName': 'JavaScript outlining',
	'outlinerPluginDescription': 'Provides JavaScript outlining',
	"fixesPluginName": "JavaScript quick fixes",
	"fixesPluginDescription": "Provides quick fixes for Orion ESLint problems",
	'browser': 'Browser global variables.',
	'node': 'Node.js global variables and Node.js scoping.',
	'commonjs': 'CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).',
	'worker': 'Web workers global variables.',
	'amd': 'Defines require() and define() as global variables as per the amd spec.',
	'mocha': 'Adds all of the Mocha testing global variables.',
	'jasmine': 'Adds all of the Jasmine testing global variables for version 1.3 and 2.0.',
	'jest': 'Jest global variables.',
	'phantomjs': 'PhantomJS global variables.',
	'protractor': 'Protractor global variables.',
	'qunit': 'QUnit global variables.',
	'jquery': 'jQuery global variables.',
	'prototypejs': 'Prototype.js global variables.',
	'shelljs': 'ShellJS global variables.',
	'meteor': 'Meteor global variables.',
	'mongo': 'MongoDB global variables.',
	'applescript': 'AppleScript global variables.',
	'nashorn': 'Java 8 Nashorn global variables.',
	'serviceworker': 'Service Worker global variables.',
	'embertest': 'Ember test helper globals.',
	'webextensions': 'WebExtensions globals.',
	'es6': 'Enable all ECMAScript 6 features except for modules.',
	'astPluginName': 'AST (acorn) plugin for Tern',
	'astPluginDescription': 'Provides AST (acorn) for Tern',
	
	// Other messages
	'unknownError': 'An unknown error occurred.',
	'failedDeleteRequest': 'Failed to delete file from Tern: ${0}',
	'failedReadRequest': 'Failed to read file into Tern: ${0}',
	'failedToComputeProposals': 'Failed to compute proposals',
	'failedToComputeProposalsNoServer': 'Failed to compute proposals, server not started',
	'failedToComputeDecl': 'Failed to compute declaration',
	'failedToComputeDeclNoServer': 'Failed to compute declaration, server not started',
	'failedToComputeImpl': 'Failed to compute implementation',
	'failedToComputeImplNoServer': 'Failed to compute implementation, server not started',
	'failedToComputeDoc': 'Failed to compute documentation',
	'failedToComputeDocNoServer': 'Failed to compute documentation, server not started',
	'failedToComputeOccurrences': 'Failed to compute occurrences',
	'failedToComputeOccurrencesNoServer': 'failed to compute occurrences, server not started',
	'failedGetInstalledPlugins': 'Failed to get installed plug-ins',
	'failedGetInstalledPluginsNoServer': 'Failed to get installed plug-ins, server not started',
	'failedGetInstalledDefs': 'Failed to get installed Tern definitions',
	'failedGetInstalledDefsNoServer': 'Failed to get installed Tern definitions, server not started',
	'failedInstallPlugins': 'Failed to install plug-ins',
	'failedInstallPluginsNoServer': 'Failed to install plug-ins, server not started',
	'failedRemovePlugins': 'Failed to remove plug-ins',
	'failedRemovePluginsNoServer': 'Failed to remove plug-ins, server not started',
	'failedEnablementPlugins': 'Failed to set enablement of plug-ins',
	'failedEnablementPluginsNoServer': 'Failed to set enablement of plug-ins, server not started',
	'failedGetEnvs': 'Failed to get contributed environments',
	'failedGetEnvsNoServer': 'Failed to get contributed environments, server not started',
	'failedRenameTern': 'Failed to compute rename changes',
	'failedRenameNoServer': 'Failed to compute rename changes, server not started',
	'failedRefs': 'Failed to find references',
	'failedRefsNoServer': 'failed to find references - server not started',
	'failedType': 'Failed to find type',
	'failedQuickfixesNoServer': 'Failed to compute quick fixes, server not started',
	'unknownRequest': 'The request \'${0}\' is unknown',
	'serverNotStarted': 'The server has not been started. Request: \'${0}\'',
	'eslintRuleEnableDisable': 'Enable or disable ESLint rule using the ```ruleid:0/1/2``` form.\n\nExample use:\n\n>```/* eslint semi:1, no-console:0, no-redeclare:2 */```',
	'eslintEnvDirective': 'Specify which environments are used in this JavaScript file.\n\nExample use:\n\n>```/* eslint-env amd, node, broswer */```',
	'eslintRuleEnable': 'Enable a given set of ESLint rules.\n\nExample use:\n\n>```/* eslint-enable semi, no-console, no-redeclare */```',
	'eslintRuleDisable': 'Disable a given set of ESLint rules.\n\nExample use:\n\n>```/* eslint-disable semi, no-console, no-redeclare */```',
	'failedToComputeProblems': 'Failed to compute ESLint problems/markers',
	'failedToComputeOutline': 'Failed to compute outline'
});
