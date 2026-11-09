$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    if ($(".cv").length) {
      // Bootstrap's scrollspy force-highlights only the last entry once the
      // page bottom is reached, so the CV's short trailing sections (e.g.
      // Certificates, Languages) can never be highlighted on their own, and
      // clicking them leaves the previous section active. Track the active
      // section ourselves instead, and let a click pin its own section.
      initCvScrollSpy(navSelector);
    } else {
      $("body").scrollspy({
        target: navSelector,
        offset: 100,
      });
    }
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });

  // Active-section highlighting for the CV sidebar (replaces Bootstrap
  // scrollspy, whose bottom-of-page clamp prevents the last short sections
  // from ever being highlighted).
  function initCvScrollSpy(navSelector) {
    var $links = $(navSelector + " a.nav-link");
    var items = [];
    $links.each(function () {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        items.push({ link: this, target: target });
      }
    });
    if (!items.length) {
      return;
    }

    var pinnedUntil = 0; // ignore scroll-driven updates briefly after a click

    function setActive(link) {
      $links.removeClass("active");
      $(link).addClass("active");
    }

    function currentIndex() {
      var line = 140; // activation line just below the fixed navbar
      var index = 0;
      for (var i = 0; i < items.length; i++) {
        if (items[i].target.getBoundingClientRect().top <= line) {
          index = i;
        } else {
          break;
        }
      }
      // At the very bottom the trailing sections cannot reach the activation
      // line, so highlight the last section whose heading is on screen.
      var atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        for (var j = items.length - 1; j >= 0; j--) {
          var top = items[j].target.getBoundingClientRect().top;
          if (top >= 0 && top <= window.innerHeight) {
            index = j;
            break;
          }
        }
      }
      return index;
    }

    function onScroll() {
      if (Date.now() < pinnedUntil) {
        return;
      }
      setActive(items[currentIndex()].link);
    }

    $links.on("click", function () {
      setActive(this);
      pinnedUntil = Date.now() + 1000; // keep the clicked section highlighted
    });

    $(window).on("scroll resize", onScroll);
    onScroll();
  }
});
