// DynamicHeroIcon.jsx
// Simple Dynamic HeroIcons Component for React (javascript / jsx)
// by: Mike Summerfeldt (IT-MikeS - https://github.com/IT-MikeS)

import * as HIcons from '@heroicons/react/24/outline' //update to load react/24

const DynamicHeroIcon = (props) => {
  const {...icons} = HIcons
  const TheIcon = icons[props.icon]

  return (
    <>
      <TheIcon className="h-6 w-6 text-white" aria-hidden="true" />
    </>
  )
}

export default DynamicHeroIcon