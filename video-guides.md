# Video Recording Guides

This document contains guides for creating instructional videos for each topic. Each guide includes timing suggestions, key demonstration points, and talking points.

---

## Our Editor (VS Code)

**Target Duration:** 10-15 minutes  
**Topic File:** [the-development-environment/our-editor.md](the-development-environment/our-editor.md)

### Video Structure

#### Introduction (1 minute)
**What to Say:**
- Brief welcome and overview
- "VS Code has become the standard for web development, and we'll be using it for Angular"
- "In this video, I'll show you how to set up and customize VS Code for Angular development"

**What to Show:**
- VS Code with a basic Angular project open (or empty workspace)

---

#### Section 1: Customization (2-3 minutes)

**Key Demonstrations:**
1. **Open Command Palette**
   - Show keyboard shortcut: `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
   - Type a command to demonstrate searching (e.g., "theme")

2. **Change Color Theme**
   - Navigate to File > Preferences > Theme > Color Theme
   - Switch between a few themes (Dark+, Light+, maybe a popular extension theme)
   - Mention this is personal preference

3. **Adjust Font Size**
   - Open Settings (File > Preferences > Settings or `Cmd/Ctrl+,`)
   - Search for "font size"
   - Adjust `editor.fontSize` live so they see it change
   - Mention `editor.fontFamily` and ligatures briefly

4. **Keyboard Shortcuts**
   - Open keyboard shortcuts (File > Preferences > Keyboard Shortcuts)
   - Show how to search for a command
   - Optionally show changing one keybinding

**Talking Points:**
- "Make VS Code comfortable for YOU - you'll spend hours here"
- "Command Palette is your best friend - you don't need to memorize menus"
- "Theme choice matters for reducing eye strain during long coding sessions"

---

#### Section 2: Workspaces (1-2 minutes)

**Key Demonstrations:**
1. **Show Current Workspace**
   - Point out if you're in a single folder or workspace
   - Show the Explorer sidebar with folder(s)

2. **Save Workspace (optional)**
   - File > Save Workspace As...
   - Show the `.code-workspace` file created
   - Explain briefly: "This saves your folder configuration and settings"

**Talking Points:**
- "For now, single folder workspaces are fine for Angular projects"
- "Workspaces become useful when you have frontend/backend in separate folders"
- "The workspace file can be shared with your team"

---

#### Section 3: Settings and settings.json (3-4 minutes)

**Key Demonstrations:**
1. **Open Settings UI**
   - File > Preferences > Settings (or `Cmd/Ctrl+,`)
   - Show the search bar
   - Search and toggle a setting (e.g., "format on save")

2. **Show settings.json**
   - Click the "Open Settings (JSON)" icon in top right of Settings UI
   - Show the JSON format
   - Point out it's the same settings, just different interface

3. **User vs Workspace Settings**
   - Show the User/Workspace tabs in Settings UI
   - Explain: "User = all projects, Workspace = this project only"
   - Set a workspace-specific setting as example

4. **Add Useful Angular Settings**
   - In settings.json, add/show these settings:
     ```json
     "editor.formatOnSave": true,
     "editor.tabSize": 2,
     "files.autoSave": "onFocusChange"
     ```
   - Explain each one briefly

**Talking Points:**
- "Settings UI is beginner-friendly, JSON gives you more control"
- "Workspace settings override user settings - good for team consistency"
- "These three settings will make Angular development smoother"

---

#### Section 4: The .vscode Folder (2 minutes)

**Key Demonstrations:**
1. **Show .vscode Folder**
   - Navigate to it in Explorer (may need to create it if empty project)
   - If it doesn't exist, create it and add a `settings.json`

2. **Show extensions.json**
   - Create or show an example:
     ```json
     {
       "recommendations": [
         "angular.ng-template",
         "dbaeumer.vscode-eslint"
       ]
     }
     ```
   - Show the notification VS Code shows when opening workspace with recommended extensions

3. **Mention Other Files**
   - Briefly mention `launch.json` (debugging) and `tasks.json` (build tasks)
   - Don't go deep - just awareness

**Talking Points:**
- "This folder keeps project-specific configuration"
- "Commit this to Git so your whole team has the same setup"
- "Angular CLI can generate some of these files for you"

---

#### Section 5: Extensions (3-4 minutes)

**Key Demonstrations:**
1. **Open Extensions View**
   - Click Extensions icon in Activity Bar (or `Cmd/Ctrl+Shift+X`)
   - Show the search bar

2. **Search and Install Angular Language Service**
   - Search for "Angular Language Service"
   - Show the official one from Angular
   - Click Install (or show it's already installed)
   - Briefly explain: "Gives you IntelliSense in Angular templates"

3. **Show Other Essential Extensions**
   - ESLint
   - Prettier - Code formatter
   - GitLens (briefly)
   - Show them in the list, explain their purpose quickly

4. **Extension Details**
   - Click on one extension to show details page
   - Point out ratings, download count, documentation

**Talking Points:**
- "Extensions transform VS Code from text editor to powerful IDE"
- "These four extensions are essential for Angular development"
- "Install these before starting Angular work"
- "Extension ecosystem is a major reason developers choose VS Code"

---

#### Section 6: Language Server Protocol (1-2 minutes)

**Key Demonstrations:**
1. **Show IntelliSense in Action**
   - Open a TypeScript file
   - Start typing to show autocomplete
   - Hover over a symbol to show type information
   - Right-click > Go to Definition

2. **Explain What's Happening**
   - "This intelligence comes from the Language Server"
   - "It's a separate process analyzing your code"
   - "Angular Language Service does the same for your templates"

**Talking Points:**
- "You don't configure this - extensions handle it"
- "Understanding this helps when troubleshooting IntelliSense issues"
- "If IntelliSense stops working, reload the window: Cmd/Ctrl+Shift+P > 'Reload Window'"

---

#### Conclusion (1 minute)

**What to Say:**
- Recap key points: "We covered customization, settings, extensions..."
- "Your VS Code is now ready for Angular development"
- "Spend time customizing to your preference - it's worth it"
- Point them to the Further Reading links in the document

**What to Show:**
- Quick tour of your fully configured VS Code
- Maybe show the resources section

---

### Pre-Recording Checklist

- [ ] Have a clean VS Code window ready (or sample Angular project)
- [ ] Know your keyboard shortcuts for your OS (Mac vs Windows)
- [ ] Have extensions pre-installed or know exactly where to find them
- [ ] Test screen recording to ensure font size is readable
- [ ] Have settings.json examples prepared
- [ ] Close distracting notifications/apps
- [ ] Test audio levels

### Production Notes

- **Screen Resolution:** Record at 1920x1080 or higher
- **Font Size:** Increase editor font to 16-18pt for recording
- **Zoom Level:** Consider zooming UI to 125-150% for visibility
- **Cursor Highlighting:** Consider using a cursor highlighter tool for recordings
- **Pace:** Speak slowly and pause between sections
- **Mistakes:** Don't worry about perfection - natural teaching is better than scripted

### Quick Reference: Keyboard Shortcuts to Demonstrate

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Command Palette | `Cmd+Shift+P` | `Ctrl+Shift+P` |
| Settings | `Cmd+,` | `Ctrl+,` |
| Extensions | `Cmd+Shift+X` | `Ctrl+Shift+X` |
| Terminal | `Ctrl+\`` | `Ctrl+\`` |
| Quick Open | `Cmd+P` | `Ctrl+P` |

