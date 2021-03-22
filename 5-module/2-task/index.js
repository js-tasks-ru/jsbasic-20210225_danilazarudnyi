function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  const text = document.getElementById('text');

  button.onclick = () => {
      text.hidden = !text.hidden;
  }
}
