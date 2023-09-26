function random(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(() => {
    console.log("f1");
    if (callback) callback();
  }, random());
}

function f2(callback) {
  setTimeout(() => {
    console.log("f2");
    if (callback) callback();
  }, random());
}

function f3(callback) {
  setTimeout(() => {
    console.log("f3");
    if (callback) callback();
  }, random());
}

// f1(() => {
//   f2(() => {
//     f3(() => {
//       console.dir("Opa");
//     });
//   });
// });

f1Callback = () => {
  f2(f2Callback);
};

f2Callback = () => {
  f3(f3Callback);
};

f3Callback = () => {
  console.dir("Opa");
};

f1(f1Callback);