---

## Basics of Your Operating System Shell

**Target Duration:** 10-12 minutes  
**Topic File:** [the-development-environment/basics-of-your-operating-system-shell.md](the-development-environment/basics-of-your-operating-system-shell.md)

### Video Structure

#### Introduction (1 minute)
- "The command line might seem intimidating, but you only need a few basics for Angular development"
- "We'll use Git Bash on Windows, or Terminal on Mac/Linux"
- Show your terminal window

#### Section 1: Navigating the File System (2-3 minutes)
**Demonstrate:**
```bash
pwd                    # Show current directory
ls                     # List files
ls -la                # List with hidden files
cd Documents          # Change directory
cd ..                 # Go up one level
cd ~                  # Go to home directory
```

**Talking Points:**
- "These commands are your daily drivers - you'll use them constantly"
- "Angular CLI must be run from your project directory"

#### Section 2: Creating and Managing Files (2 minutes)
**Demonstrate:**
```bash
mkdir my-project
cd my-project
touch README.md
ls
rm README.md
```

**Talking Points:**
- "Usually Angular CLI creates files, but knowing these basics helps"

#### Section 3: Hidden Files and Environment (2 minutes)
**Demonstrate:**
```bash
ls -la                 # Show .gitignore, .git folder
echo $PATH            # Show PATH variable
export MY_VAR="test"  # Set environment variable
```

