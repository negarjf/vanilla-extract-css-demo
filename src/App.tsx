import { ThemeSwitcher } from './ui-kit/ThemeSwitcher'
import { Button } from './ui-kit/components/button/button'

function App() {
  return (
    <ThemeSwitcher>
      <div className="demo-container">
        <Button>Click Here</Button>
        <Button type="outline">Click Here</Button>
        <Button type="text">Click Here</Button>
      </div>
    </ThemeSwitcher>
  )
}

export default App
