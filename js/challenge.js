let counterVal;
let form = document.querySelector("form");
let interId;
let clicks = 0;

const timer = document.getElementById("counter");
// setInterval( function ()
// {
//     a= parseInt(timer.innerText),timer.innerText = a+1
// }, 1e3)


counts();
// minus.addEventListener("click", countMinus);
// plus.addEventListener("click", countPlus);
// heart.addEventListener("click", likeLists);
// pause.addEventListener("click", pauseBtn);

function counts() {
  if (!interId) {
    interId = setInterval(() => {
      counterVal = parseInt(counter.innerText);
      counterVal++;
      counter.innerText = counterVal;
    }, 1000);
  }
}

const minusBtn = document.getElementById("minus");
minusBtn.addEventListener("click", (counterValue) => {
  counterValue = parseInt(timer.innerText);
  counterValue -= 1;
  timer.innerText = counterValue;
});
const plusBtn = document.getElementById("plus");
plusBtn.addEventListener("click", () => {
  counterValue = parseInt(timer.innerText);
  counterValue += 1;
  timer.innerText = counterValue;
});
const likerHeart = document.getElementById("heart");
likerHeart.addEventListener("click", () => {
  counterValue = parseInt(timer.innerText);
  clicks += 1;

  const lists = document.querySelectorAll("li");
  if (lists.length === 0) {
    clicks = 0;
    createLikes(counterValue, clicks);
  } else {
    const lastNumber = parseInt(lists[lists.length - 1].dataset.number);
    if (counterValue === lastNumber) {
      lists[lists.length - 1].innerHTML = `<p>${counterValue} has been liked`;
    }
    else
    {
      clicks = 0;
      createLikes(counterValue, clicks)
    }
  }
});
const likes = document.querySelector(".likes");
const list = document.querySelector( "#list" );

function createLikes(counterValue, clicks) {
  const newLike = document.createElement("li");
  newLike.setAttribute("data-num", counterValue);
  newLike.innerHTML = `<p>${counterValue} has been liked <span>${clicks + 1}</span> time</p>`;
  likes.appendChild(newLike)
}

const pauseBtn = document.getElementById("pause");
pauseBtn.addEventListener("click", () => {
  if (pause.innerText === "pause") {
    clearInterval(interId);
    interId = null;
    document.querySelectorAll("button").forEach((btn) => {
      if (btn.id !== "pause") {
        btn.disabled = true;
      }
    });
    pause.innerText = "resume";
  } else if (pause.innerText === "resume") {
    counts();
    document.querySelectorAll("button").forEach((btn) => {
      if (btn.id !== "pause") {
        btn.disabled = false;
      }
    });
    pause.innerText = "pause";
  }
});
function leaveComment(comment) {
  const newComment = document.createElement("p");
  newComment.innerText = comment;
  list.appendChild(newComment);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const comment = e.target.querySelector("#comment-input").value;
  leaveComment(comment);
  form.reset();
})