**Talking Points:**
- "Dot files control tool behavior - .gitignore, .editorconfig, etc."

#### Section 4: Command History and Chaining (2 minutes)
**Demonstrate:**
- Press Up/Down arrows to navigate history
- `Ctrl+R` to search history
- `npm install && npm start` - chain commands
- Tab completion

**Talking Points:**
- "These shortcuts save tons of time"
- "You'll repeat commands constantly - history is your friend"

#### Conclusion (1 minute)
- Recap: Navigate, create files, understand PATH, use history
- "Practice these in daily work - they'll become second nature"

---

## The Basics of Source Code Control

**Target Duration:** 12-15 minutes  
**Topic File:** [the-development-environment/the-basics-of-source-code-control.md](the-development-environment/the-basics-of-source-code-control.md)

### Video Structure

#### Introduction (1 minute)
- "Git is essential for professional development"
- "We'll cover just enough to work effectively in class"
- "Take the full Git training for deeper knowledge"

#### Section 1: Why Version Control (1-2 minutes)
**Show:**
- Example of `git log` showing history
- Explain: "Every change saved, can revert anytime, collaborate safely"

#### Section 2: Basic Git Workflow (4-5 minutes)
**Demonstrate complete cycle:**
```bash
# Clone a repository
git clone https://github.com/user/repo.git
cd repo

# Make changes to files (edit in VS Code)

# Check status
git status

# Stage files
git add .

# Commit
git commit -m "Add user login feature"

# Push to GitHub
git push
```

**Talking Points:**
- Walk through each command slowly
- Explain working directory → staging → repository
- Show `git status` frequently

#### Section 3: Viewing History (2 minutes)
**Demonstrate:**
```bash
git log
git log --oneline
git diff
```

**Show:**
- How to read commit messages
- Who changed what when

#### Section 4: .gitignore (2 minutes)
**Show:**
- Open `.gitignore` in VS Code
- Explain `node_modules/`, `dist/`, `.env`
- Why we ignore these

**Talking Points:**
- "Never commit node_modules - thousands of files you can regenerate"
- "Never commit secrets like API keys"

#### Section 5: Handling Conflicts (2 minutes)
**Show:**
- Conflict markers in a file: `<<<<<<<`, `=======`, `>>>>>>>`
- How to resolve: pick one version, edit manually
- `git add` then `git commit` after resolving

**Talking Points:**
- "Conflicts are normal, not scary"
- "Pull often to avoid them"

#### Conclusion (1 minute)
- Recap: clone, add, commit, push - your daily workflow
- Point to Git training for branches, merging, etc.

---

## Node.js and the Node Package Manager (NPM)

**Target Duration:** 12-15 minutes  
**Topic File:** [the-development-environment/node-js-and-the-node-package-manager.md](the-development-environment/node-js-and-the-node-package-manager.md)

### Video Structure

#### Introduction (1 minute)
- "Node.js powers your Angular development tools"
- "Angular apps run in the browser, but build tools run on Node"
- "npm manages all your dependencies"

#### Section 1: What is Node.js (2 minutes)
**Demonstrate:**
```bash
node --version
node
> console.log("Hello from Node")
> .exit
```

**Show:**
- Run simple JavaScript outside browser
- Explain: "This is what runs Angular CLI, build tools"

#### Section 2: npm Basics (3 minutes)
**Demonstrate:**
```bash
npm --version
npm install lodash
npm uninstall lodash
npm install --save-dev typescript
```

**Show:**
- `node_modules` folder appearing
- How dependencies are added

#### Section 3: package.json Explained (3-4 minutes)
**Show in VS Code:**
```json
{
  "name": "my-app",
  "scripts": {
    "start": "ng serve",
    "build": "ng build"
  },
  "dependencies": {
    "@angular/core": "^17.0.0"
  },
  "devDependencies": {
    "typescript": "~5.2.2"
  }
}
```

**Explain:**
- Each section's purpose
- dependencies vs devDependencies
- Scripts for automation

#### Section 4: Semantic Versioning (2 minutes)
**Show examples:**
```
17.2.5
^17.2.5  (allow minor and patch)
~17.2.5  (patch only)
```

**Talking Points:**
- "Major version changes may break your code"
- "^ is most common - allows compatible updates"

