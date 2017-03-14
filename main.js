"use strict"
function e(selector){
  /* Init */
  let self = {};
  self.selector = selector;
  self.element = document.querySelector(self.selector);
  /* Get HTML Of a element */
  self.html = function(){
    return self.element
  }
  /* Set an Attr */
  self.attr = function(name, val){
    if(!val) return self.element.getAttribute(name);
    self.element.setAttribute(name, val);
    return self;
  }
  /* Event listener */
  self.on = function(type, callback){
    self.element['on' + type] = callback;
    return self;
  }
  /* Dimensions */
  self.height = function(){
    return self.element.offsetHeight;
  }
  self.width = function(){
    return self.element.offsetWidth;
  }
  /* Get Parent element */
  self.parent = function(){
    self.element = self.element.parentNode;
    return self;
  }
  /* Get Children Elements */
  self.children = function(){
    self.element = self.element.childNodes;
    return self;
  }
  /* Get amount of children */
  self.childrenLength = function(){
    self.element = self.element.childNodes.length;
    return self;
  }
  /* Set Css */
  self.css = function(name, val){
    self.element = self.element.style[name] = val;
    return self;
  }
  /* Hide a element */
  self.hide = function(){
    self.element = self.element.style.visibility = 'hidden';
    return self;
  }
  /* Show a element */
  self.show = function(){
    self.element = self.element.style.visibility = 'visible';
    return self;
  }
  /* Append text */
  self.append = function(val){
    self.element = self.element.insertAdjacentHTML('beforeend', val)
    return self;
  }
  /* Prepend text */
  self.prepend = function(val){
    self.element = self.element.insertAdjacentHTML('afterbegin', val)
  }
  /* Ajax */
  self.ajax = function(type, data, to, callback){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
        if (xmlhttp.status == 200) {
          callback(xmlhttp.responseText)
        }
        else if (xmlhttp.status == 400) {
          alert('There was an error 400');
        }
        else {
          alert('something else other than 200 was returned');
        }
      }
    };
    if(type.toLowerCase() == 'post'){
      xmlhttp.open("POST", to, true);
      xmlhttp.send(data);
    }else{
      xmlhttp.open("GET", to, true);
      xmlhttp.send();
    }
  }
  if(typeof(window.e) === 'undefined'){
    window.e = e()
  }
  return self
}
