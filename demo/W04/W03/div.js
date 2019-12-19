function changeColor(index) {
  const p = document.getElementById("section");
  console.log(p);

  // if (index === 1) p.style.backgroundColor = "lightyellow";

  // if (index === 2) p.style.backgroundColor = "skyblue";

  // if (index === 3) p.style.backgroundColor = "lightgreen";

  switch (index) {
    case 1:
      p.style.backgroundColor = "lightyellow";
      break;
    case 2:
      p.style.backgroundColor = "skyblue";
      break;
    case 3:
      p.style.backgroundColor = "lightgreen";
      break;
  }
}
