var config = {
  gcseId: '006267341911716099344:r_iziouh0nw',
  resultsUrl: 'http://localhost:4000',
  searchWrapperClass: 'gcse-search-wrapper',
  resultsWrapperClass: 'gcse-results-wrapper'
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

  if (gsceSearchForms) {
    renderSearch(gsceSearchForms[0]);
  }
  if (gsceResults) {
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
    if (div.dataset &&
        div.dataset.stylingFunction &&
        window[div.dataset.stylingFunction] &&
        typeof window[div.dataset.stylingFunction] === 'function') {
      window[div.dataset.stylingFunction](form);
    }
};

var renderResults = function(div) {
  google.search.cse.element.render(
    {
      div: div.id,
      tag: 'searchresults-only'
    });
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
  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
    '//cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();