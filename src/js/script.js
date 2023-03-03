// 1
// let input = document.getElementById("input-name"); // Отримуємо поле вводу
// input.addEventListener("input", function() { // Додаємо обробник події для поля вводу
//   let regex = /[^a-zA-Z]/g; // Визначаємо регулярний вираз для перевірки на наявність не-буквенних символів
//   input.value = input.value.replace(regex, ""); // Замінюємо будь-які не-буквенні символи на порожній рядок
// });

//2 

// document.getElementById("open").addEventListener("click", (event) => {
//   event.preventDefault();
//   const div = document.getElementById("window");
//   div.classList.add("d-block");
// })
// document.getElementById("close").addEventListener("click", (event) => {
//   event.preventDefault();
//   const div = document.getElementById("window");
//   div.classList.add("d-none");
//   div.classList.remove("d-block");
//   div.classList.remove("d-none");
// })

// 3

// item.onclick = function(event) {

//   let fieldCoords = this.getBoundingClientRect();

//   let ballCoords = {
//     top: event.clientY - fieldCoords.top - item.clientTop - bool.clientHeight / 2,
//     left: event.clientX - fieldCoords.left - item.clientLeft - bool.clientWidth / 2
//   };
  

//   bool.style.left = ballCoords.left + 'px';
//   bool.style.top = ballCoords.top + 'px';
// }
 
// 4 

//   let wr = newDiv = null;
//   function color(){

//     document.getElementById("next").addEventListener("click", (event) => {
//       event.preventDefault();
//       let div = document.getElementById("one");
//        div.classList.add("circleColorOne");
      
   
//        document.getElementById("next").addEventListener("click", (event) => {
//          event.preventDefault();
//          let div = document.getElementById("two");
//           div.classList.add("circleColorTwo");
//           one.classList.remove("circleColorOne");
   
   
//           document.getElementById("next").addEventListener("click", (event) => {
//            event.preventDefault();
//            let div = document.getElementById("thre");
//             div.classList.add("circleColorThre");
//             two.classList.remove("circleColorTwo");
         
//             document.getElementById("next").addEventListener("click", (event) => {
//               event.preventDefault();
//               thre.classList.remove("circleColorThre");
//            color()
//  })
//         })
//       })
   
//    })

   
//   }
//   color()

// 5

// let prevSelected = null;
// function changeColor(book) {
//  if (prevSelected != null) {
//   prevSelected.classList.remove("active");
//  }
//  if (book != prevSelected) {
//   book.classList.add("active");
//   prevSelected = book;
//  } else {
//   prevSelected = null;
//  }
// }

// 6

// function showTooltip(event, text) {
//   let tooltip = document.createElement("div");
//   tooltip.className = "tooltip";
//   tooltip.innerHTML = text;
//   document.body.appendChild(tooltip);

//   let x = event.clientX;
//   let y = event.clientY;
//   let button = event.target;
//   let buttonRect = button.getBoundingClientRect();
//   let tooltipRect = tooltip.getBoundingClientRect();

//   if (y - tooltipRect.height > 0) {
//     tooltip.style.top = y - tooltipRect.height - 10 + "px";
//   } else {
//     tooltip.classList.add("bottom");
//     tooltip.style.top = buttonRect.bottom + 10 + "px";
//   }

//   tooltip.style.left = x - tooltipRect.width / 2 + "px";

//   tooltip.style.visibility = "visible";

//   button.addEventListener("mouseout", function() {
//     document.body.removeChild(tooltip);
//   });
// }


//7

// // Функція для розгортання/згортання елементів списку
// function toggleNode(node) {
//   let ul = node.querySelector("ul");
//   if (ul) {
//     ul.style.display = ul.style.display === "none" ? "block" : "none";
//     node.classList.toggle("collapsed");
//   }
// }

// // Функція для обробки події натискання на елемент списку
// function handleNodeClick(event) {
//   toggleNode(event.target);
// }

// // Функція для обробки події наведення на елемент списку
// function handleNodeHover(event) {
//   event.target.style.fontWeight = "bold";
// }

// // Функція для обробки події відведення курсора миші від елементу списку
// function handleNodeHoverOut(event) {
//   event.target.style.fontWeight = "normal";
// }