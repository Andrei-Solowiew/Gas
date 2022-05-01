document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.volume__btn').forEach(function(volume__btn){
    volume__btn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll(".volume__img").forEach(function (volume__img) {
        volume__img.classList.remove("volume__img_active");
      });
      document.querySelectorAll(".volume__btn").forEach(function (volume__btn) {
        volume__btn.classList.remove("volume__btn_active");
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('volume__img_active')
      document.querySelector(`[data-path="${path}"]`).classList.add("volume__btn_active");
  })
})
})