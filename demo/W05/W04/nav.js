function changeNav(index) {
  const p = document.getElementById("section");
  console.log(p);

  switch (index) {
    case 1:
      p.innerHTML = '<iframe width=99.3% height=99.3% src="./W01/intro.html">';
      break;

    case 2:
      p.innerHTML = '<iframe width=99.3% height=99.3% src="./W01/table.html">';
      break;

    case 3:
      p.innerHTML =
        '<iframe width=99.3% height=99.3% src="./W02/imageGallery.html">';
      break;

    case 4:
      p.innerHTML = '<iframe width=99.3% height=99.3% src="./W02/blog.html">';
      break;

    case 5:
      p.innerHTML = '<iframe width=99.3% height=99.3% src="./W03/div.html">';
      break;

    case 6:
      p.innerHTML = '<iframe width=99.3% height=99.3% src="./W04/tku60.html">';
      break;
  }
}
