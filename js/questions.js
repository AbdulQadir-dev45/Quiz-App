const questions = {

  // ======================
  // HTML QUESTIONS
  // ======================
  html: {

    // ===== HTML LEVEL 1 =====
    1: [
      {
        question: "What does the HTML <abbr> tag represent?",
        options: ["Abbreviation", "Absolute", "Abstract", "Alphabet"],
        answer: 0
      },
      {
        question: "Which tag is used to embed audio?",
        options: ["<audio>", "<sound>", "<music>", "<playback>"],
        answer: 0
      },
      {
        question: "Which tag is used for emphasized text?",
        options: ["<em>", "<strong>", "<b>", "<i>"],
        answer: 0
      },
      {
        question: "Purpose of <small> tag?",
        options: [
          "To highlight text",
          "To show subscript",
          "To make text smaller",
          "To define code block"
        ],
        answer: 2
      },
      {
        question: "What does the <mark> tag indicate?",
        options: [
          "Reference link",
          "Highlighted text",
          "Important note",
          "Subscript"
        ],
        answer: 1
      },
      {
        question: "Which input type is used for email?",
        options: ["text", "email", "address", "mail"],
        answer: 1
      },
      {
        question: "Which tag is used for an ordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: 0
      },
      {
        question: "Which tag is used to embed video?",
        options: ["<video>", "<media>", "<mp4>", "<movie>"],
        answer: 0
      },
      {
        question: "Which tag defines navigation links?",
        options: ["<nav>", "<menu>", "<header>", "<section>"],
        answer: 0
      },
      {
        question: "Which HTML5 attribute makes a field mandatory?",
        options: ["required", "validate", "mandatory", "valuecheck"],
        answer: 0
      }
    ],

    // ===== HTML LEVEL 2 =====
    2: [
      {
        question: "Which attribute shows tooltip text on hover?",
        options: ["title", "desc", "info", "extra"],
        answer: 0
      },
      {
        question: "Which tag creates a line through text?",
        options: ["<s>", "<strike>", "<line>", "<text>"],
        answer: 0
      },
      {
        question: "What does the <blockquote> tag indicate?",
        options: [
          "Inline quote",
          "Bullet list",
          "Quoted text",
          "Code block"
        ],
        answer: 2
      },
      {
        question: "Which attribute sets max value for number input?",
        options: ["max", "maximum", "limit", "top"],
        answer: 0
      },
      {
        question: "Purpose of <figcaption> tag?",
        options: [
          "File navigation",
          "Figure caption",
          "Formatting citation",
          "Font config"
        ],
        answer: 1
      },
      {
        question: "What is the correct HTML5 doctype?",
        options: ["<HTML>", "<doctype>", "<!DOCTYPE html>", "<DOCTYPE HTML>"],
        answer: 2
      },
      {
        question: "Which tag is used to group footer content?",
        options: ["<section>", "<bottom>", "<footer>", "<end>"],
        answer: 2
      },
      {
        question: "Which attribute opens a link in a new tab?",
        options: ['target="_blank"', "newtab", "open", "_new"],
        answer: 0
      },
      {
        question: "Which tag is used to define a table row?",
        options: ["<tr>", "<td>", "<th>", "<table>"],
        answer: 0
      },
      {
        question: "Which tag defines a table header cell?",
        options: ["<th>", "<td>", "<tr>", "<thead>"],
        answer: 0
      },
      {
        question: "Which attribute is used to merge table columns?",
        options: ["colspan", "rowspan", "merge", "span"],
        answer: 0
      },
      {
        question: "Which semantic tag represents the main content?",
        options: ["<main>", "<content>", "<body>", "<section>"],
        answer: 0
      }
    ],

    // ===== HTML LEVEL 3 =====
3:  []
  },

  // ======================
  // CSS QUESTIONS
  // ======================
  css: {

    // ===== CSS LEVEL 1 =====
    1: [
      {
        question: "Which CSS property sets background color?",
        options: ["color", "background-color", "bg-color", "background"],
        answer: 1
      },
      {
        question: "Which property changes font size?",
        options: ["font-size", "text-size", "size", "font-style"],
        answer: 0
      },
      {
        question: "Which property sets text color?",
        options: ["text-color", "color", "font-color", "text-style"],
        answer: 1
      },
      {
        question: "Which property adds smooth transition?",
        options: ["transition-effect", "animate", "transition", "smooth"],
        answer: 2
      },
      {
        question: "Purpose of display: flex?",
        options: [
          "Block element",
          "Enable flexbox layout",
          "Inline display",
          "Hide element"
        ],
        answer: 1
      },
      {
        question: "Which property controls line spacing?",
        options: ["line-height", "text-spacing", "line-spacing", "spacing"],
        answer: 0
      },
      {
        question: "How do you create a grid layout?",
        options: ["grid-layout", "layout: grid", "display: grid", "grid-display"],
        answer: 2
      },
      {
        question: "Which property sets background image?",
        options: ["image", "background-image", "bg-img", "img-background"],
        answer: 1
      },
      {
        question: "What does font-weight control?",
        options: ["Color", "Size", "Style", "Thickness"],
        answer: 3
      },
      {
        question: "Which property controls visibility?",
        options: ["display", "visibility", "hidden", "visible"],
        answer: 1
      }
    ],

    // ===== CSS LEVEL 2 (15 QUESTIONS) =====
    2: [
      {
        question: "Which CSS property defines the main axis direction in Flexbox?",
        options: ["flex-direction", "main-axis", "flex-flow", "justify"],
        answer: 0
      },
      {
        question: "Purpose of media queries?",
        options: [
          "Styling HTML",
          "Animations",
          "Responsive design",
          "JS connection"
        ],
        answer: 2
      },
      {
        question: "Which property defines animation duration?",
        options: [
          "animation-duration",
          "animation-time",
          "animation-length",
          "animation-speed"
        ],
        answer: 0
      },
      {
        question: "Which property aligns items on cross axis?",
        options: [
          "justify-content",
          "align-items",
          "align-content",
          "flex-align"
        ],
        answer: 1
      },
      {
        question: "Which property pauses an animation?",
        options: [
          "animation-play-state",
          "animation-stop",
          "animation-pause",
          "animation-halt"
        ],
        answer: 0
      },
      {
        question: "Which flex-direction value arranges bottom to top?",
        options: ["row", "row-reverse", "column", "column-reverse"],
        answer: 3
      },
      {
        question: "Media query for max-width 600px?",
        options: [
          "@media (width:600px)",
          "@media (max-width:600px)",
          "@media screen 600px",
          "@media only width 600px"
        ],
        answer: 1
      },
      {
        question: "Which property controls stacking order?",
        options: ["z-index", "position", "layer", "order"],
        answer: 0
      },
      {
        question: "Which position removes element from normal flow?",
        options: ["relative", "static", "absolute", "inherit"],
        answer: 2
      },
      {
        question: "Which property adds inner spacing?",
        options: ["margin", "border", "padding", "spacing"],
        answer: 2
      },
      {
        question: "Which grid property defines column sizes?",
        options: [
          "grid-columns",
          "grid-template-columns",
          "grid-column-size",
          "grid-size"
        ],
        answer: 1
      },
      {
        question: "Which unit is relative to viewport width?",
        options: ["em", "%", "vw", "px"],
        answer: 2
      },
      {
        question: "Which property hides overflow content?",
        options: ["display", "overflow", "visibility", "hidden"],
        answer: 1
      },
      {
        question: "Which display value hides element completely?",
        options: ["hidden", "none", "invisible", "block"],
        answer: 1
      },
      {
        question: "Which function adds transparency to color?",
        options: ["rgb()", "hex()", "rgba()", "opacity()"],
        answer: 2
      }
    ]
  },
    // ======================
  // JAVASCRIPT QUESTIONS
  // ======================
  js: {

    // ===== JS LEVEL 1 =====
    1: [
      {
        question: "Which keyword is used to declare variables in JavaScript?",
        options: ["variable", "declare", "var", "let"],
        answer: 2
      },
      {
        question: "What does type casting mean in JavaScript?",
        options: [
          "Changing the data type of a value",
          "Assigning a new value",
          "Defining variable type",
          "Concatenating strings"
        ],
        answer: 0
      },
      {
        question: "Which is the correct way to declare a constant?",
        options: [
          "const pi = 3.14;",
          "let pi = 3.14;",
          "var pi = 3.14;",
          "constant pi = 3.14;"
        ],
        answer: 0
      },
      {
        question: "Purpose of let keyword?",
        options: [
          "Block scope variable",
          "Global variable",
          "Constant variable",
          "Function scope variable"
        ],
        answer: 0
      },
      {
        question: "Which data type represents true or false?",
        options: ["Boolean", "String", "Number", "Undefined"],
        answer: 0
      },
      {
        question: "Result of adding string and number?",
        options: [
          "Concatenated string",
          "Error",
          "Only number",
          "Sum"
        ],
        answer: 0
      },
      {
        question: "How to check data type?",
        options: [
          "typeof operator",
          "checkType()",
          "data()",
          "inspect()"
        ],
        answer: 0
      },
      {
        question: "Default value of unassigned variable?",
        options: ["0", "null", "undefined", "\"undefined\""],
        answer: 2
      },
      {
        question: "What is hoisting?",
        options: [
          "Moving variables to top",
          "Declaring before initialization",
          "High priority variables",
          "Ignoring variables"
        ],
        answer: 1
      },
      {
        question: "Which is NOT a JS data type?",
        options: ["Array", "Object", "Tuple", "String"],
        answer: 2
      }
    ],

    // ===== JS LEVEL 2 =====
    2: [
      {
        question: "Purpose of const keyword?",
        options: [
          "Declare constant variable",
          "Define function",
          "Create object",
          "Import module"
        ],
        answer: 0
      },
      {
        question: "Which is a primitive data type?",
        options: ["Object", "Array", "String", "Function"],
        answer: 2
      },
      {
        question: "What does NaN represent?",
        options: [
          "Null value",
          "Not Allowed Number",
          "Not a Number",
          "Zero value"
        ],
        answer: 2
      },
      {
        question: "Scope of var keyword?",
        options: [
          "Block scope",
          "Function scope",
          "Constant scope",
          "Module scope"
        ],
        answer: 1
      },
      {
        question: "typeof function returns?",
        options: ["function", "object", "func", "undefined"],
        answer: 0
      },
      {
        question: "Purpose of for loop?",
        options: [
          "Run code specific times",
          "Run once",
          "Run without condition",
          "Run randomly"
        ],
        answer: 0
      },
      {
        question: "Condition in while loop checked when?",
        options: [
          "Before loop",
          "After loop",
          "Both",
          "Never"
        ],
        answer: 0
      },
      {
        question: "Which loop runs at least once?",
        options: ["for", "while", "do-while", "switch"],
        answer: 2
      },
      {
        question: "Purpose of nested loop?",
        options: [
          "Loop inside loop",
          "Multiple loops together",
          "Increase speed",
          "Reduce code"
        ],
        answer: 0
      },
      {
        question: "Which loop iterates over arrays?",
        options: ["for", "while", "do-while", "for...of"],
        answer: 3
      },
      {
        question: "Which loop iterates over object properties?",
        options: ["for", "while", "do-while", "for...in"],
        answer: 3
      },
      {
        question: "Primary purpose of functions?",
        options: [
          "Reuse code",
          "Create loops",
          "Declare variables",
          "Style pages"
        ],
        answer: 0
      },
      {
        question: "Function parameters are?",
        options: [
          "Optional",
          "Variables storing arguments",
          "Not allowed",
          "Fixed only"
        ],
        answer: 1
      },
      {
        question: "Keyword to define function?",
        options: ["function", "define", "func", "def"],
        answer: 0
      },
      {
        question: "Return statement does what?",
        options: [
          "Returns value",
          "Ends program",
          "Mandatory",
          "Runs twice"
        ],
        answer: 0
      }
    ]
  }
};

// HTML Level 3 = Level 1 + Level 2 mixed
const Htmllevel1Questions = questions.html[1];
const Htmllevel2Questions = questions.html[2];

// combine
let Htmllevel3Questions = [...Htmllevel1Questions, ...Htmllevel2Questions];

// shuffle function
Htmllevel3Questions.sort(() => Math.random() - 0.5);

// assign to level 3
questions.html[3] = Htmllevel3Questions;



// CSS Level 3 = Level 1 + Level 2 mixed
const CSSlevel1Questions = questions.css[1];
const CSSlevel2Questions = questions.css[2];

// combine
let CSSlevel3Questions = [...CSSlevel1Questions, ...CSSlevel2Questions];

// shuffle function
CSSlevel3Questions.sort(() => Math.random() - 0.5);

// assign to level 3
questions.css[3] = CSSlevel3Questions;