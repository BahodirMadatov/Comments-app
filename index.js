// // function sendMessage() {
// //     const nameInput = document.getElementById("name");
// //     const commentInput = document.getElementById("comment");
// //     const dateInput = document.getElementById("date");
// //     const chatMessages = document.getElementById("chat-messages");

// //     const name = nameInput.value;
// //     const comment = commentInput.value;
// //     const date = new Date(dateInput.value);

// //     if (name === "" || comment === "" || dateInput.value === "") {
// //         alert("Please fill in all fields");
// //         return;
// //     }

// //     const today = new Date();
// //     const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

// //     let messageDate = date.toLocaleDateString();
// //     if (date.toDateString() === today.toDateString()) {
// //         messageDate += " Today";
// //     } else if (date.toDateString() === yesterday.toDateString()) {
// //         messageDate += " Yesterday";
// //     }

// //     const message = document.createElement("div");
// //     message.classList.add("message");
// //     message.innerHTML = `
// //       <div class="message__info">
// //         <span class="message__name">${name}</span>
// //         <span class="message__date">${messageDate}</span>
// //       </div>
// //       <div class="message-text">${comment}</div>
// //     `;
// //     chatMessages.appendChild(message);

// //     nameInput.value = "";
// //     commentInput.value = "";
// //     dateInput.value = "";
// // }


// function sendMessage() {
//   const nameInput = document.getElementById("name");
//   const commentInput = document.getElementById("comment");
//   const dateInput = document.getElementById("date");
//   const chatMessages = document.getElementById("chat-messages");

//   const name = nameInput.value;
//   const comment = commentInput.value;
//   let date = dateInput.value;

//   if (name === "" || comment === "") {
//       alert("Please fill in all fields");
//       return;
//   }

//   // If no date is entered, use current date
//   if (!date) {
//       const today = new Date();
//       const year = today.getFullYear();
//       const month = (today.getMonth() + 1).toString().padStart(2, "0");
//       const day = today.getDate().toString().padStart(2, "0");
//       date = `${year}-${month}-${day}`;
//   }

//   const messageDate = new Date(date);

//   const today = new Date();
//   const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

//   let messageDateStr = messageDate.toLocaleDateString();
//   if (messageDate.toDateString() === today.toDateString()) {
//       messageDateStr += " Today";
//   } else if (messageDate.toDateString() === yesterday.toDateString()) {
//       messageDateStr += " Yesterday";
//   }

//   const message = document.createElement("div");
//   message.classList.add("message");
  // message.innerHTML = `
  //   <div class="message__info">
  //     <span class="message__name">${name}</span>
  //     <span class="message__date">${messageDateStr}</span>
  //     <button class="message__remove-button"><img src="images/icons8-trash-can.svg"></img></button>
  //   </div>
  //   <div class="message-text">${comment}</div>
  // `;
//   chatMessages.appendChild(message);


//   const removeButton = message.querySelector(".message__remove-button");
//   removeButton.addEventListener("click", () => {
//     removeMessage(message);
//   });


//   nameInput.value = "";
//   commentInput.value = "";
//   dateInput.value = "";
// }


// function removeMessage(message) {
//   message.remove();
// }

// const nameInput = document.getElementById("name");
// const commentInput = document.getElementById("comment");
// const dateInput = document.getElementById("date");

// nameInput.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         sendMessage();
//     }
// });

// commentInput.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         sendMessage();
//     }
// });

// dateInput.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         sendMessage();
//     }
// });


//////////////////////////////////////////////

// function addComment(name, comment, date) {
//   const chatMessages = document.getElementById("chat-messages");

//   const message = document.createElement("div");
//   message.classList.add("message");

//   const messageInfo = document.createElement("div");
//   messageInfo.classList.add("message__info");

//   const messageName = document.createElement("span");
//   messageName.classList.add("message__name");
//   messageName.textContent = name;
//   messageInfo.appendChild(messageName);

//   const messageDate = document.createElement("span");
//   messageDate.classList.add("message__date");
//   messageDate.textContent = formatDate(date);
//   messageInfo.appendChild(messageDate);

//   message.appendChild(messageInfo);

//   const messageText = document.createElement("div");
//   messageText.classList.add("message-text");
//   messageText.textContent = comment;
//   message.appendChild(messageText);

//   const messageActions = document.createElement("div");
//   messageActions.classList.add("message-actions");

