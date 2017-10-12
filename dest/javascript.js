(function () {
  const numRepeat = 60;
  const main = document.querySelector('#main');

  const twitter = document.querySelector('#twitter');
  const instagram = document.querySelector('#instagram');
  const github = document.querySelector('#github');

  const tClass = ["twitter", "trail", "text-center", "col-4"];
  const iClass = ["instagram", "trail", "text-center", "col-4"];
  const gClass = ["github", "trail", "text-center", "col-4"];

  twitter.addEventListener("mouseenter", e => {
    // console.log(e);
    for (let i = 0; i < numRepeat; i++) {
      addTrail("twitter", tClass, iClass, gClass);
    }
  });

  instagram.addEventListener("mouseenter", e => {
    // console.log(e.srcElement.classList.contains("twitter"));
    for (let i = 0; i < numRepeat; i++) {
      addTrail("instagram", tClass, iClass, gClass);
    }
  });

  github.addEventListener("mouseenter", e => {
    // console.log(e.srcElement.classList.contains("twitter"));
    for (let i = 0; i < numRepeat; i++) {
      addTrail("github", tClass, iClass, gClass);
    }
  });

  twitter.addEventListener("mouseout", e => {
    removeTrail();
  });

  instagram.addEventListener("mouseout", e => {
    removeTrail();
  });

  github.addEventListener("mouseout", e => {
    removeTrail();
  });

  function addTrail(type, tClass, iClass, gClass) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.id = "kids";
    let twit = document.createElement('div');
    let inst = document.createElement('div');
    let git = document.createElement('div');

    if (type == "github") {
      git.classList.add(...gClass);
      inst.classList.add(...["text-center", "col-4"]);
      twit.classList.add(...["text-center", "col-4"]);
    }
    if (type == "instagram") {
      git.classList.add(...["text-center", "col-4"]);
      inst.classList.add(...iClass);
      twit.classList.add(...["text-center", "col-4"]);
    }
    if (type == 'twitter') {
      git.classList.add(...["text-center", "col-4"]);
      inst.classList.add(...["text-center", "col-4"]);
      twit.classList.add(...tClass);
    }
    row.appendChild(git);
    row.appendChild(inst);
    row.appendChild(twit);

    main.appendChild(row);
  }

  function removeTrail() {
    let row = document.querySelectorAll('#kids');
    for (let i in row) {
      if (typeof row[i] == "object") {
        row[i].remove();
      }
    }
  }

})();
