import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ClothingItemsScreen from "./pages/clothing_items_screen";
import CreateAClothingSet from "./pages/create_a_clothing_set";
import SavedSets from "./pages/saved_sets";
import { Provider } from "react-redux";
import store from "./app/store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="create_a_clothing_set" element={<CreateAClothingSet />} />
        <Route path="saved_sets" element={<SavedSets />} />
        <Route path="/:type" element={<ClothingItemsScreen />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
