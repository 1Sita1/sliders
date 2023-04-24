import useWebSocket from "react-use-websocket"
import "./App.css"
import MySlider from "./components/MySlider"
import useSlider from "./hooks/useSlider"
import { useEffect } from "react"

const SOCKET_URL = "ws://192.168.4.1:81"

function App() {
    const { sendMessage, readyState } = useWebSocket(SOCKET_URL)
    const slider1 = useSlider(90)
    const slider2 = useSlider(90)

    useEffect(() => {
        console.log(slider1.value, slider2.value)
        sendMessage(slider1.value + "/" + slider2.value)
        console.log(readyState)
    })

    return (
        <div className="App">
            <div className="slidersWrap">
                <MySlider {...slider1} />
                <MySlider {...slider2} />
            </div>
        </div>
    )
}

export default App
