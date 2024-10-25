import './App.css'
import { ShowMore } from './components/ShowMore/ShowMore';

function App() {
  const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
  return (
    <div>
      <div>say hello</div>
      <ShowMore className="show-more-wego" more="Show more" less="" anchorClass="" lines={3}>
        {longText}
      </ShowMore>
    </div>
  );
}

export default App;
