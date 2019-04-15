function chooseCategoryProjects(pageName,elmnt,color) {
  var i, content_projects, projectCategory;
  content_projects = document.getElementsByClassName("content_projects");
  for (i = 0; i < content_projects.length; i++) {
    content_projects[i].style.display = "none";
  }
  projectCategory = document.getElementsByClassName("projectCategory");
  for (i = 0; i < projectCategory.length; i++) {
    projectCategory[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();