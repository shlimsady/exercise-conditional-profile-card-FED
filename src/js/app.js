import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  let cover = variables.includeCover
    ? `<div class="cover"><img src="${variables.background}" /></div>`
    : '<div class="cover"></div>';

  let twitterUrl = variables.twitter
    ? `https://twitter.com/${variables.twitter}`
    : "#";
  let githubUrl = variables.github
    ? `https://github.com/${variables.github}`
    : "#";
  let linkedinUrl = variables.linkedin
    ? `https://www.linkedin.com/in/${variables.linkedin}`
    : "#";
  let instagramUrl = variables.instagram
    ? `https://www.instagram.com/${variables.instagram}`
    : "#";

  let socialMediaPositionClass = variables.socialMediaPosition
    ? variables.socialMediaPosition
    : "";

  let name = variables.name ? variables.name : "";
  let lastName = variables.lastName ? variables.lastName : "";
  let age = variables.age ? variables.age : "";
  let role = variables.role ? variables.role : "";
  let city = variables.city ? variables.city : "";
  let country = variables.country ? variables.country : "";

  let html = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL}" class="photo" />
      <h1>${name} ${lastName} ${age}</h1>
      <h2>${role}</h2>
      <h3>${city} ${country}</h3>
      <ul class="${socialMediaPositionClass}">
        <li><a href="${twitterUrl}" target="_blank"><i class="fab fa-twitter"></i></a></li>
        <li><a href="${githubUrl}" target="_blank"><i class="fab fa-github"></i></a></li>
        <li><a href="${linkedinUrl}" target="_blank"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="${instagramUrl}" target="_blank"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  `;

  document.querySelector("#widget_content").innerHTML = html;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    youtube: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null,
    age: null
  };

  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
