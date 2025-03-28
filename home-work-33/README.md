# ️ Dummy Frontend Project to build Gulp environment
---

##  Installation of required tools

### Node.js & npm

Install Node.js (with npm) from the official website (LTS version):  

https://nodejs.org

To check the installation and versions write in the command line:

`node -v`  
`npm -v`

---

## Installinf the package with GULP

1. **Clone/download the repository in your working folder**:

In Git Bash write:

`git clone https://github.com/your-username/your-repo-name.git`
`cd your-repository`

2. **Install required dependencies**:

In command line write:
`npm install`

This will install following packages:
- Gulp
- SCSS engine
- PostCSS and Autoprefixer
- CSSNano (for .min.css)
- Media Query sorter
- BrowserSync (real time update of the web page)

---

## Run the Project (Development Mode)
In command line write:  
`gulp watch`

This will:
- Convert .scss to .min.css
- Add prefixes for different browsers in .min.css
- Optimize media queries from .scss in resulting .min.css
- Generate source maps in browser (.css and .scss for debugging purposes)
- Watch for changes in `.scss`, `.html`, and `.js` files
- Update live the browser without manual reloading

---

## Project Structure


 your-repository/  
├── assets/  
│   └── css/style.min.css   
├── src/              
│   └── style.scss  
├── index.html  
├── gulpfile.js  
├── script.js  
├── package.json  
└── README.md  


---
