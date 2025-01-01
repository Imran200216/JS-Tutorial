isHalwaThere = false;

function waitInQueue() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isHalwaThere
        ? resolve("I bought Halwa")
        : reject("I'm sorry there is no Halwa");
    }, 1000);
  });
}

function buyHalwa() {
  waitInQueue()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally (()=> {
        console.log("Go Home Happily!!!");
    });
}

buyHalwa();
