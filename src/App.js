import { SplitScreen } from "./layout/splitScreen";
import LeftNavbar from "./layout/leftNavbar";
import MainView from "./layout/mainView";
import './App.css';
import styled from "styled-components";

const AppContainer = styled.div`
  @media (max-width: 768px) {
    .split-styles {
      display: none;
    }
    .mainview-styles {
      display: "";
    }
  }
  @media (min-width: 769px) {
    .split-styles {
      display: "";
    }
    .mainview-styles {
      display: none;
    }
  }
`;

const LeftHandComponent = () => {
  return <LeftNavbar></LeftNavbar>;
};
const RightHandComponent = () => {
  return <MainView></MainView>;
};

function App() {
  return (
    <AppContainer>
      <div className="split-styles">
        <SplitScreen leftWeight={1.5} rightWeight={8.5}>
          <LeftHandComponent />
          <RightHandComponent />
        </SplitScreen>
      </div>
      <div className="mainview-styles">
        <RightHandComponent />
      </div>
    </AppContainer>
  );
}

export default App;