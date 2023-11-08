import React from "react";
import LeftUpLeaf from "./components/Leafs/UpSectionLeafs/LeftUpLeaf";
import FragmentComponent from "./components/StyledFragment";
import RightUpLeaf from "./components/Leafs/UpSectionLeafs/RightUpLeaf";
import StyledHeaderComponent from "./components/Leafs/Header";
import TopComponent from "./components/Leafs/UpSectionLeafs/TopSection";
import BottomComponent from "./components/Leafs/BottomSectionLeafs/BottomSection";
import LeftBottomLeaf from "./components/Leafs/BottomSectionLeafs/LeftBottomLeaf";
import RightBottomLeaf from "./components/Leafs/BottomSectionLeafs/RightBottomLeaf";

function App() {
  return (
    <FragmentComponent className="App">
      <TopComponent>
        <LeftUpLeaf>ŽEMAITIJA</LeftUpLeaf>
        <RightUpLeaf>AUKŠTAITIJA</RightUpLeaf>
      </TopComponent>
      <StyledHeaderComponent>
        Prašome pasirinkti Jus dominančią apskritį....
      </StyledHeaderComponent>
      <BottomComponent>
        <LeftBottomLeaf>SUVALKIJA</LeftBottomLeaf>
        <RightBottomLeaf>DZŪKIJA</RightBottomLeaf>
      </BottomComponent>
    </FragmentComponent>
  );
}

export default App;
