(function ($) {
  $(document).ready(function() {

    $(document).on('click.chip', '.chip i', function (e) {
      $(this).parent().remove();
    });

  });
}( jQuery ));
