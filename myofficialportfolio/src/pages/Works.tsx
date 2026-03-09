import { Link } from "react-router-dom"

const Works = () => {
  return (
    <>
        <h1>Works</h1>
         
            <wa-tab-group>
                <wa-tab panel='featured-work'>Featured Work</wa-tab>
                <wa-tab panel='personal-project'>Personal Projects</wa-tab>

                <wa-tab-panel name='featured-work'>
                    <project-card projtitle="FEATURED WORK 1"></project-card>
                    <project-card projtitle="FEATURED WORK 2"></project-card>
                    <project-card projtitle="FEATURED WORK 3"></project-card>
                    <project-card projtitle="FEATURED WORK 4"></project-card>
                </wa-tab-panel>
                <wa-tab-panel name='personal-project'>
                    <project-card projtitle="PERSONAL PROJECT 1"></project-card>
                    <project-card projtitle="PERSONAL PROJECT 2"></project-card>
                </wa-tab-panel>

            </wa-tab-group>  
    </>
  )
}

export default Works