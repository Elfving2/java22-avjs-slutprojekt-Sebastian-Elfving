import {createRoot} from "react-dom/client";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.querySelector("#root"));
root.render(<App/>);