import Navbar from './features/app/_layout/navbar/navbar'
import MixerGUI from './features/app/_layout/mixergui/mixergui'
import StatusBar from './features/app/_layout/statusbar/statusbar'

function App() {
  return (
    <div>
      <Navbar />
      <MixerGUI />
      <StatusBar />
    </div>
  )
}

export default App
