const http = axios.create({
    baseURL: "http://localhost:8000"
});

const buttons = document.querySelectorAll('.delete-queen')

buttons.forEach((button) => {
    button.onclick = () => {
        http.delete(`/drags/${button.value}`)
          .then(() => {
            button.parentElement.parentElement.parentElement.remove()
          })
          .catch(e => console.log(e))
    }
})

const buttonsActivateAllStars = document.querySelectorAll('.btn-activate-allstars');

buttonsActivateAllStars.forEach((button) => {
  button.onclick = () => {
    const activate = button.value === "activate";

    http.patch(`/drags/${button.id}`, {
      allStars: activate
    })
      .then(() => {
        button.classList.toggle("btn-success");
        button.classList.toggle("btn-warning");

        const activateText = "All Stars";
        const disableText = "Not All Stars";

        button.textContent = activate ? disableText : activateText;

        button.value = activate ? "disable" : "activate"
      })
      .catch(e => console.log(e))
  }
})