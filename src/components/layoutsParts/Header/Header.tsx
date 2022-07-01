import React from "react"
import PickerBlock from "../../blocks/PickerBlock/PickerBlock"

import './Header.scss'

const Header: React.FC = () => {

  return (
    <div className="header">
      <PickerBlock />
    </div>
  )
}

export default Header