#### Section 5: npm Scripts (2 minutes)
**Demonstrate:**
```bash
npm start
npm run build
npm test
```

**Talking Points:**
- "These are your main commands in Angular development"
- "npm scripts abstract away complex commands"

#### Conclusion (1 minute)
- Recap: Node runs tools, npm manages packages, package.json is manifest
- "You'll use npm start and npm install constantly"

---

## The World Wide Web

**Target Duration:** 15-18 minutes  
**Topic File:** [the-web-platform/the-world-wide-web.md](the-web-platform/the-world-wide-web.md)

### Video Structure

#### Introduction (1 minute)
- "Understanding the web platform helps you build better Angular apps"
- "We'll cover the foundation - how the web actually works"

#### Section 1: Web vs Internet (1-2 minutes)
**Use diagram or draw:**
- Internet = infrastructure (roads)
- Web = service using it (cars)
- Other services: email, FTP, streaming

#### Section 2: HTTP Request/Response (4-5 minutes)
**Demonstrate with DevTools:**
1. Open Network tab
2. Visit a website
3. Show:
   - Request: URL, method (GET), headers
   - Response: status code, headers, body
4. Click on API request to show JSON response

**Talking Points:**
- "This is how your Angular app gets data"
- "Every API call you make looks like this"

#### Section 3: HTTP Methods and Status Codes (3-4 minutes)
**Show in Network tab:**
- GET requests (reading data)
- POST requests (creating data)
- Common status codes:
  - 200 (success)
  - 404 (not found)  
  - 500 (server error)
  - 401 (unauthorized)

**Talking Points:**
- "Recognizing these status codes helps debug API issues"

#### Section 4: HTTP vs HTTPS (2 minutes)
**Show:**
- Padlock in browser address bar
- Certificate information
- Mention encryption

#### Section 5: DNS (1-2 minutes)
**Simple explanation:**
- Type example.com
- DNS translates to IP address
- Browser connects to that IP

**Use analogy:**
- "Like phone contacts - name to number"

#### Section 6: RESTful APIs and JSON (3-4 minutes)
**Show example REST API:**
```
GET    /api/users       (list all)
GET    /api/users/123   (get one)
POST   /api/users       (create)
PUT    /api/users/123   (update)
DELETE /api/users/123   (delete)
```

**Show JSON response in DevTools:**
```json
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Talking Points:**
- "Most Angular apps follow these RESTful patterns"
- "JSON is the standard format - easy to work with in TypeScript"

#### Conclusion (1 minute)
- Recap: HTTP request/response, status codes, JSON
- "This foundation explains how your Angular app communicates"

---

## HTML

**Target Duration:** 12-15 minutes  
**Topic File:** [the-web-platform/html.md](the-web-platform/html.md)

### Video Structure

#### Introduction (1 minute)
- "HTML is the structure of every web page"
- "Angular templates are HTML with extra syntax"
- Open simple HTML file in VS Code

#### Section 1: Document Structure (2 minutes)
**Show:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Hello</h1>
</body>
</html>
```

**Talking Points:**
- Walk through each part's purpose
- "Angular apps inject into the body"

#### Section 2: Elements and Attributes (3-4 minutes)
**Demonstrate in browser:**
```html
<a href="https://example.com" target="_blank">Link</a>
<img src="photo.jpg" alt="Description">
<input type="text" id="email" required>
<button disabled>Can't click</button>
```

**Show:**
- How attributes affect behavior
- Boolean attributes (checked, disabled, required)
- Inspect in DevTools to see actual DOM

#### Section 3: Semantic HTML (4-5 minutes)
**Show comparison:**

Bad:
```html
<div class="header">
  <div class="nav">Links</div>
</div>
<div class="content">
  <div class="article">Text</div>
</div>
```

Good:
```html
<header>
  <nav>Links</nav>
</header>
<main>
  <article>Text</article>
</main>
```

**Demonstrate:**
- View in browser - looks the same
- But inspect with DevTools - proper structure
- Show how screen reader would read it better

**Talking Points:**
- "Use elements that describe what they are"
- "Better for accessibility, SEO, maintainability"

#### Section 4: CSS Reset (2 minutes)
**Show:**
- Default browser styles (user-agent stylesheet)
- Same HTML looking different in different browsers
- Add normalize.css - now consistent

#### Conclusion (1 minute)
- Recap: Structure, semantic elements, attributes
- "Angular templates use all of this - good HTML = good Angular"

---

