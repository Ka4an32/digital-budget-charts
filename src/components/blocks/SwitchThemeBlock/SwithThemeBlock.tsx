import { Switch } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext } from "../../../services/ColorThemeService/ColorThemeService"

const SwithThemeBlock = () => {

  const theme = useContext(ColorModeContext)
  const isChecked = theme.mode === 'dark'

  return (
    <div>
      <Switch checked={isChecked} onChange={() => {theme.toggleColorMode()}} />
    </div>
  )
}

export default SwithThemeBlock