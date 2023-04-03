import Navbar from './plugins/app/navbar/navbar'
import MixerGUI from './plugins/app/mixergui/mixergui'
import StatusBar from './plugins/app/statusbar/statusbar'

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
