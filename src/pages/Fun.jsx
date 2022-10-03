import React from 'react'
import '../stylesheets/Fun.css'
import Game from '../components/game/Game'
import { useTranslation } from "react-i18next"


function Fun() {

  const { t } = useTranslation(['translationGeneral'])

  return (
    <>
    <h1>For fun</h1>
    <div>
    <p>{t('fun-sumary')}</p>
    <p>{t('why-not')}</p>
    </div>
    <div id='game1'>
      <Game/>
    </div>
    </>
  )
}

export default Fun