## Cascading Style Sheets (CSS)

**Target Duration:** 15-18 minutes  
**Topic File:** [the-web-platform/cascading-style-sheets.md](the-web-platform/cascading-style-sheets.md)

### Video Structure

#### Introduction (1 minute)
- "CSS makes your app look good"
- "Angular supports component-scoped CSS"
- Open HTML file with CSS

#### Section 1: Adding CSS (2 minutes)
**Show three ways:**
```html
<!-- External -->
<link rel="stylesheet" href="styles.css">

<!-- Internal -->
<style>
  h1 { color: blue; }
</style>

<!-- Inline -->
<h1 style="color: blue;">Title</h1>
```

**Talking Points:**
- "External is best - reusable and cached"
- "Angular uses component stylesheets"

#### Section 2: Selectors (4-5 minutes)
**Demonstrate live editing in DevTools:**
```css
/* Element */
p { color: black; }

/* Class */
.highlight { background: yellow; }

/* ID */
#main { font-size: 20px; }

/* Descendant */
div p { margin: 10px; }

/* Pseudo-classes */
a:hover { color: red; }
input:focus { border: 2px solid blue; }
```

**For each:**
- Write in DevTools
- Show instant effect on page
- Explain when to use

#### Section 3: Box Model (2-3 minutes)
**Show in DevTools:**
- Inspect element
- Show box model diagram (content, padding, border, margin)
- Modify values live - see visual changes

**Demonstrate:**
```css
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
  box-sizing: border-box;
}
```

#### Section 4: Flexbox (3-4 minutes)
**Live demo:**
```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
```

**Show:**
- Items distributing horizontally
- Change justify-content values
- Change flex-direction to column

**Talking Points:**
- "Flexbox is perfect for navigation bars, toolbars"
- "Use for one-dimensional layouts"

#### Section 5: Grid (2-3 minutes)
**Quick demo:**
```css
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
}
```

**Show:**
- Three-column layout
- Responsive with fr units

**Talking Points:**
- "Grid for page layouts and card grids"
- "Two-dimensional layouts"

#### Section 6: Tailwind vs Angular Material (2 minutes)
**Show side-by-side:**

Tailwind:
```html
<button class="bg-blue-500 text-white px-4 py-2 rounded">
  Click me
</button>
```

Angular Material:
```html
<button mat-raised-button color="primary">
  Click me
</button>
```

**Explain trade-offs**

#### Conclusion (1 minute)
- Recap: Selectors, box model, flexbox/grid
- "Practice with flexbox and grid - you'll use them constantly"

---

## Introduction to Accessibility

**Target Duration:** 10-12 minutes  
**Topic File:** [the-web-platform/introduction-to-accessibility.md](the-web-platform/introduction-to-accessibility.md)

### Video Structure

#### Introduction (1 minute)
- "1 in 4 adults has some disability"
- "Building accessible apps is ethical AND legal"
- "Good news: Most accessibility comes from good HTML"

#### Section 1: Why It Matters (2 minutes)
**Discuss:**
- Ethical: inclusion and equal access
- Legal: ADA, WCAG compliance, lawsuits
- Business: larger audience, better SEO

**Show:**
- WCAG guidelines website
- Example lawsuit news

#### Section 2: Good Markup Demo (5-6 minutes)
**Compare bad vs good:**

Bad:
```html
<div onclick="submit()">Submit</div>
<div class="checkbox"></div>
<span class="heading">Title</span>
```

Good:
```html
<button type="submit">Submit</button>
<input type="checkbox" id="agree">
<h1>Title</h1>
```

**Demonstrate with screen reader:**
- Turn on VoiceOver (Mac) or NVDA (Windows)
- Navigate bad example - confusing
- Navigate good example - clear and understandable

**Talking Points:**
- "Let screen reader announce each element"
- "Notice how button is keyboard accessible automatically"

#### Section 3: Practical Checklist (2-3 minutes)
**Show examples:**
```html
<!-- Alt text for images -->
<img src="chart.jpg" alt="Sales increased 25% in Q4">

<!-- Label inputs -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">

<!-- Proper heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>

<!-- Sufficient contrast -->
<p style="color: #000; background: #fff">Good contrast</p>
```

#### Section 4: Testing Tools (1-2 minutes)
**Demonstrate:**
- Install axe DevTools extension
- Run scan on page
- Show issues found
- Fix one issue live

