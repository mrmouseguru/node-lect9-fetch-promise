export default class App {
  constructor() {
    this._onClickBetter = this._onClickBetter.bind(this);

    let button = document.querySelector("#button");
    button.addEventListener("click", this._onClickBetter);
  }

  _onClick(event) {

    console.log("Clicked !!!");
    let p =  fetch("myfile.txt");//return promise
    p.then((response) =>{
        let p2 = response.text();//retrun promise + data
        p2.then((text) =>{

          let p3 = fetch("person.json");//return promise + response
          p3.then((response2) => {

            let p4 = response2.json();//return promise + data
            p4.then((obj) =>{
              document.querySelector("#results")
              .textContent =
               `${text}\n${obj.givenName} ${obj.surname}`;
            }

          )

          

        })
    })
  })
}

async _onClickBetter(event){

  //await
  let p = await fetch("myfile.txt");//return promise and response
  let text = await p.text();//return promise + text data

  let p2 = await fetch("person.json");//return promise and response
  let obj = await p2.json();//return promimse + json data


  document.querySelector("#results").textContent = 
  `${text}\n${obj.givenName} ${obj.surname}`;

}
}