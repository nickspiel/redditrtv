import React from "react";
import VideoList from "../components/VideoList/VideoList.jsx";

ReactDOM.render(<VideoList source="https://www.reddit.com/r/videos.json" />, document.getElementById('content'));