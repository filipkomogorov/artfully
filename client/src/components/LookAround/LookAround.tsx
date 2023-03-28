import LookAroundItem from "./LookAroundItem"

import { categories } from "../../db/categories"

const LookAround = () => {
  return (
    <div>
        <div>
          {/* TODO - add a loader if the images have not loaded */}
        <h2 className="text-26">Разгледай</h2>
          <div className="flex flex-row justify-between mb-sizeDoubleXl mt-sizeMedium">
          {categories.map((category, index)=>(
            <LookAroundItem key={index} {...category} />
          ))}
          </div>
        </div>
    </div>
  )
}

export default LookAround