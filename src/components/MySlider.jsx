import Slider from "@mui/material/Slider"

function MySlider({ onChange, value }) {
    function preventHorizontalKeyboardNavigation(event) {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault()
        }
    }

    return (
        <Slider
            sx={{
                '& input[type="range"]': {
                    WebkitAppearance: "slider-vertical"
                }
            }}
            orientation="vertical"
            defaultValue={90}
            track={false}
            valueLabelDisplay="auto"
            min={0}
            max={180}
            step={1}
            value={value}
            onChange={onChange}
            onKeyDown={preventHorizontalKeyboardNavigation}
        />
    )
}

export default MySlider
