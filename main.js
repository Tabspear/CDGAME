// Step 1 Create an event listener
// Step 2 When user clicks x or o shows
let allBoxes = document.querySelectorAll("#grid div");
X = `<p id="x_text">&#88</p>`;
O = `<p id="x_text">&#79</p>`;

//Winning cases

let firstRow = [0, 3, 6];
let secondRow = [1, 4, 7];
let thirdRow = [2, 5, 8];
let firstColumn = [0, 1, 2];
let secondColumn = [3, 4, 5];
let thirdColumn = [6, 7, 8];
let DiagonalColumn = [0, 4, 8];
let secDiagonalColumn = [6, 4, 2];


//Array of Arrays
const winningArr = [firstRow,
  secondRow,
  thirdRow,
  firstColumn,
  secondColumn,
  thirdColumn,
  DiagonalColumn,
  secDiagonalColumn
]
// Function that compares two array
function CompareArr(winArr, playArr) {
  let isFound = false;
  for (let i = 0; i < winArr.length; i++) {
    for (let j = 0; j < playArr.length; j++) {
      if (winArr[i] === playArr[j]) {
        isFound = true;
        break;
      } else {
        isFound = false;
      }
    }
    

    if(isFound === false){
      return isFound
    }
  }
  return isFound;
}


// const winningArr = firstRow.concat(
//   secondRow,
//   thirdRow,
//   firstColumn,
//   secondColumn,
//   thirdColumn,
//   DiagonalColumn,
//   secDiagonalColumn
// );
// console.log(winningArr);

for (let i = 0; i < allBoxes.length; i++) {
  allBoxes[i].id = "xop_" + i;
  console.log(allBoxes[i].id);
  allBoxes[i].addEventListener("click", displayCharX);
  function displayCharX() {
    allBoxes[i].innerHTML = X;
    console.log(allBoxes[i]);
    allBoxes[i].removeEventListener("click", displayCharX);
  }

  // Draw case 1
  // switch (allBoxes[i]) {
  //   case allBoxes[0]:
  //     renderO(allBoxes[4]);
  //     break;

  //   case allBoxes[8] || allBoxes[5]:
  //     renderO(allBoxes[1]);
  //     break;
  //   case allBoxes[5]:
  //     renderO(allBoxes[2]);
  //     break;
  //   case allBoxes[6]:
  //     renderO(allBoxes[3]);
  //     break;
  //   case allBoxes[7] || allBoxes[8]:
  //     renderO(allBoxes[8]) || renderO(allBoxes[7]);
  //     break;

  //   case allBoxes[7]:
  //     renderO(allBoxes[6]) || renderO(allBoxes[8]);
  //     break;
  //   case allBoxes[3] || allBoxes[6]:
  //     renderO(allBoxes[6] || renderO(allBoxes[4]));

  //   case allBoxes[2]:
  //     renderO(allBoxes[5] || renderO(allBoxes[8]));
  //     break;
  //   case allBoxes[3]:
  //     //  alert("This game is a draw")
  //     break;
  // }

  //Winning Case
  // console.log(CompareArr(firstColumn, allBoxes))
}
console.log(CompareArr(winningArr[7], [allBoxes]));
//Render O
function renderO(item) {
  item.innerHTML = `<p id="x_text">&#79</p>`;
}

//document.getElementById('grid').removeEventListener('click', displayCharX)
//Reload page content
let reset = document.getElementById("T_btn");
reset.addEventListener("click", () => {
  location.reload();
});
