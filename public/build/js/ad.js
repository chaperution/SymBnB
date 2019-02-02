(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/ad"],{

/***/ "./assets/js/JS/ad.js":
/*!****************************!*\
  !*** ./assets/js/JS/ad.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('#add-image').click(function () {
  // récupère le numéro des futurs champs qui vont être créés
  var index = +$('#widgets-counter').val(); // récupère le prototype des entrées

  var tmpl = $('#annonce_images').data('prototype').replace(/__name__/g, index); // injecte ce code au sein de la div

  $('#annonce_images').append(tmpl);
  $('#widgets-counter').val(index + 1); //gère le bouton supprimer

  handleDeleteButtons();
});

function handleDeleteButtons() {
  $('button[data-action="delete"]').click(function () {
    var target = this.dataset.target;
    $(target).remove();
  });
}

function updateCounter() {
  var count = +$('#annonce_images div.form-group').length;
  $('#widgets-counter').val(count);
}

updateCounter();
handleDeleteButtons();

/***/ })

},[["./assets/js/JS/ad.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvSlMvYWQuanMiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiaW5kZXgiLCJ2YWwiLCJ0bXBsIiwiZGF0YSIsInJlcGxhY2UiLCJhcHBlbmQiLCJoYW5kbGVEZWxldGVCdXR0b25zIiwidGFyZ2V0IiwiZGF0YXNldCIsInJlbW92ZSIsInVwZGF0ZUNvdW50ZXIiLCJjb3VudCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JDLEtBQWhCLENBQXNCLFlBQVU7QUFDNUI7QUFDQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JHLEdBQXRCLEVBQWYsQ0FGNEIsQ0FJNUI7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHSixDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkssSUFBckIsQ0FBMEIsV0FBMUIsRUFBdUNDLE9BQXZDLENBQStDLFdBQS9DLEVBQTRESixLQUE1RCxDQUFiLENBTDRCLENBTzVCOztBQUNBRixHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQk8sTUFBckIsQ0FBNEJILElBQTVCO0FBRUFKLEdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCRyxHQUF0QixDQUEwQkQsS0FBSyxHQUFHLENBQWxDLEVBVjRCLENBWTVCOztBQUNBTSxxQkFBbUI7QUFDdEIsQ0FkRDs7QUFnQkEsU0FBU0EsbUJBQVQsR0FBK0I7QUFDM0JSLEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDQyxLQUFsQyxDQUF3QyxZQUFVO0FBQzlDLFFBQU1RLE1BQU0sR0FBRyxLQUFLQyxPQUFMLENBQWFELE1BQTVCO0FBQ0FULEtBQUMsQ0FBQ1MsTUFBRCxDQUFELENBQVVFLE1BQVY7QUFDSCxHQUhEO0FBSUg7O0FBRUQsU0FBU0MsYUFBVCxHQUF5QjtBQUNyQixNQUFNQyxLQUFLLEdBQUcsQ0FBQ2IsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NjLE1BQW5EO0FBRUFkLEdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCRyxHQUF0QixDQUEwQlUsS0FBMUI7QUFDSDs7QUFFREQsYUFBYTtBQUViSixtQkFBbUIsRyIsImZpbGUiOiJqcy9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoJyNhZGQtaW1hZ2UnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgLy8gcsOpY3Vww6hyZSBsZSBudW3DqXJvIGRlcyBmdXR1cnMgY2hhbXBzIHF1aSB2b250IMOqdHJlIGNyw6nDqXNcclxuICAgIGNvbnN0IGluZGV4ID0gKyQoJyN3aWRnZXRzLWNvdW50ZXInKS52YWwoKTtcclxuXHJcbiAgICAvLyByw6ljdXDDqHJlIGxlIHByb3RvdHlwZSBkZXMgZW50csOpZXNcclxuICAgIGNvbnN0IHRtcGwgPSAkKCcjYW5ub25jZV9pbWFnZXMnKS5kYXRhKCdwcm90b3R5cGUnKS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcblxyXG4gICAgLy8gaW5qZWN0ZSBjZSBjb2RlIGF1IHNlaW4gZGUgbGEgZGl2XHJcbiAgICAkKCcjYW5ub25jZV9pbWFnZXMnKS5hcHBlbmQodG1wbCk7XHJcblxyXG4gICAgJCgnI3dpZGdldHMtY291bnRlcicpLnZhbChpbmRleCArIDEpO1xyXG5cclxuICAgIC8vZ8OocmUgbGUgYm91dG9uIHN1cHByaW1lclxyXG4gICAgaGFuZGxlRGVsZXRlQnV0dG9ucygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUJ1dHRvbnMoKSB7XHJcbiAgICAkKCdidXR0b25bZGF0YS1hY3Rpb249XCJkZWxldGVcIl0nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgJCh0YXJnZXQpLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXIoKSB7XHJcbiAgICBjb25zdCBjb3VudCA9ICskKCcjYW5ub25jZV9pbWFnZXMgZGl2LmZvcm0tZ3JvdXAnKS5sZW5ndGg7XHJcblxyXG4gICAgJCgnI3dpZGdldHMtY291bnRlcicpLnZhbChjb3VudCk7XHJcbn1cclxuXHJcbnVwZGF0ZUNvdW50ZXIoKTtcclxuXHJcbmhhbmRsZURlbGV0ZUJ1dHRvbnMoKTsiXSwic291cmNlUm9vdCI6IiJ9