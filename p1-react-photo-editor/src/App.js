import myImage from './old-rusty-fishing-boat-slope-along-shore-lake.jpg'
import './App.css'
import {useState} from "react"

function App() {
  const [brightness, setBrightness] = useState({
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  })

  const [contrast, setContrast] = useState({
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  })

  const [saturate, setSaturate] = useState({
    name: 'Saturate',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  })

  const [sepia, setSepia] = useState({
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  })

  const [grayscale, setGrayscale] = useState({
      name: 'Grayscale',
      property: 'grayscale',
      value: 0,
      range: {
        min: 0,
        max: 100
      },
      unit: '%'
  })

  const [invert, setInvert] = useState({
    name: 'Invert',
    property: 'invert',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  })

  const [hueRotate, setHueRotate] = useState({
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  })

  const [blur, setBlur] = useState({
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  })

  return (
    <div className="App">
      <div className='container'>
        <div className='image-container'>
          <img
              src={myImage}
              alt="old rusty fishing boat slope along shore lake"
              style={{
              filter: `
                brightness(${brightness.value}${brightness.unit})
                contrast(${contrast.value}${contrast.unit})
                saturate(${saturate.value}${saturate.unit})
                sepia(${sepia.value}${sepia.unit})
                grayscale(${grayscale.value}${grayscale.unit})
                invert(${invert.value}${invert.unit})
                hue-rotate(${hueRotate.value}${hueRotate.unit})
                blur(${blur.value}${blur.unit})
              `}}
          />
        </div>

        <div className='mode'>
          <label htmlFor={brightness.name}>{brightness.name}</label>
          <input type="range" name={brightness.name} min={brightness.range.min} max={brightness.range.max} value={brightness.value} onChange={(e) => setBrightness({...brightness, value: e.target.value})} />

          <label htmlFor={contrast.name}>{contrast.name}</label>
          <input type="range" name={contrast.name} min={contrast.range.min} max={contrast.range.max} value={contrast.value} onChange={(e) => setContrast({...contrast, value: e.target.value})} />

          <label htmlFor={saturate.name}>{saturate.name}</label>
          <input type="range" name={saturate.name} min={saturate.range.min} max={saturate.range.max} value={saturate.value} onChange={(e) => setSaturate({...saturate, value: e.target.value})} />

          <label htmlFor={sepia.name}>{sepia.name}</label>
          <input type="range" name={sepia.name} min={sepia.range.min} max={sepia.range.max} value={sepia.value} onChange={(e) => setSepia({...sepia, value: e.target.value})} />

          <label htmlFor={grayscale.name}>{grayscale.name}</label>
          <input type="range" name={grayscale.name} min={grayscale.range.min} max={grayscale.range.max} value={grayscale.value} onChange={(e) => setGrayscale({...grayscale, value: e.target.value})} />

          <label htmlFor={invert.name}>{invert.name}</label>
          <input type="range" name={invert.name} min={invert.range.min} max={invert.range.max} value={invert.value} onChange={(e) => setInvert({...invert, value: e.target.value})} />

          <label htmlFor={hueRotate.name}>{hueRotate.name}</label>
          <input type="range" name={hueRotate.name} min={hueRotate.range.min} max={hueRotate.range.max} value={hueRotate.value} onChange={(e) => setHueRotate({...hueRotate, value: e.target.value})} />

          <label htmlFor={blur.name}>{blur.name}</label>
          <input type="range" name={blur.name} min={blur.range.min} max={blur.range.max} value={blur.value} onChange={(e) => setBlur({...blur, value: e.target.value})} />
        </div>
      </div>
    </div>
  )
}

export default App