//   const likeButton = document.createElement("a");
//   likeButton.classList.add("like__button");
//   likeButton.innerHTML = `<img class="like__icon" src="images/heart-svgrepo-com.svg">`;
//   likeButton.addEventListener("click", function() {
//     this.classList.add("liked");
//     likeButton.style.color = "red";
//   });
//   messageActions.appendChild(likeButton);

//   const removeButton = document.createElement("a");
//   removeButton.classList.add('remove__div')
//   removeButton.innerHTML = `
//     <img src="images/icons8-trash-can.svg">
//   `;
//   removeButton.addEventListener("click", function() {
//     this.closest(".message").remove();
//   });
//   messageActions.appendChild(removeButton);

//   message.appendChild(messageActions);

//   chatMessages.appendChild(message);
// }

// function sendMessage() {
//   const nameInput = document.getElementById("name");
//   const commentInput = document.getElementById("comment");
//   const dateInput = document.getElementById("date");

//   const name = nameInput.value;
//   const comment = commentInput.value;
//   const date = dateInput.value ? new Date(dateInput.value) : new Date();

//   if (name === "" || comment === "") {
//     alert("Please fill in all fields");
//     return;
//   }

//   addComment(name, comment, date);

//   nameInput.value = "";
//   commentInput.value = "";
//   dateInput.value = "";
// }

// function formatDate(date) {
//   const today = new Date();
//   const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

//   let messageDate = date.toLocaleDateString();
//   if (date.toDateString() === today.toDateString()) {
//     messageDate += " Today";
//   } else if (date.toDateString() === yesterday.toDateString()) {
//     messageDate += " Yesterday";
//   }

//   return messageDate;
// }

// const sendButton = document.getElementById


// const nameInput = document.getElementById("name");
// const commentInput = document.getElementById("comment");
// const dateInput = document.getElementById("date");

// nameInput.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         sendMessage();
//     }
// });

// commentInput.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         sendMessage();
//     }
// });

// dateInput.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         sendMessage();
//     }
// });

//////////////////////////////////////

function sendMessage() {
  const nameInput = document.getElementById("name");
  const commentInput = document.getElementById("comment");
  const dateInput = document.getElementById("date");
  const chatMessages = document.getElementById("chat-messages");

  const name = nameInput.value;
  const comment = commentInput.value;
  const date = dateInput.value ? new Date(dateInput.value) : new Date();

  if (name === "" || comment === "") {
      alert("Please fill in all fields");
      return;
  }

  const today = new Date();
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  let messageDate = date.toLocaleDateString();
  if (date.toDateString() === today.toDateString()) {
      messageDate += " Today";
  } else if (date.toDateString() === yesterday.toDateString()) {
      messageDate += " Yesterday";
  }

  const message = document.createElement("div");
  message.classList.add("message");

  const messageInfo = document.createElement("div");
  messageInfo.classList.add("message__info");

  const messageName = document.createElement("span");
  messageName.classList.add("message__name");
  messageName.innerText = name;

  const messageDateElem = document.createElement("span");
  messageDateElem.classList.add("message__date");
  messageDateElem.innerText = messageDate;

  const messageText = document.createElement("div");
  messageText.classList.add("message-text");
  messageText.innerText = comment;

  const likeButton = document.createElement("a");
  likeButton.classList.add("message__like-btn");
  likeButton.innerHTML = `<img class="like__icon" src="images/heart-svgrepo-com.svg">`;
  likeButton.addEventListener("click", () => {
      if (likeButton.classList.contains("liked")) {
          likeButton.classList.remove("liked");
      } else {
          likeButton.classList.add("liked");
      }
  });
  messageInfo.appendChild(messageName);
  messageInfo.appendChild(messageDateElem);
  messageInfo.appendChild(likeButton);

  const removeButton = document.createElement("a");
  removeButton.classList.add("message__remove-btn");
  removeButton.innerHTML = `<img src="images/icons8-trash-can.svg">`;
  removeButton.addEventListener("click", () => {
      message.remove();
  });
  message.appendChild(messageInfo);
  message.appendChild(messageText);
  message.appendChild(removeButton);

  chatMessages.appendChild(message);

  nameInput.value = "";
  commentInput.value = "";
  dateInput.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const commentInput = document.getElementById("comment");
  commentInput.addEventListener("keydown", (event) => {
      if (event.keyCode === 13 && !event.shiftKey) {
          event.preventDefault();
          sendMessage();
      }
  });
});