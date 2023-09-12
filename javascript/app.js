const flagBox = document.querySelector(".Country_flags");

fetch("https://ap-countries-api.vercel.app/all")
  .then((response) => response.json())
  .then((json) => displayCountries(json))
  .catch((err) => console.log(err));

let displayCountries = (country) => {
  let str = ``;
  country.data.map((el, i) => {
    str += `
    <div class="card"  >
        <img
          class="card-img-top"
          src="${el.flags.png}"
          alt=""
          style="width:267px; max-height:160"
        />
        <div class="card-body">
          <h5 class="card-title">${el.name.common}</h5>
          <p class="card-text"><b>Population:</b> ${el.population}</p>
          <p class="card-text"><b>Region:</b> ${el.region}</p>
          <p class="card-text"><b>Capital:</b> ${el.capital}</p>
          <button onclick="showCountry(${i})" class="btn btn-outline-primary">
          More Info
          </button>

          </div>
    </div>
`;
  });

  flagBox.innerHTML = str;
};

let showCountry = (id) => {
  window.location = "./countryInfo.html";
  localStorage.setItem("cID", id);
};

document.querySelector(".card").addEventListener("click", showCountry);
