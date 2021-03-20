function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  const text = document.getElementById('text');

  button.onclick = function () {
    if (!button) 
    {
      return
    } 
      text.hidden = !text.hidden;
    
  }
}
