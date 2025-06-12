/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\ 
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("\nfunction showPage(pageId) {\n  const pages = document.querySelectorAll(\".page-section\");\n  pages.forEach((page) => {\n    page.style.display = page.dataset.page === pageId ? \"block\" : \"none\";\n  });\n}\n\n\nshowPage(\"home\");\n\n\nconst form = document.getElementById(\"predictForm\");\nconst predictionEl = document.getElementById(\"prediction\");\nconst recommendationEl = document.getElementById(\"recommendation\");\nconst btnBack = document.getElementById(\"btn-back\");\n\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n\n  const formData = new FormData(form);\n  const data = Object.fromEntries(formData.entries());\n\n  for (let key in data) {\n    data[key] = parseFloat(data[key]);\n  }\n\n \n  const score =\n    data.glucose * 0.3 +\n    data.bmi * 0.2 +\n    data.age * 0.2 +\n    data.bloodPressure * 0.1 +\n    data.dpf * 0.2;\n\n  let prediction = \"\";\n  let probability = 0;\n\n  if (score > 150) {\n    prediction = \"Berisiko Tinggi\";\n    probability = 85;\n  } else if (score > 100) {\n    prediction = \"Berisiko Sedang\";\n    probability = 60;\n  } else {\n    prediction = \"Berisiko Rendah\";\n    probability = 30;\n  }\n\n  \n  predictionEl.innerHTML = `Hasil Prediksi: <strong>${prediction}</strong><br>Probabilitas: ${probability}%`;\n\n  recommendationEl.innerHTML = `\n    <h6>Rekomendasi:</h6>\n    <ul class=\"mb-0\">\n      <li>Konsultasikan dengan dokter untuk pemeriksaan lebih lanjut.</li>\n      <li>Tingkatkan aktivitas fisik minimal 150 menit per minggu.</li>\n      <li>Kurangi konsumsi makanan tinggi gula/lemak.</li>\n      <li>Perbanyak konsumsi sayuran dan buah yang sehat.</li>\n    </ul>\n  `;\n\n  showPage(\"result\");\n});\n\n\nbtnBack.addEventListener(\"click\", () => {\n  showPage(\"form\");\n});\n\n\n//# sourceURL=webpack://diabetest/./src/main.js?");

/***/ })
  
/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;