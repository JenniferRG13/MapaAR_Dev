const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/monedaAR_1-1.json'),
       require('../image-targets/monedaAR_2-2.json'),
        require('../image-targets/monedaAR_3-2.json'),
         require('../image-targets/monedaAR_4-2.json'),
          require('../image-targets/monedaAR_5-3.json')
      
    ],
  })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)