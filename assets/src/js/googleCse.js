var config = {
  gcseId: '016130350098041355706:l20woy8yibs',
  resultsUrl: 'http://localhost:4000/search',
  searchWrapperClass: 'gcse-search-wrapper',
  resultsWrapperClass: 'gcse-results-wrapper',
};

var renderSearchForms = function () {
  if (document.readyState == 'complete') {
    queryAndRender();
  } else {
    google.setOnLoadCallback(function () {
      queryAndRender();
    }, true);
  }
};

var queryAndRender = function() {
  var gsceSearchForms = document.querySelectorAll('.' + config.searchWrapperClass);
  var gsceResults = document.querySelectorAll('.' + config.resultsWrapperClass);

  if (gsceSearchForms && !(gsceSearchForms[0] === undefined)) {
    renderSearch(gsceSearchForms[0]);
  }
  if (gsceResults && !(gsceResults[0] === undefined)) {
    renderResults(gsceResults[0]);
  }
};

var renderSearch = function (div) {
    google.search.cse.element.render(
      {
        div: div.id,
        tag: 'searchbox-only',
        attributes: {
          resultsUrl: config.resultsUrl
        }        
      }
    );

      var container = div.querySelector(".gsc-control-searchbox-only");
      container.style.backgroundColor = "transparent";
      container.style.borderColor = "transparent";
      container.style.marginTop = "16px";
      var searchButton = div.querySelector("input.gsc-search-button");
      searchButton.style.display = "none";

      var inputField = div.querySelector("input.gsc-input");
      var tdField = div.querySelector("input.gsc-input td");

      if (inputField != null) {
        inputField.placeholder = "Search ExPatPup";
        inputField.style.background = "none";
        inputField.style.textIndent = "0px";

        // The background will get re-attached on blur, so add an event that will also remove it on blur
        // Another way to do this would be to de-attach the element from the DOM and then re-attach again, hence wiping the listeners
        inputField.addEventListener("blur", function() {
          inputField.style.background = "none";
          inputField.style.textIndent = "0px";
        });
      }

      if (tdField != null) {
        // tdField.style.paddingTop = "2px";
      }
};

var renderResults = function(div) {
  div.style.borderStyle = "solid";
  google.search.cse.element.render(
    {
      div: div.id,
      tag: 'searchresults-only'
    });
    var results = $(".gsc-control-cse");  
};

window.__gcse = {
  parsetags: 'explicit',
  callback: renderSearchForms
};

(function () {
  var cx = config.gcseId;
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  // gcse.async = false;
  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
    '//cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();