#### Conclusion (1 minute)
- Recap: Use semantic HTML, test with screen reader, use automated tools
- "Accessibility is not optional - build it in from the start"

---

## JavaScript

**Target Duration:** 18-22 minutes  
**Topic File:** [the-web-platform/java-script.md](the-web-platform/java-script.md)

### Video Structure

#### Introduction (1 minute)
- "JavaScript runs in the browser"
- "TypeScript compiles to JavaScript"
- "Understanding JS helps you understand Angular"

#### Section 1: Modern JavaScript Syntax (5-6 minutes)
**Demonstrate in browser console:**

```javascript
// let vs const
let x = 1;
x = 2;  // OK
const y = 1;
y = 2;  // ERROR

// Arrow functions
const add = (a, b) => a + b;
add(2, 3);  // 5

// Template literals
const name = 'John';
console.log(`Hello ${name}`);

// Destructuring
const user = { name: 'John', age: 30 };
const { name, age } = user;

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
```

**Talking Points:**
- Type each example, show output
- "You'll see all of these in Angular code"

#### Section 2: Promises and Async/Await (4-5 minutes)
**Demonstrate:**

```javascript
// Problem: this doesn't work
const data = fetch('https://api.example.com/users');
console.log(data);  // Promise, not data

// Solution 1: Promises
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

// Solution 2: Async/await (cleaner)
async function getUsers() {
  const response = await fetch('https://api.example.com/users');
  const data = await response.json();
  console.log(data);
}
```

**Show in browser:**
- Actually make API call
- Show data in console

#### Section 3: Array Methods (4-5 minutes)
**Demonstrate in console:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - transform each
numbers.map(n => n * 2);  // [2, 4, 6, 8, 10]

// filter - keep matches
numbers.filter(n => n % 2 === 0);  // [2, 4]

// find - get first match
numbers.find(n => n > 3);  // 4

// reduce - combine to single value
numbers.reduce((sum, n) => sum + n, 0);  // 15
```

**Talking Points:**
- "These are functional programming methods"
- "Angular code uses these constantly - master them"

#### Section 4: Truthy/Falsy and Equality (2 minutes)
**Quick demos:**

```javascript
// Falsy values
Boolean(false);    // false
Boolean(0);        // false
Boolean("");       // false
Boolean(null);     // false
Boolean(undefined);// false

// == vs ===
5 == "5";   // true (converts types)
5 === "5";  // false (strict)
// Always use ===
```

#### Section 5: Fetch API and CORS (3-4 minutes)
**Demonstrate:**
- Open Network tab
- Make fetch request to public API
- Show request/response
- Try to fetch from different origin - explain CORS error

```javascript
fetch('https://api.github.com/users/octocat')
  .then(r => r.json())
  .then(data => console.log(data));
```

**Explain:**
- Same-origin policy
- Why CORS matters
- How to fix (server-side headers)

#### Conclusion (1 minute)
- Recap: Modern syntax, promises, array methods
- "Practice these in the console - they're your building blocks"

---

## Browser Developer Tools

**Target Duration:** 12-15 minutes  
**Topic File:** [the-web-platform/browser-developer-tools.md](the-web-platform/browser-developer-tools.md)

### Video Structure

#### Introduction (1 minute)
- "DevTools are your debugging environment"
- "You'll spend significant time here"
- Press F12 to open

#### Section 1: Console (3-4 minutes)
**Demonstrate:**
```javascript
console.log('Hello');
console.warn('Warning');
console.error('Error');
console.table([{name: 'John', age: 30}]);

// Run JavaScript
document.querySelector('h1').textContent = 'Changed!';

