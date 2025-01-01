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

async function buyHalwa() {
  try {
    let result = await waitInQueue();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

buyHalwa();
