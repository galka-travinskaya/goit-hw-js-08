// В каждый lasyload(img) добавляем новый класс (lasyload) и меняем src на data-src

/*
 * Библиотека lazysizes
 * - feature detection
 */
            //1.09 feature detection - определение функционала браузераю если браузер 
            //поддерживает нативную загрузкуи не нужно подключать библиотеку, то 
            //разрешаем ему самому все делать. А если не поддерживат, то нужно 
            //подключить библиотеку.
if ('loading' in HTMLImageElement.prototype) {
    console.log('Браузер поддерживает lazyload');

    // const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    // lazyImages.forEach(img => {
    //     img.src = img.dataset.src;
    // })
    addSrcAttrToLazyImages();
  } else {
    console.log('Браузер НЕ поддерживает lazyload');

    // const script = document.createElement('script');

    // script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
    // script.integrity = 'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
    // script.crossOrigin = 'anonymous';

    // document.body.appendChild(script);

    addLazySizesScript();
  }
  //этот код работает и в chrome и в safari
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, { once: true });
  })
  
  function onImageLoaded(evt) {
    console.log('Картинка загрузилась');
    evt.target.classList.add('appear');
  }
  
  function addLazySizesScript() {
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
    script.integrity =
      'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
    script.crossOrigin = 'anonymous';
  
    document.body.appendChild(script);
  }
  
  function addSrcAttrToLazyImages() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
  }