// Inspect variables
let x = 42;
console.log(x);
```

**Talking Points:**
- "Your debugging command center"
- "Log data to understand what's happening"

#### Section 2: Elements Tab (3-4 minutes)
**Demonstrate:**
- Inspect element (click inspector, click page element)
- View HTML structure
- Edit HTML live (double-click text)
- View CSS styles
- Toggle CSS properties on/off
- Edit CSS values live
- Show box model visualization

**Talking Points:**
- "Test changes before adding to code"
- "See exactly why element looks certain way"

#### Section 3: Network Tab (3-4 minutes)
**Demonstrate:**
- Refresh page with Network tab open
- Show all resources loading
- Filter to XHR/Fetch
- Click on API request
- Show Headers, Preview, Response tabs
- Point out status codes, timing

**Talking Points:**
- "Essential for debugging API issues"
- "First place to check when data isn't loading"

#### Section 4: Debugging with Breakpoints (2-3 minutes)
**Demonstrate:**
- Open Sources tab
- Find JavaScript file
- Click line number to set breakpoint
- Trigger code execution
- Pause at breakpoint
- Inspect variables
- Step through code

#### Section 5: Device Mode (1-2 minutes)
**Quick demo:**
- Toggle device toolbar
- Switch between devices
- Rotate orientation
- Test responsive layout

#### Conclusion (1 minute)
- Recap: Console for logging, Elements for HTML/CSS, Network for APIs, Debugger for JavaScript
- "Master these tools - you'll use them daily"

---

## The Document Object Model (DOM)

**Target Duration:** 15-18 minutes  
**Topic File:** [the-web-platform/the-document-object-model.md](the-web-platform/the-document-object-model.md)

### Video Structure

#### Introduction (1 minute)
- "The DOM is the bridge between HTML and JavaScript"
- "Angular manipulates the DOM for you, but understanding it helps"
- Open simple HTML page

#### Section 1: Selecting and Modifying Elements (4-5 minutes)
**Demonstrate in console:**

```javascript
// Selecting
const heading = document.querySelector('h1');
const allParagraphs = document.querySelectorAll('p');

// Modifying content
heading.textContent = 'New Title';
heading.innerHTML = '<span>New</span> Title';

// Modifying attributes
const img = document.querySelector('img');
img.src = 'new-image.jpg';
img.alt = 'New description';

// Modifying styles
heading.style.color = 'blue';
heading.style.fontSize = '32px';

// CSS classes
heading.classList.add('highlight');
heading.classList.remove('old');
heading.classList.toggle('active');
```

**Show changes happening live on page**

#### Section 2: Creating and Adding Elements (3-4 minutes)
**Live demo:**

```javascript
// Create element
const newPara = document.createElement('p');
newPara.textContent = 'This is new';
newPara.className = 'dynamic';

// Add to page
document.body.appendChild(newPara);

// Create a list
const ul = document.createElement('ul');
['Apple', 'Banana', 'Cherry'].forEach(fruit => {
  const li = document.createElement('li');
  li.textContent = fruit;
  ul.appendChild(li);
});
document.body.appendChild(ul);
```

**Show elements appearing on page**

#### Section 3: Event Handling (4-5 minutes)
**Create interactive example:**

```html
<button id="myBtn">Click Me</button>
<p id="output"></p>
```

```javascript
const btn = document.getElementById('myBtn');
const output = document.getElementById('output');

btn.addEventListener('click', function(event) {
  output.textContent = 'Button clicked!';
  console.log('Event:', event);
});

// Show event object properties
btn.addEventListener('click', (e) => {
  console.log('Target:', e.target);
  console.log('Type:', e.type);
  console.log('Position:', e.clientX, e.clientY);
});
```

**Demonstrate:**
- Click button, see output change
- Show event object in console

#### Section 4: SPA Concept - Building from Scratch (2-3 minutes)
**Show comparison:**

Traditional:
```html
<!-- Server sends full HTML -->
<html>
<body>
  <header>...</header>
  <main><h1>Products</h1>...</main>
</body>
</html>
```

SPA (Angular):
```html
<!-- Minimal HTML -->
<html>
<body>
  <app-root></app-root>
  <script src="main.js"></script>
</body>
</html>
```

**Explain:**
- JavaScript creates all DOM elements
- Fetches data from API
- Updates DOM when data changes
- "This is what Angular does"

#### Section 5: Keeping DOM in Sync (2-3 minutes)
**Show the manual problem:**

```javascript
let count = 0;
const display = document.querySelector('#count');
display.textContent = count;

// User clicks button
count++;
// DOM not updated! Must manually:
display.textContent = count;
```

**Show Angular solution:**
```typescript
// Angular template
<p>{{ count }}</p>

// Component
count = 0;

