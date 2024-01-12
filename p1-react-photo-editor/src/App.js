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
      <img src={myImage} alt="old rusty fishing boat slope along shore lake" style={{
        filter: `
          brightness(${brightness.value}${brightness.unit})
          contrast(${contrast.value}${contrast.unit})
          saturate(${saturate.value}${saturate.unit})
          sepia(${sepia.value}${sepia.unit})
          grayscale(${grayscale.value}${grayscale.unit})
          invert(${invert.value}${invert.unit})
          hue-rotate(${hueRotate.value}${hueRotate.unit})
          blur(${blur.value}${blur.unit})
        `
      }} />

      <input type="range" name={brightness.name} min={brightness.range.min} max={brightness.range.max} value={brightness.value} onChange={(e) => setBrightness({...brightness, value: e.target.value})} />
        <label htmlFor={brightness.name}>{brightness.name}</label>
    </div>
  )
}

export default App
