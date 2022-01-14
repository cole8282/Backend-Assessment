document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
};




//fortune button
const fortuneButton = document.querySelector("#fortune-button");
//handle fortune button function
function handleFortuneButton() {
  axios.get("http://localhost:4000/api/fortune/")
  .then(function(res) {
    const data = res.data;
    alert(data);
  })
}
//add event listener
fortuneButton.addEventListener("click", handleFortuneButton);
//end of fortune button




//submit button
const submitButton = document.querySelector("#submit-btn");
const ImgUrl = document.querySelector("#url-img");
const dinoBox = document.querySelector("#dino-box");
//handle submit button function
function handleSubmitButton() {

  const objectBody = {
    url: ImgUrl.value
  };

  axios.post("http://localhost:4000/api/submit", objectBody)
  .then(function(res) {
    dinoBox.style.backgroundImage = res.data;
  })
}

submitButton.addEventListener("click", handleSubmitButton);




//change dino
const changeBtn = document.querySelector("#change-btn");

function handleChangeButton() {

//console.log('hello');

let objectBody = {
  color: 'purple'
}

let id = dinoBox;
axios.put('http://localhost:4000/api/change/', objectBody)
.then(function(res) {
  console.log(res.data);
  id.style.borderColor = res.data;
})
}

changeBtn.addEventListener("click", handleChangeButton);




//Delete Dino Button
const deleteButton = document.querySelector("#delete-btn");

function handleDeleteButton() {
//console.log('hello');

  axios.delete(`http://localhost:4000/api/image`)
  .then(function(res) {
    dinoBox.style.removeProperty('background-image');
  })

}

deleteButton.addEventListener("click", handleDeleteButton);
