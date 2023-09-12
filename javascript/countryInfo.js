fetch("https://ap-countries-api.vercel.app/all")
  .then((response) => response.json())
  .then((json) => displayCountry(json))
  .catch((err) => console.log(err));

let takenId = localStorage.getItem("cID");
let infoBox = document.querySelector(".infoBox");
function displayCountry(country) {
  let str = "";
  let takenCountry = country.data.filter((el, id) => id == takenId);

  takenCountry.map((el) => {
    str += `
        <div class="pt-5 d-flex justify-content-between country_info">
        <div
          class="info_left w-50 d-flex justify-content-center align-items-center"
        >
          <img
            class="Info_flag rounded-4"
            src="${el.flags.svg}"
            alt=""
          />
        </div>
        <div
          class="info_right w-50 h-50 d-flex justify-content-center align-items-center"
        >
          <div class="info d-flex">
            <div class="column_first">
              <h3 class="country_name">${el.name.common}</h3>
              <p><b>Native Name:</b> ${
                el.name.nativeName[Object.keys(el.name.nativeName)[0]].common
              }</p>
              <p><b>Population:</b> ${el.population}</p>
              <p><b>Region:</b> ${el.region}</p>
              <p><b>Sub Region:</b> ${el.subregion}</p>
              <p><b>Capital:</b> ${el.capital}</p>
              <p><b>Border Countries:</b> ${el.borders}</p>
            </div>
            <div class="column_second">
              <p><b>Top Level Domain:</b> ${el.region.tld}</p>
              <p><b>Currency:</b> ${
                el.currencies[Object.keys(el.currencies)[0]].name
              }</p>
              <p><b>Languages</b> ${Object.values(el.languages)}</p>
            </div>
          </div>
        </div>
      </div>        
        `;
  });

  infoBox.innerHTML = str;
}
