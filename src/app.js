const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/monedaAR_1.json'),
       require('../image-targets/monedaAR_2.json'),
        require('../image-targets/monedaAR_3.json'),
         require('../image-targets/monedaAR_4.json'),
          require('../image-targets/monedaAR_5.json')
      
    ],
  })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)