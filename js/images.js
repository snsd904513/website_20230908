
  const imageSources = [
    "./images/13a9718e-e488-4689-a842-f1a87a364d2c-x4.jpg",
    "./images/S__114450442.jpg",
    "./images/S__114450444.jpg"
  ];

  let currentImageIndex = 0; // 現在表示中の画像のインデックス

  function changeImage() {
    const imageElement = document.querySelector(".image");

    // 画像をフェードアウト
    imageElement.style.opacity = 0;

    // 0.5秒後に画像を切り替えてフェードイン
    setTimeout(function () {
      currentImageIndex = (currentImageIndex + 1) % imageSources.length; // 次の画像のインデックスを計算
      imageElement.src = imageSources[currentImageIndex];
      imageElement.style.opacity = 1;
    }, 500);
  }

  // 6秒ごとに画像を切り替える
  setInterval(changeImage, 6000)