increase() {
  this.count++;  // DOM automatically updates!
}
```

**Talking Points:**
- "Keeping DOM in sync is hard manually"
- "Angular solves this with data binding"
- "This is one of Angular's main benefits"

#### Conclusion (1 minute)
- Recap: Select, modify, create elements, handle events
- "Angular does DOM manipulation for you, but now you understand what's happening"

---

## Introduction to TypeScript

**Target Duration:** 12-15 minutes  
**Topic File:** [the-web-platform/introduction-to-type-script.md](the-web-platform/introduction-to-type-script.md)

### Video Structure

#### Introduction (1 minute)
- "TypeScript is JavaScript with types"
- "All Angular code is written in TypeScript"
- "We'll cover just enough to read and write Angular code - you'll take a full 3-day TypeScript course later"

#### Section 1: What is TypeScript (2 minutes)
**Show in VS Code:**
- Create `demo.ts` file
- Write simple JavaScript:
```typescript
function greet(name) {
  return "Hello " + name;
}
```

**Explain:**
- "This is valid TypeScript AND valid JavaScript"
- "TypeScript is a superset - it adds features, doesn't replace"
- TypeScript compiler (tsc) converts to JavaScript

#### Section 2: Type Annotations (3-4 minutes)
**Demonstrate in VS Code:**

```typescript
// Basic types
let userName: string = "John";
let age: number = 30;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Function with types
function add(a: number, b: number): number {
  return a + b;
}

add(5, 3);      // OK
add(5, "3");    // Error - TypeScript catches this!
```

**Show:**
- Type errors appearing in VS Code immediately
- Hover over variables to see inferred types
- Autocomplete working based on types

**Talking Points:**
- "Types catch bugs before runtime"
- "Your editor becomes much smarter"

#### Section 3: Types and Interfaces (2-3 minutes)
**Demonstrate:**

```typescript
// Using type
type User = {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean;  // optional property
};

// Using interface (very similar!)
interface Product {
  id: number;
  name: string;
  price: number;
}

// Use type
function displayUser(user: User) {
  console.log(`${user.name} (${user.email})`);
}

// This works
displayUser({
  id: 1,
  name: "John",
  email: "john@example.com"
});

// This fails - missing required properties
displayUser({ name: "John" });  // Error!
```

**Talking Points:**
- "Both `type` and `interface` define object shapes - they're very similar"
- "You'll see both in Angular code and documentation"
- "In this course, we tend to use `type` - helps developers from Java/.NET backgrounds approach with fresh eyes"
- "Don't worry about subtle differences - the 3-day TypeScript course covers that"

#### Section 4: Classes (2-3 minutes)
**Demonstrate:**

```typescript
class Person {
  // Properties with access modifiers
  private id: number;
  public name: string;
  
  // Constructor
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  
  // Method
  greet(): string {
    return `Hello, I'm ${this.name}`;
  }
}

const person = new Person(1, "Alice");
console.log(person.name);       // OK - public
console.log(person.id);         // Error - private!
console.log(person.greet());    // "Hello, I'm Alice"
```

**Talking Points:**
- "Angular components are TypeScript classes"
- "Access modifiers control visibility"
- "Shorthand exists - you'll see it in Angular"

#### Section 5: TypeScript in Angular (2-3 minutes)
**Show Angular component example:**

```typescript
import { Component } from '@angular/core';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

@Component({
  selector: 'app-todo',
  template: `
    <div *ngFor="let todo of todos">
      {{ todo.title }}
    </div>
  `
})
export class TodoComponent {
  todos: Todo[] = [];
  
  addTodo(title: string): void {
    this.todos.push({
      id: Date.now(),
      title: title,
      completed: false
    });
  }
}
```

**Talk through:**
- Component is a class
- Property has type annotation (`Todo[]`)
- Method has parameter and return types
- Type defines data shape
- "This is what Angular code looks like"

#### Section 6: The Compiler and Configuration (1-2 minutes)
**Show:**
- Open `tsconfig.json` in Angular project
- Point out key settings:
  - `target`: ES version to compile to
  - `strict`: Type checking strictness
  - `module`: Module system

**Explain:**
- "Angular CLI handles compilation automatically"
- "You'll rarely need to touch this file"
- "When you run `ng serve`, TypeScript compiles in the background"

#### Conclusion (1 minute)
- Recap: Types add safety, interfaces define shapes, classes are Angular components
- "Don't worry if it feels new - you'll practice constantly in Angular"
- "Remember: the 3-day TypeScript course goes much deeper"

---

## Summary

**Total Video Time Across All Topics:** Approximately **2.75 - 3.25 hours**

**Breakdown by Category:**
- **Development Environment (4 topics):** ~50-55 minutes
- **Web Platform (8 topics):** ~120-135 minutes

This provides comprehensive foundation coverage while keeping each video digestible (10-22 minutes per topic).
