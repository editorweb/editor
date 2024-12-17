function getUserCode() {
  return htmlEditor.getValue() + "\n" + "<style>" + "\n" + cssEditor.getValue() + "\n" + "</style>" + "\n" +  "<script>" + "\n" + jsEditor.getValue() + "\n" + "</script>";
}
function update() {
  //this is the content of iframe
  var code = document.getElementById('iframe').contentWindow.document;
  code.open();
  //getting value from editor and puts in the iframe
  code.write(getUserCode());
  code.close();
  localStorage.setItem("htmlcode", htmlEditor.getValue())
  localStorage.setItem("jscode", jsEditor.getValue())
  localStorage.setItem("csscode", cssEditor.getValue())
}
function loadHTMLEditor() {
  if (localStorage.getItem('csscode') === null) {
    defaultHTMLValue = ""
  }else{
    defaultHTMLValue = localStorage.getItem("htmlcode")
  }
  //tells ace editor to use editor element , window.editor makes it global in the javascript file
  window.htmlEditor = ace.edit("htmlEditor");
  //mode mode
  htmlEditor.setTheme("ace/theme/dracula");
  //html mode
  htmlEditor.getSession().setMode("ace/mode/html");
  //sample text
  htmlEditor.setValue(defaultHTMLValue,1); //1 = moves cursor to end
  // when something changed in editor update is called
  htmlEditor.getSession().on('change', function() {
      update();
  });
  // puts cursor in the editor
  htmlEditor.focus();
  
  //htmlEditor.setOption('showLineNumbers', true);
  htmlEditor.setOptions({
      fontSize: "12.5pt",
      showLineNumbers: true,
      vScrollBarAlwaysVisible:false,
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: false
  });

  htmlEditor.setShowPrintMargin(false);
  //htmlEditor.setBehavioursEnabled(false);
}
function loadCSSEditor() {
  if (localStorage.getItem('csscode') === null) {
      defaultCSSValue = ""
  }else{
      defaultCSSValue = localStorage.getItem("csscode")
  }
  //tells ace editor to use editor element , window.editor makes it global in the javascript file
  window.cssEditor = ace.edit("cssEditor");
  cssEditor.resize();
  cssEditor.renderer.updateFull();
  //mode mode
  cssEditor.setTheme("ace/theme/dracula");
  //html mode
  cssEditor.getSession().setMode("ace/mode/css");
  //sample text
  cssEditor.setValue(defaultCSSValue,1); //1 = moves cursor to end
  // when something changed in editor update is called
  cssEditor.getSession().on('change', function() {
      update();
  });
  // puts cursor in the editor
  cssEditor.focus();

  //htmlEditor.setOption('showLineNumbers', true);
  cssEditor.setOptions({
      fontSize: "12.5pt",
      showLineNumbers: true,
      vScrollBarAlwaysVisible:true,
      // enableBasicAutocompletion: true,
      // enableSnippets: true,
      // enableLiveAutocompletion: false
  });

  cssEditor.setShowPrintMargin(false);
  //cssEditor.setBehavioursEnabled(false);
}
function loadJSEditor() {
  if (localStorage.getItem('csscode') === null) {
      defaultJSValue = ""
  }else{
      defaultJSValue = localStorage.getItem("jscode")
  }
  //tells ace editor to use editor element , window.editor makes it global in the javascript file
  window.jsEditor = ace.edit("jsEditor");
  //mode mode
  jsEditor.setTheme("ace/theme/dracula");
  //html mode
  jsEditor.getSession().setMode("ace/mode/javascript");
  //sample text
  jsEditor.setValue(defaultJSValue,1); //1 = moves cursor to end
  // when something changed in editor update is called
  jsEditor.getSession().on('change', function() {
      update();
  });
  // puts cursor in the editor
  jsEditor.focus();
  
  //htmlEditor.setOption('showLineNumbers', true);
  jsEditor.setOptions({
      fontSize: "12.5pt",
      showLineNumbers: true,
      vScrollBarAlwaysVisible:true,
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: false
  });

  jsEditor.setShowPrintMargin(false);
  //htmlEditor.setBehavioursEnabled(false);
}
function setupEditor() {
  loadHTMLEditor();
  loadCSSEditor();
  loadJSEditor();
  update();
}
function ready() {
  setupEditor();
}

//Download Code File
function downloadCode() {
   //1.Create a blob
   const userCode = getUserCode();
   const blob = new Blob([userCode], {type: "text/html"});
   downloadFile(blob,"index.html");
}
//2.function that accepts blob and file name
function downloadFile(blob,fileName) {
  //3.create url for blob
  const url = window.URL.createObjectURL(blob);
  //4.anchor tag to download
  const a = document.createElement('a');
  //Before click we need to add some properties to our anchorTag
  a.href = url;
  a.download = fileName;
  //click event
  a.click();
  //remove anchor tag
  a.remove();

  document.addEventListener("focus",w=>{window.URL.revokeObjectURL(url)})
}

function mostrarHTML(){
  let htmlEditor = document.getElementById("htmlEditor");
  let cssEditor = document.getElementById("cssEditor");
  let jsEditor = document.getElementById("jsEditor");
  let txt1 = document.getElementById("text1")
  let txt2 = document.getElementById("text2")
  let txt3 = document.getElementById("text3")
  txt1.style.backgroundColor = "green"
  txt2.style.backgroundColor = "#21222C"
  txt3.style.backgroundColor = "#21222C"
  htmlEditor.style.display = "block";
  cssEditor.style.display = "none";
  jsEditor.style.display = "none";
}

function mostrarCSS(){
  let htmlEditor = document.getElementById("htmlEditor");
  let cssEditor = document.getElementById("cssEditor");
  let jsEditor = document.getElementById("jsEditor");
  let txt1 = document.getElementById("text1")
  let txt2 = document.getElementById("text2")
  let txt3 = document.getElementById("text3")
  txt1.style.backgroundColor = "#21222C"
  txt2.style.backgroundColor = "green"
  txt3.style.backgroundColor = "#21222C"
  htmlEditor.style.display = "none";
  cssEditor.style.display = "block";
  jsEditor.style.display = "none";
}

function mostrarJS(){
  let htmlEditor = document.getElementById("htmlEditor");
  let cssEditor = document.getElementById("cssEditor");
  let jsEditor = document.getElementById("jsEditor");
  let txt1 = document.getElementById("text1")
  let txt2 = document.getElementById("text2")
  let txt3 = document.getElementById("text3")
  txt1.style.backgroundColor = "#21222C"
  txt2.style.backgroundColor = "#21222C"
  txt3.style.backgroundColor = "green"
  htmlEditor.style.display = "none";
  cssEditor.style.display = "none";
  jsEditor.style.display = "block";
}
